# 🔐 Authentication System Guide

## Overview

Complete authentication system jo payment ke baad automatically username aur password generate karta hai aur user ko email karta hai.

---

## 🎯 How It Works

### **1. User Payment Flow**

```
User → Checkout → Razorpay Payment → Payment Success → 
Generate Credentials → Send Email → User Receives Login Details
```

### **2. Credential Generation**

**Username Format:**
```
email: john.doe@gmail.com
username: johndoe4523 (email prefix + random 4 digits)
```

**Password Format:**
```
12 characters with:
- Uppercase letters
- Lowercase letters  
- Numbers
- Special characters (!@#$%^&*)

Example: Kx7@mP2$nQ9z
```

---

## 📧 Email Template

Payment success ke baad user ko yeh email jayega:

```
Subject: 🎉 Welcome to Adsterra Mastery - Your Login Credentials

Hi [Full Name],

Thank you for purchasing the Adsterra Mastery course!

🔑 Your Login Credentials:
Username: johndoe4523
Password: Kx7@mP2$nQ9z

Login URL: https://adsterra-mastery-course.vercel.app/login

⚠️ Important:
- Keep these credentials safe
- Don't share with anyone
- Change password after first login
- Lifetime course access

Need help? Contact us:
📧 Adityaenigma92@gmail.com
📱 +91 8294523068
```

---

## 🔧 Implementation Steps

### **Step 1: Update Checkout Success Handler**

File: `app/checkout/page.tsx`

```typescript
import { createUserCredentials, sendCredentialsEmail } from '@/lib/authentication'

// After successful payment
const handlePaymentSuccess = async (paymentData) => {
  // 1. Generate credentials
  const { user, credentials } = await createUserCredentials(
    formData.email,
    formData.fullName
  )
  
  // 2. Save to database
  await saveUserToDatabase(user, credentials.hashedPassword)
  
  // 3. Send email with credentials
  await sendCredentialsEmail(
    formData.email,
    credentials.username,
    credentials.password,
    formData.fullName
  )
  
  // 4. Show success message
  toast.success('Payment successful! Check your email for login credentials')
}
```

### **Step 2: Setup Email Service**

**Option A: SendGrid (Recommended)**

```bash
npm install @sendgrid/mail
```

```typescript
// lib/email.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export const sendEmail = async (to: string, subject: string, html: string) => {
  await sgMail.send({
    to,
    from: 'Adityaenigma92@gmail.com',
    subject,
    html
  })
}
```

**Option B: Resend**

```bash
npm install resend
```

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'Adityaenigma92@gmail.com',
  to: email,
  subject: 'Your Login Credentials',
  html: emailContent
})
```

### **Step 3: Database Schema**

```sql
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  course_access BOOLEAN DEFAULT TRUE,
  expiry_date TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);
```

### **Step 4: Login API**

File: `app/api/auth/login/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword } from '@/lib/authentication'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()
  
  // 1. Find user in database
  const user = await db.users.findOne({ username })
  
  if (!user) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }
  
  // 2. Verify password
  const isValid = await verifyPassword(password, user.password_hash)
  
  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }
  
  // 3. Check course access
  if (!user.course_access) {
    return NextResponse.json(
      { error: 'Course access expired' },
      { status: 403 }
    )
  }
  
  // 4. Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
  
  return NextResponse.json({
    success: true,
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.full_name
    }
  })
}
```

---

## 🎨 Login Page Features

### **Current Features:**
- ✅ Username/password input
- ✅ Show/hide password toggle
- ✅ Remember me checkbox
- ✅ Forgot password link
- ✅ Demo credentials display
- ✅ Error messages
- ✅ Loading states
- ✅ Responsive design

### **Demo Credentials:**
```
Username: demo
Password: demo123
```

---

## 🔒 Security Best Practices

### **1. Password Hashing**
```bash
npm install bcrypt
```

```typescript
import bcrypt from 'bcrypt'

// Hash password
const hash = await bcrypt.hash(password, 10)

// Verify password
const isValid = await bcrypt.compare(password, hash)
```

### **2. JWT Tokens**
```bash
npm install jsonwebtoken
```

```typescript
import jwt from 'jsonwebtoken'

// Generate token
const token = jwt.sign(
  { userId, username },
  process.env.JWT_SECRET!,
  { expiresIn: '7d' }
)

// Verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET!)
```

### **3. Environment Variables**
```env
# .env.local
JWT_SECRET=your-super-secret-key-here
SENDGRID_API_KEY=your-sendgrid-api-key
DATABASE_URL=your-database-url
```

---

## 📱 User Journey

### **After Purchase:**

1. **Payment Success** → Razorpay confirms payment
2. **Credentials Generated** → System creates username/password
3. **Email Sent** → User receives credentials
4. **User Logs In** → Goes to /login page
5. **Dashboard Access** → Full course access

### **Login Flow:**

```
/login → Enter credentials → Verify → 
Store token → Redirect to /dashboard
```

---

## 🛠️ Testing

### **Test Payment:**
```
Card: 4111 1111 1111 1111
Expiry: 12/25
CVV: 123
```

### **Test Login:**
```
Username: demo
Password: demo123
```

---

## 📊 Database Example

```javascript
// Example user record
{
  id: "user_1734567890123",
  username: "johndoe4523",
  email: "john.doe@gmail.com",
  password_hash: "$2b$10$...", // bcrypt hash
  full_name: "John Doe",
  purchase_date: "2025-01-15T10:30:00Z",
  course_access: true,
  expiry_date: null, // null = lifetime access
  created_at: "2025-01-15T10:30:00Z"
}
```

---

## 🎯 Next Steps

1. **Setup Email Service** (SendGrid/Resend)
2. **Setup Database** (PostgreSQL/MySQL/MongoDB)
3. **Implement Password Hashing** (bcrypt)
4. **Add JWT Authentication**
5. **Test Complete Flow**

---

## 📞 Support

**Email:** Adityaenigma92@gmail.com  
**WhatsApp:** +91 8294523068

---

## ✅ Checklist

- [x] Login page created
- [x] Footer login button added
- [x] Authentication utilities added
- [x] Email template created
- [x] Credential generation logic
- [ ] Email service integration (TODO)
- [ ] Database setup (TODO)
- [ ] Password hashing (TODO)
- [ ] JWT implementation (TODO)

---

**Authentication system ready for integration!** 🚀