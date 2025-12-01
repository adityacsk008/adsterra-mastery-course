import { Zap, TrendingUp, Clock, HeadphonesIcon } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Easy Setup',
    description: 'Get started in minutes with step-by-step guidance'
  },
  {
    icon: TrendingUp,
    title: 'High CPM',
    description: 'Learn strategies to maximize your earnings'
  },
  {
    icon: Clock,
    title: 'Lifetime Access',
    description: 'Access course materials forever, including updates'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support Group',
    description: 'Join our private community for ongoing support'
  }
]

export default function Benefits() {
  return (
    <section className="py-16 bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-white rounded-custom-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}