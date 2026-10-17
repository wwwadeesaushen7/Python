# Cutline Studio

A complete React + FastAPI video-clipping workspace. Upload a long video or import a public YouTube link, turn spoken passages into clips, then add captions, text, and your own music.

## Run

Requirements: Python 3.12+, Node 22+, FFmpeg/FFprobe with libx264 and libass. On Debian/Ubuntu: `apt-get install ffmpeg`.

```sh
./scripts/setup.sh
./scripts/dev.sh
```

The Vite development server uses port 5173 and proxies `/api` and `/media` to the Python server on port 8000. Use the existing checkout; cloud tasks already run in an isolated workspace and do not need a Git worktree.

For a single production-style process, build first with `cd frontend && npm run build`, then run from the repository root:

```sh
.venv/bin/python -m uvicorn backend.app:app --host 0.0.0.0 --port 8000
```

For automated checks: `./scripts/check.sh`. Runtime/development Python packages are pinned in `requirements.lock.txt`; the frontend uses `npm ci` with `package-lock.json`.

## What works

- Upload MP4, MOV, WebM, MKV, M4V, or AVI, up to 2 GB. A source must have video and audio, be **strictly longer than 180 seconds**, and no longer than two hours. Both the browser (where it can read metadata) and server enforce duration.
- Import public YouTube watch, shortened, shorts, or live-recording links. Downloads use yt-dlp, FFmpeg, and the installed Node runtime. Live streams, playlists, private/sign-in videos, and restricted downloads are not supported. YouTube can reject downloads even when a video is publicly viewable; file upload is the alternative.
- Transcribe timestamped words; group complete detected sentences or spoken passages ending at pauses; select non-overlapping passages. Clip length is a target, **not a hard timer**. A long uninterrupted passage may produce a longer clip or fewer clips than requested. Ranking uses transcript structure and simple keyword signals; there is no fabricated virality score.
- Speaker framing samples faces twice per second, compares mouth movement, smooths the crop, and moves it through FFmpeg runtime crop commands. If no face is found, framing stays centered. Choose portrait (720×1280), square (720×720), or landscape (1280×720).
- Optional burned-in word-timed captions in Spotlight, Studio, Pop, and Minimal templates. Spotlight highlights the active word.
- Clip editor with video preview, seeking, captions, a custom text overlay (top/center/bottom), music upload, original/music volume sliders, framing, and tracking controls. Export renders an actual H.264/AAC MP4. Audio loops to match the clip, while speech audio is preserved at the selected volume.
- Persistent projects, progress polling, searchable library, downloads, and deletion. Files and SQLite metadata stay in `.data/` until project deletion. Server restart marks interrupted processing/exports as failed rather than pretending they finished.

## Speech engines and network access

The default `CUTLINE_SPEECH_ENGINE=auto` tries local CPU Whisper (`WHISPER_MODEL=tiny`) and falls back to PocketSphinx's bundled **English-only** model if the Whisper model cannot load. The offline engine requires no keys or external model download, but has lower recognition accuracy and infers boundaries from pauses rather than linguistic punctuation. Review captions before publishing. Use `CUTLINE_SPEECH_ENGINE=offline` to skip the download attempt, or `CUTLINE_SPEECH_ENGINE=whisper` to require Whisper rather than falling back.

Set `WHISPER_MODEL` to a pre-downloaded faster-whisper model directory for fully offline Whisper, or allow the following model-download domains: `huggingface.co`, `*.huggingface.co`, `*.hf.co`, and `*.xethub.hf.co`. Multilingual recognition requires Whisper. Models are cached under `.data/models`.

YouTube imports need outbound HTTPS to `youtube.com`, `www.youtube.com`, `m.youtube.com`, `youtu.be`, `youtubei.googleapis.com`, `*.googlevideo.com`, and `*.ytimg.com`. The onboarding environment currently blocks these and external model downloads. Network additions are saved in the environment draft; review and save them in environment settings to apply the policy, then publish the environment when satisfied. Saving a draft does not itself change the running network policy.

## Practical limits

Processing is local and CPU-based, with one worker to keep memory use bounded. Runtime depends on source length, resolution, and number of clips; a few minutes cannot be guaranteed. Speech recognition and sentence detection can be wrong. Visual active-speaker selection is a heuristic, not a speaker-diarization or lip-sync model: occlusions, camera motion, multiple moving mouths, and profile faces can confuse it. It does not track arbitrary selected objects. New framing and tracking are applied during export; the editor previews the clean generated clip with live style overlays.

This is a **single shared workspace**, without accounts, tenant isolation, quotas, billing, or a durable distributed job queue. Do not expose it as a public multiuser service without those additions. There is no automatic posting to social networks.

## Layout

- `backend/app.py`: upload/import/export API and background processing
- `backend/speech.py`: Whisper/offline transcription, boundaries, and passage selection
- `backend/media.py`: probing, face tracking, ASS captions, audio mix, MP4 rendering
- `backend/store.py`: SQLite-backed project persistence
- `frontend/src`: responsive workspace and editor
- `tests/test_pipeline.py`: duration rules, URL validation, sentence boundaries, tracking rendering, safe captions, and API behavior

Sample portraits are **style illustrations**, never generated projects. The Lin-Manuel Miranda reference is sourced from [face_recognition's example image](https://github.com/ageitgey/face_recognition/blob/master/examples/lin-manuel-miranda.png). The Grace Hopper portrait is the US Navy public-domain image distributed in [Matplotlib's sample data](https://github.com/matplotlib/matplotlib/blob/main/lib/matplotlib/mpl-data/sample_data/grace_hopper.jpg). Replace these samples with your own brand imagery as needed.

With the development servers running, run `cd frontend && npm run test:ui` for browser smoke tests. They use `/usr/bin/chromium` by default; set `CHROMIUM_PATH` for another installed Chromium browser. The tests validate real duration metadata and responsive layouts without creating or deleting projects.

## Windows download

The packaged Windows download includes the built frontend. When using GitHub’s Download ZIP instead, Setup installs the frontend dependencies and builds the website automatically. Extract the ZIP, run `1 - Setup.bat` once, then use `2 - Open Cutline.bat` to open the app in your browser. `WINDOWS-GUIDE.txt` contains the beginner walkthrough. Setup uses WinGet's standard package verification to install missing Python 3.12, Node.js LTS, FFmpeg, and Microsoft Visual C++ runtime, then installs the Python requirements. It does not change execution policy or disable Windows security features. It uses the platform's native dependency markers rather than the Linux-specific frozen lockfile.

The local launcher binds to loopback, opens the browser after a health check, reuses an existing Cutline instance, and chooses another free local port if needed. The Windows setup scripts require 64-bit Windows 10/11; they have been reviewed here but cannot be executed on this Linux host. The Python launcher, app, UTF-8 captions, and media processing in folder names containing spaces, apostrophes, and colons were tested here. To refresh the ZIP after changing the app, build the frontend and run `python3 scripts/package_windows.py`.
