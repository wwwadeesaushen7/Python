import pytest

from backend import media, speech


def test_free_demo_worker_preserves_no_speech_result_and_cleans_temporary_files(tmp_path, monkeypatch):
    monkeypatch.setenv('CUTLINE_FREE_DEMO', '1')
    monkeypatch.setenv('CUTLINE_SPEECH_ENGINE', 'offline')
    source = tmp_path / 'silent.wav'
    cache = tmp_path / 'transcript.json'
    media.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', 'anullsrc=r=16000:cl=mono', '-t', '0.5', str(source)])
    with pytest.raises(speech.NoSpeechError, match='No speech'):
        speech.transcribe(source, cache, start=0, end=.5)
    assert not cache.exists()
    assert list(tmp_path.iterdir()) == [source]
