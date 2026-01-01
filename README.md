# 🎓 Adsterra Mastery Course Platform

## 🚀 LIVE & READY FOR PRODUCTION!

Complete course management platform with **15 video lessons**, **LIVE Razorpay payment gateway**, progress tracking, and professional video player! 🎬

### ⚡ Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adityacsk008/adsterra-mastery-course)

---

## 💳 LIVE PAYMENT GATEWAY

### ✅ Razorpay LIVE Credentials (Active)
- **Key ID**: `rzp_live_Rt4YAKorcWpXT6`
- **Secret**: `eVlJ4qnCKC4vDY3pmEXaG9wY`
- **Status**: 🟢 PRODUCTION MODE
- **Admin Email**: Adityaenigma92@gmail.com

### Pricing:
- 💵 **USD**: $49 (International)
- 💰 **INR**: ₹3,999 (India)

---

## 🚀 ONE-COMMAND SETUP

### For Mac/Linux:
```bash
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course
chmod +x setup.sh
./setup.sh
npm run dev
```

### For Windows:
```bash
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course
setup.bat
npm run dev
```

---

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

---

## ✨ Features

### 💳 Payment System (LIVE)
- ✅ **Razorpay LIVE integration**
- ✅ Real-time payment processing
- ✅ Multiple currency support (USD/INR)
- ✅ Automatic order creation & verification
- ✅ Email notifications to admin
- ✅ Secure checkout (PCI compliant)

### 📹 Video Player
- ✅ YouTube videos - Direct links
- ✅ Google Drive videos - Direct links
- ✅ **"Watch" button** opens in new tab
- ✅ External link icon
- ✅ Mobile-responsive

### 📊 Dashboard
- ✅ Progress tracking (% complete)
- ✅ Module-wise organization
- ✅ **"Watch" button** for each lesson
- ✅ Mark lessons as complete
- ✅ Next/Previous navigation
- ✅ Course content sidebar
- ✅ Certificate section (100% complete)

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Payments**: Razorpay (LIVE)
- **Video**: YouTube + Google Drive
- **Deployment**: Vercel

---

## 🚀 DEPLOY TO VERCEL

### Method 1: One-Click Deploy
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adityacsk008/adsterra-mastery-course)
2. Wait 2-3 minutes
3. Your site is LIVE! 🎉

### Method 2: Manual Deploy
1. Go to [vercel.com](https://vercel.com)
2. Import: `adityacsk008/adsterra-mastery-course`
3. Environment variables are auto-configured from `vercel.json`
4. Click "Deploy"
5. Done! 🚀

**See detailed guide**: [LIVE_DEPLOYMENT.md](./LIVE_DEPLOYMENT.md)

---

## 🔐 Environment Variables

All LIVE credentials are pre-configured in:
- ✅ `.env` file (for local development)
- ✅ `vercel.json` (for Vercel deployment)

### Required Variables:
```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_Rt4YAKorcWpXT6
RAZORPAY_KEY_SECRET=eVlJ4qnCKC4vDY3pmEXaG9wY
ADMIN_EMAIL=Adityaenigma92@gmail.com
FROM_EMAIL=Adityaenigma92@gmail.com
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
COURSE_PRICE=49
CURRENCY=USD
```

---

## 📁 Project Structure

```
adsterra-mastery-course/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx              # Main dashboard
│   │   ├── lesson/[id]/          # Lesson pages
│   │   └── watch/[id]/           # Video player
│   ├── api/
│   │   ├── razorpay/
│   │   │   ├── create-order/     # LIVE payment order
│   │   │   └── verify/           # LIVE payment verify
│   │   └── progress/             # Progress tracking
│   └── checkout/
│       └── page.tsx              # LIVE checkout page
├── components/
│   ├── VideoPlayer.tsx           # Video player
│   ├── RazorpayCheckout.tsx      # LIVE payment
│   └── DashboardLayout.tsx
├── lib/
│   ├── courseData.ts             # All 15 videos
│   └── razorpay.ts               # LIVE Razorpay utils
├── .env                          # LIVE credentials
├── vercel.json                   # Vercel config
├── setup.sh                      # Mac/Linux setup
├── setup.bat                     # Windows setup
├── LIVE_DEPLOYMENT.md            # Deployment guide
└── README.md                     # This file
```

---

## 💳 Payment Flow

1. User visits `/checkout`
2. Fills enrollment form
3. Selects currency (USD/INR)
4. Clicks "Pay Now"
5. **Razorpay LIVE checkout** opens
6. User completes payment
7. Payment verified on backend
8. User redirected to dashboard
9. Admin receives email at `Adityaenigma92@gmail.com`

---

## 🎬 How Videos Work

### Watch Button:
- Click "Watch" button on any lesson
- Video opens in **new tab**
- YouTube videos → YouTube page
- Google Drive videos → Google Drive page
- Easy to return to dashboard

---

## 🔧 Troubleshooting

### Payment Not Working?
1. Verify Razorpay keys in environment variables
2. Check API routes are deployed
3. Test with Razorpay test card: `4111 1111 1111 1111`

### Videos Not Opening?
1. Check video URLs in `lib/courseData.ts`
2. Verify links are public
3. Test in incognito mode

### Build Errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📱 Mobile Experience

Fully optimized for mobile:
- ✅ Responsive design
- ✅ Touch-friendly controls
- ✅ Mobile payment support
- ✅ Fast loading

---

## 📧 Email Notifications

All notifications sent to: **Adityaenigma92@gmail.com**

You'll receive:
- ✅ Payment confirmations
- ✅ Order details
- ✅ Customer information
- ✅ Payment IDs

---

## 📞 Support

**Admin Email**: Adityaenigma92@gmail.com

For issues:
1. Check [LIVE_DEPLOYMENT.md](./LIVE_DEPLOYMENT.md)
2. Review Vercel logs
3. Check Razorpay dashboard
4. Contact via email

---

## 📄 License

This project is private and proprietary.

---

## 🎉 YOU'RE LIVE!

Your course platform is **PRODUCTION READY**:

- ✅ All 15 videos ready
- ✅ LIVE Razorpay payment gateway
- ✅ Watch button functionality
- ✅ Progress tracking
- ✅ Mobile responsive
- ✅ Email notifications
- ✅ Secure checkout

### Start Now:
```bash
npm run dev
```

Or deploy to Vercel and **start accepting payments**! 💰

**Happy Teaching! 🚀**

---

**Last Updated**: January 2026  
**Status**: 🟢 PRODUCTION LIVE  
**Payment**: Razorpay LIVE  
**Admin**: Adityaenigma92@gmail.com
