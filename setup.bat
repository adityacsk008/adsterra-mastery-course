@echo off
REM Adsterra Mastery Course - Auto Setup Script (Windows)
REM This script will automatically set up your project

echo.
echo ========================================
echo   Adsterra Mastery Course Setup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found!
    echo Please run this script from the project root directory
    pause
    exit /b 1
)

echo [OK] Found package.json
echo.

REM Step 1: Rename the lesson folders
echo ========================================
echo Step 1: Renaming lesson folders...
echo ========================================

REM Rename lessonid to [id]
if exist "app\dashboard\lesson\lessonid" (
    move "app\dashboard\lesson\lessonid" "app\dashboard\lesson\[id]"
    echo [OK] Folder renamed: lessonid -^> [id]
) else (
    if exist "app\dashboard\lesson\[id]" (
        echo [OK] Folder [id] already exists
    ) else (
        echo [ERROR] lessonid folder not found!
        pause
        exit /b 1
    )
)

REM Rename watchid to [id]
if exist "app\dashboard\watch\watchid" (
    move "app\dashboard\watch\watchid" "app\dashboard\watch\[id]"
    echo [OK] Folder renamed: watchid -^> [id]
) else (
    if exist "app\dashboard\watch\[id]" (
        echo [OK] Folder watch\[id] already exists
    ) else (
        echo [WARNING] watchid folder not found (optional)
    )
)
echo.

REM Step 2: Install dependencies
echo ========================================
echo Step 2: Installing dependencies...
echo ========================================
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed successfully
echo.

REM Step 3: Check for .env file
echo ========================================
echo Step 3: Checking environment variables...
echo ========================================
if not exist ".env" (
    if exist ".env.example" (
        copy ".env.example" ".env"
        echo [OK] Created .env file from .env.example
        echo [WARNING] Please edit .env file with your credentials
    ) else (
        echo [WARNING] No .env file found. You'll need to create one manually
    )
) else (
    echo [OK] .env file already exists
)
echo.

REM Step 4: Build check
echo ========================================
echo Step 4: Checking if project builds...
echo ========================================
call npm run build
if %errorlevel% neq 0 (
    echo [WARNING] Build had some issues, but you can still run dev mode
) else (
    echo [OK] Project builds successfully
)
echo.

REM Final message
echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Edit .env file with your credentials (if needed)
echo 2. Run: npm run dev
echo 3. Open: http://localhost:3000
echo.
echo All 15 videos are ready to play!
echo - YouTube videos will embed directly
echo - Google Drive videos have 'Watch Now' buttons
echo - MOVIEX-style video player available
echo.
echo Two viewing modes:
echo   - Dashboard view: Full lesson page with sidebar
echo   - Watch mode: Cinematic MOVIEX-style player
echo.
echo Happy Teaching!
echo.
pause
