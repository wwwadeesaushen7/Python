"""Manual Linux/Docker resource check; generates and deletes only synthetic test data.

Build first: docker build -t cutline-studio:free-test .
Requires FFmpeg with the flite speech-synthesis filter and Docker with cgroup v2.
Run: .venv/bin/python scripts/check_free_demo.py
"""
import json
import os
from pathlib import Path
import secrets
import subprocess
import tempfile
import time

import httpx


def docker(*args):
    result = subprocess.run(['docker', *args], capture_output=True)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', errors='replace'))
    return result


name = 'cutline-free-memory-' + secrets.token_hex(4)
with tempfile.TemporaryDirectory(prefix=name) as temporary:
    temporary = Path(temporary)
    text = temporary / 'speech.txt'
    text.write_text(('A good story starts with a clear idea. Take your time and finish your thought. '
                     'This example shows how we can create a short video. Listen carefully and keep the camera steady. ')*3)
    speech = temporary / 'speech.wav'
    source = temporary / 'source.mp4'
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', f'flite=textfile={text}:voice=slt',
                    '-ar', '16000', str(speech)], check=True)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', 'color=blue:s=1280x720:r=5',
                    '-stream_loop', '-1', '-i', str(speech), '-t', '185', '-c:v', 'libx264', '-preset', 'ultrafast',
                    '-threads', '2', '-c:a', 'aac', str(source)], check=True)
    password = secrets.token_urlsafe(32)
    variables = temporary / 'site.env'
    variables.write_text('CUTLINE_SITE_USERNAME=test-owner\nCUTLINE_SITE_PASSWORD=' + password +
                         '\nCUTLINE_FREE_DEMO=1\n')
    variables.chmod(0o600)
    start = time.monotonic()
    try:
        docker('run', '-d', '--name', name, '--memory', '512m', '--memory-swap', '512m', '--cpus', '0.1',
               '--env-file', str(variables), '-p', '127.0.0.1::8000', 'cutline-studio:free-test')
        port = json.loads(docker('inspect', name).stdout)[0]['NetworkSettings']['Ports']['8000/tcp'][0]['HostPort']
        base = 'http://127.0.0.1:' + port
        for _ in range(120):
            try:
                if httpx.get(base+'/api/health', trust_env=False, timeout=3).status_code == 200:
                    break
            except httpx.TransportError:
                pass
            time.sleep(.5)
        with httpx.Client(base_url=base, auth=('test-owner', password), trust_env=False, timeout=90) as client:
            assert client.get('/api/health').json()['temporary_storage']
            assert client.get('/api/health').json()['free_demo']
            assert client.get('/').status_code == 200
            assert httpx.get(base+'/api/jobs', trust_env=False).status_code == 401
            config = {'mode': 'auto', 'count': 1, 'target': 15, 'captions': True, 'framing': 'scene', 'language': 'en'}
            with source.open('rb') as video:
                response = client.post('/api/jobs', files={'file': ('source.mp4', video, 'video/mp4')},
                                       data={'settings': json.dumps(config)})
            assert response.status_code == 202, response.text
            job_id = response.json()['id']
            deadline = time.monotonic() + 600
            last = None
            latency = []
            while time.monotonic() < deadline:
                tick = time.monotonic()
                job = client.get('/api/jobs/' + job_id).json()
                latency.append(time.monotonic() - tick)
                if job['status'] != last:
                    print('Phase:', job['status'], 'Elapsed:', round(time.monotonic()-start), 'seconds', flush=True)
                    last = job['status']
                if job['status'] in {'completed', 'error'}:
                    break
                time.sleep(2)
            assert job['status'] == 'completed', job
            assert job['speech_engine'] == 'offline' and len(job['clips']) == 1
            clip = job['clips'][0]
            assert client.get(clip['url'], headers={'Range': 'bytes=0-99'}).status_code == 206
            response = client.post(f'/api/jobs/{job_id}/clips/{clip["id"]}/export',
                                  data={'settings': json.dumps(dict(config, framing='stack', text='Free demo test'))})
            assert response.status_code == 202, response.text
            deadline = time.monotonic() + 180
            while time.monotonic() < deadline:
                clip = client.get('/api/jobs/' + job_id).json()['clips'][0]
                if clip['export_status'] in {'completed', 'error'}:
                    break
                time.sleep(2)
            assert clip['export_status'] == 'completed', clip
            assert client.get(clip['export_url']).status_code == 200
            peak = docker('exec', name, 'cat', '/sys/fs/cgroup/memory.peak').stdout.decode().strip()
            print('Automatic English clipping, captions and stacked/text export passed with 512 MiB, no swap and 0.1 CPU.', flush=True)
            print('Slowest progress response:', round(max(latency), 2), 'seconds.', flush=True)
            print('Peak container memory:', round(int(peak)/1024**2, 1), 'MiB. Total elapsed:', round(time.monotonic()-start), 'seconds.', flush=True)
            assert client.delete('/api/jobs/' + job_id).status_code == 204
            assert client.get('/api/jobs').json() == []
    except BaseException:
        try:
            print(docker('logs', '--tail', '35', name).stderr.decode(errors='replace'), flush=True)
        except RuntimeError:
            pass
        raise
    finally:
        subprocess.run(['docker', 'rm', '-f', name], capture_output=True)
