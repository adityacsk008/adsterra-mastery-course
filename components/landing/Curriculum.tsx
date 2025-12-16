'use client'

import { Lock, Play } from 'lucide-react'

export default function Curriculum() {
  const modules = [
    {
      id: 1,
      title: 'Module 1: Adsterra Account Creation',
      lessons: [
        { title: 'What We Will Learn?', locked: true },
        { title: 'Creating Your Adsterra Account', locked: true },
        { title: 'Account Verification Process', locked: true },
        { title: 'Dashboard Overview', locked: true },
      ]
    },
    {
      id: 2,
      title: 'Module 2: Traffic Automation',
      lessons: [
        { title: 'Downloading Files', locked: true },
        { title: 'Setting Up Workflow', locked: true },
        { title: 'Understanding Various Features', locked: true },
        { title: 'Automation Best Practices', locked: true },
      ]
    },
    {
      id: 3,
      title: 'Module 3: Earning Optimization & Safety',
      lessons: [
        { title: 'Maximizing Your Earnings', locked: true },
        { title: 'Safety Measures & Guidelines', locked: true },
        { title: 'Avoiding Common Mistakes', locked: true },
        { title: 'Account Protection Tips', locked: true },
      ]
    },
    {
      id: 4,
      title: 'Module 4: Adsterra Attributes',
      lessons: [
        { title: 'Understanding Ad Formats', locked: true },
        { title: 'Targeting Options', locked: true },
        { title: 'Campaign Settings', locked: true },
        { title: 'Performance Metrics', locked: true },
      ]
    },
    {
      id: 5,
      title: 'Module 5: Paid Traffic Using Adult Sites',
      lessons: [
        { title: 'Adult Traffic Sources', locked: true },
        { title: 'Campaign Setup for Adult Traffic', locked: true },
        { title: 'Optimization Strategies', locked: true },
        { title: 'Scaling Your Campaigns', locked: true },
      ]
    },
    {
      id: 6,
      title: 'Module 6: Withdraw from Adsterra',
      lessons: [
        { title: 'Payment Methods Overview', locked: true },
        { title: 'International Withdrawal Setup', locked: true },
        { title: 'Tax Considerations', locked: true },
        { title: 'Troubleshooting Payment Issues', locked: true },
      ]
    },
  ]

  return (
    <section id="curriculum" className="py-20 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Course <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            6 comprehensive modules covering everything from account creation to international withdrawals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module) => (
            <div key={module.id} className="bg-dark text-white rounded-custom-lg overflow-hidden">
              {/* Module Header */}
              <div className="bg-gradient-to-r from-primary to-red-700 p-6">
                <h3 className="text-xl font-bold">{module.title}</h3>
              </div>

              {/* Lessons */}
              <div className="p-4 space-y-2">
                {module.lessons.map((lesson, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-custom hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <Play size={16} className="text-gray-400" />
                      </div>
                      <span className="font-medium">{lesson.title}</span>
                    </div>
                    {lesson.locked && (
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Lock size={16} />
                        <span>LOCKED</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Hidden Features Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              🎁 <span className="text-primary">Advanced Hidden Features</span>
            </h3>
            <p className="text-lg text-gray-600">
              Exclusive bonus content to supercharge your Adsterra journey
            </p>
          </div>

          {/* Bonus Module Card */}
          <div className="bg-gradient-to-br from-gray-900 via-dark to-gray-900 text-white rounded-custom-lg overflow-hidden border-2 border-primary shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-red-700 p-6 text-center">
              <h4 className="text-2xl font-bold mb-2">🎁 BONUS MODULE</h4>
              <p className="text-lg opacity-90">Windows Desktop VPS (1 Month)</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="inline-block bg-primary/20 border-2 border-primary rounded-custom-lg px-8 py-4">
                  <div className="text-sm text-gray-300 mb-1">💰 Market Price</div>
                  <div className="text-4xl font-bold text-primary">$11.69<span className="text-xl text-gray-400">/month</span></div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-custom p-4 border border-gray-700">
                  <div className="text-primary font-semibold mb-1">💾 RAM</div>
                  <div className="text-2xl font-bold">8 GB</div>
                </div>

                <div className="bg-gray-800 rounded-custom p-4 border border-gray-700">
                  <div className="text-primary font-semibold mb-1">⚡ CPU Cores</div>
                  <div className="text-2xl font-bold">4 Cores</div>
                </div>

                <div className="bg-gray-800 rounded-custom p-4 border border-gray-700">
                  <div className="text-primary font-semibold mb-1">💿 SSD Storage</div>
                  <div className="text-2xl font-bold">140 GB</div>
                </div>

                <div className="bg-gray-800 rounded-custom p-4 border border-gray-700">
                  <div className="text-primary font-semibold mb-1">🌐 Bandwidth</div>
                  <div className="text-2xl font-bold">200 Mbps</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>200 Mbps Unmetered Bandwidth</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Once per 4 Weeks Backup</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Windows 10 / 11 Evaluation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No Setup Fee</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Default Shared IP</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-custom border border-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Dedicated IP upgrade: $2 / IP / Month</span>
                </div>
              </div>

              {/* Help Text */}
              <div className="bg-gradient-to-r from-primary/20 to-red-700/20 border-2 border-primary rounded-custom-lg p-6 text-center">
                <div className="text-2xl mb-2">👉</div>
                <p className="text-lg font-semibold">
                  Help for running automation software smoothly
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              ✨ This VPS bonus is included FREE with your course purchase!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#pricing" className="btn-primary text-lg px-8 py-4 inline-block">
            Get Instant Access Now
          </a>
          <p className="text-sm text-gray-600 mt-4">
            🔒 Secure checkout • 7-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}