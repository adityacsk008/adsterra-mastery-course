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
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentModule, setCurrentModule] = useState<Module | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [nextLesson, setNextLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)
  const [prevLesson, setPrevLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)

  useEffect(() => {
    // Get lesson ID from URL
    const pathParts = window.location.pathname.split('/')
    const lessonId = pathParts[pathParts.length - 1]
    if (lessonId) {
      loadLesson(lessonId)
    }
  }, [])

  const loadLesson = async (lessonId: string) => {
    try {
      let foundLesson: Lesson | null = null
      let foundModule: Module | null = null
      let lessonIndex = -1
      let moduleIndex = -1

      for (let i = 0; i < courseModules.length; i++) {
        const module = courseModules[i]
        const lesson = module.lessons.find(l => l.id === lessonId)
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

      const response = await fetch('/api/progress')
      if (response.ok) {
        const data = await response.json()
        setIsCompleted(data.progress?.[lessonId]?.completed || false)
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
        toast.success('Lesson marked as complete! 🎉')
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
          <div className="loader"></div>
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
      <div className="max-w-6xl mx-auto space-y-6">
        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-sm text-primary font-medium mb-2">{currentModule.title}</div>
              <h1 className="text-3xl font-bold mb-3">{currentLesson.title}</h1>
              {currentLesson.description && (
                <p className="text-gray-700">{currentLesson.description}</p>
              )}
            </div>

            <div className="card p-0 overflow-hidden">
              <VideoPlayer 
                videoUrl={currentLesson.videoUrl}
                title={currentLesson.title}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                {!isCompleted ? (
                  <button
                    onClick={markAsComplete}
                    className="btn-primary flex items-center gap-2"
                  >
                    <CheckCircle size={20} />
                    Mark as Complete
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-custom">
                    <CheckCircle size={20} />
                    <span className="font-medium">Completed ✓</span>
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

          <div className="lg:col-span-1">
            <div className="card sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Course Content</h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {courseModules.map((module) => (
                  <div key={module.id} className="space-y-1">
                    <div className="text-sm font-semibold text-gray-800 px-2 py-2 bg-gray-50 rounded sticky top-0">
                      {module.title}
                    </div>
                    {module.lessons.map((lesson, idx) => {
                      const isActive = currentLesson && lesson.id === currentLesson.id
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => router.push(`/dashboard/lesson/${lesson.id}`)}
                          className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-light transition-colors flex items-start gap-2 ${
                            isActive ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary' : ''
                          }`}
                        >
                          <Play size={14} className="mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{idx + 1}. {lesson.title}</span>
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
