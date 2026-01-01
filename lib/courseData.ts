// Complete Adsterra Mastery Course Data

export interface Lesson {
  id: string
  title: string
  videoUrl: string
  embedUrl?: string
  duration?: number
  description?: string
  isDriveVideo?: boolean
}

export interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export const courseModules: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1: Adsterra Fundamentals',
    description: 'Master the basics of Adsterra platform and setup',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Secret Trick',
        videoUrl: 'https://drive.google.com/file/d/1J4tPnt1RU7VJmNSzrBXavgkOcMCNuD3F/view?usp=sharing',
        embedUrl: 'https://drive.google.com/file/d/1J4tPnt1RU7VJmNSzrBXavgkOcMCNuD3F/preview',
        isDriveVideo: true,
        description: 'Learn the secret tricks to maximize your Adsterra earnings'
      },
      {
        id: 'lesson-1-2',
        title: 'First Software Install Setup Full Guide',
        videoUrl: 'https://www.youtube.com/watch?v=daCUC7nmyTE',
        embedUrl: 'https://www.youtube.com/embed/daCUC7nmyTE',
        description: 'Complete guide to installing and setting up your first software'
      },
      {
        id: 'lesson-1-3',
        title: 'First Software Blogger Setup',
        videoUrl: 'https://www.youtube.com/watch?v=daCUC7nmyTE',
        embedUrl: 'https://www.youtube.com/embed/daCUC7nmyTE',
        description: 'Step-by-step blogger setup tutorial'
      },
      {
        id: 'lesson-1-4',
        title: 'Second Software Setup',
        videoUrl: 'https://www.youtube.com/watch?v=goph5daUFyg',
        embedUrl: 'https://www.youtube.com/embed/goph5daUFyg',
        description: 'Setting up your second essential software'
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2: Campaign Creation',
    description: 'Learn to create high-converting Adsterra campaigns',
    lessons: [
      {
        id: 'lesson-2-1',
        title: '🤑Adsterra Direct Link 🚀High CPM Arbitrage Free Tricks | Adsterra Arbitrage New Methods',
        videoUrl: 'https://www.youtube.com/watch?v=Ce_mw1b_ZPY',
        embedUrl: 'https://www.youtube.com/embed/Ce_mw1b_ZPY',
        description: 'Discover direct link methods for high CPM arbitrage'
      },
      {
        id: 'lesson-2-2',
        title: 'Adsterra Arbitrage New Secret Method | Live Proof',
        videoUrl: 'https://www.youtube.com/watch?v=2xhRF6eAWLQ',
        embedUrl: 'https://www.youtube.com/embed/2xhRF6eAWLQ',
        description: 'New secret arbitrage method with live proof of earnings'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3: Traffic Optimization - Organic Traffic Facebook Method',
    description: 'Master organic Facebook traffic generation in 3 parts',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Organic Traffic Facebook Method - Part 1',
        videoUrl: 'https://drive.google.com/file/d/1SIcgMSs5H_IkD8tKfdAgU4SCMza4hG97/view?usp=drive_link',
        embedUrl: 'https://drive.google.com/file/d/1SIcgMSs5H_IkD8tKfdAgU4SCMza4hG97/preview',
        isDriveVideo: true,
        description: 'Learn organic Facebook traffic generation - Part 1'
      },
      {
        id: 'lesson-3-2',
        title: 'Organic Traffic Facebook Method - Part 2',
        videoUrl: 'https://drive.google.com/file/d/1KUV8Cg6mYGaLswksZG-buvqblHnkB7AS/view?usp=drive_link',
        embedUrl: 'https://drive.google.com/file/d/1KUV8Cg6mYGaLswksZG-buvqblHnkB7AS/preview',
        isDriveVideo: true,
        description: 'Learn organic Facebook traffic generation - Part 2'
      },
      {
        id: 'lesson-3-3',
        title: 'Organic Traffic Facebook Method - Part 3',
        videoUrl: 'https://drive.google.com/file/d/10S-5SeI89BVyOO9TJxZTPd1NuuvPbPKk/view?usp=drive_link',
        embedUrl: 'https://drive.google.com/file/d/10S-5SeI89BVyOO9TJxZTPd1NuuvPbPKk/preview',
        isDriveVideo: true,
        description: 'Learn organic Facebook traffic generation - Part 3'
      }
    ]
  },
  {
    id: 'bonus-module',
    title: 'Bonus Module: Organic Traffic Instagram Method',
    description: 'Master Instagram organic traffic generation',
    lessons: [
      {
        id: 'bonus-1',
        title: 'Blogger Account Setup',
        videoUrl: 'https://www.youtube.com/watch?v=lRZvo2NKjWo',
        embedUrl: 'https://www.youtube.com/embed/lRZvo2NKjWo',
        description: 'Complete blogger account setup guide'
      },
      {
        id: 'bonus-2',
        title: 'Adsterra Account Setup',
        videoUrl: 'https://www.youtube.com/watch?v=PzsWlZcrAP4',
        embedUrl: 'https://www.youtube.com/embed/PzsWlZcrAP4',
        description: 'Step-by-step Adsterra account setup'
      },
      {
        id: 'bonus-3',
        title: 'Traffic Tricks 1',
        videoUrl: 'https://www.youtube.com/watch?v=S5v8njdqLsk',
        embedUrl: 'https://www.youtube.com/embed/S5v8njdqLsk',
        description: 'Essential traffic generation tricks - Part 1'
      },
      {
        id: 'bonus-4',
        title: 'Traffic Tricks 2',
        videoUrl: 'https://www.youtube.com/watch?v=WPvoNX0LUF4',
        embedUrl: 'https://www.youtube.com/embed/WPvoNX0LUF4',
        description: 'Essential traffic generation tricks - Part 2'
      }
    ]
  }
]

// Helper function to get video embed URL
export function getVideoEmbedUrl(lesson: Lesson): string {
  // If embedUrl is provided, use it directly
  if (lesson.embedUrl) {
    return lesson.embedUrl
  }
  
  const url = lesson.videoUrl
  if (!url) return ''
  
  try {
    // YouTube URLs
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      let videoId = ''
      
      if (url.includes('youtu.be/')) {
        const parts = url.split('youtu.be/')[1]
        videoId = parts ? parts.split('?')[0].split('&')[0].split('/')[0] : ''
      } else if (url.includes('youtube.com/watch')) {
        const urlObj = new URL(url)
        videoId = urlObj.searchParams.get('v') || ''
      } else if (url.includes('youtube.com/embed/')) {
        return url
      }
      
      if (videoId) {
        videoId = videoId.split('?')[0].split('#')[0].split('&')[0]
        return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`
      }
    }
    
    // Google Drive URLs
    if (url.includes('drive.google.com')) {
      let fileId = ''
      
      const patterns = [
        /\/file\/d\/([a-zA-Z0-9_-]+)/,
        /[?&]id=([a-zA-Z0-9_-]+)/,
        /\/d\/([a-zA-Z0-9_-]+)/
      ]
      
      for (const pattern of patterns) {
        const match = url.match(pattern)
        if (match && match[1]) {
          fileId = match[1]
          break
        }
      }
      
      if (fileId) {
        return `https://drive.google.com/file/d/${fileId}/preview`
      }
    }
    
  } catch (error) {
    console.error('Error parsing video URL:', error)
  }
  
  return url
}

// Get video type for display
export function getVideoType(lesson: Lesson): 'youtube' | 'drive' | 'unknown' {
  if (lesson.isDriveVideo) return 'drive'
  
  const url = lesson.videoUrl
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube'
  }
  if (url.includes('drive.google.com')) {
    return 'drive'
  }
  return 'unknown'
}

// Calculate total course stats
export function getCourseStats() {
  const totalLessons = courseModules.reduce((acc, module) => acc + module.lessons.length, 0)
  const totalModules = courseModules.length
  
  return {
    totalModules,
    totalLessons,
    estimatedHours: Math.ceil(totalLessons * 15 / 60) // Assuming 15 min per lesson
  }
}
