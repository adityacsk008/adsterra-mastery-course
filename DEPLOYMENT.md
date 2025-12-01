# Deployment Guide - Adsterra Mastery Course Platform

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account (already have the repo)
- Vercel account (free tier works)
- Supabase account (free tier works)
- Stripe account

### Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create account
2. Create new project
3. Go to SQL Editor and run the schema from `database/schema.sql`
4. Go to Settings > API to get:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### Step 2: Set Up Stripe

1. Go to [stripe.com/dashboard](https://dashboard.stripe.com)
2. Get API keys from Developers > API keys:
   - Publishable key (starts with `pk_`)
   - Secret key (starts with `sk_`)
3. Set up webhook:
   - Go to Developers > Webhooks
   - Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`
   - Copy webhook signing secret (starts with `whsec_`)

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Import from GitHub: `adityacsk008/adsterra-mastery-course`
4. Configure environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# JWT Secret (generate random 32+ character string)
JWT_SECRET=your_super_secret_jwt_key_min_32_characters

# SendGrid (optional for now)
SENDGRID_API_KEY=SG...
FROM_EMAIL=nnafeesaha@gmail.com

# Analytics (optional for now)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789

# App Config
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
COURSE_PRICE=49
CURRENCY=USD
```

5. Click "Deploy"
6. Wait 2-3 minutes for deployment

### Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain (e.g., `adsterramastery.com`)
3. Update DNS records as instructed:
   - Type: `A` Record
   - Name: `@`
   - Value: `76.76.21.21`
   
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

4. Wait for DNS propagation (5-30 minutes)
5. SSL certificate auto-generated

### Step 5: Update Stripe Webhook URL

1. Go back to Stripe Dashboard > Webhooks
2. Update endpoint URL to your production domain
3. Test webhook with Stripe CLI or test payment

### Step 6: Test Payment Flow

1. Visit your deployed site
2. Click "Get Instant Access"
3. Fill checkout form
4. Use Stripe test card: `4242 4242 4242 4242`
5. Verify redirect to dashboard
6. Check Supabase database for user and purchase records

## 📧 Email Setup (SendGrid)

### Quick Setup

1. Create account at [sendgrid.com](https://sendgrid.com)
2. Verify sender email (nnafeesaha@gmail.com)
3. Create API key with full access
4. Add to Vercel environment variables
5. Redeploy

### Email Templates Needed

Create these in SendGrid:
- Welcome email with login credentials
- Password reset
- Purchase confirmation
- Course completion certificate

## 🎥 Video Hosting Setup

### Option 1: Cloudflare Stream (Recommended)

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Go to Stream
3. Upload videos
4. Get video IDs
5. Add to Supabase `lessons` table
6. Add API token to environment variables

### Option 2: Vimeo Pro

1. Upgrade to Vimeo Pro
2. Upload videos as "Private"
3. Enable domain-level privacy
4. Add video URLs to database
5. Configure embed settings

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables
4. Redeploy

### Facebook Pixel

1. Create pixel in Facebook Events Manager
2. Get Pixel ID
3. Add to environment variables
4. Redeploy

## 🔐 Security Checklist

- [ ] All environment variables set
- [ ] Stripe webhook secret configured
- [ ] JWT secret is random and secure (32+ chars)
- [ ] Supabase RLS policies enabled
- [ ] HTTPS enforced (automatic with Vercel)
- [ ] CORS configured properly
- [ ] Rate limiting on API routes (add if needed)

## 🧪 Testing Checklist

- [ ] Landing page loads correctly
- [ ] Checkout flow works with test card
- [ ] User account created after payment
- [ ] Dashboard accessible after purchase
- [ ] Video player works
- [ ] Progress tracking saves
- [ ] Email notifications sent
- [ ] Mobile responsive
- [ ] All links work

## 🚨 Troubleshooting

### Payment not processing
- Check Stripe webhook is receiving events
- Verify webhook secret matches
- Check Vercel function logs

### Videos not playing
- Verify video URLs are correct
- Check CORS settings on video host
- Test video URL directly in browser

### Database errors
- Verify Supabase connection
- Check RLS policies
- Ensure schema is up to date

### Email not sending
- Verify SendGrid API key
- Check sender email is verified
- Review SendGrid activity logs

## 📈 Post-Launch

### Monitor

- Vercel Analytics for performance
- Stripe Dashboard for payments
- Supabase Dashboard for database
- Google Analytics for traffic

### Optimize

- Add CDN for images
- Enable Vercel Edge Functions
- Optimize video delivery
- Add caching headers

### Scale

- Upgrade Vercel plan if needed
- Upgrade Supabase plan for more storage
- Add Redis for caching
- Implement queue for emails

## 🆘 Support

If you encounter issues:

1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables
4. Test with Stripe test mode first
5. Contact: nnafeesaha@gmail.com or WhatsApp +91 8294523068

## 🎉 Launch Checklist

- [ ] All pages tested
- [ ] Payment flow tested end-to-end
- [ ] Email templates configured
- [ ] Analytics tracking verified
- [ ] Legal pages added (Privacy, Terms, Refund)
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Backup strategy in place
- [ ] Monitoring set up
- [ ] Support channels ready

---

**Estimated deployment time: 30-60 minutes**

Good luck with your launch! 🚀