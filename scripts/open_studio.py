"""Open the built app on this computer; no Node server is needed."""
import argparse
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import sys
import time
from urllib.error import URLError
from urllib.request import urlopen
import webbrowser

if __package__:
    from .windows_tools import activate_tools
else:
    from windows_tools import activate_tools

ROOT=Path(__file__).resolve().parents[1]


def is_studio(url):
    try:
        with urlopen(url+'/api/health', timeout=1) as response:
            result=json.load(response)
        return result.get('status')=='ok' and result.get('min_duration')==180 and 'speech_model' in result
    except (OSError, URLError, ValueError):
        return False


def available_port(preferred):
    for port in range(preferred, min(preferred+20,65536)):
        with socket.socket() as sock:
            try:
                sock.bind(('127.0.0.1',port))
                return port
            except OSError:
                continue
    raise RuntimeError('No free local port found. Close another running copy and try again.')


def main():
    parser=argparse.ArgumentParser(description='Open Cutline Studio on this computer')
    parser.add_argument('--port',type=int,default=8000)
    parser.add_argument('--no-browser',action='store_true')
    args=parser.parse_args()
    if not 1024<=args.port<=65515:
        parser.error('Choose a port from 1024 to 65515.')
    activate_tools(ROOT)
    url=f'http://127.0.0.1:{args.port}'
    if is_studio(url):
        if not args.no_browser:
            webbrowser.open(url)
        print('Cutline is already open. You can use the existing window.', flush=True)
        return 0
    if not (ROOT/'frontend'/'dist'/'index.html').is_file():
        print('The built website is missing. Use the complete Windows download, then run Setup again.')
        return 1
    python=ROOT/'.venv'/('Scripts/python.exe' if os.name=='nt' else 'bin/python')
    if not python.is_file():
        print('Run "1 - Setup.bat" first, then open Cutline again.')
        return 1
    if not shutil.which('ffmpeg') or not shutil.which('ffprobe'):
        print('FFmpeg is missing. Run "1 - Setup.bat" again to install it.')
        return 1
    port=available_port(args.port)
    url=f'http://127.0.0.1:{port}'
    child=subprocess.Popen([str(python),'-m','uvicorn','backend.app:app','--host','127.0.0.1','--port',str(port)],cwd=ROOT)
    try:
        for _ in range(120):
            if child.poll() is not None:
                print('Cutline could not start. Copy the last error above and send it in the chat.')
                return 1
            if is_studio(url):
                print('\nCutline is ready. Your browser will open automatically.',flush=True)
                print('Keep this window open while using the app. Press Ctrl+C here to stop it.',flush=True)
                if not args.no_browser:
                    webbrowser.open(url)
                return child.wait()
            time.sleep(.5)
        print('Startup took too long. Close this window and try again.')
        return 1
    except KeyboardInterrupt:
        print('\nClosing Cutline...',flush=True)
        return 0
    finally:
        if child.poll() is None:
            child.terminate()
            try:
                child.wait(timeout=10)
            except subprocess.TimeoutExpired:
                child.kill()
                child.wait()


if __name__=='__main__':
    raise SystemExit(main())
