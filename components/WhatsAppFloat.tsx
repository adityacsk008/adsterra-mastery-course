'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const phoneNumber = '918294523068'
  const defaultMessage = 'Hi, I need help with Adsterra Mastery course'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group"
      aria-label="WhatsApp Support"
    >
      <MessageCircle size={32} className="text-white" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-dark text-white px-4 py-2 rounded-custom text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Need Help? Chat on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-dark rotate-45" />
      </div>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </a>
  )
}