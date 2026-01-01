'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft, Play } from 'lucide-react'
import toast from 'react-hot-toast'
import DashboardLayout from '@/components/DashboardLayout'
import VideoPlayer from '@/components/VideoPlayer'
import { courseModules, type Lesson, type Module } from '@/lib/courseData'

export default function LessonPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [lessonId, setLessonId] = useState<string>('')
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentModule, setCurrentModule] = useState<Module | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [nextLesson, setNextLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)
  const [prevLesson, setPrevLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)

  useEffect(() => {
    // Get lesson ID from URL path
    const pathParts = window.location.pathname.split('/')
    const id = pathParts[pathParts.length - 1]
    
    if (id && id !== 'id-placeholder') {
      setLessonId(id)
      loadLesson(id)
    } else {
      // If no valid ID, redirect to dashboard
      router.push('/dashboard')
    }
  }, [])

  const loadLesson = async (id: string) => {
    try {
      let foundLesson: Lesson | null = null
      let foundModule: Module | null = null
      let lessonIndex = -1
      let moduleIndex = -1

      // Find the lesson in course modules
      for (let i = 0; i < courseModules.length; i++) {
        const module = courseModules[i]
        const lesson = module.lessons.find(l => l.id === id)
        if (lesson) {
          foundLesson = lesson
          foundModule = module
          lessonIndex = module.lessons.indexOf(lesson)
          moduleIndex = i
          break
        }
      }

      if (!foundLesson || !foundModule) {
        toast.error('Lesson not found')
        router.push('/dashboard')
        return
      }

      setCurrentLesson(foundLesson)
      setCurrentModule(foundModule)

      // Find next lesson
      if (lessonIndex < foundModule.lessons.length - 1) {
        setNextLesson({
          lesson: foundModule.lessons[lessonIndex + 1],
          module: foundModule
        })
      } else if (moduleIndex < courseModules.length - 1) {
        const nextModule = courseModules[moduleIndex + 1]
        if (nextModule.lessons.length > 0) {
          setNextLesson({
            lesson: nextModule.lessons[0],
            module: nextModule
          })
        }
      }

      // Find previous lesson
      if (lessonIndex > 0) {
        setPrevLesson({
          lesson: foundModule.lessons[lessonIndex - 1],
          module: foundModule
        })
      } else if (moduleIndex > 0) {
        const prevModule = courseModules[moduleIndex - 1]
        if (prevModule.lessons.length > 0) {
          setPrevLesson({
            lesson: prevModule.lessons[prevModule.lessons.length - 1],
            module: prevModule
          })
        }
      }

      // Check if lesson is completed
      try {
        const response = await fetch('/api/progress')
        if (response.ok) {
          const data = await response.json()
          setIsCompleted(data.progress?.[id]?.completed || false)
        }
      } catch (error) {
        console.error('Failed to fetch progress:', error)
      }

      setLoading(false)
    } catch (error) {
      console.error('Failed to load lesson:', error)
      toast.error('Failed to load lesson')
      setLoading(false)
    }
  }

  const markAsComplete = async () => {
    if (!currentLesson) return
    
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId: currentLesson.id,
          completed: true,
          lastPosition: 0
        })
      })

      if (response.ok) {
        setIsCompleted(true)
        toast.success('🎉 Lesson marked as complete!')
        
        // Auto-navigate to next lesson after 2 seconds
        if (nextLesson) {
          setTimeout(() => {
            router.push(`/dashboard/lesson/${nextLesson.lesson.id}`)
          }, 2000)
        }
      } else {
        toast.error('Failed to save progress')
      }
    } catch (error) {
      console.error('Failed to mark complete:', error)
      toast.error('Failed to save progress')
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    )
  }

  if (!currentLesson || !currentModule) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Lesson not found</p>
          <button onClick={() => router.push('/dashboard')} className="btn-primary">
            Back to Dashboard
          </button>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Video & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Module & Lesson Title */}
            <div>
              <div className="text-sm text-primary font-medium mb-2">{currentModule.title}</div>
              <h1 className="text-3xl font-bold mb-3">{currentLesson.title}</h1>
              {currentLesson.description && (
                <p className="text-gray-700">{currentLesson.description}</p>
              )}
            </div>

            {/* Video Player */}
            <div className="card p-0 overflow-hidden shadow-lg">
              <VideoPlayer 
                videoUrl={currentLesson.videoUrl}
                title={currentLesson.title}
              />
            </div>

            {/* Lesson Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                {!isCompleted ? (
                  <button
                    onClick={markAsComplete}
                    className="btn-primary flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle size={20} />
                    Mark as Complete
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-5 py-3 rounded-lg border-2 border-green-200">
                    <CheckCircle size={20} />
                    <span className="font-semibold">Completed ✓</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                {prevLesson && (
                  <button
                    onClick={() => router.push(`/dashboard/lesson/${prevLesson.lesson.id}`)}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ChevronLeft size={20} />
                    Previous
                  </button>
                )}
                {nextLesson && (
                  <button
                    onClick={() => router.push(`/dashboard/lesson/${nextLesson.lesson.id}`)}
                    className="btn-primary flex items-center gap-2"
                  >
                    Next Lesson
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Course Navigation */}
          <div className="lg:col-span-1">
            <div className="card sticky top-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 pb-3 border-b">Course Content</h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {courseModules.map((module) => (
                  <div key={module.id} className="space-y-1">
                    <div className="text-xs font-bold text-gray-800 px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg sticky top-0 z-10">
                      {module.title}
                    </div>
                    {module.lessons.map((lesson, idx) => {
                      const isActive = currentLesson && lesson.id === currentLesson.id
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => router.push(`/dashboard/lesson/${lesson.id}`)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm hover:bg-light transition-all flex items-start gap-2 ${
                            isActive 
                              ? 'bg-primary/10 text-primary font-semibold border-l-3 border-primary shadow-sm' 
                              : 'hover:shadow-sm'
                          }`}
                        >
                          <Play size={14} className="mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2 text-xs leading-relaxed">
                            {idx + 1}. {lesson.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
