"""FFmpeg media operations and visual active-speaker framing."""
import json
import math
import re
import subprocess
from pathlib import Path
from statistics import median

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


def validate_source(path, automatic=True):
    info = probe(path)
    if not info['video'] or (automatic and not info['audio']):
        raise ValueError('Choose a video with both a picture and spoken audio.')
    if not math.isfinite(info['duration']) or info['duration'] <= 0:
        raise ValueError('This video has no usable duration.')
    if automatic and info['duration'] <= 180:
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
    center, challenger, challenge_time, missing = None, None, 0, 0
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
            score = movement*3 + (w/small.shape[1])*.2
            choices.append((score,cx))
            current.append((cx,mouth))
        if choices:
            winner = max(choices)
            incumbent = min(choices, key=lambda choice:abs(choice[1]-center)) if center is not None else None
            if incumbent is None:
                center = winner[1]
            elif abs(incumbent[1]-center) <= .18:
                missing = 0
                center = incumbent[1]
                if abs(winner[1]-center) > .18 and winner[0] > incumbent[0]+.08:
                    challenge_time = challenge_time+.5 if challenger is not None and abs(challenger-winner[1]) < .12 else .5
                    challenger = winner[1]
                    # A new speaker must remain active; one mouth movement is not a cut.
                    if challenge_time >= 2.5:
                        center, challenger, challenge_time = winner[1], None, 0
                else:
                    challenger, challenge_time = None, 0
            else:
                missing += .5
                if missing >= 1.5:
                    center, missing, challenger, challenge_time = winner[1], 0, None, 0
        else:
            missing += .5
            challenger, challenge_time = None, 0
        if center is not None:
            points.append({'time':round(timestamp-start,2),'x':round(center,4)})
        previous = current
    capture.release()
    return points


def smooth_camera(points, dead_zone=.045, max_speed=.055, acceleration=.05):
    """Ignore head jitter and bound pan speed/acceleration in source-width units."""
    if not points:
        return []
    points = sorted(points, key=lambda point:point['time'])
    targets = [median(p['x'] for p in points[max(0,i-2):i+3]) for i in range(len(points))]
    position, velocity = targets[0], 0
    result = [{'time':points[0]['time'], 'x':position}]
    for index, point in enumerate(points[1:], 1):
        dt = point['time']-result[-1]['time']
        if dt <= 0:
            continue
        distance = targets[index]-position
        desired = 0 if abs(distance) <= dead_zone else math.copysign(min(max_speed, (abs(distance)-dead_zone)*.8), distance)
        velocity += max(-acceleration*dt, min(acceleration*dt, desired-velocity))
        position = max(0, min(1, position+velocity*dt))
        result.append({'time':point['time'], 'x':position})
    return result


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
        tracking = smooth_camera(tracking)
        if tracking:
            expression=str(round(max(0,min(sw-cw,tracking[0]['x']*sw-cw/2))/2)*2)
        crop = f"crop={cw}:{sh}:'{expression}':0"
        if tracking and commands_path:
            # Runtime crop commands scale to long videos without expression recursion.
            commands=[]
            for index,point in enumerate(tracking):
                x=max(0,min(sw-cw,point['x']*sw-cw/2))
                if index+1 < len(tracking):
                    following=tracking[index+1]
                    next_x=max(0,min(sw-cw,following['x']*sw-cw/2))
                    interval=following['time']-point['time']
                    # Crop evaluates x at every decoded frame. Runtime commands
                    # replace a short interpolation, rather than jumping twice/sec.
                    expression=f'{x:.4f}+({next_x-x:.4f})*clip((t-{point["time"]:.4f})/{interval:.4f},0,1)'
                else:
                    expression=f'{x:.4f}'
                commands.append(f'{point["time"]:.3f} crop x \'{expression}\';')
            commands_path.write_text('\n'.join(commands)+'\n',encoding='utf-8')
            filename=commands_path.name if relative_paths else str(commands_path)
            escaped=filename.replace('\\','/').replace(':',r'\:').replace("'",r"\'")
            crop=f"sendcmd=f='{escaped}',{crop}"
    else:
        ch=max(2,int(sw/target)//2*2)
        crop=f'crop={sw}:{ch}:0:(ih-oh)/2'
    return f'{crop},scale={width}:{height},setsar=1'


def scene_filter(ratio):
    """Keep the entire picture sharp, with a soft background filling the canvas."""
    width,height = RATIOS[ratio]
    bw,bh = max(2,width//8//2*2),max(2,height//8//2*2)
    return (f'split=2[background][picture];'
            f'[background]scale={bw}:{bh}:force_original_aspect_ratio=increase,'
            f'crop={bw}:{bh},gblur=sigma=6,scale={width}:{height},setsar=1[blurred];'
            f'[picture]scale={width}:{height}:force_original_aspect_ratio=decrease:'
            f'force_divisible_by=2,setsar=1[complete];'
            f'[blurred][complete]overlay=(W-w)/2:(H-h)/2:shortest=1')


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
    filters=scene_filter(ratio) if settings.get('framing')=='scene' else crop_filter(info,ratio,tracking if settings.get('tracking',True) else None,output.with_suffix('.tracking.txt'),relative_paths=True)
    subtitle=output.with_suffix('.ass')
    if not clean:
        write_subtitles(subtitle,clip['words'],clip['start'],duration,settings.get('template','highlight'),settings.get('text',''),settings.get('text_position','top'),settings.get('captions',True),size)
        # Relative generated filenames also avoid Windows drive-colon/path quoting issues.
        escaped=subtitle.name.replace("'",r"\'")
        filters+=f",ass='{escaped}'"
    voice=settings.get('voice_volume',1)
    if music:
        volume=settings.get('music_volume',.15)
        audio=f'[1:a]volume={volume},atrim=duration={duration},asetpts=PTS-STARTPTS[music]'
        audio+=f';[0:a]volume={voice}[voice];[voice][music]amix=inputs=2:duration=first:normalize=0[a]' if info['audio'] else ';[music]anull[a]'
        args+=['-filter_complex',f'[0:v]{filters}[v];{audio}','-map','[v]','-map','[a]']
    else:
        args+=['-vf',filters,'-map','0:v:0','-map','0:a:0?']
        if info['audio']:
            args+=['-af',f'volume={voice}']
    args+=['-t',str(duration),'-c:v','libx264','-preset','veryfast','-crf','23','-threads','2','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart',str(output)]
    run(args,cwd=output.parent)


def thumbnail(video,output,timestamp=1):
    run(['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(timestamp),'-i',str(video),'-frames:v','1','-vf','scale=480:-2',str(output)],timeout=60)
