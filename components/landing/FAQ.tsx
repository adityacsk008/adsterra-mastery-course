'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is this course for beginners?',
    answer: 'Yes — it covers setup to advanced optimization with step-by-step videos and templates. No prior experience required.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We support international cards via Stripe, PayPal and crypto via Coinbase Commerce for maximum flexibility.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes — we offer a 7-day full refund policy, no questions asked. If you\'re not satisfied, simply contact us for a refund.'
  },
  {
    question: 'How long do I have access to the course?',
    answer: 'You get lifetime access to all course materials, including any future updates and additions at no extra cost.'
  },
  {
    question: 'Is there any ongoing support?',
    answer: 'Absolutely! You get access to our private support group where you can ask questions and get help from both instructors and fellow students.'
  },
  {
    question: 'Can I access the course on mobile?',
    answer: 'Yes, the course platform is fully responsive and works perfectly on all devices — desktop, tablet, and mobile.'
  },
  {
    question: 'How quickly can I start seeing results?',
    answer: 'Many students see their first results within 1-2 weeks of implementing the strategies. However, results vary based on effort and implementation.'
  },
  {
    question: 'Do I need any special tools or software?',
    answer: 'No expensive tools required. We\'ll show you how to get started with free and low-cost tools. All you need is an internet connection.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-custom-lg shadow-sm overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918294523068" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp: +91 8294523068
            </a>
            <a 
              href="mailto:nnafeesaha@gmail.com"
              className="btn-secondary"
            >
              Email: nnafeesaha@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}