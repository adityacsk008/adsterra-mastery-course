'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { courseModules, type Lesson, type Module, getVideoEmbedUrl } from '@/lib/courseData'

export default function VideoPlayerPage() {
  const params = useParams()
  const router = useRouter()
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentModule, setCurrentModule] = useState<Module | null>(null)
  const [embedUrl, setEmbedUrl] = useState('')
  const [nextLesson, setNextLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)
  const [prevLesson, setPrevLesson] = useState<{ lesson: Lesson; module: Module } | null>(null)

  useEffect(() => {
    const lessonId = params?.id as string
    if (lessonId) {
      loadLesson(lessonId)
    }
  }, [params])

  const loadLesson = (id: string) => {
    let foundLesson: Lesson | null = null
    let foundModule: Module | null = null
    let lessonIndex = -1
    let moduleIndex = -1

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
      router.push('/dashboard')
      return
    }

    setCurrentLesson(foundLesson)
    setCurrentModule(foundModule)
    setEmbedUrl(getVideoEmbedUrl(foundLesson))

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
  }

  if (!currentLesson || !currentModule) {
    return null
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{currentLesson.title} - Adsterra Mastery Course</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            background: linear-gradient(-45deg, #0d0d0d, #1a1a1a, #111827, #000000);
            background-size: 400% 400%;
            animation: gradientFlow 15s ease infinite;
            padding: 20px;
          }
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* LOGO */
          .logo {
            font-size: 56px;
            font-weight: 700;
            margin-bottom: 20px;
            text-shadow: 0 0 15px rgba(255,255,255,0.8);
            z-index: 2;
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .logo span.blue { color: #00BFFF; text-shadow: 0 0 20px #00BFFF; }
          .logo span.white { color: #FFFFFF; text-shadow: 0 0 15px rgba(255,255,255,0.6); }
          .logo span.red { color: #E50914; text-shadow: 0 0 25px #E50914; animation: pulse 1.5s infinite; }
          @keyframes pulse {
            0%,100% { text-shadow: 0 0 10px #E50914, 0 0 20px #E50914; }
            50% { text-shadow: 0 0 25px #ff4d4d, 0 0 40px #E50914; }
          }

          /* CARD */
          .card {
            background: rgba(20,20,20,0.9);
            border-radius: 16px;
            padding: 20px;
            max-width: 650px;
            width: 100%;
            border: 2px solid rgba(0,191,255,0.18);
            box-shadow: 0 8px 30px rgba(0,0,0,0.6);
            z-index: 2;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          /* LESSON INFO */
          .lesson-info {
            margin-bottom: 15px;
            text-align: left;
          }
          .module-title {
            font-size: 12px;
            color: #00BFFF;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          .lesson-title {
            font-size: 20px;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
          }
          .lesson-desc {
            font-size: 14px;
            color: #aaa;
            line-height: 1.5;
          }

          /* VIDEO (16:9) */
          .video-container {
            margin-bottom: 20px;
            width: 100%;
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            box-shadow: 0 0 20px rgba(0, 191, 255, 0.4);
            border: none;
          }

          /* BUTTONS */
          .controls {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          .btn {
            display: inline-block;
            flex: 1;
            padding: 10px 15px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 600;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.25s ease;
            border: none;
            white-space: nowrap;
          }
          .btn-red { background: #E50914; box-shadow: 0 0 12px rgba(229,9,20,0.8); }
          .btn-red:hover { transform: translateY(-3px); box-shadow: 0 0 22px rgba(229,9,20,1); }
          .btn-blue { background: #00BFFF; box-shadow: 0 0 12px rgba(0, 191, 255, 0.8); }
          .btn-blue:hover { transform: translateY(-3px); box-shadow: 0 0 22px rgba(0, 191, 255, 1); }
          .btn-disabled { background: #555; cursor: not-allowed; opacity: 0.5; }
          .btn-disabled:hover { transform: none; box-shadow: none; }

          /* 🔥 MOBILE VERSION ONLY 🔥 */
          @media (max-width: 500px) {
            body {
              justify-content: flex-start;
              padding-top: 10px;
            }

            .logo {
              position: absolute;
              top: 10px;
              left: 10px;
              margin: 0;
              font-size: 34px;
            }

            .card {
              margin-top: 80px;
              padding: 15px;
              max-width: 100%;
            }

            .lesson-title {
              font-size: 16px;
            }

            .controls {
              flex-direction: row;
              justify-content: center;
              gap: 6px;
            }

            .btn {
              flex: none;
              padding: 8px 10px;
              font-size: 13px;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="logo">
          <span className="blue">🎓</span>
          <span className="white">ADSTERRA</span>
          <span className="red">COURSE</span>
        </div>

        <div className="card">
          <div className="lesson-info">
            <div className="module-title">{currentModule.title}</div>
            <div className="lesson-title">{currentLesson.title}</div>
            {currentLesson.description && (
              <div className="lesson-desc">{currentLesson.description}</div>
            )}
          </div>

          <div className="video-container">
            <iframe
              src={embedUrl}
              allow="autoplay; fullscreen; picture-in-picture; web-share; encrypted-media"
              allowFullScreen
            />
          </div>

          <div className="controls">
            {prevLesson ? (
              <a
                className="btn btn-blue"
                href={`/dashboard/watch/${prevLesson.lesson.id}`}
              >
                « Previous
              </a>
            ) : (
              <span className="btn btn-disabled">« Previous</span>
            )}
            
            <a
              className="btn btn-red"
              href="/dashboard"
            >
              Dashboard
            </a>
            
            {nextLesson ? (
              <a
                className="btn btn-blue"
                href={`/dashboard/watch/${nextLesson.lesson.id}`}
              >
                Next »
              </a>
            ) : (
              <span className="btn btn-disabled">Next »</span>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
