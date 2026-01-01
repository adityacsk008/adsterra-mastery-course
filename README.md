# 🎓 Adsterra Mastery Course Platform

Complete course management platform with **15 video lessons**, progress tracking, payment integration, and **MOVIEX-style cinematic video player**! 🎬

## 🚀 ONE-COMMAND SETUP

### For Mac/Linux:
```bash
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course
chmod +x setup.sh
./setup.sh
```

### For Windows:
```bash
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course
setup.bat
```

**That's it!** The script will:
- ✅ Rename folders automatically
- ✅ Install all dependencies
- ✅ Create .env file
- ✅ Build and verify project

Then just run:
```bash
npm run dev
```

## 🎬 TWO VIEWING MODES

### 1. **Dashboard View** (`/dashboard/lesson/[id]`)
- Full lesson page with sidebar
- Course navigation
- Progress tracking
- Mark as complete
- Next/Previous buttons

### 2. **MOVIEX Player** (`/dashboard/watch/[id]`) ⭐ NEW!
- **Cinematic full-screen experience**
- Animated gradient background
- Glowing logo with pulse effect
- Clean, distraction-free interface
- Previous/Next navigation
- Direct link to dashboard
- **Mobile-optimized** with responsive design

## 📹 All 15 Videos Included

### Module 1: Adsterra Fundamentals (4 videos)
- Secret Trick (Google Drive)
- First Software Install Setup (YouTube)
- First Software Blogger Setup (YouTube)
- Second Software Setup (YouTube)

### Module 2: Campaign Creation (2 videos)
- Adsterra Direct Link High CPM Arbitrage (YouTube)
- Adsterra Arbitrage New Secret Method (YouTube)

### Module 3: Traffic Optimization (3 videos)
- Organic Traffic Facebook Method - Part 1 (Google Drive)
- Organic Traffic Facebook Method - Part 2 (Google Drive)
- Organic Traffic Facebook Method - Part 3 (Google Drive)

### Bonus Module: Instagram Method (4 videos)
- Blogger Account Setup (YouTube)
- Adsterra Account Setup (YouTube)
- Traffic Tricks 1 (YouTube)
- Traffic Tricks 2 (YouTube)

## ✨ Features

### Video Player
- ✅ YouTube videos embed directly
- ✅ Google Drive videos with **"Watch Now"** buttons
- ✅ **MOVIEX-style cinematic player** with animations
- ✅ Auto-detects video type
- ✅ Loading states & error handling
- ✅ Mobile-responsive design
- ✅ Gradient animated background
- ✅ Glowing effects and pulse animations

### Dashboard
- ✅ Progress tracking (% complete)
- ✅ Module-wise organization
- ✅ **"Watch" button** for each lesson
- ✅ Mark lessons as complete
- ✅ Next/Previous navigation
- ✅ Course content sidebar
- ✅ Certificate section (100% complete)

### Payment Integration
- ✅ Stripe
- ✅ PayPal
- ✅ Cryptocurrency

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe, PayPal, Crypto
- **Video**: YouTube + Google Drive
- **Player**: Custom MOVIEX-style player
- **Deployment**: Vercel

## 📦 Manual Setup (If Scripts Don't Work)

```bash
# 1. Clone
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course

# 2. Rename folders (IMPORTANT!)
# Mac/Linux:
mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"
mv app/dashboard/watch/watchid "app/dashboard/watch/[id]"

# Windows:
move app\dashboard\lesson\lessonid "app\dashboard\lesson\[id]"
move app\dashboard\watch\watchid "app\dashboard\watch\[id]"

# 3. Install
npm install

# 4. Setup environment
cp .env.example .env
# Edit .env with your credentials

# 5. Run
npm run dev
```

## 🔐 Environment Variables

Create `.env` file:

```env
# App Config (Required)
NEXT_PUBLIC_APP_URL=http://localhost:3000
COURSE_PRICE=49
CURRENCY=USD

# Supabase (Optional - for progress tracking)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# Stripe (Optional - for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# JWT (Optional)
JWT_SECRET=your_32_char_secret

# Email (Optional)
SENDGRID_API_KEY=SG....
FROM_EMAIL=nnafeesaha@gmail.com
```

## 📁 Project Structure

```
adsterra-mastery-course/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx              # Main dashboard
│   │   ├── lesson/
│   │   │   └── [id]/             # Full lesson page
│   │   │       └── page.tsx
│   │   └── watch/
│   │       └── [id]/             # MOVIEX player ⭐
│   │           └── page.tsx
│   ├── api/
│   │   └── progress/
│   │       └── route.ts          # Progress tracking
│   └── checkout/
├── components/
│   ├── VideoPlayer.tsx           # Enhanced video player
│   └── DashboardLayout.tsx
├── lib/
│   └── courseData.ts             # All 15 videos data
├── setup.sh                      # Mac/Linux setup script
├── setup.bat                     # Windows setup script
└── SETUP_GUIDE.md               # Detailed guide
```

## 🎬 How Videos Work

### YouTube Videos:
- Embed directly in player
- "Open in YouTube" button
- Auto-converts any YouTube URL format

### Google Drive Videos:
- Attempts to embed first
- If embed fails, shows **"Watch Now"** button in 2 places:
  - Info bar below video
  - Blue instruction box
- Opens video in new tab

### MOVIEX Player Features:
- 🎨 Animated gradient background
- ✨ Glowing logo with pulse effect
- 📱 Mobile-optimized layout
- 🎯 Clean, distraction-free interface
- ⚡ Smooth transitions and animations
- 🔄 Previous/Next navigation
- 🏠 Quick return to dashboard

## 🚀 Deployment

### Deploy to Vercel:

1. Push to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

**Important**: Make sure both `[id]` folders are properly named before deploying.

## 🔧 Troubleshooting

### Videos not playing?
1. Check if folders are renamed: 
   - `app/dashboard/lesson/[id]`
   - `app/dashboard/watch/[id]`
2. Clear browser cache
3. Check console for errors

### Setup script not working?
Use manual setup instructions above.

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📱 Mobile Experience

The MOVIEX player is fully optimized for mobile:
- Logo moves to top-left corner
- Buttons stack horizontally
- Full-width video player
- Touch-friendly controls
- Responsive font sizes

## 📞 Support

- **Email**: nnafeesaha@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/adityacsk008/adsterra-mastery-course/issues)

## 📄 License

This project is private and proprietary.

## 🎉 Ready to Go!

After running the setup script:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

**Features:**
- ✅ All 15 videos ready to play
- ✅ Two viewing modes (Dashboard + MOVIEX)
- ✅ Progress tracking
- ✅ Mobile-responsive
- ✅ Beautiful animations
- ✅ Professional UI/UX

**Happy Teaching! 🚀**
