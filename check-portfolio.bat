@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm ci
  if errorlevel 1 goto error
)
echo Running ESLint...
call npm run lint
if errorlevel 1 goto error
echo Building production bundle...
call npm run build
if errorlevel 1 goto error
echo.
echo Lint and production build passed.
pause
goto end
:error
echo.
echo A check failed. Read the error above before deploying.
pause
:end
