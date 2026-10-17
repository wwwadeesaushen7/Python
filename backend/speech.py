"""Timestamped speech and sentence-aware, non-overlapping highlight selection."""
import os
import re
import threading
from pathlib import Path

_MODEL = None
_MODEL_LOCK = threading.Lock()
_WHISPER_UNAVAILABLE = False


def offline_transcribe(source, cache):
    """Bundled English model: no credentials or network download required."""
    from pocketsphinx import Decoder, Segmenter
    from .media import run
    raw = cache.with_suffix('.pcm')
    run(['ffmpeg','-v','error','-y','-i',str(source),'-vn','-ac','1','-ar','16000','-f','s16le',str(raw)])
    words = []
    decoder = Decoder()
    try:
        with raw.open('rb') as audio:
            for utterance in Segmenter().segment(audio):
                decoder.start_utt()
                decoder.process_raw(utterance.pcm, full_utt=True)
                decoder.end_utt()
                part=[]
                for segment in decoder.seg() or []:
                    if segment.word.startswith(('<','[')):
                        if segment.word=='<sil>' and (segment.end_frame-segment.start_frame)>=35 and part and not part[-1]['text'].endswith('.'):
                            part[-1]['text']+='.'
                        continue
                    text = re.sub(r'\(\d+\)$','',segment.word)
                    part.append({'start':round(utterance.start_time+segment.start_frame/100,3),'end':round(utterance.start_time+(segment.end_frame+1)/100,3),'text':text})
                if part:
                    part[0]['text']=part[0]['text'].capitalize()
                    if not part[-1]['text'].endswith('.'):
                        part[-1]['text']+='.'
                    words.extend(part)
    finally:
        raw.unlink(missing_ok=True)
    return {'language':'en','engine':'offline','words':words}


def transcribe(source: Path, cache: Path, language='auto'):
    global _MODEL, _WHISPER_UNAVAILABLE
    import json
    if cache.exists():
        return json.loads(cache.read_text())
    engine = os.environ.get('CUTLINE_SPEECH_ENGINE','auto')
    if engine=='offline' or (_WHISPER_UNAVAILABLE and engine=='auto'):
        if language not in {'auto','en'}:
            raise ValueError('This language needs the Whisper model. Enable Hugging Face model downloads, or choose English for the bundled offline model.')
        result=offline_transcribe(source,cache)
        if not result['words']: raise ValueError('No speech was detected. Try a video with clear spoken audio.')
        cache.write_text(json.dumps(result))
        return result
    from faster_whisper import WhisperModel
    with _MODEL_LOCK:
        if _MODEL is None:
            try:
                _MODEL = WhisperModel(os.environ.get('WHISPER_MODEL', 'tiny'), device='cpu', compute_type='int8', cpu_threads=min(os.cpu_count() or 2, 4), download_root=str(cache.parents[1] / 'models'))
            except Exception as exc:
                if engine!='auto' or language not in {'auto','en'}:
                    raise ValueError('The Whisper model is unavailable. Enable Hugging Face model downloads or set WHISPER_MODEL to a local model path.') from exc
                _WHISPER_UNAVAILABLE=True
                result=offline_transcribe(source,cache)
                if not result['words']: raise ValueError('No speech was detected. Try a video with clear spoken audio.')
                cache.write_text(json.dumps(result))
                return result
        segments, info = _MODEL.transcribe(str(source), language=None if language == 'auto' else language, word_timestamps=True, vad_filter=True, beam_size=3, condition_on_previous_text=False)
        words = []
        for segment in segments:
            for word in segment.words or []:
                if word.word.strip():
                    words.append({'start':round(word.start,3),'end':round(word.end,3),'text':word.word.strip()})
    if not words:
        raise ValueError('No speech was detected. Try a video with clear spoken audio.')
    result = {'language':info.language, 'engine':'whisper', 'words':words}
    cache.write_text(json.dumps(result))
    return result


def sentences(words):
    result, current = [], []
    for index, word in enumerate(words):
        current.append(word)
        next_start = words[index+1]['start'] if index+1 < len(words) else None
        pause = next_start is not None and next_start - word['end'] >= 0.8
        punctuation = bool(re.search(r'[.!?。！？]["\u201d\u2019\']?$', word['text']))
        if punctuation or pause:
            result.append({'start':current[0]['start'], 'end':current[-1]['end'], 'text':' '.join(w['text'] for w in current), 'words':current, 'complete':punctuation or pause})
            current = []
    return result


def select_clips(words, target=45, count=3):
    """Always end at a complete detected sentence or pause, never a fixed timer."""
    units = sentences(words)
    candidates = []
    i = 0
    while i < len(units):
        first_index = i
        group = [units[i]]
        i += 1
        while i < len(units) and group[-1]['end'] - group[0]['start'] < target:
            # A long silence is a more useful boundary than including dead air.
            if units[i]['start'] - group[-1]['end'] > 3 and group[-1]['end'] - group[0]['start'] >= 12:
                break
            group.append(units[i])
            i += 1
        leading_gap=max(0,group[0]['start']-units[first_index-1]['end']) if first_index else .3
        trailing_gap=max(0,units[i]['start']-group[-1]['end']) if i<len(units) else .5
        start=max(0,group[0]['start']-min(.15,leading_gap/2))
        end=group[-1]['end']+min(.25,trailing_gap/2)
        if end - start < 8:
            continue
        text = ' '.join(s['text'] for s in group)
        hook = len(re.findall(r'\b(why|how|secret|learn|mistake|never|always|because|imagine|important|best|first)\b', text, re.I))
        density = sum(s['end']-s['start'] for s in group) / max(1, end-start)
        score = hook * 0.7 + density + (0.5 if '?' in text else 0)
        candidates.append({'start':round(start,3),'end':round(end,3),'text':text,'title':group[0]['text'][:100], 'words':[w for s in group for w in s['words']], 'rank':score})
    if not candidates:
        raise ValueError('Not enough clear speech to make a complete clip. Try a video with longer spoken passages.')
    chosen = sorted(candidates, key=lambda c:c['rank'], reverse=True)[:count]
    return sorted(chosen, key=lambda c:c['start'])
