# 🎓 Adsterra Mastery Course Platform

Complete course management platform with **15 video lessons**, progress tracking, **LIVE Razorpay payment integration**, and **MOVIEX-style cinematic video player**! 🎬

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

## 💳 LIVE PAYMENT GATEWAY

### Razorpay Integration (LIVE)
- ✅ **Live Key ID**: `rzp_live_Rt4YAKorcWpXT6`
- ✅ **Live Secret**: `eVlJ4qnCKC4vDY3pmEXaG9wY`
- ✅ Real-time payment processing
- ✅ Automatic order creation
- ✅ Payment verification
- ✅ Secure checkout

### Supported Currencies:
- 💵 **USD**: $49
- 💰 **INR**: ₹3,999

## 📧 Contact & Support

**Admin Email**: Adityaenigma92@gmail.com

All payment notifications and support queries will be sent to this email.

## 🎬 TWO VIEWING MODES

### 1. **Dashboard View** (`/dashboard/lesson/[id]`)
- Full lesson page with sidebar
- Course navigation
- Progress tracking
- Mark as complete
- Next/Previous buttons

### 2. **Watch External** (Click "Watch" button)
- Opens video in new tab
- Direct YouTube/Google Drive link
- Clean viewing experience
- Easy to return to dashboard

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

### Payment System
- ✅ **LIVE Razorpay integration**
- ✅ Secure payment processing
- ✅ Multiple currency support (USD/INR)
- ✅ Automatic order creation
- ✅ Payment verification
- ✅ Email notifications to admin

### Video Player
- ✅ YouTube videos embed directly
- ✅ Google Drive videos with external links
- ✅ **"Watch" button** opens in new tab
- ✅ Auto-detects video type
- ✅ Mobile-responsive design

### Dashboard
- ✅ Progress tracking (% complete)
- ✅ Module-wise organization
- ✅ **"Watch" button** for each lesson
- ✅ Mark lessons as complete
- ✅ Next/Previous navigation
- ✅ Course content sidebar
- ✅ Certificate section (100% complete)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Payments**: Razorpay (LIVE)
- **Video**: YouTube + Google Drive
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

# Admin Email
ADMIN_EMAIL=Adityaenigma92@gmail.com
FROM_EMAIL=Adityaenigma92@gmail.com

# Razorpay Payment Gateway (LIVE)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_Rt4YAKorcWpXT6
RAZORPAY_KEY_SECRET=eVlJ4qnCKC4vDY3pmEXaG9wY

# Optional - Add when ready
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# JWT Secret
# JWT_SECRET=your_jwt_secret_key_min_32_chars

# SendGrid Email
# SENDGRID_API_KEY=your_sendgrid_api_key
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
│   │       └── [id]/             # MOVIEX player
│   │           └── page.tsx
│   ├── api/
│   │   ├── razorpay/
│   │   │   ├── create-order/     # Create payment order
│   │   │   └── verify/           # Verify payment
│   │   └── progress/
│   │       └── route.ts          # Progress tracking
│   └── checkout/
│       └── page.tsx              # Checkout with Razorpay
├── components/
│   ├── VideoPlayer.tsx           # Enhanced video player
│   ├── RazorpayCheckout.tsx      # Payment component
│   └── DashboardLayout.tsx
├── lib/
│   ├── courseData.ts             # All 15 videos data
│   └── razorpay.ts               # Razorpay utilities
├── setup.sh                      # Mac/Linux setup script
├── setup.bat                     # Windows setup script
└── .env.example                  # Environment template
```

## 💳 Payment Flow

1. User visits `/checkout`
2. Fills enrollment form
3. Selects currency (USD/INR)
4. Clicks "Pay Now"
5. Razorpay checkout opens
6. User completes payment
7. Payment verified on backend
8. User redirected to dashboard
9. Admin receives notification at `Adityaenigma92@gmail.com`

## 🎬 How Videos Work

### YouTube Videos:
- Click "Watch" button
- Opens YouTube in new tab
- Direct video link

### Google Drive Videos:
- Click "Watch" button
- Opens Google Drive in new tab
- Direct video link

## 🚀 Deployment

### Deploy to Vercel:

1. Push to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   ```
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_Rt4YAKorcWpXT6
   RAZORPAY_KEY_SECRET=eVlJ4qnCKC4vDY3pmEXaG9wY
   ADMIN_EMAIL=Adityaenigma92@gmail.com
   ```
5. Deploy!

**Important**: Make sure both `[id]` folders are properly named before deploying.

## 🔧 Troubleshooting

### Videos not playing?
1. Check if folders are renamed: 
   - `app/dashboard/lesson/[id]`
   - `app/dashboard/watch/[id]`
2. Clear browser cache
3. Check console for errors

### Payment not working?
1. Verify Razorpay keys in `.env`
2. Check API routes: `/api/razorpay/create-order` and `/api/razorpay/verify`
3. Ensure LIVE keys are used (not test keys)

### Setup script not working?
Use manual setup instructions above.

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📱 Mobile Experience

Fully optimized for mobile devices:
- Responsive design
- Touch-friendly controls
- Mobile-optimized layouts
- Fast loading times

## 📞 Support

- **Email**: Adityaenigma92@gmail.com
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
- ✅ LIVE Razorpay payment gateway
- ✅ Watch button opens videos in new tab
- ✅ Progress tracking
- ✅ Mobile-responsive
- ✅ Professional UI/UX
- ✅ Admin email: Adityaenigma92@gmail.com

**Happy Teaching! 🚀**
