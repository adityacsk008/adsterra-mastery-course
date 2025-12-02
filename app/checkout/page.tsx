'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreditCard, Shield, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { createRazorpayOrder, openRazorpayCheckout } from '@/lib/razorpay'

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [currency, setCurrency] = useState<'INR' | 'USD'>('USD')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: ''
  })

  const prices = {
    USD: 49,
    INR: 3999
  }

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.fullName || !formData.email || !formData.country) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)

    try {
      // Create Razorpay order
      const orderData = await createRazorpayOrder(prices[currency], currency)

      if (!orderData.success) {
        throw new Error('Failed to create order')
      }

      // Open Razorpay checkout
      await openRazorpayCheckout(
        {
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'Adsterra Mastery',
          description: 'Complete Adsterra Marketing Course',
          orderId: orderData.orderId,
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone,
          },
          notes: {
            course: 'Adsterra Mastery',
            country: formData.country,
          },
        },
        async (response) => {
          // Payment successful
          try {
            const verifyResponse = await fetch('/api/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            })

            const verifyData = await verifyResponse.json()

            if (verifyData.success) {
              toast.success('Payment successful! Redirecting to dashboard...')
              setTimeout(() => {
                router.push('/dashboard')
              }, 2000)
            } else {
              toast.error('Payment verification failed')
            }
          } catch (error) {
            toast.error('Payment verification failed')
          }
        },
        (error) => {
          // Payment failed
          toast.error(error.error || 'Payment cancelled')
          setLoading(false)
        }
      )
    } catch (error: any) {
      toast.error(error.message || 'Payment failed')
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

                {/* Currency Selector */}
                <div className="border-t pt-4 mb-4">
                  <label className="block text-sm font-medium mb-2">Select Currency</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setCurrency('USD')}
                      className={`flex-1 px-4 py-3 rounded-custom border-2 transition-all ${
                        currency === 'USD' 
                          ? 'border-primary bg-primary/5 text-primary font-semibold' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      USD $49
                    </button>
                    <button
                      onClick={() => setCurrency('INR')}
                      className={`flex-1 px-4 py-3 rounded-custom border-2 transition-all ${
                        currency === 'INR' 
                          ? 'border-primary bg-primary/5 text-primary font-semibold' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      INR ₹3,999
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{currency === 'USD' ? '$197' : '₹15,999'}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Launch Discount (75%)</span>
                    <span>-{currency === 'USD' ? '$148' : '₹11,999'}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-bold pt-2 border-t">
                    <span>Total</span>
                    <span className="text-primary">
                      {currency === 'USD' ? `$${prices.USD}` : `₹${prices.INR}`}
                    </span>
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

              <form onSubmit={handleRazorpayPayment} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
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
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
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
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country *</label>
                  <select 
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-custom p-4">
                  <div className="flex items-start gap-3">
                    <CreditCard className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">Secure Payment via Razorpay</p>
                      <p>Supports Credit/Debit Cards, UPI, Net Banking, and Wallets</p>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : `Pay ${currency === 'USD' ? `$${prices.USD}` : `₹${prices.INR}`}`}
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