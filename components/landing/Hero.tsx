'use client'

import { useState } from 'react'
import { Play, CheckCircle, X } from 'lucide-react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  const benefits = [
    '5 Comprehensive Modules',
    '4+ Hours of Video Content',
    'Campaign Templates',
    'Private Support Group'
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-gray-900 to-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary/20 border border-primary text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 Limited Time Offer - 75% OFF
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Become an <span className="text-primary">Adsterra Expert</span> in 7 Days
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Learn to create high-earning ad campaigns, scale traffic and withdraw payments internationally. 
              Real proof, templates & a private support group included.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="btn-primary text-lg px-8 py-4 text-center"
              >
                Get Instant Access - $49
              </a>
              <button 
                onClick={() => setShowVideo(true)}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch Preview
              </button>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              ✓ 3-Day Money-Back Guarantee • ✓ Lifetime Access • ✓ Instant Delivery
            </p>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative rounded-custom-lg overflow-hidden shadow-2xl border-4 border-primary/30">
              <img 
                src="https://via.placeholder.com/600x400/E50914/FFFFFF?text=Course+Preview"
                alt="Course Preview"
                className="w-full"
              />
              <button 
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-all group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative pt-[56.25%] bg-black rounded-custom-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Course Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}