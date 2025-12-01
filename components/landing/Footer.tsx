import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Adsterra Mastery</h3>
            <p className="text-gray-400 text-sm">
              Become an Adsterra expert and start earning with high-converting ad campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#curriculum" className="text-gray-400 hover:text-primary transition-colors">
                  Course Curriculum
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-400 hover:text-primary transition-colors">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-primary" />
                <a href="https://wa.me/918294523068" className="hover:text-primary transition-colors">
                  +91 8294523068
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-primary" />
                <a href="mailto:nnafeesaha@gmail.com" className="hover:text-primary transition-colors">
                  nnafeesaha@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get tips, updates, and exclusive offers delivered to your inbox
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-custom bg-gray-800 border border-gray-700 focus:border-primary focus:outline-none text-sm"
              />
              <button type="submit" className="btn-primary px-6 py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Adsterra Mastery. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ for aspiring digital marketers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}