"""Lightweight local face detection, stable identities and aligned mouth motion."""
import math
from pathlib import Path

import cv2
import numpy as np


class FaceTracker:
    def __init__(self):
        model = Path(__file__).with_name('models') / 'face_detection_yunet_2023mar.onnx'
        self.detector = cv2.FaceDetectorYN.create(str(model), '', (320, 320), .8, .3, 100)
        self.tracks = {}
        self.next_id = 0

    def reset(self):
        self.tracks.clear()

    def observe(self, frame, timestamp):
        height, width = frame.shape[:2]
        scale = min(1, 640 / max(width, height))
        small = cv2.resize(frame, (max(32, round(width*scale)), max(32, round(height*scale))))
        sh, sw = small.shape[:2]
        self.detector.setInputSize((sw, sh))
        _, detected = self.detector.detect(small)
        gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
        current = []
        for face in detected if detected is not None else []:
            x, y, w, h = map(float, face[:4])
            if min(w, h) < 18:
                continue
            eyes_nose = face[4:10].reshape(3, 2).astype(np.float32)
            transform = cv2.getAffineTransform(eyes_nose, np.float32([[20, 22], [44, 22], [32, 37]]))
            patch = cv2.warpAffine(gray, transform, (64, 72), borderMode=cv2.BORDER_REFLECT_101)
            patch = cv2.GaussianBlur(patch, (3, 3), 0)
            current.append({'x': (x+w/2)/sw, 'y': (y+h/2)/sh, 'size': w/sw,
                            'height': h/sh, 'confidence': float(face[-1]), 'patch': patch})
        self.tracks = {identity: track for identity, track in self.tracks.items()
                       if timestamp-track['time'] <= .8}
        # Match globally in two dimensions. A missed detection does not discard
        # an identity, and vertically separated faces cannot claim one another.
        pairs = []
        for index, face in enumerate(current):
            for identity, track in self.tracks.items():
                dx = abs(face['x']-track['x']) / max(face['size'], track['size'])
                dy = abs(face['y']-track['y']) / max(face['height'], track['height'])
                size_change = abs(math.log(face['size']/track['size']))
                if dx < .65 and dy < .65 and size_change < .6:
                    pairs.append((dx+dy+size_change, index, identity))
        matched, used = {}, set()
        for _, index, identity in sorted(pairs):
            if index not in matched and identity not in used:
                matched[index] = identity
                used.add(identity)
        choices = []
        for index, face in enumerate(current):
            identity = matched.get(index)
            previous = self.tracks.get(identity)
            if identity is None:
                identity = self.next_id
                self.next_id += 1
            # Do not compare across an occlusion: the hand/reappearance itself
            # is not evidence that this person has started speaking.
            activity = mouth_activity(previous['patch'], face['patch']) if previous and timestamp-previous['time'] <= .4 else 0
            self.tracks[identity] = dict(face, time=timestamp)
            choices.append({'id': identity, 'x': round(face['x'], 4),
                            'score': activity*3, 'size': face['size'],
                            'confidence': face['confidence']})
        return choices


def mouth_activity(previous, current):
    """Compare aligned lips while discounting illumination and head motion."""
    before = previous.astype(np.float32)
    after = current.astype(np.float32)
    after += before[8:38].mean()-after[8:38].mean()
    shift, response = cv2.phaseCorrelate(before[8:38], after[8:38])
    if response > .25 and max(abs(value) for value in shift) <= 3:
        after = cv2.warpAffine(after, np.float32([[1, 0, -shift[0]], [0, 1, -shift[1]]]),
                               (64, 72), borderMode=cv2.BORDER_REFLECT_101)
    difference = np.abs(after-before)
    lips = float(difference[44:66, 12:54].mean())
    head = float(difference[10:38, 8:56].mean())
    return max(0, lips-head*1.15-1.5)/255


def scene_changed(previous, current):
    if previous is None:
        return False
    difference = np.abs(current.astype(np.float32)-previous.astype(np.float32)).mean(axis=2)
    return float(difference.mean()) > 38 and float((difference > 25).mean()) > .55


def locate_scene_cut(capture, before_time, after_time, before, after):
    """Locate an observed shot change to source-frame precision, not 4 Hz."""
    fps = capture.get(cv2.CAP_PROP_FPS)
    if not math.isfinite(fps) or not 1 <= fps <= 240:
        return after_time, None
    low, high = math.floor(before_time*fps), math.floor(after_time*fps)
    while high-low > 1:
        middle = (low+high)//2
        capture.set(cv2.CAP_PROP_POS_FRAMES, middle)
        ok, frame = capture.read()
        if not ok:
            return after_time, None
        sample = cv2.resize(frame, (64, 36)).astype(np.float32)
        old_distance = float(np.abs(sample-before.astype(np.float32)).mean())
        new_distance = float(np.abs(sample-after.astype(np.float32)).mean())
        if new_distance < old_distance:
            high = middle
        else:
            low = middle
    capture.set(cv2.CAP_PROP_POS_FRAMES, high)
    ok, frame = capture.read()
    return high/fps, frame if ok else None
