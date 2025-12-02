'use client'

import { Mail, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import DashboardLayout from '@/components/DashboardLayout'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Support ticket submitted successfully!')
      setFormData({ subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to submit ticket')
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-gray-600 mt-1">Get help with your course or account</p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="https://wa.me/918294523068?text=Hi,%20I%20need%20help%20with%20my%20Adsterra%20Mastery%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">WhatsApp Support</h3>
                <p className="text-gray-600 text-sm">Get instant help via WhatsApp</p>
                <p className="text-primary font-semibold mt-2">+91 8294523068</p>
              </div>
            </div>
          </a>

          <a 
            href="mailto:nnafeesaha@gmail.com"
            className="card hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Email Support</h3>
                <p className="text-gray-600 text-sm">Send us an email</p>
                <p className="text-primary font-semibold mt-2">nnafeesaha@gmail.com</p>
              </div>
            </div>
          </a>
        </div>

        {/* Support Ticket Form */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Submit a Support Ticket</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                placeholder="What do you need help with?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none resize-none"
                rows={6}
                placeholder="Describe your issue in detail..."
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center gap-2"
            >
              <Send size={18} />
              {loading ? 'Submitting...' : 'Submit Ticket'}
            </button>
          </form>
        </div>

        {/* FAQ */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">How do I access my course?</h4>
              <p className="text-gray-600 text-sm">
                After purchase, you'll receive instant access to the dashboard. Click on "My Courses" to start learning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Can I download the videos?</h4>
              <p className="text-gray-600 text-sm">
                Videos are available for streaming only. However, you can download all course resources and templates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How do I get my certificate?</h4>
              <p className="text-gray-600 text-sm">
                Complete all lessons to unlock your certificate. You can download it from your profile or courses page.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's your refund policy?</h4>
              <p className="text-gray-600 text-sm">
                We offer a 7-day money-back guarantee. Contact support if you're not satisfied with the course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}