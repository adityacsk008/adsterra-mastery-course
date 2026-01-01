'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, ExternalLink, Loader } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [embedUrl, setEmbedUrl] = useState('')
  const [videoType, setVideoType] = useState<'youtube' | 'drive' | 'unknown'>('unknown')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    processVideoUrl(videoUrl)
  }, [videoUrl])

  const processVideoUrl = (url: string) => {
    setLoading(true)
    setError(false)
    
    try {
      if (!url) {
        setError(true)
        setLoading(false)
        return
      }

      let processedUrl = ''
      let type: 'youtube' | 'drive' | 'unknown' = 'unknown'

      // YouTube URLs - Enhanced detection
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = ''
        
        // youtu.be format
        if (url.includes('youtu.be/')) {
          const parts = url.split('youtu.be/')[1]
          videoId = parts ? parts.split('?')[0].split('&')[0].split('/')[0] : ''
        }
        // youtube.com/watch format
        else if (url.includes('youtube.com/watch')) {
          try {
            const urlObj = new URL(url)
            videoId = urlObj.searchParams.get('v') || ''
          } catch {
            // Fallback parsing
            const match = url.match(/[?&]v=([^&]+)/)
            videoId = match ? match[1] : ''
          }
        }
        // youtube.com/embed format
        else if (url.includes('youtube.com/embed/')) {
          const match = url.match(/embed\/([^?&/]+)/)
          videoId = match ? match[1] : ''
        }
        
        if (videoId) {
          // Clean video ID
          videoId = videoId.split('?')[0].split('#')[0].split('&')[0]
          processedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1`
          type = 'youtube'
        }
      }
      
      // Google Drive URLs - Enhanced detection
      else if (url.includes('drive.google.com')) {
        let fileId = ''
        
        // Try multiple patterns
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
          processedUrl = `https://drive.google.com/file/d/${fileId}/preview`
          type = 'drive'
        }
      }

      if (processedUrl) {
        setEmbedUrl(processedUrl)
        setVideoType(type)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
      
    } catch (err) {
      console.error('Error processing video URL:', err)
      setError(true)
      setLoading(false)
    }
  }

  const openInNewTab = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return (
      <div className="relative w-full bg-gray-900 flex items-center justify-center" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Loader className="text-white animate-spin mb-4" size={48} />
          <p className="text-white">Loading video...</p>
        </div>
      </div>
    )
  }

  if (error || !embedUrl) {
    return (
      <div className="relative w-full bg-gray-900 flex items-center justify-center" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <AlertCircle className="text-yellow-500 mb-4" size={48} />
          <h3 className="text-white text-xl font-semibold mb-2">Unable to Load Video</h3>
          <p className="text-gray-300 mb-6 max-w-md">
            The video cannot be embedded directly. Click below to watch it in a new tab.
          </p>
          <button
            onClick={openInNewTab}
            className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ExternalLink size={20} />
            Open Video in New Tab
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 'none' }}
          loading="lazy"
        />
      </div>
      
      {/* Video Info & Controls */}
      <div className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          {videoType === 'youtube' && (
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
              📺 YouTube
            </span>
          )}
          {videoType === 'drive' && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              📁 Google Drive
            </span>
          )}
        </div>
        <button
          onClick={openInNewTab}
          className="text-primary hover:text-red-700 flex items-center gap-1 font-medium transition-colors"
        >
          <ExternalLink size={14} />
          Open in new tab
        </button>
      </div>
    </div>
  )
}
