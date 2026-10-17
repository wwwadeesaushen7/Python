import importlib
import json
from pathlib import Path

import cv2
from fastapi.testclient import TestClient
import pytest

from backend import media, speech, store

api = importlib.import_module('backend.app')


@pytest.fixture
def quality_source(tmp_path):
    source = tmp_path/'original.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=red:s=1920x1080:r=5,drawbox=x=960:y=0:w=960:h=ih:color=blue:t=fill',
               '-f','lavfi','-i','sine=frequency=440:sample_rate=48000',
               '-t','0.6','-c:v','libx264','-threads','1','-c:a','aac',str(source)])
    return source


@pytest.mark.parametrize('ratio,quality,framing,expected',[
    ('portrait','480p','stack',(480,854)),
    ('portrait','720p','speaker',(720,1280)),
    ('portrait','1080p','scene',(1080,1920)),
    ('square','480p','scene',(480,480)),
    ('square','720p','stack',(720,720)),
    ('square','1080p','speaker',(1080,1080)),
    ('landscape','480p','speaker',(854,480)),
    ('landscape','720p','scene',(1280,720)),
    ('landscape','1080p','stack',(1920,1080)),
])
def test_quality_renders_actual_dimensions_audio_and_scaled_captions(
        quality_source,tmp_path,ratio,quality,framing,expected):
    output = tmp_path/'download.mp4'
    clip = {'start':0,'end':.6,'words':[{'start':.05,'end':.5,'text':'Quality.'}]}
    media.render(quality_source,output,clip,{'ratio':ratio,'quality':quality,'framing':framing,
                                          'captions':True,'text':'My video'},tracking=[{'time':0,'x':.25}])
    result = media.probe(output)
    assert (result['video']['width'],result['video']['height']) == expected
    assert result['duration'] == pytest.approx(.6,abs=.05)
    assert result['audio'] and result['video']['codec_name'] == 'h264'
    subtitles = output.with_suffix('.ass').read_text(encoding='utf-8')
    assert f'PlayResX: {expected[0]}\nPlayResY: {expected[1]}' in subtitles
    caption = next(line for line in subtitles.splitlines() if line.startswith('Style: Caption,'))
    assert float(caption.split(',')[2]) == pytest.approx((54 if ratio=='landscape' else 45)*int(quality[:-1])/720,abs=.6)
    if ratio=='portrait' and quality=='480p':
        capture = cv2.VideoCapture(str(output))
        ok,frame = capture.read()
        capture.release()
        assert ok
        assert frame[210,240,2] > 180 and frame[210,240,0] < 30
        assert frame[640,240,0] > 180 and frame[640,240,2] < 30


def test_quality_download_reuses_original_and_preserves_edits_and_saved_music(
        quality_source,tmp_path,monkeypatch):
    monkeypatch.setattr(store,'DATA',tmp_path/'projects')
    store.DATA.mkdir()
    monkeypatch.setattr(api.POOL,'submit',lambda function,*args:function(*args))
    monkeypatch.setattr(speech,'transcribe',lambda *a,**k:{'language':'en','engine':'offline','words':[{'start':.05,'end':.5,'text':'Saved.'}]})
    settings = {'mode':'range','start_time':0,'end_time':.6,'framing':'scene','captions':True,'text':'Keep my edits'}
    with TestClient(api.app) as client:
        with quality_source.open('rb') as video:
            response = client.post('/api/jobs',files={'file':('original.mp4',video,'video/mp4')},data={'settings':json.dumps(settings)})
        assert response.status_code == 202,response.text
        job_id = response.json()['id']
        job = store.get(job_id)
        assert job['status'] == 'completed',job.get('error')
        clip_id = job['clips'][0]['id']
        music = tmp_path/'music.wav'
        media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','sine=frequency=880:sample_rate=16000','-t','0.6',str(music)])
        real_render,inputs = media.render,[]
        def render(source,*args,**kwargs):
            inputs.append(source)
            return real_render(source,*args,**kwargs)
        monkeypatch.setattr(media,'render',render)
        previous_url = None
        for quality in ['480p','1080p']:
            if quality=='480p':
                with music.open('rb') as soundtrack:
                    exported = client.post(f'/api/jobs/{job_id}/clips/{clip_id}/export',
                        data={'settings':json.dumps(dict(settings,quality=quality))},
                        files={'music':('music.wav',soundtrack,'audio/wav')})
            else:
                exported = client.post(f'/api/jobs/{job_id}/clips/{clip_id}/export',
                    data={'settings':json.dumps(dict(settings,quality=quality))})
            assert exported.status_code == 202
            current = client.get('/api/jobs/'+job_id).json()['clips'][0]
            assert current['export_status'] == 'completed',current.get('export_error')
            assert current['export_settings']['quality'] == quality
            assert current['export_settings']['text'] == settings['text']
            assert current['music_name'] == 'music.wav'
            assert current['export_url'] != previous_url
            assert quality in current['export_url']
            output = api.directory(job_id)/Path(current['export_url']).name
            result = media.probe(output)
            assert result['video']['width'] == (480 if quality=='480p' else 1080)
            assert result['audio'] and result['duration'] == pytest.approx(.6,abs=.05)
            assert client.get(current['export_url']+'?download=true').headers['content-disposition'].startswith('attachment;')
            assert client.get(current['export_url'],headers={'Range':'bytes=0-99'}).status_code == 206
            previous_url = current['export_url']
        assert inputs == [Path(job['source']),Path(job['source'])]
        assert client.delete('/api/jobs/'+job_id).status_code == 204


def test_invalid_quality_is_rejected_before_a_job_is_created():
    with TestClient(api.app) as client:
        response = client.post('/api/jobs',data={'settings':json.dumps({'quality':'4k'})})
    assert response.status_code == 422
    assert '480p, 720p, or 1080p' in response.json()['detail']
