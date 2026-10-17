"""FFmpeg media operations and visual active-speaker framing."""
import json
import math
import re
import subprocess
from pathlib import Path
from statistics import median

RATIOS = {'portrait': (720,1280), 'square':(720,720), 'landscape':(1280,720)}
TEMPLATES = {'highlight','studio','pop','minimal'}
TRACKING_VERSION = 2


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


def speaker_path(observations, confirm_samples=2):
    """Confirm a face change, then put a hard cut at its first observed sample."""
    points,pending = [],[]
    center,subject = None,None
    for observation in observations:
        faces = observation['faces']
        if not faces:
            pending = []
            if center is not None:
                points.append({'time':observation['time'],'x':center,'cut':False})
            continue
        winner = max(faces,key=lambda face:face['score'])
        if center is None:
            center,subject = winner['x'],winner.get('id')
            points.append({'time':observation['time'],'x':center,'cut':False})
            continue
        incumbent = (next((face for face in faces if face.get('id')==subject),None)
                     if subject is not None else min(faces,key=lambda face:abs(face['x']-center)))
        present = incumbent is not None and (subject is not None or abs(incumbent['x']-center)<.18)
        if present:
            center = incumbent['x']
        points.append({'time':observation['time'],'x':center,'cut':False})
        different = winner.get('id')!=subject if subject is not None and winner.get('id') is not None else abs(winner['x']-center)>=.18
        changing = not present or (observation.get('speaking',True) and different and winner['score']>incumbent['score']+.03)
        if not changing:
            pending = []
            continue
        if pending:
            same_candidate = pending[-1][2]==winner['id'] if winner.get('id') is not None else abs(pending[-1][1]-winner['x'])<.12
            if not same_candidate:
                pending = []
        pending.append((len(points)-1,winner['x'],winner.get('id')))
        if len(pending)>=confirm_samples:
            # Analysis runs before rendering: confirmation adds no visible wait.
            for index,(point_index,x,identity) in enumerate(pending):
                points[point_index].update(x=x,cut=index==0)
            center,subject = winner['x'],winner.get('id')
            pending = []
    return points


def track_speaker(source, start, end, words=None):
    """Visual mouth-motion heuristic; word timestamps can gate silent intervals."""
    import cv2
    import numpy as np
    capture = cv2.VideoCapture(str(source))
    detector = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    observations, previous = [], []
    next_identity = 0
    word_index = 0
    try:
        for index in range(max(1,math.ceil((end-start)*4))):
            timestamp = start+index/4
            capture.set(cv2.CAP_PROP_POS_MSEC,timestamp*1000)
            ok,frame = capture.read()
            if not ok:
                break
            height,width = frame.shape[:2]
            small = cv2.resize(frame,(min(480,width),max(1,int(height*min(480,width)/width))))
            gray = cv2.cvtColor(small,cv2.COLOR_BGR2GRAY)
            faces = detector.detectMultiScale(gray,scaleFactor=1.15,minNeighbors=5,minSize=(28,28))
            choices,current,matched = [],[],set()
            for x,y,w,h in faces:
                cx = (x+w/2)/small.shape[1]
                mouth = cv2.resize(gray[y+int(h*.58):y+int(h*.9),x+int(w*.18):x+int(w*.82)],(32,16))
                forehead = cv2.resize(gray[y+int(h*.15):y+int(h*.4),x+int(w*.2):x+int(w*.8)],(32,16))
                nearest_index = min((i for i in range(len(previous)) if i not in matched),key=lambda i:abs(previous[i][0]-cx),default=None)
                nearest = previous[nearest_index] if nearest_index is not None else None
                movement = 0
                if nearest and abs(nearest[0]-cx)<.16:
                    matched.add(nearest_index)
                    identity = nearest[3]
                    mouth_change = float(np.mean(cv2.absdiff(mouth,nearest[1])))
                    head_change = float(np.mean(cv2.absdiff(forehead,nearest[2])))
                    movement = max(0,mouth_change-.6*head_change)/255
                else:
                    identity = next_identity
                    next_identity += 1
                choices.append({'id':identity,'x':round(cx,4),'score':movement*3+(w/small.shape[1])*.2})
                current.append((cx,mouth,forehead,identity))
            speaking = True
            if words is not None:
                while word_index<len(words) and words[word_index]['end']<timestamp-.15:
                    word_index += 1
                speaking = word_index<len(words) and words[word_index]['start']<=timestamp+.1
            observations.append({'time':round(timestamp-start,3),'faces':choices,'speaking':speaking})
            previous = current
    finally:
        capture.release()
    return speaker_path(observations)


def smooth_camera(points, dead_zone=.045, max_speed=.055, acceleration=.05):
    """Smooth only within a shot; never blend positions across a speaker cut."""
    if not points:
        return []
    shots = []
    for point in sorted(points,key=lambda point:point['time']):
        if not shots or point.get('cut'):
            shots.append([])
        shots[-1].append(point)
    result = []
    for shot in shots:
        targets = [median(p['x'] for p in shot[max(0,i-2):i+3]) for i in range(len(shot))]
        position,velocity = targets[0],0
        result.append(dict(shot[0],x=position))
        for index,point in enumerate(shot[1:],1):
            dt = point['time']-result[-1]['time']
            if dt<=0:
                continue
            distance = targets[index]-position
            desired = 0 if abs(distance)<=dead_zone else math.copysign(min(max_speed,(abs(distance)-dead_zone)*.8),distance)
            velocity += max(-acceleration*dt,min(acceleration*dt,desired-velocity))
            position = max(0,min(1,position+velocity*dt))
            result.append(dict(point,x=position))
    return result


def detect_split_screen(source, start, end):
    """Conservatively find a persistent vertical divider near the frame center."""
    import cv2
    import numpy as np
    capture = cv2.VideoCapture(str(source))
    dividers = []
    samples = min(7,max(1,math.ceil((end-start)*2)))
    try:
        for index in range(samples):
            timestamp = start+(end-start)*(index+.5)/samples
            capture.set(cv2.CAP_PROP_POS_MSEC,timestamp*1000)
            ok,frame = capture.read()
            if not ok:
                continue
            height,width = frame.shape[:2]
            # Portrait sources that are already stacked keep their full scene.
            if width<height:
                return None
            small = cv2.resize(frame,(480,max(2,round(height*480/width))))
            region = small[int(small.shape[0]*.1):int(small.shape[0]*.9)].astype(np.float32)
            differences = np.abs(region[:,1:]-region[:,:-1]).mean(axis=2)
            coverage = (differences>18).mean(axis=0)
            strength = differences.mean(axis=0)
            low,high = round(480*.35),round(480*.65)
            index = low+int(np.argmax((coverage*strength)[low:high]))
            if coverage[index]>=.78 and strength[index]>=25:
                dividers.append((index+1)/480)
        if len(dividers)<max(1,math.ceil(samples*.7)):
            return None
        center = median(dividers)
        if sum(abs(value-center)<.02 for value in dividers)<math.ceil(samples*.7):
            return None
        return round(center,4)
    finally:
        capture.release()


def has_multiple_faces(source, start, end):
    """Identify a shared wide camera with two separated faces across samples."""
    import cv2
    capture = cv2.VideoCapture(str(source))
    detector = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')
    matches = 0
    try:
        for index in range(3):
            capture.set(cv2.CAP_PROP_POS_MSEC,(start+(end-start)*(index+.5)/3)*1000)
            ok,frame = capture.read()
            if not ok:
                continue
            height,width = frame.shape[:2]
            if width<height*1.2:
                return False
            small = cv2.resize(frame,(480,max(1,round(height*480/width))))
            faces = detector.detectMultiScale(cv2.cvtColor(small,cv2.COLOR_BGR2GRAY),scaleFactor=1.15,minNeighbors=5,minSize=(28,28))
            centers = [(x+w/2)/480 for x,y,w,h in faces]
            if len(centers)>1 and max(centers)-min(centers)>.12:
                matches += 1
        return matches>=2
    finally:
        capture.release()


def resolve_framing(source, clip, settings, auto_layout=None):
    result = dict(settings)
    if settings.get('framing')=='auto':
        if auto_layout is None:
            divider = detect_split_screen(source,clip['start'],clip['end'])
            auto_layout = ({'framing':'stack','screen_layout':'side_by_side','split_at':divider}
                           if divider is not None else {'framing':'speaker' if has_multiple_faces(source,clip['start'],clip['end']) else 'scene'})
        result.update(auto_layout)
        if result['framing']=='speaker':
            result['tracking']=True
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
                if index+1 < len(tracking) and not tracking[index+1].get('cut'):
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


def stacked_filter(info, ratio, screen_layout='side_by_side', split_at=.5):
    """Fit each source panel into its own half without dropping either picture."""
    width,height = RATIOS[ratio]
    video = info['video']
    sw,sh = int(video['width']),int(video['height'])
    rotation = next((side.get('rotation',0) for side in video.get('side_data_list',[]) if 'rotation' in side),0)
    if abs(int(rotation))%180==90:
        sw,sh = sh,sw
    if screen_layout=='side_by_side':
        divider = max(2,min(sw-2,int(sw*split_at)//2*2))
        crops = [f'crop={divider}:{sh}:0:0',f'crop={sw-divider}:{sh}:{divider}:0']
    else:
        divider = max(2,min(sh-2,int(sh*split_at)//2*2))
        crops = [f'crop={sw}:{divider}:0:0',f'crop={sw}:{sh-divider}:0:{divider}']
    panel = (f'scale={width}:{height//2}:force_original_aspect_ratio=decrease:'
             f'force_divisible_by=2,pad={width}:{height//2}:(ow-iw)/2:(oh-ih)/2:color=0x17141c,setsar=1')
    return (f'split=2[first][second];[first]{crops[0]},{panel}[top];'
            f'[second]{crops[1]},{panel}[bottom];[top][bottom]vstack=inputs=2')


def render(source, output, clip, settings, tracking=None, music=None, clean=False):
    source,output=Path(source).resolve(),Path(output).resolve()
    if music:
        music=Path(music).resolve()
    ratio=settings.get('ratio','portrait')
    size=RATIOS[ratio]
    info=probe(source)
    settings=resolve_framing(source,clip,settings)
    duration=clip['end']-clip['start']
    args=['ffmpeg','-hide_banner','-loglevel','error','-y','-ss',str(clip['start']),'-t',str(duration),'-i',str(source)]
    if music: args += ['-stream_loop','-1','-i',str(music)]
    if settings.get('framing')=='stack':
        filters=stacked_filter(info,ratio,settings.get('screen_layout','side_by_side'),settings.get('split_at',.5))
    elif settings.get('framing')=='scene':
        filters=scene_filter(ratio)
    else:
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
