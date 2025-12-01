import { CheckCircle, Clock } from 'lucide-react'

const modules = [
  {
    title: 'Module 1: Adsterra Fundamentals',
    duration: '45 min',
    lessons: [
      'Understanding Adsterra Platform',
      'Account Setup & Verification',
      'Dashboard Navigation',
      'Payment Methods Setup'
    ]
  },
  {
    title: 'Module 2: Campaign Creation',
    duration: '60 min',
    lessons: [
      'Creating Your First Campaign',
      'Ad Format Selection',
      'Targeting Options',
      'Budget & Bidding Strategies'
    ]
  },
  {
    title: 'Module 3: Traffic Optimization',
    duration: '55 min',
    lessons: [
      'Analyzing Campaign Performance',
      'A/B Testing Strategies',
      'Scaling Winning Campaigns',
      'Blacklisting & Whitelisting'
    ]
  },
  {
    title: 'Module 4: Advanced Techniques',
    duration: '50 min',
    lessons: [
      'High-Converting Landing Pages',
      'Retargeting Strategies',
      'International Traffic Tips',
      'Compliance & Best Practices'
    ]
  },
  {
    title: 'Module 5: Monetization & Scaling',
    duration: '40 min',
    lessons: [
      'Maximizing ROI',
      'Multiple Campaign Management',
      'Automation Tools',
      'Withdrawal & Payment Processing'
    ]
  }
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Course Curriculum</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive 7-day program designed to take you from beginner to expert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="card hover:border-primary border-2 border-transparent transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-dark">{module.title}</h3>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <Clock size={16} />
                  {module.duration}
                </div>
              </div>
              <ul className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 px-6 py-3 rounded-custom">
            <p className="text-primary font-semibold">
              Total Duration: 4+ Hours of Premium Content
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}