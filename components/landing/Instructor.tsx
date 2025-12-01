import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Instructor() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Your Instructor</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-custom-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://i.pravatar.cc/500?img=12"
                  alt="Aditya - Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-custom-lg shadow-xl">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">Aditya</h3>
                <p className="text-xl text-primary font-semibold">Digital Marketing Expert & Adsterra Specialist</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Digital marketer & Adsterra specialist with 3+ years of proven results helping creators monetize traffic globally. I've helped hundreds of students achieve their financial goals through strategic ad campaigns.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My mission is to demystify digital advertising and empower entrepreneurs to build sustainable online income streams. This course is the culmination of years of testing, optimization, and real-world experience.
              </p>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:nnafeesaha@gmail.com"
                  className="w-12 h-12 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}