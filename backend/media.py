"""FFmpeg media operations and visual active-speaker framing."""
import json
import math
import re
import subprocess
from pathlib import Path

RATIOS = {'portrait': (720,1280), 'square':(720,720), 'landscape':(1280,720)}
TEMPLATES = {'highlight','studio','pop','minimal'}


def run(args, timeout=1800, cwd=None):
    result = subprocess.run(args, capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=timeout, cwd=cwd)
    if result.returncode:
        raise ValueError((result.stderr or result.stdout or 'Media processing failed.')[-1800:])
    return result.stdout


def probe(path):
    result = json.loads(run(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(path)], timeout=30))
    result['duration'] = float(result.get('format',{}).get('duration',0))
    result['video'] = next((s for s in result.get('streams',[]) if s.get('codec_type')=='video'), None)
    result['audio'] = next((s for s in result.get('streams',[]) if s.get('codec_type')=='audio'), None)
    return result


def validate_source(path):
    info = probe(path)
    if not info['video'] or not info['audio']:
        raise ValueError('Choose a video with both a picture and spoken audio.')
    if not math.isfinite(info['duration']) or info['duration'] <= 180:
        raise ValueError('Your video must be longer than 3 minutes (180 seconds).')
    if info['duration'] > 7200:
        raise ValueError('Videos can be up to 2 hours long in this workspace.')
    return info


def track_speaker(source, start, end):
    """Sample faces and favor mouth movement; this is a visual heuristic, not diarization."""
    import cv2
    import numpy as np
    capture = cv2.VideoCapture(str(source))
    detector = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    points, previous = [], []
    center = 0.5
    samples = max(1, math.ceil((end-start)*2))
    for index in range(samples):
        timestamp = start+index/2
        capture.set(cv2.CAP_PROP_POS_MSEC, timestamp*1000)
        ok, frame = capture.read()
        if not ok:
            break
        height, width = frame.shape[:2]
        small = cv2.resize(frame, (min(480,width), max(1,int(height*min(480,width)/width))))
        gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
        faces = detector.detectMultiScale(gray, scaleFactor=1.15, minNeighbors=5, minSize=(28,28))
        choices, current = [], []
        for x,y,w,h in faces:
            cx = (x+w/2)/small.shape[1]
            mouth = cv2.resize(gray[y+int(h*.58):y+int(h*.9), x+int(w*.18):x+int(w*.82)], (32,16))
            nearest = min(previous, key=lambda f:abs(f[0]-cx), default=None)
            movement = float(np.mean(cv2.absdiff(mouth,nearest[1])))/255 if nearest and abs(nearest[0]-cx)<.16 else 0
            # Avoid jumping between equally active faces. A larger face is preferred initially.
            score = movement*3 + (w/small.shape[1])*.2 - abs(cx-center)*.08
            choices.append((score,cx))
            current.append((cx,mouth))
        if choices:
            target = max(choices)[1]
            center = center*.55+target*.45
            points.append({'time':round(timestamp-start,2),'x':round(center,4)})
        previous = current
    capture.release()
    return points


def ass_time(seconds):
    seconds = max(0, seconds)
    hours = int(seconds//3600)
    minutes = int(seconds//60)%60
    return f'{hours}:{minutes:02}:{seconds%60:05.2f}'


def ass_escape(text):
    return str(text).replace('\\','').replace('{','').replace('}','').replace('\n',r'\N').replace('\r','')


def write_subtitles(path, words, offset, duration, template='highlight', overlay='', position='top', captions=True, size=(720,1280)):
    width,height = size
    template = template if template in TEMPLATES else 'highlight'
    font_size = 45 if width==720 else 54
    primary = '&H00FFFFFF'
    if template=='pop': primary='&H0068F5FF'
    border = 3 if template in ('highlight','pop') else 1.5
    background = '&H80000000'
    style = 3 if template=='studio' else 1
    margin = int(height*.17)
    header = f'''[Script Info]
ScriptType: v4.00+
PlayResX: {width}
PlayResY: {height}
WrapStyle: 0
ScaledBorderAndShadow: yes
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Caption,DejaVu Sans,{font_size},{primary},&H00FFFFFF,&H00151515,{background},-1,0,0,0,100,100,0,0,{style},{border},0,2,45,45,{margin},1
Style: Text,DejaVu Sans,{int(font_size*.85)},&H00FFFFFF,&H00FFFFFF,&H00222222,&H80000000,-1,0,0,0,100,100,0,0,1,2,0,8,45,45,80,1
[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
'''
    events = []
    if captions:
        for index in range(0,len(words),5):
            group = words[index:index+5]
            begin,finish = max(0,group[0]['start']-offset), min(duration,group[-1]['end']-offset+.12)
            if finish <= begin: continue
            if template=='highlight':
                for active, word in enumerate(group):
                    a = max(begin, word['start']-offset)
                    b = min(finish, (group[active+1]['start']-offset) if active+1<len(group) else finish)
                    text = ' '.join((r'{\c&H0085FFB7&}' if j==active else r'{\c&H00FFFFFF&}')+ass_escape(w['text']) for j,w in enumerate(group))
                    if b>a: events.append(f'Dialogue: 0,{ass_time(a)},{ass_time(b)},Caption,,0,0,0,,{text}')
            else:
                text = ass_escape(' '.join(w['text'] for w in group))
                if template=='pop': text = text.upper()
                events.append(f'Dialogue: 0,{ass_time(begin)},{ass_time(finish)},Caption,,0,0,0,,{text}')
    if overlay.strip():
        alignment = {'top':8,'center':5,'bottom':2}.get(position,8)
        events.append(f'Dialogue: 1,0:00:00.00,{ass_time(duration)},Text,,0,0,0,,{{\\an{alignment}}}{ass_escape(overlay)}')
    path.write_text(header+'\n'.join(events)+'\n',encoding='utf-8')


def crop_filter(info, ratio, tracking, commands_path=None, relative_paths=False):
    width,height = RATIOS[ratio]
    source = info['video']
    sw,sh = int(source['width']),int(source['height'])
    rotation=next((s.get('rotation',0) for s in source.get('side_data_list',[]) if 'rotation' in s),0)
    if abs(int(rotation)) % 180 == 90:
        sw,sh=sh,sw
    target = width/height
    if sw/sh > target:
        cw = max(2,int(sh*target)//2*2)
        expression = str((sw-cw)/2)
        if tracking:
            expression=str(round(max(0,min(sw-cw,tracking[0]['x']*sw-cw/2))/2)*2)
        crop = f"crop={cw}:{sh}:'{expression}':0"
        if tracking and commands_path:
            # Runtime crop commands scale to long videos without expression recursion.
            commands=[]
            for point in tracking:
                x=round(max(0,min(sw-cw,point['x']*sw-cw/2))/2)*2
                commands.append(f'{point["time"]:.3f} crop x {x};')
            commands_path.write_text('\n'.join(commands)+'\n')
            filename=commands_path.name if relative_paths else str(commands_path)
            escaped=filename.replace('\\','/').replace(':',r'\:').replace("'",r"\'")
            crop=f"sendcmd=f='{escaped}',{crop}"
    else:
        ch=max(2,int(sw/target)//2*2)
        crop=f'crop={sw}:{ch}:0:(ih-oh)/2'
    return f'{crop},scale={width}:{height},setsar=1'


def render(source, output, clip, settings, tracking=None, music=None, clean=False):
    source,output=Path(source).resolve(),Path(output).resolve()
    if music:
        music=Path(music).resolve()
    ratio=settings.get('ratio','portrait')
    size=RATIOS[ratio]
    info=probe(source)
    duration=clip['end']-clip['start']
    args=['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(clip['start']),'-t',str(duration),'-i',str(source)]
    if music: args += ['-stream_loop','-1','-i',str(music)]
    filters=crop_filter(info,ratio,tracking if settings.get('tracking',True) else None,output.with_suffix('.tracking.txt'),relative_paths=True)
    subtitle=output.with_suffix('.ass')
    if not clean:
        write_subtitles(subtitle,clip['words'],clip['start'],duration,settings.get('template','highlight'),settings.get('text',''),settings.get('text_position','top'),settings.get('captions',True),size)
        # Relative generated filenames also avoid Windows drive-colon/path quoting issues.
        escaped=subtitle.name.replace("'",r"\'")
        filters+=f",ass='{escaped}'"
    voice=settings.get('voice_volume',1)
    if music:
        volume=settings.get('music_volume',.15)
        args+=['-filter_complex',f'[0:v]{filters}[v];[0:a]volume={voice}[voice];[1:a]volume={volume},atrim=duration={duration},asetpts=PTS-STARTPTS[music];[voice][music]amix=inputs=2:duration=first:normalize=0[a]','-map','[v]','-map','[a]']
    else:
        args+=['-vf',filters,'-af',f'volume={voice}','-map','0:v:0','-map','0:a:0']
    args+=['-t',str(duration),'-c:v','libx264','-preset','veryfast','-crf','23','-threads','2','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',str(output)]
    run(args,cwd=output.parent)


def thumbnail(video,output):
    run(['ffmpeg','-hide_banner','-loglevel','error','-y','-ss','1','-i',str(video),'-frames:v','1','-vf','scale=480:-2',str(output)],timeout=60)
