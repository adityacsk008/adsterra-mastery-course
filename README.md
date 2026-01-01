# 🎓 Adsterra Mastery Course Platform

Complete course management platform with 15 video lessons, progress tracking, and payment integration.

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
- ✅ Auto-detects video type
- ✅ Loading states & error handling
- ✅ Open in new tab option

### Dashboard
- ✅ Progress tracking (% complete)
- ✅ Module-wise organization
- ✅ Mark lessons as complete
- ✅ Next/Previous navigation
- ✅ Course content sidebar
- ✅ Certificate section

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
- **Deployment**: Vercel

## 📦 Manual Setup (If Scripts Don't Work)

```bash
# 1. Clone
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course

# 2. Rename folder (IMPORTANT!)
# Mac/Linux:
mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"

# Windows:
move app\dashboard\lesson\lessonid "app\dashboard\lesson\[id]"

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
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# JWT
JWT_SECRET=your_32_char_secret

# Email
SENDGRID_API_KEY=SG....
FROM_EMAIL=nnafeesaha@gmail.com

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
COURSE_PRICE=49
```

## 📁 Project Structure

```
adsterra-mastery-course/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx              # Main dashboard
│   │   └── lesson/
│   │       ├── [id]/             # Dynamic lesson pages
│   │       │   └── page.tsx
│   │       └── layout.tsx
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

## 🚀 Deployment

### Deploy to Vercel:

1. Push to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

**Important**: Make sure the `[id]` folder is properly named before deploying.

## 🔧 Troubleshooting

### Videos not playing?
1. Check if folder is renamed: `app/dashboard/lesson/[id]`
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

**All 15 videos are ready to play! Happy Teaching! 🚀**
