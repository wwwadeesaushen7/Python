@echo off
setlocal
cd /d "%~dp0"
title Cutline Studio - direct setup

echo.
echo CUTLINE STUDIO - DIRECT SETUP (VERSION 2)
echo This version works without WinGet or Microsoft App Installer.
echo It downloads and verifies the tools needed by Cutline.
echo Windows may ask permission for Python or Microsoft installers.
echo Leave this window open until you see SETUP COMPLETE.
echo.

if exist ".venv\Scripts\python.exe" goto existing_venv
py -3.13 -c "import sys; assert sys.maxsize > 2**32" >nul 2>&1
if not errorlevel 1 goto python313_launcher
py -3.12 -c "import sys; assert sys.maxsize > 2**32" >nul 2>&1
if not errorlevel 1 goto python312_launcher
if exist "%LocalAppData%\Programs\Python\Python313\python.exe" goto python313_direct
if exist "%LocalAppData%\Programs\Python\Python312\python.exe" goto python312_direct

echo Downloading the signed Python installer from python.org ...
set "CUTLINE_PYTHON_URL=https://www.python.org/ftp/python/3.13.15/python-3.13.15-amd64.exe"
set "CUTLINE_PYTHON_SHA256=edec09c4853aeae9ac36efb8c9f95b6b8e2fee65eee56d9767a8b7c69c574403"
set "CUTLINE_PYTHON_INSTALLER=%TEMP%\cutline-python-3.13.15-amd64.exe"
powershell -NoProfile -Command "$ErrorActionPreference='Stop'; [Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12; $f=$env:CUTLINE_PYTHON_INSTALLER; Invoke-WebRequest -UseBasicParsing -Uri $env:CUTLINE_PYTHON_URL -OutFile $f; if((Get-FileHash -LiteralPath $f -Algorithm SHA256).Hash -ine $env:CUTLINE_PYTHON_SHA256){throw 'Python checksum verification failed. Setup stopped.'}; $s=Get-AuthenticodeSignature -LiteralPath $f; if($s.Status -ne 'Valid' -or $s.SignerCertificate.Subject -notmatch 'Python Software Foundation'){throw 'Python signature verification failed. Setup stopped.'}; $p=Start-Process -FilePath $f -ArgumentList '/passive','InstallAllUsers=0','Include_launcher=0','Include_test=0','PrependPath=0' -Wait -PassThru; if($p.ExitCode -notin @(0,3010)){throw ('Python installer returned '+$p.ExitCode)}"
if errorlevel 1 goto failed
if exist "%LocalAppData%\Programs\Python\Python313\python.exe" goto python313_direct
echo Python was not found after installation. Send this screen in the chat.
goto failed

:existing_venv
".venv\Scripts\python.exe" scripts\setup_windows.py
goto finish

:python313_launcher
py -3.13 scripts\setup_windows.py
goto finish

:python312_launcher
py -3.12 scripts\setup_windows.py
goto finish

:python313_direct
"%LocalAppData%\Programs\Python\Python313\python.exe" scripts\setup_windows.py
goto finish

:python312_direct
"%LocalAppData%\Programs\Python\Python312\python.exe" scripts\setup_windows.py
goto finish

:finish
if errorlevel 1 goto failed
echo.
pause
exit /b 0

:failed
echo.
echo Setup stopped. Send a screenshot of the error above in the chat.
echo No security checks were disabled.
echo.
pause
exit /b 1
