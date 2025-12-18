# 📹 How to Add Videos to Your Course

## 🎯 Overview

Yeh guide aapko batayega ki apne course mein videos kaise add karein taaki students purchase ke baad dekh sakein.

---

## 📝 Step-by-Step Process

### **Step 1: Upload Videos**

Apne videos ko kisi video hosting platform pe upload karein:

#### **Option A: YouTube (Recommended - FREE)**
1. YouTube pe private/unlisted video upload karein
2. Video ka embed URL copy karein
3. Format: `https://www.youtube.com/embed/VIDEO_ID`

**Example:**
```
Original: https://www.youtube.com/watch?v=dQw4w9WgXcQ
Embed: https://www.youtube.com/embed/dQw4w9WgXcQ
```

#### **Option B: Vimeo (Professional)**
1. Vimeo pe video upload karein
2. Privacy settings: "Hide from Vimeo"
3. Embed URL copy karein
4. Format: `https://player.vimeo.com/video/VIDEO_ID`

#### **Option C: Bunny.net (Best for Security)**
1. Bunny.net account banayein
2. Video library create karein
3. Videos upload karein
4. Embed URL milega

---

### **Step 2: Update Video URLs**

File open karein: `lib/videos.ts`

```typescript
export const videos: Video[] = [
  {
    id: 'vid-1-1',
    moduleId: '1',
    lessonId: '1-1',
    title: 'What We Will Learn?',
    url: 'https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID', // ⬅️ Yahan apna URL dalein
    duration: 720,
    description: 'Introduction to the course'
  },
  // ... more videos
]
```

**Replace karne ke liye:**
1. `YOUR_VIDEO_ID_1` ko apne actual video ID se replace karein
2. Har lesson ke liye repeat karein
3. Save karein

---

### **Step 3: Video Access Control**

Videos sirf purchased users ko dikhane ke liye:

File: `lib/videos.ts`

```typescript
export const hasVideoAccess = (userId: string, videoId: string): boolean => {
  // Check if user has purchased course
  // Check payment status from database
  
  // Example implementation:
  const userPurchases = getUserPurchases(userId) // Your function
  return userPurchases.includes('adsterra-mastery')
}
```

---

## 🎬 Video Format Recommendations

### **Resolution**
- Minimum: 720p (HD)
- Recommended: 1080p (Full HD)
- Best: 1440p or 4K (for premium look)

### **Aspect Ratio**
- 16:9 (Standard YouTube/Vimeo)

### **File Format**
- MP4 (H.264 codec)
- Best compatibility

### **Audio**
- Clear voice
- Background music (optional, low volume)
- No echo or noise

---

## 🔒 Security Best Practices

### **1. Domain Restriction (YouTube)**
```
YouTube Studio → Video → Visibility → 
Advanced Settings → Embed → 
Add your domain: adsterra-mastery-course.vercel.app
```

### **2. Signed URLs (Bunny.net)**
```typescript
// Generate time-limited signed URLs
const signedUrl = generateSignedUrl(videoUrl, expiresIn: 3600)
```

### **3. Watermark**
- Add your logo/watermark to videos
- Prevents unauthorized sharing

---

## 📊 Current Video Structure

```
Module 1: Adsterra Account Creation (4 videos)
├── vid-1-1: What We Will Learn? (12 min)
├── vid-1-2: Creating Account (10 min)
├── vid-1-3: Verification (8 min)
└── vid-1-4: Dashboard Overview (9 min)

Module 2: Traffic Automation (4 videos)
├── vid-2-1: Downloading Files (15 min)
├── vid-2-2: Setting Up Workflow (12 min)
├── vid-2-3: Understanding Features (14 min)
└── vid-2-4: Best Practices (16 min)

Module 3: Earning Optimization (4 videos)
Module 4: Adsterra Attributes (4 videos)
Module 5: Paid Traffic (4 videos)
Module 6: Withdrawals (4 videos)
```

---

## 🎯 Quick Start Example

### **1. Upload to YouTube**
```
1. Go to YouTube Studio
2. Click "Create" → "Upload videos"
3. Select your video file
4. Set visibility to "Unlisted"
5. Copy video ID from URL
```

### **2. Update Code**
```typescript
// lib/videos.ts
{
  id: 'vid-1-1',
  moduleId: '1',
  lessonId: '1-1',
  title: 'What We Will Learn?',
  url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // ✅ Your video ID
  duration: 720,
}
```

### **3. Test**
```
1. Go to /dashboard
2. Click on lesson
3. Video should play
```

---

## 🔧 Troubleshooting

### **Video Not Playing?**
- Check if URL is correct
- Verify video is not private
- Check domain restrictions
- Clear browser cache

### **Access Denied?**
- Check `hasVideoAccess()` function
- Verify user payment status
- Check database connection

### **Slow Loading?**
- Use CDN (Bunny.net recommended)
- Compress videos before upload
- Use adaptive bitrate streaming

---

## 📧 Support Emails

Update email addresses in all files:

### **Files to Update:**

1. **components/landing/Footer.tsx**
```typescript
email: 'Adityaenigma92@gmail.com'
```

2. **app/profile/page.tsx**
```typescript
email: 'Adityaenigma92@gmail.com'
```

3. **app/support/page.tsx**
```typescript
href="mailto:Adityaenigma92@gmail.com"
```

4. **components/WhatsAppFloat.tsx**
```typescript
// Already has WhatsApp number
```

---

## ✅ Checklist

- [ ] Videos uploaded to hosting platform
- [ ] Video URLs updated in `lib/videos.ts`
- [ ] Access control implemented
- [ ] Domain restrictions set (if using YouTube)
- [ ] Email addresses updated
- [ ] Tested video playback
- [ ] Tested on mobile devices
- [ ] Watermark added (optional)

---

## 🚀 Ready to Deploy

Once videos are added:

```bash
git add .
git commit -m "Add course videos"
git push
```

Vercel will automatically deploy!

---

## 📞 Need Help?

**WhatsApp:** +91 8294523068  
**Email:** Adityaenigma92@gmail.com

---

## 💡 Pro Tips

1. **Batch Upload:** Upload all videos at once
2. **Naming Convention:** Use consistent naming (Module-Lesson-Title)
3. **Thumbnails:** Create custom thumbnails for better UX
4. **Captions:** Add subtitles for better accessibility
5. **Analytics:** Track video views and completion rates

---

**Happy Teaching! 🎓**