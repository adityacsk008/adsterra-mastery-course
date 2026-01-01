# 🎓 Adsterra Mastery Course - Complete Setup Guide

## ✅ IMPORTANT: Folder Rename Required

After cloning, you MUST rename the lesson folder for dynamic routing to work:

```bash
# Navigate to your project
cd adsterra-mastery-course

# Rename the folder (choose ONE method):

# Method 1: Using mv command (Mac/Linux)
mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"

# Method 2: Using Git (All platforms)
git mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"

# Commit the change
git add .
git commit -m "Rename lesson folder to dynamic route [id]"
git push
```

**Why?** GitHub API doesn't support creating folders with square brackets `[id]`, so we create it as `lessonid` and you rename it locally.

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course

# 2. IMPORTANT: Rename the lesson folder (see above)
mv app/dashboard/lesson/lessonid "app/dashboard/lesson/[id]"

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# 5. Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📹 Video Features

### All 15 Videos Integrated:

**Module 1: Adsterra Fundamentals** (4 videos)
- Secret Trick (Google Drive)
- First Software Install Setup
- First Software Blogger Setup  
- Second Software Setup

**Module 2: Campaign Creation** (2 videos)
- Adsterra Direct Link High CPM Arbitrage
- Adsterra Arbitrage New Secret Method

**Module 3: Traffic Optimization** (3 videos)
- Organic Traffic Facebook Method (Parts 1-3)

**Bonus Module: Instagram Method** (4 videos)
- Blogger Account Setup
- Adsterra Account Setup
- Traffic Tricks 1 & 2

### Video Player Features:
- ✅ YouTube videos embed directly
- ✅ Google Drive videos embed with fallback
- ✅ **"Watch Now" button** for Drive videos (2 locations)
- ✅ Auto-detects video type
- ✅ Loading states
- ✅ Error handling
- ✅ Open in new tab option

## 🎯 Dashboard Features

- ✅ Progress tracking (% complete)
- ✅ Module-wise organization
- ✅ Quick stats (lessons, duration)
- ✅ Mark lessons as complete
- ✅ Next/Previous navigation
- ✅ Course content sidebar
- ✅ Certificate section (100% complete)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe, PayPal, Crypto
- **Video**: YouTube + Google Drive
- **Deployment**: Vercel

## 📦 Environment Variables

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

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id

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
│   │       ├── [id]/             # Dynamic lesson page (RENAME lessonid to [id])
│   │       │   └── page.tsx
│   │       └── layout.tsx
│   ├── api/
│   │   └── progress/
│   │       └── route.ts          # Progress tracking API
│   └── checkout/
├── components/
│   ├── VideoPlayer.tsx           # Enhanced video player
│   └── DashboardLayout.tsx
├── lib/
│   └── courseData.ts             # All 15 videos data
└── public/
```

## 🎬 How Videos Work

### YouTube Videos:
1. Embed directly in player
2. "Open in YouTube" button available
3. Auto-converts any YouTube URL format

### Google Drive Videos:
1. Attempts to embed first
2. If embed fails, shows **"Watch Now"** button
3. Button appears in 2 places:
   - Info bar below video
   - Blue instruction box
4. Opens video in new tab

## 🚀 Deployment

### Deploy to Vercel:

```bash
# 1. Push to GitHub (already done)

# 2. Import to Vercel
# - Go to vercel.com
# - Import your repository
# - Add environment variables
# - Deploy!

# 3. IMPORTANT: After deployment
# Make sure the [id] folder is properly named
```

## 🔧 Troubleshooting

### Videos not playing?
1. Check if folder is renamed: `app/dashboard/lesson/[id]`
2. Clear browser cache
3. Check console for errors

### Progress not saving?
1. Verify Supabase credentials in `.env`
2. Check API route: `/api/progress`
3. Ensure user is authenticated

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

## 📞 Support

For issues or questions:
- Email: nnafeesaha@gmail.com
- GitHub Issues: [Create an issue](https://github.com/adityacsk008/adsterra-mastery-course/issues)

## ✅ Checklist Before Running

- [ ] Cloned repository
- [ ] Renamed `lessonid` folder to `[id]`
- [ ] Installed dependencies (`npm install`)
- [ ] Created `.env` file with credentials
- [ ] Ran `npm run dev`
- [ ] Tested video playback
- [ ] Verified progress tracking

## 🎉 You're Ready!

Once the folder is renamed and dependencies are installed, your course platform is 100% ready to use!

**Happy Teaching! 🚀**
