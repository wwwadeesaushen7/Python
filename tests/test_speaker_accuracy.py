from hashlib import sha256
from pathlib import Path

import cv2
import numpy as np
import pytest

from backend import media
from backend.faces import FaceTracker, mouth_activity


ROOT = Path(__file__).resolve().parents[1]


def test_bundled_detector_is_the_verified_model_not_a_git_lfs_pointer():
    model = ROOT/'backend/models/face_detection_yunet_2023mar.onnx'
    assert sha256(model.read_bytes()).hexdigest() == '8f2383e4dd3cfbb4553ea8718107fc0423210dc964f9f4280604804ed2552fa4'


def test_face_identity_survives_a_brief_detection_gap_without_false_mouth_activity():
    frame = cv2.imread(str(ROOT/'frontend/public/creator.jpg'))
    tracker = FaceTracker()
    first = tracker.observe(frame, 0)
    assert len(first) == 1
    assert tracker.observe(np.zeros_like(frame), .25) == []
    returned = tracker.observe(frame, .5)
    assert len(returned) == 1 and returned[0]['id'] == first[0]['id']
    assert returned[0]['score'] == 0


def test_small_whole_face_motion_and_brightness_are_not_lip_activity():
    texture = np.random.default_rng(42).integers(30, 180, (72, 64), dtype=np.uint8)
    face = cv2.GaussianBlur(texture, (5, 5), 0)
    shifted = cv2.warpAffine(face, np.float32([[1, 0, 1], [0, 1, 1]]),
                             (64, 72), borderMode=cv2.BORDER_REFLECT_101)
    shifted = cv2.add(shifted, 15)
    mouth = face.copy()
    cv2.ellipse(mouth, (32, 55), (16, 7), 0, 0, 360, 0, -1)
    assert mouth_activity(face, shifted) < .01
    assert mouth_activity(face, mouth) > .06


def test_listener_size_does_not_override_speech_activity_at_shot_start():
    samples = [{'time': i/4, 'faces': [
        {'id': 1, 'x': .2, 'score': 0, 'size': .3},
        {'id': 2, 'x': .8, 'score': .15 if i else 0, 'size': .15}]} for i in range(4)]
    points = media.speaker_path(samples)
    assert all(point['x'] == .8 and not point['cut'] for point in points)


def test_a_visible_listener_does_not_replace_a_briefly_occluded_speaker():
    speaker = {'id': 1, 'x': .2, 'score': .2}
    listener = {'id': 2, 'x': .8, 'score': 0}
    samples = [{'time': 0, 'faces': [speaker, listener]},
               {'time': .25, 'faces': [listener]},
               {'time': .5, 'faces': [listener]},
               {'time': .75, 'faces': [speaker, listener]}]
    assert all(point['x'] == .2 and not point['cut'] for point in media.speaker_path(samples))


def test_small_ambiguous_motion_does_not_switch_speakers():
    samples = [{'time': i/4, 'faces': [
        {'id': 1, 'x': .2, 'score': .05 if i == 0 else .01},
        {'id': 2, 'x': .8, 'score': 0 if i == 0 else .025}]} for i in range(6)]
    assert all(point['x'] == .2 and not point['cut'] for point in media.speaker_path(samples))


def test_new_source_shot_does_not_inherit_the_previous_crop_or_missing_face():
    samples = [{'time': 0, 'faces': [{'id': 1, 'x': .2, 'score': .3}]},
               {'time': .25, 'faces': [{'id': 1, 'x': .2, 'score': .3}]},
               {'time': .4, 'faces': [], 'scene_cut': True},
               {'time': .5, 'faces': [{'id': 2, 'x': .8, 'score': 0}]},
               {'time': .75, 'faces': [{'id': 2, 'x': .8, 'score': .2}]}]
    points = media.smooth_camera(media.speaker_path(samples))
    assert [point['x'] for point in points] == [.2, .2, .8, .8, .8]
    assert [point['time'] for point in points if point['cut']] == [.4]


def test_a_shot_without_faces_uses_its_own_center_not_an_old_person():
    samples = [{'time': 0, 'faces': [{'id': 1, 'x': .2, 'score': .3}]},
               {'time': .25, 'faces': [{'id': 1, 'x': .2, 'score': .3}]},
               {'time': .5, 'faces': [], 'scene_cut': True},
               {'time': .75, 'faces': []}]
    points = media.smooth_camera(media.speaker_path(samples))
    assert [point['x'] for point in points] == [.2, .2, .5, .5]
    assert points[2]['cut']


def test_real_face_tracking_and_rendering_cut_on_the_original_source_frame(tmp_path, monkeypatch):
    monkeypatch.setitem(media.RATIOS, 'portrait', (180, 320))
    portrait = cv2.resize(cv2.imread(str(ROOT/'frontend/public/creator.jpg')), (460, 400))
    source = tmp_path/'camera-change.mp4'
    writer = cv2.VideoWriter(str(source), cv2.VideoWriter_fourcc(*'mp4v'), 30, (1280, 720))
    for index in range(60):
        frame = np.full((720, 1280, 3), (30, 30, 180) if index < 17 else (180, 30, 30), np.uint8)
        left = 50 if index < 17 else 770
        frame[150:550, left:left+460] = portrait
        writer.write(frame)
    writer.release()
    points = media.track_speaker(source, 0, 2)
    cuts = [point for point in points if point['cut']]
    assert len(cuts) == 1
    assert cuts[0]['time'] == pytest.approx(17/30, abs=1e-6)
    assert points[0]['x'] < .35 and cuts[0]['x'] > .65
    output = tmp_path/'reframed.mp4'
    media.render(source, output, {'start': 0, 'end': 2, 'words': []},
                 {'ratio': 'portrait', 'framing': 'speaker', 'tracking': True, 'captions': False}, points)
    capture = cv2.VideoCapture(str(output))
    try:
        for index in [16, 17, 18]:
            capture.set(cv2.CAP_PROP_POS_FRAMES, index)
            ok, frame = capture.read()
            assert ok
            # The very first frame of the new angle contains the centered face,
            # rather than the empty old crop while the camera catches up.
            faces = FaceTracker().observe(frame, 0)
            assert len(faces) == 1 and abs(faces[0]['x']-.5) < .08
    finally:
        capture.release()
