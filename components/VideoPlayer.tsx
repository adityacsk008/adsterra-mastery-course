'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, ExternalLink } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
}

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  const [embedUrl, setEmbedUrl] = useState('')
  const [videoType, setVideoType] = useState<'youtube' | 'drive' | 'unknown'>('unknown')
  const [error, setError] = useState(false)

  useEffect(() => {
    processVideoUrl(videoUrl)
  }, [videoUrl])

  const processVideoUrl = (url: string) => {
    try {
      // YouTube URLs
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = ''
        
        if (url.includes('youtu.be/')) {
          videoId = url.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0] || ''
        } else if (url.includes('youtube.com')) {
          const urlParams = new URLSearchParams(url.split('?')[1])
          videoId = urlParams.get('v') || ''
        }
        
        if (videoId) {
          setEmbedUrl(`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`)
          setVideoType('youtube')
          return
        }
      }
      
      // Google Drive URLs
      if (url.includes('drive.google.com')) {
        let fileId = ''
        
        // Extract file ID from different Google Drive URL formats
        const patterns = [
          /\/file\/d\/([^/]+)/,
          /id=([^&]+)/,
          /\/d\/([^/]+)/
        ]
        
        for (const pattern of patterns) {
          const match = url.match(pattern)
          if (match && match[1]) {
            fileId = match[1]
            break
          }
        }
        
        if (fileId) {
          setEmbedUrl(`https://drive.google.com/file/d/${fileId}/preview`)
          setVideoType('drive')
          return
        }
      }
      
      // If no pattern matched
      setError(true)
    } catch (err) {
      console.error('Error processing video URL:', err)
      setError(true)
    }
  }

  const openInNewTab = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer')
  }

  if (error || !embedUrl) {
    return (
      <div className="relative w-full bg-gray-900 flex items-center justify-center" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <AlertCircle className="text-yellow-500 mb-4" size={48} />
          <h3 className="text-white text-xl font-semibold mb-2">Video Player Issue</h3>
          <p className="text-gray-300 mb-6 max-w-md">
            Unable to embed this video directly. Click below to watch it in a new tab.
          </p>
          <button
            onClick={openInNewTab}
            className="btn-primary flex items-center gap-2"
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
      <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 'none' }}
        />
      </div>
      
      {/* Fallback link */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">
          {videoType === 'youtube' ? '📺 YouTube Video' : '📁 Google Drive Video'}
        </span>
        <button
          onClick={openInNewTab}
          className="text-primary hover:underline flex items-center gap-1"
        >
          <ExternalLink size={14} />
          Open in new tab
        </button>
      </div>
    </div>
  )
}
