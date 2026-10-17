"""Integrity and path handling checks for the Windows download/bootstrap workflow."""
import hashlib
import io
import json
from pathlib import Path
import zipfile

import pytest

from scripts import setup_windows as setup
from scripts.windows_tools import activate_tools, tool_paths


class DownloadResponse(io.BytesIO):
    def geturl(self):
        return 'https://vendor.example/tool.zip'


def test_download_verifies_hash_and_reuses_valid_cache(monkeypatch,tmp_path):
    data=b'verified vendor bytes'
    checksum=hashlib.sha256(data).hexdigest()
    calls=[]
    def open_download(*args,**kwargs):
        calls.append(args)
        return DownloadResponse(data)
    monkeypatch.setattr(setup.urllib.request,'urlopen',open_download)
    path=tmp_path/'vendor.zip'
    setup.download('https://vendor.example/tool.zip',path,checksum)
    setup.download('https://vendor.example/tool.zip',path,checksum)
    assert path.read_bytes()==data
    assert len(calls)==1


def test_download_rejects_bad_checksum_and_cleans_partial_file(monkeypatch,tmp_path):
    monkeypatch.setattr(setup.urllib.request,'urlopen',lambda *args,**kwargs:DownloadResponse(b'tampered'))
    output=tmp_path/'vendor.zip'
    with pytest.raises(ValueError,match='Checksum verification failed'):
        setup.download('https://vendor.example/tool.zip',output,'0'*64)
    assert not output.exists()
    assert not output.with_suffix('.zip.part').exists()


@pytest.mark.parametrize('name',['../escaped.exe','C:/escaped.exe','dir/../../escaped.exe',r'..\escaped.exe'])
def test_archive_cannot_escape_tool_directory(tmp_path,name):
    archive=tmp_path/'bad.zip'
    with zipfile.ZipFile(archive,'w') as zipped:
        zipped.writestr(name,b'bad')
    with pytest.raises(ValueError,match='Unsafe path'):
        setup.safe_extract(archive,tmp_path/'tools')
    assert not (tmp_path/'escaped.exe').exists()


def test_normal_vendor_archive_extracts(tmp_path):
    archive=tmp_path/'node.zip'
    with zipfile.ZipFile(archive,'w') as zipped:
        zipped.writestr('node/bin/node.exe',b'executable placeholder')
    setup.safe_extract(archive,tmp_path/'tools')
    assert (tmp_path/'tools/node/bin/node.exe').read_bytes()==b'executable placeholder'


def test_saved_tool_paths_are_confined_and_activated(monkeypatch,tmp_path):
    tools=tmp_path/'.tools'
    (tools/'node/bin').mkdir(parents=True)
    (tools/'paths.json').write_text(json.dumps({'bin_dirs':['node/bin']}))
    monkeypatch.setenv('PATH','existing')
    assert tool_paths(tmp_path)==[str(tools/'node/bin')]
    activate_tools(tmp_path)
    assert str(tools/'node/bin') in setup.os.environ['PATH']
    (tools/'paths.json').write_text(json.dumps({'bin_dirs':['../../outside']}))
    with pytest.raises(ValueError,match='escapes'):
        tool_paths(tmp_path)


def test_interrupted_extraction_is_repaired_then_reused(monkeypatch,tmp_path):
    tools=tmp_path/'tools'
    incomplete=tools/'node-test'
    incomplete.mkdir(parents=True)
    (incomplete/'node.exe').write_bytes(b'partial')
    archive=tmp_path/'node.zip'
    with zipfile.ZipFile(archive,'w') as zipped:
        zipped.writestr('node.exe',b'complete')
        zipped.writestr('npm.cmd',b'npm')
    monkeypatch.setattr(setup,'TOOLS',tools)
    monkeypatch.setitem(setup.MANIFEST,'node',{'version':'test','url':'https://vendor.example/node.zip','sha256':'a'*64})
    calls=[]
    def get_archive(*args):
        calls.append(args)
        return archive
    monkeypatch.setattr(setup,'download',get_archive)
    assert setup.ensure_tool('node','node.exe')==incomplete
    assert (incomplete/'node.exe').read_bytes()==b'complete'
    assert (incomplete/'npm.cmd').exists()
    assert setup.ensure_tool('node','node.exe')==incomplete
    assert len(calls)==1
