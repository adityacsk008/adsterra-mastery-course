# 🚀 Deploy Karo - Simple Version

## ✅ Kya Ready Hai

Yeh version **DEMO MODE** mein hai - aap turant deploy kar sakte ho!

- ✅ Landing page complete
- ✅ Checkout page (demo mode)
- ✅ Dashboard (demo mode)
- ✅ Video player
- ✅ Legal pages
- ✅ **NO DATABASE REQUIRED**
- ✅ **NO STRIPE REQUIRED**
- ✅ **NO SUPABASE REQUIRED**

## 🎯 Vercel Pe Deploy Karo

### Option 1: Vercel Dashboard Se

1. **Vercel dashboard** pe jao
2. **Project: adsterra-mastery-course** select karo
3. **Settings > Environment Variables** mein jao
4. Sirf yeh 3 variables add karo:

```
NEXT_PUBLIC_APP_URL=https://adsterra-mastery-course.vercel.app
COURSE_PRICE=49
CURRENCY=USD
```

5. **Deployments** tab pe jao
6. **Redeploy** button click karo
7. Done! ✅

### Option 2: Git Push Se (Automatic)

```bash
# Kuch bhi change karo aur push karo
git add .
git commit -m "Deploy"
git push
```

Vercel automatically deploy kar dega!

## 🎨 Kya Kaam Karega

### ✅ Working Features
- Landing page with all sections
- Checkout form (redirects to dashboard)
- Dashboard with course modules
- Video player page
- All legal pages
- Mobile responsive
- Fast loading

### 🔄 Demo Mode Features
- Checkout button → Dashboard redirect (no payment)
- Dashboard → Shows demo content
- Video player → Works with YouTube/Vimeo URLs

## 💰 Baad Mein Add Kar Sakte Ho

Jab ready ho, tab yeh add karo:

1. **Supabase** - Real database ke liye
2. **Stripe** - Real payments ke liye
3. **Authentication** - User login ke liye
4. **Email** - Notifications ke liye

## 🌐 Live URL

Deploy hone ke baad:
**https://adsterra-mastery-course.vercel.app**

## 📝 Content Update Kaise Kare

### Landing Page Copy Change Karo
Files edit karo: `components/landing/*.tsx`

### Course Modules Change Karo
File edit karo: `app/dashboard/page.tsx`
Line 30-60 mein modules ka data hai

### Colors Change Karo
File edit karo: `tailwind.config.js`

### Price Change Karo
Vercel environment variable update karo: `COURSE_PRICE`

## ✨ Current Status

**DEMO MODE** - Fully functional landing page with demo checkout

Jab aap ready ho payment integration ke liye, tab batana! 🚀