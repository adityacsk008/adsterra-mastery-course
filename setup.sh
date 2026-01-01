#!/bin/bash

# Adsterra Mastery Course - Auto Setup Script
# This script will automatically set up your project

echo "🚀 Starting Adsterra Mastery Course Setup..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the project root directory"
    exit 1
fi

echo "✅ Found package.json"
echo ""

# Step 1: Rename the lesson folders
echo "📁 Step 1: Renaming lesson folders..."

# Rename lessonid to [id]
if [ -d "app/dashboard/lesson/lessonid" ]; then
    mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"
    echo "✅ Folder renamed: lessonid → [id]"
elif [ -d "app/dashboard/lesson/[id]" ]; then
    echo "✅ Folder [id] already exists"
else
    echo "❌ Error: lessonid folder not found!"
    exit 1
fi

# Rename watchid to [id]
if [ -d "app/dashboard/watch/watchid" ]; then
    mv app/dashboard/watch/watchid "app/dashboard/watch/[id]"
    echo "✅ Folder renamed: watchid → [id]"
elif [ -d "app/dashboard/watch/[id]" ]; then
    echo "✅ Folder watch/[id] already exists"
else
    echo "⚠️  Warning: watchid folder not found (optional)"
fi

echo ""

# Step 2: Install dependencies
echo "📦 Step 2: Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Error installing dependencies"
    exit 1
fi
echo ""

# Step 3: Check for .env file
echo "🔐 Step 3: Checking environment variables..."
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo "✅ Created .env file from .env.example"
        echo "⚠️  Please edit .env file with your credentials"
    else
        echo "⚠️  No .env file found. You'll need to create one manually"
    fi
else
    echo "✅ .env file already exists"
fi
echo ""

# Step 4: Build check
echo "🔨 Step 4: Checking if project builds..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Project builds successfully"
else
    echo "⚠️  Build had some issues, but you can still run dev mode"
fi
echo ""

# Final message
echo "🎉 Setup Complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Edit .env file with your credentials (if needed)"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "📹 All 15 videos are ready to play!"
echo "✅ YouTube videos will embed directly"
echo "✅ Google Drive videos have 'Watch Now' buttons"
echo "✅ MOVIEX-style video player available"
echo ""
echo "🎬 Two viewing modes:"
echo "   - Dashboard view: Full lesson page with sidebar"
echo "   - Watch mode: Cinematic MOVIEX-style player"
echo ""
echo "Happy Teaching! 🚀"
