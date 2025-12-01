'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ChevronLeft, ChevronRight, Download, FileText, MessageSquare } from 'lucide-react'
import ReactPlayer from 'react-player'
import toast from 'react-hot-toast'

export default function LessonPage() {
  const router = useRouter()
  const params = useParams()
  const playerRef = useRef<ReactPlayer>(null)
  
  const [lesson, setLesson] = useState<any>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLessonData()
  }, [params.id])

  const fetchLessonData = async () => {
    try {
      // Fetch lesson data from API
      // Placeholder data
      const mockLesson = {
        id: params.id,
        title: 'Understanding Adsterra Platform',
        description: 'Learn the fundamentals of the Adsterra advertising platform',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 720,
        resources: [
          { name: 'Lesson Slides.pdf', url: '#' },
          { name: 'Cheat Sheet.pdf', url: '#' },
        ],
        nextLesson: '1-2',
        prevLesson: null,
      }
      
      setLesson(mockLesson)
      setLoading(false)
    } catch (error) {
      toast.error('Failed to load lesson')
      setLoading(false)
    }
  }

  const handleProgress = (state: any) => {
    setProgress(state.played * 100)
    
    // Auto-save progress every 10 seconds
    if (Math.floor(state.playedSeconds) % 10 === 0) {
      saveProgress(state.playedSeconds)
    }
  }

  const saveProgress = async (seconds: number) => {
    try {
      // Save to API
      console.log('Saving progress:', seconds)
    } catch (error) {
      console.error('Failed to save progress')
    }
  }

  const markComplete = async () => {
    try {
      // Mark lesson as complete via API
      toast.success('Lesson marked as complete!')
      if (lesson.nextLesson) {
        router.push(`/dashboard/lesson/${lesson.nextLesson}`)
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      toast.error('Failed to mark complete')
    }
  }

  const saveNotes = async () => {
    try {
      // Save notes via API
      toast.success('Notes saved!')
    } catch (error) {
      toast.error('Failed to save notes')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
              Back to Dashboard
            </button>
            <h1 className="text-lg font-semibold text-white">{lesson?.title}</h1>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black rounded-custom-lg overflow-hidden">
              <ReactPlayer
                ref={playerRef}
                url={lesson?.videoUrl}
                width="100%"
                height="auto"
                playing={playing}
                playbackRate={playbackRate}
                controls
                onProgress={handleProgress}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>

            {/* Video Controls */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{lesson?.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Speed:</span>
                  <select 
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                    className="px-3 py-1 border rounded-custom text-sm"
                  >
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                  </select>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{lesson?.description}</p>

              <div className="flex gap-3">
                {lesson?.prevLesson && (
                  <button 
                    onClick={() => router.push(`/dashboard/lesson/${lesson.prevLesson}`)}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                )}
                <button 
                  onClick={markComplete}
                  className="btn-primary flex-1"
                >
                  Mark Complete & Continue
                </button>
                {lesson?.nextLesson && (
                  <button 
                    onClick={() => router.push(`/dashboard/lesson/${lesson.nextLesson}`)}
                    className="btn-secondary flex items-center gap-2"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Resources */}
            <div className="card">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Download size={20} />
                Lesson Resources
              </h4>
              <div className="space-y-2">
                {lesson?.resources.map((resource: any, index: number) => (
                  <a
                    key={index}
                    href={resource.url}
                    download
                    className="flex items-center gap-3 p-3 bg-light rounded-custom hover:bg-gray-100 transition-colors"
                  >
                    <FileText size={20} className="text-primary" />
                    <span>{resource.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="card">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                My Notes
              </h4>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes while watching..."
                className="w-full h-32 p-3 border rounded-custom focus:border-primary focus:outline-none resize-none"
              />
              <button 
                onClick={saveNotes}
                className="btn-primary mt-3"
              >
                Save Notes
              </button>
            </div>
          </div>

          {/* Sidebar - Module List */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              <h4 className="font-semibold mb-4">Course Content</h4>
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {/* This would be populated with actual module/lesson data */}
                <div className="text-sm text-gray-600">
                  Module navigation will appear here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}