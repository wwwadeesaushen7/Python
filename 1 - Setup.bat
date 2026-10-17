@echo off
setlocal
cd /d "%~dp0"
title Cutline Studio - first setup

echo.
echo CUTLINE STUDIO - FIRST SETUP
echo This installs Python 3.12, Node.js, FFmpeg and Microsoft Visual C++ if needed.
echo It then downloads the app's Python packages. Internet is required.
echo Windows may ask permission for the standard installers.
echo Leave this window open until you see SETUP COMPLETE.
echo.
call :refresh_path

py -3.12 -c "import sys; assert sys.maxsize > 2**32" >nul 2>&1
if not errorlevel 1 goto python_ready
if exist "%LocalAppData%\Programs\Python\Python312\python.exe" goto python_ready
call :need_winget
if errorlevel 1 goto failed
winget install --exact --id Python.Python.3.12 --scope user --source winget --accept-source-agreements --accept-package-agreements
if errorlevel 1 goto failed
call :refresh_path

:python_ready
node -e "if(Number(process.versions.node.split('.')[0]) < 20) process.exit(1)" >nul 2>&1
if not errorlevel 1 goto node_ready
call :need_winget
if errorlevel 1 goto failed
winget install --exact --id OpenJS.NodeJS.LTS --source winget --accept-source-agreements --accept-package-agreements
if errorlevel 1 goto failed
call :refresh_path

:node_ready
where ffmpeg >nul 2>&1
if errorlevel 1 goto install_ffmpeg
where ffprobe >nul 2>&1
if not errorlevel 1 goto ffmpeg_ready
:install_ffmpeg
call :need_winget
if errorlevel 1 goto failed
winget install --exact --id Gyan.FFmpeg --source winget --accept-source-agreements --accept-package-agreements
if errorlevel 1 goto failed
call :refresh_path

:ffmpeg_ready
if exist "%SystemRoot%\System32\vcruntime140_1.dll" goto runtime_ready
call :need_winget
if errorlevel 1 goto failed
winget install --exact --id Microsoft.VCRedist.2015+.x64 --source winget --accept-source-agreements --accept-package-agreements
if errorlevel 1 goto failed
call :refresh_path

:runtime_ready
if exist ".venv\Scripts\python.exe" goto install_packages
py -3.12 -m venv .venv
if not errorlevel 1 goto install_packages
if not exist "%LocalAppData%\Programs\Python\Python312\python.exe" goto failed
"%LocalAppData%\Programs\Python\Python312\python.exe" -m venv .venv
if errorlevel 1 goto failed

:install_packages
".venv\Scripts\python.exe" -m pip install --only-binary=:all: -r requirements.txt
if errorlevel 1 goto failed
".venv\Scripts\python.exe" -m pip check
if errorlevel 1 goto failed
".venv\Scripts\python.exe" -c "import fastapi, uvicorn, cv2, pocketsphinx; from faster_whisper import WhisperModel; from backend.media import run; run(['ffmpeg','-version']); run(['ffprobe','-version']); print('Required tools are available.')"
if errorlevel 1 goto failed
if exist "frontend\dist\index.html" goto website_ready
echo.
echo Preparing the website. This can take a few minutes on first setup.
pushd frontend
call npm ci
if errorlevel 1 goto frontend_failed
call npm run build
if errorlevel 1 goto frontend_failed
popd

:website_ready

echo.
echo SETUP COMPLETE!
echo Close this window, then double-click "2 - Open Cutline.bat".
echo Your browser will open the app automatically.
echo.
pause
exit /b 0

:refresh_path
for /f "usebackq delims=" %%P in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')"`) do set "PATH=%%P"
exit /b 0

:need_winget
where winget >nul 2>&1
if not errorlevel 1 exit /b 0
echo.
echo Windows App Installer is needed to install the tools automatically.
echo Open Microsoft Store, search for "App Installer" by Microsoft, and install or update it.
echo Then close this window and double-click "1 - Setup.bat" again.
exit /b 1

:frontend_failed
popd
echo The website build stopped. Check the error above.
goto failed

:failed
echo.
echo Setup stopped. Do not close this window yet.
echo Take a screenshot of the error above and send it in the chat for help.
echo.
pause
exit /b 1
