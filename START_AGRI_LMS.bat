@echo off
REM Agri-LMS Startup Script for Students
REM This script starts the application and opens it in the browser

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║           AI/ML in Agriculture - Interactive LMS           ║
echo ║                   GKVK Training Program                     ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ ERROR: Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Make sure to add Node.js to your PATH during installation
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js found
echo.
echo Starting Agri-LMS server...
echo.

REM Kill any process on port 3000
taskkill /f /im node.exe >nul 2>&1

REM Start the server
cd /d "%~dp0"
timeout /t 2 /nobreak >nul

REM Start the server in a new window
start "Agri-LMS Server" node server.js

REM Wait for server to start
echo Waiting for server to start...
timeout /t 3 /nobreak >nul

REM Open in browser
echo.
echo Opening application in your browser...
echo.
start http://localhost:3000

echo.
echo ✓ Agri-LMS is now running!
echo.
echo 📝 IMPORTANT:
echo   - The server window will stay open while you use the app
echo   - Do NOT close the server window
echo   - To stop the application, close the server window
echo   - If port 3000 is in use, close other applications using it
echo.
echo Browser will open automatically. If not, visit: http://localhost:3000
echo.
pause
