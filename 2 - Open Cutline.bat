@echo off
setlocal
cd /d "%~dp0"
title Cutline Studio - keep this window open
for /f "usebackq delims=" %%P in (`powershell -NoProfile -Command "[Environment]::GetEnvironmentVariable('Path','Machine') + ';' + [Environment]::GetEnvironmentVariable('Path','User')"`) do set "PATH=%%P"
if not exist ".venv\Scripts\python.exe" goto setup_needed
".venv\Scripts\python.exe" scripts\open_studio.py
if errorlevel 1 pause
exit /b
:setup_needed
echo Double-click "1 - Setup.bat" first. It only needs to run once.
pause
exit /b 1
