'use client'

import { useState } from 'react'
import { CreditCard, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface RazorpayCheckoutProps {
  amount: number
  courseName: string
  userEmail?: string
  userName?: string
  onSuccess?: (paymentId: string) => void
  onFailure?: (error: any) => void
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function RazorpayCheckout({
  amount,
  courseName,
  userEmail = '',
  userName = '',
  onSuccess,
  onFailure
}: RazorpayCheckoutProps) {
  const [loading, setLoading] = useState(false)

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    setLoading(true)

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        toast.error('Failed to load payment gateway. Please try again.')
        setLoading(false)
        return
      }

      // Create order on backend
      const orderResponse = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          currency: 'INR',
          receipt: `receipt_${Date.now()}`
        })
      })

      if (!orderResponse.ok) {
        throw new Error('Failed to create order')
      }

      const order = await orderResponse.json()

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Adsterra Mastery Course',
        description: courseName,
        order_id: order.id,
        prefill: {
          name: userName,
          email: userEmail,
          contact: ''
        },
        theme: {
          color: '#E50914'
        },
        handler: async function (response: any) {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            })

            if (verifyResponse.ok) {
              toast.success('Payment successful! 🎉')
              if (onSuccess) {
                onSuccess(response.razorpay_payment_id)
              }
            } else {
              throw new Error('Payment verification failed')
            }
          } catch (error) {
            console.error('Payment verification error:', error)
            toast.error('Payment verification failed. Please contact support.')
            if (onFailure) {
              onFailure(error)
            }
          } finally {
            setLoading(false)
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false)
            toast.error('Payment cancelled')
          }
        }
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error('Payment error:', error)
      toast.error('Failed to initiate payment. Please try again.')
      setLoading(false)
      if (onFailure) {
        onFailure(error)
      }
    }
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        <>
          <CreditCard size={20} />
          Pay ₹{amount}
        </>
      )}
    </button>
  )
}
