# ⚡ Quick Start Guide - Adsterra Mastery

## 🎯 Get Your Course Platform Live in 30 Minutes

---

## Step 1: Supabase (5 minutes)

1. Go to **https://supabase.com**
2. Click "Start your project"
3. Create new project
4. Copy these values:
   ```
   Project URL: https://xxxxx.supabase.co
   anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
5. Go to **SQL Editor**
6. Copy entire contents of `database/schema.sql`
7. Paste and click **"Run"**
8. ✅ Database ready!

---

## Step 2: Stripe (10 minutes)

1. Go to **https://dashboard.stripe.com**
2. Sign up / Log in
3. Go to **Developers > API keys**
4. Copy:
   ```
   Publishable key: pk_test_...
   Secret key: sk_test_...
   ```
5. Go to **Developers > Webhooks**
6. Click **"Add endpoint"**
7. URL: `https://your-domain.vercel.app/api/webhooks/stripe`
8. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
9. Copy **Signing secret**: `whsec_...`
10. ✅ Stripe ready!

---

## Step 3: Deploy to Vercel (10 minutes)

1. Go to **https://vercel.com**
2. Click **"Import Project"**
3. Select **"Import Git Repository"**
4. Paste: `https://github.com/adityacsk008/adsterra-mastery-course`
5. Click **"Import"**
6. Add **Environment Variables**:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

JWT_SECRET=make_this_a_random_32_character_string_abc123xyz

NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
COURSE_PRICE=49
CURRENCY=USD
```

7. Click **"Deploy"**
8. Wait 2-3 minutes
9. ✅ Site live!

---

## Step 4: Update Stripe Webhook (2 minutes)

1. Go back to **Stripe Dashboard > Webhooks**
2. Click on your webhook
3. Update URL to your Vercel domain:
   ```
   https://your-project.vercel.app/api/webhooks/stripe
   ```
4. Save
5. ✅ Webhook connected!

---

## Step 5: Test Payment (5 minutes)

1. Visit your site: `https://your-project.vercel.app`
2. Click **"Get Instant Access"**
3. Fill form:
   ```
   Name: Test User
   Email: test@example.com
   Country: United States
   ```
4. Select **Credit Card**
5. Use test card:
   ```
   Card: 4242 4242 4242 4242
   Expiry: 12/34
   CVC: 123
   ZIP: 12345
   ```
6. Click **"Complete Purchase"**
7. Should redirect to dashboard
8. Check Supabase > Table Editor > users
9. ✅ Payment working!

---

## 🎉 You're Live!

Your course platform is now:
- ✅ Accepting payments
- ✅ Creating user accounts
- ✅ Tracking purchases
- ✅ Ready for students

---

## 🎥 Next: Add Your Videos

### Option 1: Cloudflare Stream
1. Sign up at cloudflare.com
2. Go to Stream
3. Upload videos
4. Get video URLs
5. Add to Supabase `lessons` table

### Option 2: Vimeo Pro
1. Upgrade to Vimeo Pro
2. Upload videos as Private
3. Get embed URLs
4. Add to Supabase `lessons` table

---

## 📝 Add Course Content

Run in Supabase SQL Editor:

```sql
-- Add Module 1
INSERT INTO modules (title, description, order_index)
VALUES ('Module 1: Adsterra Fundamentals', 'Learn the basics', 1)
RETURNING id;

-- Add Lessons (use module id from above)
INSERT INTO lessons (module_id, title, description, video_url, video_duration, order_index)
VALUES 
  ('your-module-id', 'Lesson 1: Introduction', 'Getting started', 'your-video-url', 600, 1),
  ('your-module-id', 'Lesson 2: Setup', 'Account setup', 'your-video-url', 720, 2);
```

---

## 🎨 Customize

### Change Price
In Vercel > Settings > Environment Variables:
```
COURSE_PRICE=99
```
Redeploy.

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#E50914',  // Your color
}
```
Commit and push.

### Update Copy
Edit files in `components/landing/`

---

## 📊 Optional: Add Analytics

### Google Analytics
1. Create GA4 property
2. Get Measurement ID: `G-XXXXXXXXXX`
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Redeploy

### Facebook Pixel
1. Create pixel in Facebook Events Manager
2. Get Pixel ID
3. Add to Vercel:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=123456789
   ```
4. Redeploy

---

## 🆘 Troubleshooting

### Payment not working?
- Check Stripe webhook URL is correct
- Verify webhook secret matches
- Check Vercel function logs

### Can't access dashboard?
- Clear browser cache
- Check user was created in Supabase
- Verify JWT_SECRET is set

### Videos not playing?
- Check video URLs in database
- Verify video hosting CORS settings
- Test video URL directly

---

## 📞 Need Help?

**Email:** nnafeesaha@gmail.com  
**WhatsApp:** +91 8294523068

---

## ✅ Checklist

- [ ] Supabase project created
- [ ] Database schema deployed
- [ ] Stripe account set up
- [ ] Webhook configured
- [ ] Deployed to Vercel
- [ ] Environment variables added
- [ ] Test payment successful
- [ ] Videos uploaded
- [ ] Course content added
- [ ] Custom domain (optional)
- [ ] Analytics added (optional)

---

## 🚀 Ready to Launch!

**Your course platform is live and ready to accept students!**

Share your link and start earning! 💰

---

**Repository:** https://github.com/adityacsk008/adsterra-mastery-course  
**Documentation:** See README.md, DEPLOYMENT.md, COMPLETE_SETUP_GUIDE.md