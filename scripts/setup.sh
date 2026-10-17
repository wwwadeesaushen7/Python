#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
command -v ffmpeg >/dev/null || { echo 'Install FFmpeg (with libass and libx264) before setup.' >&2; exit 1; }
command -v ffprobe >/dev/null
python3 -m venv .venv
PIP_CACHE_DIR="${PIP_CACHE_DIR:-$PWD/.cache/pip}" .venv/bin/python -m pip install -r requirements.lock.txt
(cd frontend && npm ci --cache "${NPM_CONFIG_CACHE:-$PWD/.cache/npm}" && npm run build)
.venv/bin/python -m pip check
