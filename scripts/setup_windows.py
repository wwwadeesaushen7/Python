"""Windows setup using verified vendor downloads, without WinGet/App Installer."""
import hashlib
import json
import os
from pathlib import Path, PurePosixPath, PureWindowsPath
import shutil
import stat
import subprocess
import sys
import urllib.request
import venv
import zipfile

if __package__:
    from .windows_tools import activate_tools
else:
    from windows_tools import activate_tools

ROOT=Path(__file__).resolve().parents[1]
TOOLS=ROOT/'.tools'
DOWNLOADS=ROOT/'.cache'/'installers'
MANIFEST=json.loads((ROOT/'scripts'/'windows-downloads.json').read_text(encoding='utf-8'))


def file_hash(path):
    digest=hashlib.sha256()
    with Path(path).open('rb') as stream:
        for block in iter(lambda:stream.read(1024*1024),b''):
            digest.update(block)
    return digest.hexdigest()


def download(url,destination,expected=None):
    if not url.startswith('https://'):
        raise ValueError('Only verified HTTPS downloads are supported.')
    if expected and (len(expected)!=64 or any(c not in '0123456789abcdefABCDEF' for c in expected)):
        raise ValueError('Invalid expected download checksum.')
    destination=Path(destination)
    destination.parent.mkdir(parents=True,exist_ok=True)
    if destination.is_file() and (not expected or file_hash(destination)==expected.lower()):
        print(f'Using cached {destination.name}',flush=True)
        return destination
    partial=destination.with_suffix(destination.suffix+'.part')
    request=urllib.request.Request(url,headers={'User-Agent':'CutlineSetup/2.0'})
    try:
        print(f'Downloading {destination.name} ...',flush=True)
        with urllib.request.urlopen(request,timeout=60) as source,partial.open('wb') as target:
            if not source.geturl().startswith('https://'):
                raise ValueError('Download redirected to an insecure connection.')
            shutil.copyfileobj(source,target,length=1024*1024)
        if expected and file_hash(partial)!=expected.lower():
            raise ValueError(f'Checksum verification failed for {destination.name}. Setup stopped without using it.')
        partial.replace(destination)
    finally:
        partial.unlink(missing_ok=True)
    return destination


def safe_extract(archive,destination):
    destination=Path(destination)
    with zipfile.ZipFile(archive) as zipped:
        for item in zipped.infolist():
            normalized=item.filename.replace('\\','/')
            name=PurePosixPath(normalized)
            if name.is_absolute() or '..' in name.parts or PureWindowsPath(normalized).drive:
                raise ValueError('Unsafe path in tool archive.')
            if stat.S_ISLNK(item.external_attr>>16):
                raise ValueError('Unexpected symbolic link in tool archive.')
        zipped.extractall(destination)


def run(args,**kwargs):
    return subprocess.run([str(x) for x in args],check=True,**kwargs)


def signed_installer(path,publisher):
    environment=dict(os.environ,CUTLINE_VERIFY_FILE=str(Path(path).resolve()),CUTLINE_EXPECTED_PUBLISHER=publisher)
    code="$ErrorActionPreference='Stop'; $s=Get-AuthenticodeSignature -LiteralPath $env:CUTLINE_VERIFY_FILE; if($s.Status -ne 'Valid' -or $s.SignerCertificate.Subject -notmatch [regex]::Escape($env:CUTLINE_EXPECTED_PUBLISHER)){throw 'The installer signature or publisher could not be verified. Setup stopped.'}"
    run(['powershell','-NoProfile','-Command',code],env=environment)


def ensure_vc_runtime():
    system=Path(os.environ.get('SystemRoot',r'C:\Windows'))/'System32'
    if all((system/name).is_file() for name in ['vcruntime140_1.dll','msvcp140_atomic_wait.dll']):
        return
    config=MANIFEST['vc_runtime']
    installer=download(config['url'],DOWNLOADS/'vc_redist.x64.exe')
    signed_installer(installer,config['publisher'])
    print('Installing the Microsoft Visual C++ runtime. Approve the Microsoft installer if Windows asks.',flush=True)
    environment=dict(os.environ,CUTLINE_INSTALLER=str(installer.resolve()))
    code="$ErrorActionPreference='Stop'; $p=Start-Process -FilePath $env:CUTLINE_INSTALLER -Verb RunAs -ArgumentList '/install','/passive','/norestart' -Wait -PassThru; if($p.ExitCode -eq 3010){Write-Host 'Restart Windows, then run Setup again.'; exit 1}; if($p.ExitCode -notin @(0,1638)){throw ('Microsoft runtime installer returned '+$p.ExitCode)}"
    run(['powershell','-NoProfile','-Command',code],env=environment)


def usable_node():
    node=shutil.which('node')
    if not node or not shutil.which('npm.cmd'):
        return False
    try:
        result=subprocess.run([node,'-p','process.versions.node.split(".")[0]'],capture_output=True,text=True,check=True)
        return int(result.stdout.strip())>=20
    except (OSError,ValueError,subprocess.CalledProcessError):
        return False


def ensure_tool(name,executable):
    config=MANIFEST[name]
    folder=TOOLS/f'{name}-{config["version"]}'
    complete=folder/'.complete'
    if not complete.is_file() or complete.read_text(encoding='ascii').strip()!=config['sha256'] or not next(folder.rglob(executable),None):
        complete.unlink(missing_ok=True)
        archive=download(config['url'],DOWNLOADS/f'{name}-{config["version"]}.zip',config['sha256'])
        safe_extract(archive,folder)
    binary=next(folder.rglob(executable),None)
    if not binary:
        raise RuntimeError(f'{name} download did not contain {executable}.')
    complete.write_text(config['sha256'],encoding='ascii')
    return binary.parent


def main():
    if os.name!='nt':
        raise RuntimeError('Use scripts/setup.sh on Linux. This setup is for Windows.')
    if sys.maxsize<=2**32 or sys.version_info[:2] not in {(3,12),(3,13)}:
        raise RuntimeError('Cutline needs 64-bit Python 3.12 or 3.13. Run 1 - Setup.bat to install it.')
    ensure_vc_runtime()
    TOOLS.mkdir(exist_ok=True)
    paths=[Path(p) for p in activate_tools(ROOT)]
    if not usable_node():
        paths.insert(0,ensure_tool('node','node.exe'))
    if not shutil.which('ffmpeg') or not shutil.which('ffprobe'):
        paths.insert(0,ensure_tool('ffmpeg','ffmpeg.exe'))
    unique=list(dict.fromkeys(p.resolve() for p in paths))
    (TOOLS/'paths.json').write_text(json.dumps({'bin_dirs':[p.relative_to(TOOLS.resolve()).as_posix() for p in unique]},indent=2),encoding='utf-8')
    activate_tools(ROOT)
    run(['node','--version'])
    run(['ffmpeg','-version'],stdout=subprocess.DEVNULL)
    run(['ffprobe','-version'],stdout=subprocess.DEVNULL)
    ffmpeg_filters=subprocess.run(['ffmpeg','-hide_banner','-filters'],capture_output=True,text=True,check=True).stdout
    if not any(' ass ' in line for line in ffmpeg_filters.splitlines()):
        raise RuntimeError('This FFmpeg build lacks captions. Rename your custom FFmpeg on PATH or use the downloaded build.')
    python=ROOT/'.venv'/'Scripts'/'python.exe'
    if not python.is_file():
        print('Creating the app environment ...',flush=True)
        venv.EnvBuilder(with_pip=True).create(ROOT/'.venv')
    environment=dict(os.environ,PIP_CACHE_DIR=str(ROOT/'.cache'/'pip'),NPM_CONFIG_CACHE=str(ROOT/'.cache'/'npm'))
    print('Installing the app packages ...',flush=True)
    run([python,'-m','ensurepip','--upgrade'],env=environment)
    run([python,'-m','pip','install','--only-binary=:all:','-r',ROOT/'requirements.txt'],env=environment)
    run([python,'-m','pip','check'],env=environment)
    run([python,'-c','import fastapi, uvicorn, cv2, pocketsphinx; from faster_whisper import WhisperModel; print("App packages are ready.")'],env=environment)
    print('Preparing the website ...',flush=True)
    run(['cmd','/d','/c','npm.cmd','ci'],cwd=ROOT/'frontend',env=environment)
    run(['cmd','/d','/c','npm.cmd','run','build'],cwd=ROOT/'frontend',env=environment)
    if not (ROOT/'frontend'/'dist'/'index.html').is_file():
        raise RuntimeError('The website build did not produce its entry page.')
    print('\nSETUP COMPLETE!\nClose this window, then double-click "2 - Open Cutline.bat".',flush=True)


if __name__=='__main__':
    try:
        main()
    except Exception as error:
        print(f'\nSetup stopped: {error}\nSend a screenshot of this error in the chat.',flush=True)
        raise SystemExit(1)
