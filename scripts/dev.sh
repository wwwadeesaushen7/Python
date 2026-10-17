#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
.venv/bin/python -m uvicorn backend.app:app --host 0.0.0.0 --port 8000 --reload --reload-dir backend &
api_pid=$!
(cd frontend && exec ./node_modules/.bin/vite --host 0.0.0.0 --port 5173 --strictPort) &
web_pid=$!
cleanup() { kill "$api_pid" "$web_pid" 2>/dev/null || true; }
trap cleanup EXIT INT TERM
wait -n "$api_pid" "$web_pid"
