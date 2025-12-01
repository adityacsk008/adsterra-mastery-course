# Adsterra Mastery - Premium Course Platform

A high-converting, premium single-course website for selling the "Adsterra Mastery" course internationally with responsive landing page, secure checkout, member dashboard, and professional video player.

## 🚀 Features

- **Modern Landing Page**: Hero, benefits, curriculum, testimonials, pricing with countdown
- **Secure Checkout**: Stripe, PayPal, and Crypto payment support
- **Member Dashboard**: Progress tracking, video player, resources
- **Admin Panel**: Student management, content upload, analytics
- **Video Streaming**: Secure video hosting with resume capability
- **Authentication**: JWT-based auth with password reset
- **Email Integration**: Mailchimp/ConvertKit for drip campaigns
- **Analytics**: Google Analytics, Facebook Pixel tracking
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema
- **GDPR Compliant**: Cookie consent, privacy policy

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe, PayPal, Coinbase Commerce
- **Video**: Cloudflare Stream / Vimeo Pro
- **Deployment**: Vercel
- **Email**: SendGrid
- **Analytics**: Google Analytics 4, Facebook Pixel

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account
- PayPal Business account (optional)
- Coinbase Commerce account (optional)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/adityacsk008/adsterra-mastery-course.git
cd adsterra-mastery-course
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL schema from `database/schema.sql` in the SQL Editor
   - Copy your project URL and anon key

4. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# JWT
JWT_SECRET=your_random_32_char_secret

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

5. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔐 Stripe Setup

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Get your API keys from Developers > API keys
3. Set up webhook endpoint:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy webhook signing secret to `.env`

## 📧 Email Setup (SendGrid)

1. Create account at [SendGrid](https://sendgrid.com)
2. Create API key with full access
3. Verify sender email (nnafeesaha@gmail.com)
4. Add API key to `.env`

## 🎥 Video Hosting Options

### Option 1: Cloudflare Stream (Recommended)
```bash
# Install Cloudflare SDK
npm install cloudflare

# Add to .env
CLOUDFLARE_STREAM_API_TOKEN=your_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

### Option 2: Vimeo Pro
```bash
# Add to .env
VIMEO_ACCESS_TOKEN=your_token
VIMEO_CLIENT_ID=your_client_id
VIMEO_CLIENT_SECRET=your_secret
```

## 🚀 Deployment to Vercel

1. **Push to GitHub** (already done)

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables from `.env`

3. **Set up custom domain**
   - Add domain in Vercel dashboard
   - Update DNS records as instructed
   - SSL certificate auto-generated

4. **Configure webhooks**
   - Update Stripe webhook URL to production
   - Test payment flow

## 📁 Project Structure

```
adsterra-mastery-course/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── checkout/
│   │   └── page.tsx            # Checkout page
│   ├── dashboard/
│   │   ├── page.tsx            # Student dashboard
│   │   └── lesson/[id]/page.tsx # Video player
│   ├── admin/
│   │   ├── page.tsx            # Admin dashboard
│   │   ├── students/page.tsx   # Student management
│   │   └── content/page.tsx    # Content management
│   └── api/
│       ├── auth/               # Authentication endpoints
│       ├── checkout/           # Payment processing
│       ├── webhooks/           # Payment webhooks
│       └── admin/              # Admin API routes
├── components/
│   ├── landing/                # Landing page sections
│   ├── dashboard/              # Dashboard components
│   ├── admin/                  # Admin components
│   └── shared/                 # Shared components
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── stripe.ts               # Stripe configuration
│   ├── auth.ts                 # Auth utilities
│   └── utils.ts                # Helper functions
├── database/
│   └── schema.sql              # Database schema
├── public/                     # Static assets
└── package.json
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/reset-password` - Password reset

### Checkout
- `POST /api/checkout` - Create payment session
- `POST /api/webhooks/stripe` - Stripe webhook
- `POST /api/webhooks/paypal` - PayPal webhook

### Dashboard
- `GET /api/dashboard/progress` - Get user progress
- `POST /api/dashboard/progress` - Update progress
- `GET /api/dashboard/video-token` - Get signed video URL

### Admin
- `GET /api/admin/students` - List students
- `POST /api/admin/content` - Upload content
- `GET /api/admin/analytics` - Get analytics

## 📊 Database Schema

Key tables:
- `users` - User accounts
- `purchases` - Payment records
- `modules` - Course modules
- `lessons` - Individual lessons
- `user_progress` - Progress tracking
- `certificates` - Completion certificates

See `database/schema.sql` for complete schema.

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#E50914',  // Adsterra red
  secondary: '#FFFFFF',
  dark: '#121212',
  light: '#F5F5F5',
}
```

### Course Price
Edit `.env`:
```env
COURSE_PRICE=49
```

### Content
- Landing page: `components/landing/`
- Copy: Edit component files directly
- Images: Add to `public/` folder

## 🧪 Testing

### Test Stripe Payment
Use test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

### Test PayPal
Use PayPal sandbox credentials

## 📈 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Add measurement ID to `.env`
3. Events tracked automatically

### Facebook Pixel
1. Create pixel in Facebook Events Manager
2. Add pixel ID to `.env`
3. Track PageView, Purchase, Lead events

## 🔒 Security

- JWT tokens for authentication
- Signed URLs for video access
- HTTPS enforced
- CSRF protection
- Rate limiting on API routes
- Input validation and sanitization

## 📝 Legal Pages

Create these pages:
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
- `/refund` - Refund Policy

Templates provided in `docs/legal/`

## 🆘 Support

- **WhatsApp**: +91 8294523068
- **Email**: nnafeesaha@gmail.com

## 📄 License

Proprietary - All rights reserved

## 🎯 Roadmap

- [ ] Mobile app (PWA)
- [ ] Affiliate program
- [ ] Multi-language support
- [ ] Live webinars integration
- [ ] Quiz system
- [ ] Discussion forums

---

Made with ❤️ for Adsterra Mastery