'use client'

import { useRouter } from 'next/navigation'
import { Play, Clock, Award, CheckCircle } from 'lucide-react'
import DashboardLayout from '@/components/DashboardLayout'

export default function CoursesPage() {
  const router = useRouter()

  const course = {
    id: 1,
    title: 'Adsterra Mastery',
    description: 'Complete guide to mastering Adsterra advertising platform',
    thumbnail: 'https://via.placeholder.com/400x225/E50914/FFFFFF?text=Adsterra+Mastery',
    progress: 85,
    totalLessons: 20,
    completedLessons: 17,
    duration: '4+ hours',
    enrolled: '2025-01-15',
    certificate: false,
    modules: [
      {
        id: 1,
        title: 'Module 1: Adsterra Fundamentals',
        lessons: 4,
        duration: '45 min',
        completed: 4
      },
      {
        id: 2,
        title: 'Module 2: Campaign Creation',
        lessons: 4,
        duration: '60 min',
        completed: 4
      },
      {
        id: 3,
        title: 'Module 3: Traffic Optimization',
        lessons: 4,
        duration: '55 min',
        completed: 3
      },
      {
        id: 4,
        title: 'Module 4: Advanced Techniques',
        lessons: 4,
        duration: '50 min',
        completed: 3
      },
      {
        id: 5,
        title: 'Module 5: Monetization & Scaling',
        lessons: 4,
        duration: '40 min',
        completed: 3
      }
    ]
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-gray-600 mt-1">Continue learning and track your progress</p>
        </div>

        {/* Course Card */}
        <div className="card">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Course Thumbnail */}
            <div className="relative">
              <img 
                src={course.thumbnail}
                alt={course.title}
                className="w-full rounded-custom-lg"
              />
              <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {course.progress}% Complete
              </div>
            </div>

            {/* Course Info */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Course Progress</span>
                  <span className="text-primary font-semibold">{course.progress}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-gray-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Play size={16} className="text-gray-600" />
                  <span>{course.totalLessons} Lessons</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award size={16} className="text-gray-600" />
                  <span>Certificate Available</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={() => router.push('/dashboard')}
                  className="btn-primary flex items-center gap-2"
                >
                  <Play size={18} />
                  Continue Learning
                </button>
                {course.progress === 100 && (
                  <button className="btn-secondary flex items-center gap-2">
                    <Award size={18} />
                    Download Certificate
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Course Modules</h3>
          <div className="space-y-4">
            {course.modules.map((module) => (
              <div 
                key={module.id}
                className="border rounded-custom-lg p-4 hover:border-primary transition-colors cursor-pointer"
                onClick={() => router.push('/dashboard')}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{module.title}</h4>
                  {module.completed === module.lessons && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <CheckCircle size={14} />
                      Completed
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span>{module.lessons} Lessons</span>
                    <span>{module.duration}</span>
                  </div>
                  <span className="font-medium">
                    {module.completed}/{module.lessons} completed
                  </span>
                </div>

                {/* Module Progress */}
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all"
                    style={{ width: `${(module.completed / module.lessons) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tips */}
        <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
          <h3 className="text-xl font-semibold mb-4">💡 Learning Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Complete lessons in order for best understanding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Take notes while watching videos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Download and use the provided templates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Join the private support group for help</span>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  )
}