'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, ExternalLink, Loader, Play } from 'lucide-react'
import { getVideoEmbedUrl, getVideoType, type Lesson } from '@/lib/courseData'

interface VideoPlayerProps {
  lesson: Lesson
  title: string
}

export default function VideoPlayer({ lesson, title }: VideoPlayerProps) {
  const [embedUrl, setEmbedUrl] = useState('')
  const [videoType, setVideoType] = useState<'youtube' | 'drive' | 'unknown'>('unknown')
  const [loading, setLoading] = useState(true)
  const [embedError, setEmbedError] = useState(false)

  useEffect(() => {
    loadVideo()
  }, [lesson])

  const loadVideo = () => {
    setLoading(true)
    setEmbedError(false)
    
    try {
      const url = getVideoEmbedUrl(lesson)
      const type = getVideoType(lesson)
      
      if (url) {
        setEmbedUrl(url)
        setVideoType(type)
      } else {
        setEmbedError(true)
      }
      
      setLoading(false)
    } catch (error) {
      console.error('Error loading video:', error)
      setEmbedError(true)
      setLoading(false)
    }
  }

  const openInNewTab = () => {
    window.open(lesson.videoUrl, '_blank', 'noopener,noreferrer')
  }

  const handleIframeError = () => {
    setEmbedError(true)
  }

  if (loading) {
    return (
      <div className="relative w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center rounded-lg" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Loader className="text-white animate-spin mb-4" size={48} />
          <p className="text-white text-lg">Loading video...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Video Player */}
      <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
        {!embedError && embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: 'none' }}
            loading="lazy"
            onError={handleIframeError}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-900 to-gray-800">
            <AlertCircle className="text-yellow-400 mb-4" size={56} />
            <h3 className="text-white text-2xl font-bold mb-3">Video Embed Unavailable</h3>
            <p className="text-gray-300 mb-6 max-w-md text-lg">
              This video cannot be embedded directly. Click the button below to watch it.
            </p>
            <button
              onClick={openInNewTab}
              className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
            >
              <Play size={24} />
              Watch Now
            </button>
          </div>
        )}
      </div>
      
      {/* Video Info Bar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          {videoType === 'youtube' && (
            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Video
            </span>
          )}
          {videoType === 'drive' && (
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 1.485c-.276 0-.546.054-.796.16L1.942 6.213c-.592.253-.942.829-.942 1.461v8.652c0 .632.35 1.208.942 1.461l9.272 4.568c.25.106.52.16.796.16s.546-.054.796-.16l9.272-4.568c.592-.253.942-.829.942-1.461V7.674c0-.632-.35-1.208-.942-1.461L12.806 1.645c-.25-.106-.52-.16-.796-.16z"/>
              </svg>
              Google Drive Video
            </span>
          )}
        </div>
        
        {/* Watch Now Button for Drive Videos */}
        {videoType === 'drive' && (
          <button
            onClick={openInNewTab}
            className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg font-semibold"
          >
            <Play size={18} />
            Watch Now
          </button>
        )}
        
        {/* Open in New Tab for YouTube */}
        {videoType === 'youtube' && (
          <button
            onClick={openInNewTab}
            className="text-primary hover:text-red-700 flex items-center gap-2 font-semibold transition-colors"
          >
            <ExternalLink size={18} />
            Open in YouTube
          </button>
        )}
      </div>

      {/* Additional Watch Now Button for Drive Videos (Below player) */}
      {videoType === 'drive' && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white p-2 rounded-full">
                <Play size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Google Drive Video</h4>
                <p className="text-sm text-gray-600">If video doesn't play above, click Watch Now</p>
              </div>
            </div>
            <button
              onClick={openInNewTab}
              className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg font-semibold"
            >
              <Play size={20} />
              Watch Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
