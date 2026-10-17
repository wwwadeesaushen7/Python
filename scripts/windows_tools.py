"""Portable-tool discovery shared by setup and the local launcher."""
import json
import os
from pathlib import Path


def tool_paths(root):
    tools=(Path(root)/'.tools').resolve()
    config=tools/'paths.json'
    if not config.is_file():
        return []
    result=[]
    for name in json.loads(config.read_text(encoding='utf-8')).get('bin_dirs',[]):
        folder=(tools/name).resolve()
        if not folder.is_relative_to(tools):
            raise ValueError('Saved tool path escapes the Cutline tools directory. Run Setup again.')
        if folder.is_dir():
            result.append(str(folder))
    return result


def activate_tools(root):
    paths=tool_paths(root)
    if paths:
        os.environ['PATH']=os.pathsep.join(paths+[os.environ.get('PATH','')])
    return paths
