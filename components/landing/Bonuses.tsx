import { Gift, FileText, Users, Sparkles } from 'lucide-react'

const bonuses = [
  {
    icon: FileText,
    title: 'Campaign Templates',
    value: '$97 Value',
    description: 'Ready-to-use campaign templates that convert'
  },
  {
    icon: Sparkles,
    title: 'Optimization Checklist',
    value: '$47 Value',
    description: 'Step-by-step checklist for campaign optimization'
  },
  {
    icon: Users,
    title: 'Private Support Group',
    value: '$197 Value',
    description: 'Exclusive access to our community of experts'
  },
  {
    icon: Gift,
    title: 'Lifetime Updates',
    value: 'Priceless',
    description: 'Get all future course updates at no extra cost'
  }
]

export default function Bonuses() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-red-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Exclusive Bonuses Included</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get these premium bonuses when you enroll today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-custom-lg p-6 text-center space-y-4 hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{bonus.description}</p>
                  <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                    {bonus.value}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold">
            Total Bonus Value: <span className="text-yellow-300">$341+</span>
          </p>
          <p className="text-lg opacity-90 mt-2">Yours FREE when you enroll today!</p>
        </div>
      </div>
    </section>
  )
}