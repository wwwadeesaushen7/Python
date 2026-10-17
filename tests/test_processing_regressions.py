"""Processing regressions from Windows uploads and UTF-8 YouTube metadata."""
import importlib
import json
import shutil
from pathlib import Path
from types import SimpleNamespace

import numpy as np
import pytest

from backend import media, speech, store

api = importlib.import_module('backend.app')


@pytest.fixture
def windows_text_locale(monkeypatch):
    """Emulate Windows' cp1252 default even when the tests run on Linux."""
    original = Path.read_text

    def read_text(path, encoding=None, errors=None):
        return original(path, encoding=encoding or 'cp1252', errors=errors)

    monkeypatch.setattr(Path, 'read_text', read_text)


@pytest.fixture
def stereo_video(tmp_path):
    source = tmp_path / "ā O'Neill's video.mp4"
    media.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i',
               'color=green:s=160x90:r=1', '-f', 'lavfi', '-i',
               'sine=frequency=440:sample_rate=48000', '-t', '181',
               '-ac', '2', '-c:v', 'libx264', '-threads', '1', '-c:a', 'aac',
               str(source)])
    return source


class RecordingWhisper:
    def __init__(self):
        self.calls = 0

    def transcribe(self, audio, **settings):
        # A filename would trigger faster-whisper 1.2.1's incompatible PyAV
        # metadata_errors call. Its supported ndarray API bypasses that decoder.
        assert isinstance(audio, np.ndarray)
        assert audio.dtype == np.float32
        assert audio.ndim == 1
        assert len(audio) / 16000 == pytest.approx(181, abs=.1)
        assert np.isfinite(audio).all()
        assert .01 < np.sqrt(np.mean(audio ** 2)) < .2
        assert settings['word_timestamps'] and settings['vad_filter']
        self.calls += 1
        return [SimpleNamespace(words=[
            SimpleNamespace(start=0.1, end=1.2, word=' ā'),
            SimpleNamespace(start=1.3, end=9.5, word=' finishes.')
        ])], SimpleNamespace(language='en')


@pytest.fixture
def whisper(monkeypatch):
    model = RecordingWhisper()
    monkeypatch.setattr(speech, '_MODEL', model)
    monkeypatch.setattr(speech, '_WHISPER_UNAVAILABLE', False)
    monkeypatch.setenv('CUTLINE_SPEECH_ENGINE', 'whisper')
    return model


def test_whisper_audio_and_cached_unicode_on_windows(
        stereo_video, tmp_path, whisper, windows_text_locale):
    cache = tmp_path / 'transcript.json'
    result = speech.transcribe(stereo_video, cache)
    assert result['engine'] == 'whisper'
    assert result['words'][0]['text'] == 'ā'
    assert whisper.calls == 1
    assert not list(tmp_path.glob('audio-*'))
    # Also accept UTF-8 caches from tools which write unescaped Unicode.
    cache.write_text(json.dumps(result, ensure_ascii=False), encoding='utf-8')
    assert speech.transcribe(stereo_video, cache) == result
    assert whisper.calls == 1


def test_audio_decode_cleans_up_when_ffmpeg_fails(tmp_path):
    with pytest.raises(ValueError):
        speech.decode_audio(tmp_path / 'missing.mp4', tmp_path)
    assert not list(tmp_path.glob('audio-*'))


@pytest.mark.parametrize('youtube', [False, True], ids=['upload', 'youtube'])
def test_worker_processes_and_exports_with_windows_locale(
        youtube, stereo_video, tmp_path, monkeypatch, whisper,
        windows_text_locale):
    data = tmp_path / 'workspace'
    data.mkdir()
    monkeypatch.setattr(store, 'DATA', data)
    job_id = 'a' * 32
    folder = data / job_id
    folder.mkdir()
    source = folder / 'source.mp4'
    title = 'ā — a complete thought 🎬'
    config = api.Settings(count=1, target=15, tracking=False, ratio='square').checked()
    store.save({'id':job_id, 'title':'YouTube video' if youtube else title,
                'source':None if youtube else str(source),
                'youtube':'https://www.youtube.com/watch?v=abcdefghijk' if youtube else None,
                'settings':config, 'status':'queued', 'progress':0, 'clips':[]})
    real_run = media.run
    downloads = []

    def download_or_run(args, **kwargs):
        if len(args) > 2 and args[1:3] == ['-m', 'yt_dlp']:
            downloads.append(args)
            shutil.copyfile(stereo_video, source)
            metadata = json.dumps({'title':title}, ensure_ascii=False).encode('utf-8')
            assert b'\x81' in metadata  # This failed under the user's cp1252 locale.
            (folder / 'source.info.json').write_bytes(metadata)
            return ''
        return real_run(args, **kwargs)

    monkeypatch.setattr(media, 'run', download_or_run)
    if not youtube:
        shutil.copyfile(stereo_video, source)
    api.process(job_id)
    job = store.get(job_id)
    assert job['status'] == 'completed', job.get('error')
    assert job['title'] == title
    assert len(downloads) == int(youtube)
    assert job['speech_engine'] == 'whisper'
    assert job['duration'] > 180
    assert len(job['clips']) == 1
    assert whisper.calls == 1
    clip = job['clips'][0]
    assert clip['transcript'] == 'ā finishes.'
    output = folder / Path(clip['url']).name
    info = media.probe(output)
    assert info['audio']
    assert (info['video']['width'], info['video']['height']) == (720, 720)
    assert info['duration'] == pytest.approx(clip['duration'], abs=1)
    assert not list(folder.glob('audio-*'))
    # Re-export reads persisted clip metadata under the same Windows locale.
    metadata_path = folder / f"clip-{clip['id']}.json"
    metadata = json.loads(metadata_path.read_text(encoding='utf-8'))
    metadata_path.write_text(json.dumps(metadata, ensure_ascii=False), encoding='utf-8')
    api.render_export(job_id, clip['id'], dict(config, template='pop', text='ā'), None)
    exported = store.get(job_id)['clips'][0]
    assert exported['export_status'] == 'completed', exported.get('export_error')
    assert (folder / Path(exported['export_url']).name).is_file()
