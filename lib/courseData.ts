// Complete Adsterra Mastery Course Data

export interface Lesson {
  id: string
  title: string
  videoUrl: string
  duration?: number
  description?: string
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
        description: 'Learn the secret tricks to maximize your Adsterra earnings'
      },
      {
        id: 'lesson-1-2',
        title: 'First Software Install Setup Full Guide',
        videoUrl: 'https://youtu.be/daCUC7nmyTE',
        description: 'Complete guide to installing and setting up your first software'
      },
      {
        id: 'lesson-1-3',
        title: 'First Software Blogger Setup',
        videoUrl: 'https://youtu.be/daCUC7nmyTE',
        description: 'Step-by-step blogger setup tutorial'
      },
      {
        id: 'lesson-1-4',
        title: 'Second Software Setup',
        videoUrl: 'https://youtu.be/goph5daUFyg',
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
        videoUrl: 'https://youtu.be/Ce_mw1b_ZPY',
        description: 'Discover direct link methods for high CPM arbitrage'
      },
      {
        id: 'lesson-2-2',
        title: 'Adsterra Arbitrage New Secret Method | Live Proof',
        videoUrl: 'https://youtu.be/2xhRF6eAWLQ',
        description: 'New secret arbitrage method with live proof of earnings'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3: Traffic Optimization',
    description: 'Optimize your traffic sources for maximum ROI',
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Organic Traffic Facebook Method - Part 1',
        videoUrl: 'https://drive.google.com/file/d/1SIcgMSs5H_IkD8tKfdAgU4SCMza4hG97/view?usp=drive_link',
        description: 'Learn organic Facebook traffic generation - Part 1'
      },
      {
        id: 'lesson-3-2',
        title: 'Organic Traffic Facebook Method - Part 2',
        videoUrl: 'https://drive.google.com/file/d/1KUV8Cg6mYGaLswksZG-buvqblHnkB7AS/view?usp=drive_link',
        description: 'Learn organic Facebook traffic generation - Part 2'
      },
      {
        id: 'lesson-3-3',
        title: 'Organic Traffic Facebook Method - Part 3',
        videoUrl: 'https://drive.google.com/file/d/10S-5SeI89BVyOO9TJxZTPd1NuuvPbPKk/view?usp=drive_link',
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
        description: 'Complete blogger account setup guide'
      },
      {
        id: 'bonus-2',
        title: 'Adsterra Account Setup',
        videoUrl: 'https://www.youtube.com/watch?v=PzsWlZcrAP4',
        description: 'Step-by-step Adsterra account setup'
      },
      {
        id: 'bonus-3',
        title: 'Traffic Tricks 1',
        videoUrl: 'https://www.youtube.com/watch?v=S5v8njdqLsk&t=9s',
        description: 'Essential traffic generation tricks - Part 1'
      },
      {
        id: 'bonus-4',
        title: 'Traffic Tricks 2',
        videoUrl: 'https://www.youtube.com/watch?v=WPvoNX0LUF4',
        description: 'Essential traffic generation tricks - Part 2'
      }
    ]
  }
]

// Helper function to get video embed URL
export function getVideoEmbedUrl(url: string): string {
  // YouTube URLs
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${videoId}`
  }
  
  // Google Drive URLs
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/\/d\/([^/]+)/)?.[1] || url.match(/id=([^&]+)/)?.[1]
    return `https://drive.google.com/file/d/${fileId}/preview`
  }
  
  return url
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
