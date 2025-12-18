'use client'

import { CheckCircle, Clock, Play, Lock } from 'lucide-react'

export default function Curriculum() {
  const modules = [
    {
      id: 1,
      title: 'Adsterra Account Creation',
      duration: '45 min',
      lessons: 4,
      description: 'Learn how to create and verify your Adsterra account',
      topics: [
        'What We Will Learn?',
        'Creating Your Adsterra Account',
        'Account Verification Process',
        'Dashboard Overview'
      ]
    },
    {
      id: 2,
      title: 'Traffic Automation',
      duration: '60 min',
      lessons: 4,
      description: 'Master automation tools and workflows',
      topics: [
        'Downloading Files',
        'Setting Up Workflow',
        'Understanding Various Features',
        'Automation Best Practices'
      ]
    },
    {
      id: 3,
      title: 'Earning Optimization & Safety',
      duration: '55 min',
      lessons: 4,
      description: 'Maximize earnings while staying safe',
      topics: [
        'Maximizing Your Earnings',
        'Safety Measures & Guidelines',
        'Avoiding Common Mistakes',
        'Account Protection Tips'
      ]
    },
    {
      id: 4,
      title: 'Adsterra Attributes',
      duration: '50 min',
      lessons: 4,
      description: 'Deep dive into Adsterra features',
      topics: [
        'Understanding Ad Formats',
        'Targeting Options',
        'Campaign Settings',
        'Performance Metrics'
      ]
    },
    {
      id: 5,
      title: 'Paid Traffic Using Adult Sites',
      duration: '65 min',
      lessons: 4,
      description: 'Scale with adult traffic sources',
      topics: [
        'Adult Traffic Sources',
        'Campaign Setup for Adult Traffic',
        'Optimization Strategies',
        'Scaling Your Campaigns'
      ]
    },
    {
      id: 6,
      title: 'Withdraw from Adsterra',
      duration: '40 min',
      lessons: 4,
      description: 'Get your money internationally',
      topics: [
        'Payment Methods Overview',
        'International Withdrawal Setup',
        'Tax Considerations',
        'Troubleshooting Payment Issues'
      ]
    }
  ]

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Course <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            6 comprehensive modules with 24 lessons covering everything from setup to withdrawal
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {modules.map((module) => (
            <div 
              key={module.id}
              className="bg-white border-2 border-gray-200 rounded-custom-lg overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              {/* Module Header */}
              <div className="bg-gradient-to-r from-primary to-red-700 text-white p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                    Module {module.id}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} />
                    <span>{module.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm opacity-90">{module.description}</p>
              </div>

              {/* Module Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Play size={16} className="text-primary" />
                    <span>{module.lessons} Lessons</span>
                  </div>
                </div>

                {/* Topics List */}
                <div className="space-y-2">
                  {module.topics.map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Module Footer */}
              <div className="px-6 pb-6">
                <button className="w-full bg-light text-dark font-semibold py-3 rounded-custom hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white">
                  <Lock size={16} />
                  Unlock with Purchase
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Hidden Features Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
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
            <div className="bg-gradient-to-r from-primary to-red-700 p-8 text-center">
              <div className="text-5xl mb-3">🎁</div>
              <h4 className="text-3xl font-bold mb-2">BONUS MODULE</h4>
              <p className="text-xl opacity-90">Windows Desktop VPS (1 Month FREE)</p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Price */}
              <div className="text-center mb-10">
                <div className="inline-block bg-primary/20 border-2 border-primary rounded-custom-lg px-10 py-6">
                  <div className="text-sm text-gray-300 mb-2">💰 Market Value</div>
                  <div className="text-5xl font-bold text-primary">$11.69<span className="text-2xl text-gray-400">/mo</span></div>
                  <div className="text-green-400 font-semibold mt-2">✨ FREE for You!</div>
                </div>
              </div>

              {/* Specifications Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-gray-800 rounded-custom-lg p-6 border border-gray-700 hover:border-primary transition-colors">
                  <div className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">💾</span>
                    <span>RAM Memory</span>
                  </div>
                  <div className="text-3xl font-bold">8 GB</div>
                </div>

                <div className="bg-gray-800 rounded-custom-lg p-6 border border-gray-700 hover:border-primary transition-colors">
                  <div className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span>CPU Power</span>
                  </div>
                  <div className="text-3xl font-bold">4 Cores</div>
                </div>

                <div className="bg-gray-800 rounded-custom-lg p-6 border border-gray-700 hover:border-primary transition-colors">
                  <div className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">💿</span>
                    <span>SSD Storage</span>
                  </div>
                  <div className="text-3xl font-bold">140 GB</div>
                </div>

                <div className="bg-gray-800 rounded-custom-lg p-6 border border-gray-700 hover:border-primary transition-colors">
                  <div className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🌐</span>
                    <span>Bandwidth</span>
                  </div>
                  <div className="text-3xl font-bold">200 Mbps</div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-3 mb-10">
                {[
                  '200 Mbps Unmetered Bandwidth',
                  'Once per 4 Weeks Backup',
                  'Windows 10 / 11 Evaluation',
                  'No Setup Fee',
                  'Default Shared IP',
                  'Dedicated IP: $2/IP/Month'
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-custom border border-gray-700"
                  >
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Help Text */}
              <div className="bg-gradient-to-r from-primary/20 to-red-700/20 border-2 border-primary rounded-custom-lg p-8 text-center">
                <div className="text-4xl mb-3">👉</div>
                <p className="text-xl font-semibold mb-2">
                  Perfect for Running Automation Software
                </p>
                <p className="text-gray-300">
                  Run your traffic automation tools 24/7 without interruption
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#pricing" className="btn-primary text-lg px-10 py-5 inline-block">
            Get Instant Access Now
          </a>
          <p className="text-sm text-gray-600 mt-4">
            🔒 Secure checkout • 3-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}