'use client'

import { useState } from 'react'
import { Play, Shield, Award, Users } from 'lucide-react'
import VideoModal from '../VideoModal'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
                🔥 Limited Launch Price
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Become an <span className="text-primary">Adsterra Expert</span> in 7 Days
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally. Real proof, templates & a private support group included.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToPricing}
                className="btn-primary text-lg px-8 py-4"
              >
                Get Instant Access
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Free Preview
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Award className="text-primary" size={24} />
                <span className="text-sm">Top Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-primary" size={24} />
                <span className="text-sm">Trusted Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-primary" size={24} />
                <span className="text-sm">SSL Secure</span>
              </div>
            </div>

            {/* Payment Logos */}
            <div className="flex items-center gap-4 pt-2 opacity-70">
              <span className="text-sm">We accept:</span>
              <div className="flex gap-3">
                <div className="bg-white/10 px-3 py-1 rounded text-xs">Visa</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">Mastercard</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">PayPal</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">Crypto</div>
              </div>
            </div>
          </div>

          {/* Right: Video Preview */}
          <div className="relative">
            <div className="relative rounded-custom-lg overflow-hidden shadow-2xl border-4 border-primary/20">
              <img 
                src="/hero-thumbnail.jpg" 
                alt="Course Preview" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x450/E50914/FFFFFF?text=Adsterra+Mastery+Course'
                }}
              />
              <button 
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} fill="white" />
                </div>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-dark p-4 rounded-custom-lg shadow-xl">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm">Students Enrolled</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white text-dark p-4 rounded-custom-lg shadow-xl">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <VideoModal 
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          onClose={() => setShowVideo(false)} 
        />
      )}
    </section>
  )
}