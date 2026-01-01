// Razorpay Configuration - LIVE PRODUCTION KEYS

export const RAZORPAY_CONFIG = {
  keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_Rt4YAKorcWpXT6',
  keySecret: process.env.RAZORPAY_KEY_SECRET || 'eVlJ4qnCKC4vDY3pmEXaG9wY',
}

export interface RazorpayOptions {
  amount: number // in paise (multiply by 100)
  currency: 'INR' | 'USD'
  name: string
  description: string
  orderId?: string
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  notes?: Record<string, string>
  theme?: {
    color?: string
  }
}

export const createRazorpayOrder = async (
  amount: number,
  currency: 'INR' | 'USD' = 'INR',
  receipt?: string
) => {
  try {
    const response = await fetch('/api/razorpay/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paise
        currency,
        receipt: receipt || `receipt_${Date.now()}`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to create order')
    }

    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.message || 'Order creation failed')
    }
    
    return data
  } catch (error: any) {
    console.error('Error creating Razorpay order:', error)
    throw new Error(error.message || 'Failed to create payment order')
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if already loaded
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => {
      console.log('✅ Razorpay SDK loaded successfully')
      resolve(true)
    }
    script.onerror = () => {
      console.error('❌ Failed to load Razorpay SDK')
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export const openRazorpayCheckout = async (
  options: RazorpayOptions,
  onSuccess: (response: any) => void,
  onFailure: (error: any) => void
) => {
  try {
    const isLoaded = await loadRazorpayScript()

    if (!isLoaded) {
      throw new Error('Razorpay SDK failed to load. Please check your internet connection.')
    }

    const razorpayOptions = {
      key: RAZORPAY_CONFIG.keyId,
      amount: options.amount,
      currency: options.currency,
      name: options.name,
      description: options.description,
      order_id: options.orderId,
      prefill: options.prefill,
      notes: options.notes,
      theme: {
        color: options.theme?.color || '#E50914',
      },
      handler: function (response: any) {
        console.log('✅ Payment successful:', response)
        onSuccess(response)
      },
      modal: {
        ondismiss: function () {
          console.log('⚠️ Payment cancelled by user')
          onFailure({ error: 'Payment cancelled by user' })
        },
        escape: false,
        backdropclose: false,
      },
    }

    console.log('🚀 Opening Razorpay checkout with options:', {
      key: razorpayOptions.key,
      amount: razorpayOptions.amount,
      currency: razorpayOptions.currency,
      order_id: razorpayOptions.order_id
    })

    // @ts-ignore
    const razorpay = new window.Razorpay(razorpayOptions)
    razorpay.on('payment.failed', function (response: any) {
      console.error('❌ Payment failed:', response.error)
      onFailure(response.error)
    })
    razorpay.open()
  } catch (error: any) {
    console.error('❌ Razorpay checkout error:', error)
    onFailure({ error: error.message || 'Failed to open payment checkout' })
  }
}
