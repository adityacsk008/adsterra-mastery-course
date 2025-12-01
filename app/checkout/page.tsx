'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreditCard, Shield, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'crypto'>('stripe')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          paymentMethod
        })
      })

      const data = await response.json()

      if (data.success) {
        if (paymentMethod === 'stripe' && data.sessionUrl) {
          window.location.href = data.sessionUrl
        } else if (paymentMethod === 'paypal' && data.approvalUrl) {
          window.location.href = data.approvalUrl
        } else if (paymentMethod === 'crypto' && data.checkoutUrl) {
          window.location.href = data.checkoutUrl
        }
      } else {
        toast.error(data.message || 'Payment failed')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const included = [
    '5 Comprehensive Modules',
    '4+ Hours of Video Content',
    'Campaign Templates',
    'Optimization Checklist',
    'Private Support Group',
    'Lifetime Access',
    'Certificate of Completion'
  ]

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Complete Your Enrollment</h1>
            <p className="text-xl text-gray-600">Join 500+ students mastering Adsterra</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Order Summary */}
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src="https://via.placeholder.com/120x80/E50914/FFFFFF?text=Course"
                    alt="Course"
                    className="rounded-custom"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Adsterra Mastery Course</h3>
                    <p className="text-sm text-gray-600">Complete digital marketing course</p>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$197.00</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Launch Discount (75%)</span>
                    <span>-$148.00</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">$49.00</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-custom border border-green-200">
                  <p className="text-sm text-green-800 font-semibold">
                    ✓ 7-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Payment Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <select 
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Payment Method</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 rounded-custom cursor-pointer hover:border-primary transition-colors">
                      <input 
                        type="radio"
                        name="payment"
                        value="stripe"
                        checked={paymentMethod === 'stripe'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4"
                      />
                      <CreditCard size={20} />
                      <span className="flex-1">Credit / Debit Card</span>
                      <div className="flex gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Visa</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Mastercard</span>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-custom cursor-pointer hover:border-primary transition-colors">
                      <input 
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4"
                      />
                      <span className="flex-1">PayPal</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">PayPal</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 rounded-custom cursor-pointer hover:border-primary transition-colors">
                      <input 
                        type="radio"
                        name="payment"
                        value="crypto"
                        checked={paymentMethod === 'crypto'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4"
                      />
                      <span className="flex-1">Cryptocurrency</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">BTC/ETH</span>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : 'Complete Purchase - $49'}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield size={16} className="text-green-600" />
                  <span>Secure SSL encrypted payment</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}