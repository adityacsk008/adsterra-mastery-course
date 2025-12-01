import Hero from '@/components/landing/Hero'
import Benefits from '@/components/landing/Benefits'
import Curriculum from '@/components/landing/Curriculum'
import Bonuses from '@/components/landing/Bonuses'
import Testimonials from '@/components/landing/Testimonials'
import Instructor from '@/components/landing/Instructor'
import Pricing from '@/components/landing/Pricing'
import FAQ from '@/components/landing/FAQ'
import Footer from '@/components/landing/Footer'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Curriculum />
      <Bonuses />
      <Testimonials />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
      <CookieConsent />
    </main>
  )
}