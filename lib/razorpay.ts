// Razorpay Configuration
// Test Keys - Replace with live keys in production

export const RAZORPAY_CONFIG = {
  keyId: 'rzp_test_RXJ3MHcTkt08WH',
  keySecret: 'ECXbwK486ih003KGpKOUosIl',
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

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw error
  }
}

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export const openRazorpayCheckout = async (
  options: RazorpayOptions,
  onSuccess: (response: any) => void,
  onFailure: (error: any) => void
) => {
  const isLoaded = await loadRazorpayScript()

  if (!isLoaded) {
    alert('Razorpay SDK failed to load. Please check your internet connection.')
    return
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
      onSuccess(response)
    },
    modal: {
      ondismiss: function () {
        onFailure({ error: 'Payment cancelled by user' })
      },
    },
  }

  // @ts-ignore
  const razorpay = new window.Razorpay(razorpayOptions)
  razorpay.open()
}