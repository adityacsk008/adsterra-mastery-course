import { NextRequest, NextResponse } from 'next/server'

// LIVE Razorpay Credentials
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_Rt4YAKorcWpXT6'
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'eVlJ4qnCKC4vDY3pmEXaG9wY'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency, receipt } = body

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid amount' },
        { status: 400 }
      )
    }

    // Create Razorpay order
    const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64')
    
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount,
        currency: currency || 'INR',
        receipt: receipt || `receipt_${Date.now()}`,
        notes: {
          course: 'Adsterra Mastery Course',
          email: 'Adityaenigma92@gmail.com'
        },
      }),
    })

    const order = await response.json()

    if (!response.ok) {
      console.error('Razorpay API error:', order)
      throw new Error(order.error?.description || 'Failed to create order')
    }

    return NextResponse.json({
      success: true,
      id: order.id,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    })
  } catch (error: any) {
    console.error('Razorpay order creation error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}
