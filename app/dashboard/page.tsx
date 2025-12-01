'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Play, CheckCircle, Clock, Award, LogOut } from 'lucide-react'
import toast from 'react-hot-toast'

interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  duration: number
  completed: boolean
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    checkAuth()
    fetchDashboardData()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
      return
    }
    // Verify token and get user data
    // For now, using placeholder
    setUser({ name: 'Student', email: 'student@example.com' })
  }

  const fetchDashboardData = async () => {
    try {
      // Fetch modules and progress from API
      // Placeholder data for now
      const mockModules: Module[] = [
        {
          id: '1',
          title: 'Module 1: Adsterra Fundamentals',
          lessons: [
            { id: '1-1', title: 'Understanding Adsterra Platform', duration: 720, completed: true },
            { id: '1-2', title: 'Account Setup & Verification', duration: 600, completed: true },
            { id: '1-3', title: 'Dashboard Navigation', duration: 480, completed: false },
            { id: '1-4', title: 'Payment Methods Setup', duration: 540, completed: false },
          ]
        },
        {
          id: '2',
          title: 'Module 2: Campaign Creation',
          lessons: [
            { id: '2-1', title: 'Creating Your First Campaign', duration: 900, completed: false },
            { id: '2-2', title: 'Ad Format Selection', duration: 720, completed: false },
            { id: '2-3', title: 'Targeting Options', duration: 840, completed: false },
            { id: '2-4', title: 'Budget & Bidding Strategies', duration: 960, completed: false },
          ]
        },
        {
          id: '3',
          title: 'Module 3: Traffic Optimization',
          lessons: [
            { id: '3-1', title: 'Analyzing Campaign Performance', duration: 780, completed: false },
            { id: '3-2', title: 'A/B Testing Strategies', duration: 840, completed: false },
            { id: '3-3', title: 'Scaling Winning Campaigns', duration: 720, completed: false },
            { id: '3-4', title: 'Blacklisting & Whitelisting', duration: 660, completed: false },
          ]
        },
      ]

      setModules(mockModules)
      
      // Calculate progress
      const totalLessons = mockModules.reduce((acc, m) => acc + m.lessons.length, 0)
      const completedLessons = mockModules.reduce(
        (acc, m) => acc + m.lessons.filter(l => l.completed).length, 
        0
      )
      setProgress(Math.round((completedLessons / totalLessons) * 100))
      
      setLoading(false)
    } catch (error) {
      toast.error('Failed to load dashboard data')
      setLoading(false)
    }
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    return `${mins} min`
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Adsterra Mastery</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}</span>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-custom-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-lg opacity-90 mb-6">
            Continue your journey to becoming an Adsterra expert
          </p>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-4xl font-bold">{progress}%</div>
              <div className="text-sm opacity-90">Course Progress</div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-white h-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
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
                <div className="text-2xl font-bold">4h</div>
                <div className="text-sm text-gray-600">Total Duration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Course Content</h3>
          
          {modules.map((module) => (
            <div key={module.id} className="card">
              <h4 className="text-xl font-semibold mb-4">{module.title}</h4>
              <div className="space-y-2">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => router.push(`/dashboard/lesson/${lesson.id}`)}
                    className="w-full flex items-center gap-4 p-4 rounded-custom hover:bg-light transition-colors text-left"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      lesson.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      {lesson.completed ? (
                        <CheckCircle className="text-green-600" size={20} />
                      ) : (
                        <Play className="text-gray-600" size={16} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-sm text-gray-600">{formatDuration(lesson.duration)}</div>
                    </div>
                    {lesson.completed && (
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Completed
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Section */}
        {progress === 100 && (
          <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 mt-8">
            <div className="flex items-center gap-4">
              <Award className="text-yellow-600" size={48} />
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-1">Congratulations!</h4>
                <p className="text-gray-700">You've completed the course. Download your certificate now!</p>
              </div>
              <button className="btn-primary">
                Download Certificate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}