'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'This course completely transformed my understanding of Adsterra. Within 2 weeks, I was running profitable campaigns!'
  },
  {
    name: 'Michael Chen',
    role: 'Affiliate Marketer',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    text: 'The templates and strategies are gold. I recovered my investment in the first week and now making consistent income.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Content Creator',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    text: 'Best investment I made this year. The support group alone is worth the price. Highly recommended!'
  },
  {
    name: 'David Kumar',
    role: 'E-commerce Owner',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    text: 'Clear, concise, and actionable. Aditya knows his stuff and explains everything in a way that\'s easy to understand.'
  },
  {
    name: 'Lisa Thompson',
    role: 'Blogger',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'I was skeptical at first, but this course delivered beyond my expectations. My traffic has tripled!'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
          <p className="text-xl text-gray-600">Join hundreds of successful students</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-custom-lg shadow-xl p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={current.image}
                alt={current.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-3">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#E50914" className="text-primary" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-4 italic">"{current.text}"</p>
                <div>
                  <p className="font-semibold text-dark">{current.name}</p>
                  <p className="text-sm text-gray-600">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}