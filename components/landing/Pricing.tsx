'use client'

import { useEffect, useState } from 'react'
import { Check, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Pricing() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    '5 Comprehensive Modules',
    '4+ Hours of Video Content',
    'Campaign Templates ($97 Value)',
    'Optimization Checklist ($47 Value)',
    'Private Support Group ($197 Value)',
    'Lifetime Access & Updates',
    'Certificate of Completion',
    '7-Day Money-Back Guarantee'
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-dark via-gray-900 to-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl opacity-90">Enroll now and save 75% off the regular price</p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-custom-lg p-6 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-primary" size={24} />
              <p className="text-lg font-semibold">Offer Expires In:</p>
            </div>
            <div className="countdown">
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="text-3xl font-bold">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="countdown-label">Minutes</div>
              </div>
              <div className="text-3xl font-bold">:</div>
              <div className="countdown-item">
                <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white text-dark rounded-custom-lg shadow-2xl overflow-hidden border-4 border-primary">
            <div className="bg-primary text-white text-center py-4">
              <p className="text-sm font-semibold uppercase tracking-wide">Launch Special</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-3xl text-gray-400 line-through">$197</span>
                  <span className="text-6xl font-bold text-primary">$49</span>
                </div>
                <p className="text-gray-600">One-time payment • Lifetime access</p>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                  Save $148 (75% OFF)
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => router.push('/checkout')}
                className="w-full btn-primary text-xl py-4 mb-4"
              >
                Enroll Now - Get Instant Access
              </button>

              <div className="text-center space-y-2 text-sm text-gray-600">
                <p>✓ Secure checkout with SSL encryption</p>
                <p>✓ 7-Day Money-Back Guarantee — No questions asked</p>
                <p>✓ Instant access after payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 opacity-90">
          <p className="text-lg">
            Questions? Contact us on WhatsApp: 
            <a href="https://wa.me/918294523068" className="text-primary font-semibold ml-2 hover:underline">
              +91 8294523068
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}