# Validation — 17 October 2026

- `./scripts/setup.sh` completed after the initial dependency installation; frozen Python dependencies and `npm ci` refreshed successfully. `pip check` reports no broken dependencies.
- `./scripts/check.sh`: 16 backend tests passed and the production frontend build succeeded. The test runner reports one upstream Starlette/AnyIO deprecation warning.
- `cd frontend && npm run test:ui`: passed in Chromium. Checked missing-file and invalid-link errors, persisted caption selection within the session, optional captions, dialog close, rejection of a one-second video using real browser metadata, mobile navigation, and no horizontal overflow at 320, 390, 768, and 1440 pixels. No JavaScript page errors occurred.
- A generated **185-second video with spoken audio** was uploaded through the real API. Offline English transcription, complete-passage selection, face/mouth tracking, portrait reframing, burned-in captions, and thumbnail generation completed. The selected clip was 27.94 seconds long, extending the requested 15-second target to retain the complete detected passage.
- The real browser editor played the generated video and submitted caption, custom text, music, volume, ratio, and tracking changes. A square 720×720 MP4 export completed with audio and matching duration. MP4 and uploaded-music HTTP range requests returned 206. A second export reused the saved music and applied the new style/tracking choices.
- All four caption styles rendered through FFmpeg. Visual inspection caught an invalid ASS text-style field count; corrected it, added a format/outline regression check, and rendered a new custom-text + captions + music export to verify the result.
- Long motion tracks initially exceeded FFmpeg's expression parser limits. Replaced nested expressions with runtime crop commands. The regression test renders a 400-sample track.
- `npm audit --audit-level=high`: zero vulnerabilities reported.
- The documented `./scripts/dev.sh` started both services. API health returned `status=ok, ffmpeg=true`; frontend development HTML and the built app were served successfully.
- Test projects were deleted through the API after validation. No user projects existed or were removed.

## External checks that remain blocked

The environment's outbound proxy returned **403** for YouTube metadata and Whisper model downloads. Public YouTube import and Whisper transcription are implemented, but were not validated against remote services here. English file uploads were validated using the bundled offline recognizer. The `install_script`, `start_skill`, and additional network domains were saved successfully in the cloud environment draft. They are not yet applied or published: review/save environment settings, then publish through the product. A fresh published-task restoration has not been tested.

Speaker selection uses a visual heuristic, not a diarization/lip-sync neural model. The test establishes face-driven crop generation and rendering, not accuracy across multi-speaker scenes. Speech boundaries reflect detected sentences/pauses; semantic completion cannot be guaranteed.

## Windows guide and package

Added Windows setup/open batch files, a beginner text guide, and an explicit-allowlist ZIP packager. The archive contains the built website and source; it excludes Git metadata, credentials, installed dependencies, and user projects. The local Python launcher served the built site and healthy API on a separate test port. Confirmed Python 3.12 64-bit Windows wheels are published for PocketSphinx, OpenCV, NumPy, CTranslate2, ONNX Runtime, PyAV, and Tokenizers. Native Windows execution remains untested.

Media rendering now uses relative generated subtitle/tracking filenames with an explicit working directory, avoiding Windows drive-colon filter parsing. A new regression test renders captions and motion tracking under a folder containing spaces, apostrophes, and a colon. ASS captions are written explicitly as UTF-8, with Sinhala text covered by the format test. The updated backend suite passes 17 tests.

## Direct Windows setup (version 2)

The user's Windows App Installer failed to install its dependencies. Microsoft's repair command then returned an Octokit `NotFoundException` while fetching a GitHub resource. This is not a missing PowerShell command. Replaced the WinGet prerequisite with verified direct downloads: Python 3.13.15 and FFmpeg 9.0.2 pins from Microsoft's package manifests, Node.js 24.22.0 with its official release SHA-256, and Microsoft's signed current C++ runtime. Setup verifies SHA-256 and installer signatures, keeps portable tools local, and builds the GitHub source download automatically. The launcher activates the saved tool paths.

Additional tests exercise checksum acceptance/rejection, cache reuse, archive traversal rejection, extraction, and saved tool-path confinement. The updated suite passes 26 tests, including repair/reuse after interrupted extraction. Windows 3.13 wheels were confirmed for the native dependencies. The actual Node.js and FFmpeg ZIPs were downloaded and matched their pinned hashes. Native Windows execution remains untested on this Linux machine.

## Windows processing fixes

The user subsequently published the environment and launched Cutline on their Windows PC. Their uploaded file failed with `open() got an unexpected keyword argument 'metadata_errors'`; their YouTube import failed with a cp1252 `charmap` decoding error.

Reproduced the first failure with the actual installed faster-whisper 1.2.1 / PyAV 19.0.1 decoder, without needing a model download. Cutline now decodes audio through FFmpeg into mono 16 kHz float32 samples and passes them through faster-whisper's supported NumPy input API. This avoids the incompatible PyAV call without downgrading dependencies or modifying installed packages. Temporary decoded audio is removed after reading, including when decoding fails.

Reproduced the second failure with a UTF-8 title containing `ā` (byte `0x81`) read as cp1252. All application metadata and transcript text I/O now specifies UTF-8. Added four regression cases covering real FFmpeg audio decoding, cached Unicode transcripts, failed-decode cleanup, uploaded-file processing, YouTube metadata processing, and clip re-exports. Worker tests use a generated 181-second stereo 48 kHz video, simulate Windows' default text encoding, and verify actual captioned H.264/AAC outputs. Only the network downloader and speech-model response are controlled; real remote YouTube access and Whisper inference remain unverified in this cloud environment.

`./scripts/check.sh` passes **30 tests**, the production frontend build, and `pip check`. The existing upstream Starlette/AnyIO deprecation warning remains. The guide now explains copying updated source files into the existing Windows app folder, preserving projects, models, portable tools, and the virtual environment. No dependency reinstall is required for these fixes. Native Windows execution remains outside this Linux environment's capabilities.
