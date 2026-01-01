'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Play, CheckCircle, Clock, Award, Lock } from 'lucide-react'
import toast from 'react-hot-toast'
import DashboardLayout from '@/components/DashboardLayout'
import { courseModules, getCourseStats } from '@/lib/courseData'

interface UserProgress {
  [lessonId: string]: {
    completed: boolean
    lastPosition: number
  }
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userProgress, setUserProgress] = useState<UserProgress>({})
  const [overallProgress, setOverallProgress] = useState(0)

  useEffect(() => {
    fetchUserProgress()
  }, [])

  const fetchUserProgress = async () => {
    try {
      // Fetch user progress from API
      const response = await fetch('/api/progress')
      if (response.ok) {
        const data = await response.json()
        setUserProgress(data.progress || {})
        calculateOverallProgress(data.progress || {})
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to load progress:', error)
      setLoading(false)
    }
  }

  const calculateOverallProgress = (progress: UserProgress) => {
    const totalLessons = courseModules.reduce((acc, m) => acc + m.lessons.length, 0)
    const completedLessons = Object.values(progress).filter(p => p.completed).length
    setOverallProgress(totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0)
  }

  const getModuleProgress = (moduleId: string) => {
    const module = courseModules.find(m => m.id === moduleId)
    if (!module) return 0
    
    const completedInModule = module.lessons.filter(
      lesson => userProgress[lesson.id]?.completed
    ).length
    
    return module.lessons.length > 0 
      ? Math.round((completedInModule / module.lessons.length) * 100) 
      : 0
  }

  const stats = getCourseStats()

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64">
          <div className="loader"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-custom-lg p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to Adsterra Mastery! 🚀</h2>
          <p className="text-lg opacity-90 mb-6">
            Your journey to becoming an Adsterra expert starts here
          </p>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-4xl font-bold">{overallProgress}%</div>
              <div className="text-sm opacity-90">Course Progress</div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.totalLessons}</div>
                <div className="text-sm text-gray-600">Total Lessons</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {Object.values(userProgress).filter(p => p.completed).length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.estimatedHours}h+</div>
                <div className="text-sm text-gray-600">Content Duration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Course Content</h3>
          
          {courseModules.map((module) => {
            const moduleProgress = getModuleProgress(module.id)
            
            return (
              <div key={module.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">{module.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-xs bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-primary h-full transition-all duration-500"
                          style={{ width: `${moduleProgress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {moduleProgress}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {module.lessons.map((lesson, index) => {
                    const isCompleted = userProgress[lesson.id]?.completed
                    
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => router.push(`/dashboard/lesson/${lesson.id}`)}
                        className="w-full flex items-center gap-4 p-4 rounded-custom hover:bg-light transition-colors text-left group"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isCompleted ? 'bg-green-100' : 'bg-gray-100 group-hover:bg-primary/10'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="text-green-600" size={20} />
                          ) : (
                            <Play className="text-gray-600 group-hover:text-primary" size={18} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium mb-1 line-clamp-1">
                            {index + 1}. {lesson.title}
                          </div>
                          {lesson.description && (
                            <div className="text-sm text-gray-600 line-clamp-1">
                              {lesson.description}
                            </div>
                          )}
                        </div>
                        {isCompleted && (
                          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex-shrink-0">
                            Completed
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certificate Section */}
        {overallProgress === 100 && (
          <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div className="flex items-center gap-4">
              <Award className="text-yellow-600" size={48} />
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">🎉 Congratulations!</h4>
                <p className="text-gray-700">You've completed the entire course. Download your certificate now!</p>
              </div>
              <button className="btn-primary">
                Download Certificate
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
