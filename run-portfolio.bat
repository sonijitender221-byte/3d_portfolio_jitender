@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies for the first run...
  call npm ci
  if errorlevel 1 goto error
)
call npm run dev
if errorlevel 1 goto error
goto end
:error
echo.
echo Could not start the portfolio. Check the error above and the README troubleshooting section.
pause
:end
