'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShow(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark text-white p-6 shadow-2xl z-50 border-t-2 border-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
              By clicking "Accept", you consent to our use of cookies. 
              <a href="/privacy" className="text-primary hover:underline ml-1">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={declineCookies}
              className="px-6 py-2 border border-white/30 rounded-custom hover:bg-white/10 transition-all text-sm"
            >
              Decline
            </button>
            <button 
              onClick={acceptCookies}
              className="btn-primary px-6 py-2 text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}