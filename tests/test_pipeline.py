import json
import os
import subprocess
import tempfile
from pathlib import Path
from unittest.mock import patch

os.environ['CUTLINE_DATA_DIR'] = tempfile.mkdtemp(prefix='cutline-tests-')
from fastapi.testclient import TestClient
from backend.app import app, youtube_url
from backend import media, speech, store
from fastapi import HTTPException
import pytest


def words_at_sentences():
    words=[]
    for sentence in range(8):
        for word in range(6):
            start=sentence*9+word
            words.append({'start':start,'end':start+.8,'text':f'word{word}'+('.' if word==5 else '')})
    return words


def test_clips_finish_sentences_and_do_not_overlap():
    result=speech.select_clips(words_at_sentences(),target=15,count=3)
    assert len(result)==3
    assert all(c['words'][-1]['text'].endswith('.') for c in result)
    assert all(c['end']>=c['words'][-1]['end'] for c in result)
    assert all(a['end']<b['start'] for a,b in zip(result,result[1:]))
    assert result[0]['end']-result[0]['start'] != 15


def test_discards_incomplete_final_speech():
    result=speech.sentences([{'start':0,'end':2,'text':'Finished.'},{'start':2.1,'end':3,'text':'unfinished'}])
    assert len(result)==1
    assert result[0]['text']=='Finished.'


def test_no_speech_cannot_create_clip():
    with pytest.raises(ValueError,match='Not enough'):
        speech.select_clips([],45,3)


@pytest.mark.parametrize('value',['http://localhost/video','https://youtube.com.evil.test/watch?v=abcdefghijk','https://www.youtube.com/watch?v=oops','https://u:p@youtube.com/watch?v=abcdefghijk','https://youtu.be:8080/abcdefghijk'])
def test_youtube_rejects_non_video_and_foreign_hosts(value):
    with pytest.raises(HTTPException): youtube_url(value)


@pytest.mark.parametrize('value',['https://youtu.be/abcdefghijk?t=3','https://youtube.com/watch?v=abcdefghijk','https://www.youtube.com/shorts/abcdefghijk'])
def test_youtube_normalizes_video_urls(value):
    assert youtube_url(value)=='https://www.youtube.com/watch?v=abcdefghijk'


def test_minimum_duration_is_strict():
    for duration in [0,179,180]:
        with patch.object(media,'probe',return_value={'video':{},'audio':{},'duration':duration}):
            with pytest.raises(ValueError): media.validate_source('unused')
    with patch.object(media,'probe',return_value={'video':{'width':640},'audio':{'channels':1},'duration':180.1}):
        assert media.validate_source('unused')['duration']==180.1


def test_caption_templates_and_overlay_are_safe(tmp_path):
    for style in media.TEMPLATES:
        output=tmp_path/f'{style}.ass'
        media.write_subtitles(output,words_at_sentences(),0,80,style,'hello {\\an9}\nworld ලෝකය')
        text=output.read_text(encoding='utf-8')
        assert 'hello an9\\Nworld' in text
        assert 'ලෝකය' in text
        assert 'Dialogue:' in text
        assert 'PlayResX: 720' in text
        definitions=text.split('[V4+ Styles]\n')[1].split('[Events]')[0].strip().splitlines()
        fields=definitions[0].removeprefix('Format: ').split(', ')
        for style_line in definitions[1:]:
            values=style_line.removeprefix('Style: ').split(',')
            assert len(values)==len(fields)
            assert float(values[fields.index('Outline')])<=4


def test_long_motion_tracking_filter_renders(tmp_path):
    info={'video':{'width':320,'height':180}}
    tracking=[{'time':i/2,'x':.3+(i%40)/100} for i in range(400)]
    filters=media.crop_filter(info,'portrait',tracking,tmp_path/'motion.txt')
    assert 'if(' not in filters
    output=tmp_path/'tracked.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','color=green:s=320x180:r=5','-vf',filters,'-t','1','-c:v','libx264','-threads','1',str(output)])
    assert media.probe(output)['video']['width']==720


def test_render_handles_spaces_apostrophes_and_drive_colons(tmp_path):
    folder=tmp_path/"C drive: O'Neill's Cutline Studio"
    folder.mkdir()
    source=folder/'input video.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','color=green:s=320x180:r=5','-f','lavfi','-i','sine=frequency=440:sample_rate=16000','-t','1','-c:v','libx264','-threads','1','-c:a','aac',str(source)])
    output=folder/'clip-123.mp4'
    clip={'start':0,'end':1,'words':[{'start':0,'end':.8,'text':'Hello.'}]}
    media.render(source,output,clip,{'ratio':'portrait','text':'Windows path test'},tracking=[{'time':0,'x':.4},{'time':.5,'x':.6}])
    result=media.probe(output)
    assert result['audio']
    assert (result['video']['width'],result['video']['height'])==(720,1280)


def test_api_validation_and_upload_rejection(tmp_path):
    with TestClient(app) as client:
        assert client.get('/api/health').json()['ffmpeg']
        assert client.post('/api/jobs').status_code==422
        assert client.post('/api/jobs',data={'url':'https://example.com/video'}).status_code==422
        assert client.post('/api/jobs',data={'url':'https://youtu.be/abcdefghijk','settings':json.dumps({'ratio':'weird'})}).status_code==422
        assert client.post('/api/jobs',files={'file':('not-video.txt',b'hello','text/plain')}).status_code==422
        short=tmp_path/'short.mp4'
        subprocess.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','color=blue:s=160x90:r=5','-f','lavfi','-i','sine=frequency=440:sample_rate=16000','-t','1','-c:v','libx264','-c:a','aac',str(short)],check=True)
        with short.open('rb') as video:
            response=client.post('/api/jobs',files={'file':('short.mp4',video,'video/mp4')})
        assert response.status_code==422
        assert 'longer than 3 minutes' in response.json()['detail']
        assert client.get('/api/jobs').json()==[]
        assert client.get('/media/invalid/../../etc/passwd').status_code!=200


def test_store_clip_updates_preserve_other_state():
    store.save({'id':'test','clips':[{'id':'a'},{'id':'b'}],'progress':42})
    store.update_clip('test','a',export_status='completed')
    job=store.get('test')
    assert job['progress']==42
    assert job['clips'][1]=={'id':'b'}
    store.delete('test')
