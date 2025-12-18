// Video Management System
// Add your video URLs here after uploading to YouTube/Vimeo/Bunny.net

export interface Video {
  id: string
  moduleId: string
  lessonId: string
  title: string
  url: string // YouTube, Vimeo, or direct video URL
  duration: number // in seconds
  thumbnail?: string
  description?: string
}

// Video Database
// Replace these URLs with your actual video URLs after upload
export const videos: Video[] = [
  // Module 1: Adsterra Account Creation
  {
    id: 'vid-1-1',
    moduleId: '1',
    lessonId: '1-1',
    title: 'What We Will Learn?',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1', // Replace with actual URL
    duration: 720,
    description: 'Introduction to the course and what you will learn'
  },
  {
    id: 'vid-1-2',
    moduleId: '1',
    lessonId: '1-2',
    title: 'Creating Your Adsterra Account',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2', // Replace with actual URL
    duration: 600,
    description: 'Step by step guide to create your Adsterra account'
  },
  {
    id: 'vid-1-3',
    moduleId: '1',
    lessonId: '1-3',
    title: 'Account Verification Process',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3', // Replace with actual URL
    duration: 480,
    description: 'How to verify your Adsterra account'
  },
  {
    id: 'vid-1-4',
    moduleId: '1',
    lessonId: '1-4',
    title: 'Dashboard Overview',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4', // Replace with actual URL
    duration: 540,
    description: 'Understanding the Adsterra dashboard'
  },

  // Module 2: Traffic Automation
  {
    id: 'vid-2-1',
    moduleId: '2',
    lessonId: '2-1',
    title: 'Downloading Files',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5', // Replace with actual URL
    duration: 900,
    description: 'Download automation tools and resources'
  },
  {
    id: 'vid-2-2',
    moduleId: '2',
    lessonId: '2-2',
    title: 'Setting Up Workflow',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6', // Replace with actual URL
    duration: 720,
    description: 'Configure your automation workflow'
  },
  {
    id: 'vid-2-3',
    moduleId: '2',
    lessonId: '2-3',
    title: 'Understanding Various Features',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_7', // Replace with actual URL
    duration: 840,
    description: 'Deep dive into automation features'
  },
  {
    id: 'vid-2-4',
    moduleId: '2',
    lessonId: '2-4',
    title: 'Automation Best Practices',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_8', // Replace with actual URL
    duration: 960,
    description: 'Best practices for traffic automation'
  },

  // Module 3: Earning Optimization & Safety
  {
    id: 'vid-3-1',
    moduleId: '3',
    lessonId: '3-1',
    title: 'Maximizing Your Earnings',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_9', // Replace with actual URL
    duration: 780,
    description: 'Strategies to maximize your earnings'
  },
  {
    id: 'vid-3-2',
    moduleId: '3',
    lessonId: '3-2',
    title: 'Safety Measures & Guidelines',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_10', // Replace with actual URL
    duration: 840,
    description: 'Stay safe while earning'
  },
  {
    id: 'vid-3-3',
    moduleId: '3',
    lessonId: '3-3',
    title: 'Avoiding Common Mistakes',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_11', // Replace with actual URL
    duration: 720,
    description: 'Common mistakes to avoid'
  },
  {
    id: 'vid-3-4',
    moduleId: '3',
    lessonId: '3-4',
    title: 'Account Protection Tips',
    url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_12', // Replace with actual URL
    duration: 660,
    description: 'Protect your account from bans'
  },

  // Add more modules similarly...
]

// Get video by lesson ID
export const getVideoByLessonId = (lessonId: string): Video | undefined => {
  return videos.find(video => video.lessonId === lessonId)
}

// Get all videos for a module
export const getVideosByModuleId = (moduleId: string): Video[] => {
  return videos.filter(video => video.moduleId === moduleId)
}

// Check if user has access to video (implement your logic)
export const hasVideoAccess = (userId: string, videoId: string): boolean => {
  // TODO: Implement actual access check
  // Check if user has purchased the course
  // Check payment status from database
  return true // For now, return true (demo mode)
}

// Format duration to readable format
export const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}