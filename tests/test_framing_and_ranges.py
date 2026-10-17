import importlib
import json
import shutil
from pathlib import Path
from types import SimpleNamespace

import cv2
import numpy as np
import pytest
from fastapi.testclient import TestClient

from backend import media, speech, store

api = importlib.import_module('backend.app')


def test_camera_holds_still_for_head_jitter_and_single_false_detection():
    points=[{'time':i/2,'x':.45+(.012 if i%2 else -.012)} for i in range(30)]
    points[10]['x']=.95
    positions=[p['x'] for p in media.smooth_camera(points)]
    assert max(positions)-min(positions) < 1e-6


def test_camera_pan_has_bounded_speed_and_acceleration():
    points=[{'time':i/2,'x':.25 if i<5 else .85} for i in range(30)]
    camera=media.smooth_camera(points)
    velocities=[(b['x']-a['x'])/.5 for a,b in zip(camera,camera[1:])]
    assert max(abs(v) for v in velocities) <= .055+1e-8
    assert max(abs(b-a)/.5 for a,b in zip([0]+velocities,velocities)) <= .05+1e-8
    assert camera[-1]['x'] > camera[0]['x']+.3
    assert all(b['x']>=a['x'] for a,b in zip(camera,camera[1:]))


def test_rendered_pan_moves_between_tracking_samples(tmp_path,monkeypatch):
    monkeypatch.setitem(media.RATIOS,'portrait',(180,320))
    source=tmp_path/'gradient.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'nullsrc=s=640x360:r=30,geq=lum=X/W*255:cb=128:cr=128',
               '-t','4','-c:v','libx264','-threads','1',str(source)])
    points=[{'time':i/2,'x':.25 if i<3 else .75} for i in range(9)]
    output=tmp_path/'smooth.mp4'
    media.render(source,output,{'start':0,'end':4,'words':[]},
                 {'ratio':'portrait','framing':'speaker','tracking':True,'captions':False},points)
    capture=cv2.VideoCapture(str(output))
    means=[]
    try:
        while True:
            ok,frame=capture.read()
            if not ok: break
            means.append(float(frame.mean()))
    finally:
        capture.release()
    assert len(means)==120
    assert max(means[:12])-min(means[:12]) < 1
    assert len(set(round(value) for value in means[-60:])) > 12
    assert max(abs(b-a) for a,b in zip(means,means[1:])) < 2


def test_full_scene_keeps_objects_at_both_edges(tmp_path,monkeypatch):
    monkeypatch.setitem(media.RATIOS,'portrait',(180,320))
    source=tmp_path/'objects.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=green:s=640x360:r=5,drawbox=x=0:y=0:w=120:h=ih:color=red:t=fill,drawbox=x=520:y=0:w=120:h=ih:color=blue:t=fill',
               '-t','1','-c:v','libx264','-threads','1',str(source)])
    output=tmp_path/'scene.mp4'
    media.render(source,output,{'start':0,'end':1,'words':[]},
                 {'ratio':'portrait','framing':'scene','captions':False},[{'time':0,'x':.8}])
    capture=cv2.VideoCapture(str(output))
    ok,frame=capture.read()
    capture.release()
    assert ok and frame.shape[:2]==(320,180)
    left,right=frame[160,8],frame[160,171]
    assert left[2]>180 and left[0]<50
    assert right[0]>180 and right[2]<50


@pytest.fixture
def short_source(tmp_path):
    source=tmp_path/'short.mp4'
    # Color changes make the actual source time observable in the exported clip.
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=red:s=320x180:r=30,drawbox=color=green:t=fill:enable=between(t\\,4\\,8),drawbox=color=blue:t=fill:enable=gte(t\\,8)',
               '-f','lavfi','-i','sine=frequency=440:sample_rate=48000',
               '-t','12','-c:v','libx264','-threads','1','-c:a','aac',str(source)])
    return source


@pytest.fixture
def client(tmp_path,monkeypatch):
    data=tmp_path/'workspace'
    data.mkdir()
    monkeypatch.setattr(store,'DATA',data)
    monkeypatch.setattr(api.POOL,'submit',lambda function,*args:function(*args))
    with TestClient(api.app) as connection:
        yield connection


@pytest.mark.parametrize('settings',[
    {'start_time':5,'end_time':4}, {'start_time':-1,'end_time':2},
    {'start_time':0,'end_time':.1}, {'start_time':0,'end_time':13},
    {'start_time':0,'end_time':None}, {'start_time':0,'end_time':float('nan')},
    {'start_time':0,'end_time':float('inf')}, {'start_time':0,'end_time':8000},
])
def test_range_rejects_invalid_or_out_of_bounds_times(client,short_source,settings):
    with short_source.open('rb') as video:
        result=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range',**settings})},
                           files={'file':('video.mp4',video,'video/mp4')})
    assert result.status_code==422
    assert client.get('/api/jobs').json()==[]


@pytest.mark.parametrize('youtube',[False,True],ids=['upload','youtube'])
def test_exact_range_skips_transcription_and_preserves_selected_time(
        client,short_source,monkeypatch,youtube):
    def no_transcription(*args,**kwargs):
        pytest.fail('A range with captions off must not load a speech model.')
    monkeypatch.setattr(speech,'transcribe',no_transcription)
    real_run=media.run
    downloads=[]
    def run(args,**kwargs):
        if args[1:3]==['-m','yt_dlp']:
            downloads.append(args)
            assert 'duration > 0 & duration <= 7200' in args[args.index('--match-filter')+1]
            folder=Path(args[args.index('-o')+1]).parent
            shutil.copyfile(short_source,folder/'source.mp4')
            (folder/'source.info.json').write_text(json.dumps({'title':'ā shows an object'}),encoding='utf-8')
            return ''
        return real_run(args,**kwargs)
    monkeypatch.setattr(media,'run',run)
    settings={'mode':'range','start_time':5.25,'end_time':7.75,'captions':False,'framing':'scene'}
    data={'settings':json.dumps(settings)}
    if youtube:
        result=client.post('/api/jobs',data=dict(data,url='https://youtu.be/abcdefghijk'))
    else:
        with short_source.open('rb') as video:
            result=client.post('/api/jobs',data=data,files={'file':('short.mp4',video,'video/mp4')})
    assert result.status_code==202,result.text
    job=client.get('/api/jobs/'+result.json()['id']).json()
    assert job['status']=='completed',job.get('error')
    assert len(job['clips'])==1 and len(downloads)==int(youtube)
    clip=job['clips'][0]
    assert (clip['start'],clip['end'],clip['duration'])==(5.25,7.75,2.5)
    assert clip['kind']=='range' and clip['words']==[]
    output=api.directory(job['id'])/Path(clip['url']).name
    info=media.probe(output)
    assert info['duration']==pytest.approx(2.5,abs=.04)
    assert info['audio']
    capture=cv2.VideoCapture(str(output))
    ok,frame=capture.read()
    capture.release()
    assert ok
    blue,green,red=frame[640,360]
    assert green>80 and red<30 and blue<30  # 5.25s is inside the green section.
    assert client.get(clip['thumbnail']).status_code==200


def test_range_captions_decode_only_selection_and_offset_words(
        client,short_source,monkeypatch):
    calls=[]
    def recognize(audio,**kwargs):
        calls.append(len(audio))
        assert len(audio)/16000==pytest.approx(2.5,abs=.01)
        return [SimpleNamespace(words=[SimpleNamespace(start=.1,end=1.1,word=' Exact.')])],SimpleNamespace(language='en')
    monkeypatch.setattr(speech,'_MODEL',SimpleNamespace(transcribe=recognize))
    monkeypatch.setenv('CUTLINE_SPEECH_ENGINE','whisper')
    with short_source.open('rb') as video:
        response=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range','start_time':5.25,'end_time':7.75,'captions':True})},files={'file':('short.mp4',video,'video/mp4')})
    job=client.get('/api/jobs/'+response.json()['id']).json()
    assert job['status']=='completed',job.get('error')
    assert calls and job['clips'][0]['words']==[{'start':.1,'end':1.1,'text':'Exact.'}]
    assert job['clips'][0]['start']==5.25 and job['clips'][0]['end']==7.75


def test_silent_quarter_second_range_and_music_export(client,tmp_path,monkeypatch):
    source=tmp_path/'silent.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','color=orange:s=320x180:r=30','-t','1','-c:v','libx264','-threads','1',str(source)])
    with source.open('rb') as video:
        response=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range','start_time':.25,'end_time':.5,'captions':True})},files={'file':('silent.mp4',video,'video/mp4')})
    job=client.get('/api/jobs/'+response.json()['id']).json()
    assert job['status']=='completed',job.get('error')
    assert 'no audio track' in job['caption_notice']
    clip=job['clips'][0]
    assert client.get(clip['thumbnail']).status_code==200
    music=tmp_path/'music.wav'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','sine=frequency=880:sample_rate=16000','-t','1',str(music)])
    with music.open('rb') as audio:
        result=client.post(f'/api/jobs/{job["id"]}/clips/{clip["id"]}/export',data={'settings':json.dumps({'text':'A demonstration','framing':'scene'})},files={'music':('music.wav',audio,'audio/wav')})
    assert result.status_code==202,result.text
    clip=store.get(job['id'])['clips'][0]
    assert clip['export_status']=='completed',clip.get('export_error')
    assert media.probe(api.directory(job['id'])/Path(clip['export_url']).name)['audio']


def test_range_still_exports_when_no_speech_is_detected(client,short_source,monkeypatch):
    def silent(*args,**kwargs): raise speech.NoSpeechError('No speech was detected.')
    monkeypatch.setattr(speech,'transcribe',silent)
    with short_source.open('rb') as video:
        response=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range','start_time':1,'end_time':2,'captions':True})},files={'file':('short.mp4',video,'video/mp4')})
    job=client.get('/api/jobs/'+response.json()['id']).json()
    assert job['status']=='completed',job.get('error')
    assert 'No speech' in job['caption_notice']
    assert job['clips'][0]['words']==[]


def test_existing_speaker_tracks_are_upgraded_once_on_export(client,short_source,monkeypatch):
    with short_source.open('rb') as video:
        response=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range','start_time':1,'end_time':3,'captions':False,'framing':'scene'})},files={'file':('short.mp4',video,'video/mp4')})
    job=store.get(response.json()['id'])
    clip=job['clips'][0]
    path=api.directory(job['id'])/f'clip-{clip["id"]}.json'
    metadata=json.loads(path.read_text(encoding='utf-8'))
    metadata.pop('tracking_version',None)
    metadata['tracking']=[{'time':0,'x':.2},{'time':1,'x':.8}]
    path.write_text(json.dumps(metadata),encoding='utf-8')
    calls=[]
    points=[{'time':0,'x':.2,'cut':False},{'time':1,'x':.8,'cut':True}]
    def track(*args,**kwargs):
        calls.append(args)
        return points
    monkeypatch.setattr(media,'track_speaker',track)
    for _ in range(2):
        result=client.post(f'/api/jobs/{job["id"]}/clips/{clip["id"]}/export',data={'settings':json.dumps({'framing':'speaker','captions':False})})
        assert result.status_code==202
        current=store.get(job['id'])['clips'][0]
        assert current['export_status']=='completed',current.get('export_error')
    upgraded=json.loads(path.read_text(encoding='utf-8'))
    assert len(calls)==1
    assert upgraded['tracking']==points
    assert upgraded['tracking_version']==media.TRACKING_VERSION


def test_auto_stack_is_persisted_and_reused_for_export(client,tmp_path):
    source=tmp_path/'two-screens.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=red:s=320x180:r=10,drawbox=x=160:y=0:w=160:h=ih:color=blue:t=fill',
               '-f','lavfi','-i','sine=frequency=440:sample_rate=16000',
               '-t','2','-c:v','libx264','-threads','1','-c:a','aac',str(source)])
    with source.open('rb') as video:
        response=client.post('/api/jobs',data={'settings':json.dumps({'mode':'range','start_time':.25,'end_time':1.75,'captions':False,'framing':'auto'})},files={'file':('two-screens.mp4',video,'video/mp4')})
    job=store.get(response.json()['id'])
    assert job['status']=='completed',job.get('error')
    clip=job['clips'][0]
    assert clip['resolved_framing']=='stack' and clip['settings']['framing']=='auto'
    metadata=json.loads((api.directory(job['id'])/f'clip-{clip["id"]}.json').read_text(encoding='utf-8'))
    assert metadata['auto_layout']['framing']=='stack'
    result=client.post(f'/api/jobs/{job["id"]}/clips/{clip["id"]}/export',data={'settings':json.dumps({'framing':'auto','captions':False})})
    assert result.status_code==202
    exported=store.get(job['id'])['clips'][0]
    assert exported['export_status']=='completed',exported.get('export_error')
    assert exported['export_framing']=='stack'
    capture=cv2.VideoCapture(str(api.directory(job['id'])/Path(exported['export_url']).name))
    ok,frame=capture.read()
    capture.release()
    assert ok
    assert frame[320,360,2]>180 and frame[320,360,0]<30
    assert frame[960,360,0]>180 and frame[960,360,2]<30
