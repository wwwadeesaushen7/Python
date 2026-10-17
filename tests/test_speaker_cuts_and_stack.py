from pathlib import Path

import cv2
import numpy as np
import pytest

from backend import media


def observations(right_active, speaking=True):
    return [{'time':i/4,'speaking':speaking,'faces':[
        {'x':.2,'score':.1 if active else .6},
        {'x':.8,'score':.6 if active else .1}]} for i,active in enumerate(right_active)]


def test_speaker_cut_is_backdated_to_first_confirmed_change():
    points=media.speaker_path(observations([False,False,True,True,True,False,False]))
    assert [point['x'] for point in points]==[.2,.2,.8,.8,.8,.2,.2]
    assert [point['time'] for point in points if point['cut']]==[.5,1.25]


def test_single_sample_challenger_does_not_change_speaker():
    points=media.speaker_path(observations([False,False,True,False,False]))
    assert all(point['x']==.2 and not point['cut'] for point in points)


def test_nearby_speakers_switch_by_identity_without_a_pan():
    samples=[{'time':i/4,'faces':[
        {'id':0,'x':.43,'score':.1 if i>=2 else .6},
        {'id':1,'x':.57,'score':.6 if i>=2 else .1}]} for i in range(5)]
    points=media.speaker_path(samples)
    assert [point['x'] for point in points]==[.43,.43,.57,.57,.57]
    assert points[2]['cut'] and points[2]['time']==.5


def test_silent_interval_does_not_switch_between_visible_faces():
    samples=observations([False,True,True,True],speaking=False)
    points=media.speaker_path(samples)
    assert all(point['x']==.2 and not point['cut'] for point in points)


def test_disappearing_speaker_is_replaced_with_a_cut():
    samples=[{'time':0,'faces':[{'x':.2,'score':.5}]},
             {'time':.25,'faces':[]},
             {'time':.5,'faces':[{'x':.8,'score':.5}]},
             {'time':.75,'faces':[{'x':.8,'score':.5}]}]
    points=media.speaker_path(samples)
    assert [point['x'] for point in points]==[.2,.2,.8,.8]
    assert points[2]['cut']


def test_smoothing_never_anticipates_or_blends_a_speaker_cut():
    points=[{'time':0,'x':.2},{'time':.5,'x':.2},
            {'time':1,'x':.8,'cut':True},{'time':1.5,'x':.8}]
    camera=media.smooth_camera(points)
    assert [point['x'] for point in camera]==[.2,.2,.8,.8]
    assert camera[2]['cut']


def read_frames(path):
    capture=cv2.VideoCapture(str(path))
    frames=[]
    try:
        while True:
            ok,frame=capture.read()
            if not ok: break
            frames.append(frame)
    finally:
        capture.release()
    return frames


def test_rendered_speaker_switch_has_no_travel_frames(tmp_path,monkeypatch):
    monkeypatch.setitem(media.RATIOS,'portrait',(180,320))
    source=tmp_path/'speakers.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=black:s=320x180:r=30,drawbox=x=0:y=0:w=120:h=ih:color=red:t=fill,drawbox=x=200:y=0:w=120:h=ih:color=blue:t=fill',
               '-t','3','-c:v','libx264','-threads','1',str(source)])
    points=[{'time':0,'x':.15},{'time':.5,'x':.15},
            {'time':1,'x':.85,'cut':True},{'time':1.5,'x':.85}]
    output=tmp_path/'cuts.mp4'
    media.render(source,output,{'start':.5,'end':2.5,'words':[]},
                 {'ratio':'portrait','framing':'speaker','tracking':True,'captions':False},points)
    frames=read_frames(output)
    assert len(frames)==60
    # Every frame is entirely one speaker's area. There is no intermediate crop
    # through the black center, including the two frames adjacent to the cut.
    for frame in frames[:30]:
        blue,green,red=frame.mean(axis=(0,1))
        assert red>180 and blue<30
    for frame in frames[30:]:
        blue,green,red=frame.mean(axis=(0,1))
        assert blue>180 and red<30


@pytest.fixture
def side_by_side(tmp_path):
    source=tmp_path/'two-panels.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=red:s=640x360:r=10,drawbox=x=320:y=0:w=320:h=ih:color=blue:t=fill',
               '-f','lavfi','-i','sine=frequency=440:sample_rate=16000',
               '-t','2','-c:v','libx264','-threads','1','-c:a','aac',str(source)])
    return source


def test_auto_detects_and_stacks_both_source_screens(side_by_side,tmp_path,monkeypatch):
    monkeypatch.setitem(media.RATIOS,'portrait',(180,320))
    assert media.detect_split_screen(side_by_side,0,2)==pytest.approx(.5,abs=.02)
    clip={'start':0,'end':2,'words':[{'start':0,'end':1,'text':'Both screens.'}]}
    settings={'ratio':'portrait','framing':'auto','captions':True,'text':'Two screens'}
    resolved=media.resolve_framing(side_by_side,clip,settings)
    assert resolved['framing']=='stack'
    output=tmp_path/'stacked.mp4'
    media.render(side_by_side,output,clip,settings)
    frames=read_frames(output)
    assert len(frames)==20
    # Probe outside the caption/text areas; those overlays are enabled above.
    top,bottom=frames[0][30,90],frames[0][300,90]
    assert top[2]>180 and top[0]<30
    assert bottom[0]>180 and bottom[2]<30
    assert media.probe(output)['audio']


def test_manual_stack_preserves_unequal_top_and_bottom_panels(tmp_path,monkeypatch):
    monkeypatch.setitem(media.RATIOS,'portrait',(180,320))
    source=tmp_path/'unequal-panels.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i',
               'color=red:s=640x360:r=5,drawbox=x=0:y=120:w=iw:h=240:color=blue:t=fill',
               '-t','1','-c:v','libx264','-threads','1',str(source)])
    output=tmp_path/'stacked.mp4'
    media.render(source,output,{'start':0,'end':1,'words':[]},
                 {'ratio':'portrait','framing':'stack','screen_layout':'top_bottom','split_at':1/3,'captions':False})
    frame=read_frames(output)[0]
    assert frame[80,90,2]>180 and frame[80,90,0]<30
    assert frame[240,90,0]>180 and frame[240,90,2]<30


def test_auto_keeps_a_single_scene_complete(tmp_path):
    source=tmp_path/'one-scene.mp4'
    media.run(['ffmpeg','-v','error','-y','-f','lavfi','-i','color=green:s=320x180:r=5',
               '-t','1','-c:v','libx264','-threads','1',str(source)])
    assert media.detect_split_screen(source,0,1) is None
    resolved=media.resolve_framing(source,{'start':0,'end':1},{'framing':'auto'})
    assert resolved['framing']=='scene'


def test_auto_uses_speaker_cuts_for_a_shared_camera_with_two_faces(tmp_path):
    portrait=cv2.resize(cv2.imread(str(Path(__file__).resolve().parents[1]/'frontend/public/creator.jpg')),(460,400))
    frame=np.full((720,1280,3),35,np.uint8)
    frame[150:550,60:520]=portrait
    frame[150:550,760:1220]=portrait
    source=tmp_path/'conversation.mp4'
    writer=cv2.VideoWriter(str(source),cv2.VideoWriter_fourcc(*'mp4v'),4,(1280,720))
    for _ in range(4): writer.write(frame)
    writer.release()
    assert media.detect_split_screen(source,0,1) is None
    assert media.has_multiple_faces(source,0,1)
    resolved=media.resolve_framing(source,{'start':0,'end':1},{'framing':'auto'})
    assert resolved['framing']=='speaker'
