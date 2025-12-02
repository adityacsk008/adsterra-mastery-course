import { NextRequest, NextResponse } from 'next/server'

const RAZORPAY_KEY_ID = 'rzp_test_RXJ3MHcTkt08WH'
const RAZORPAY_KEY_SECRET = 'ECXbwK486ih003KGpKOUosIl'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency, receipt } = body

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
        currency,
        receipt,
        notes: {
          course: 'Adsterra Mastery',
        },
      }),
    })

    const order = await response.json()

    if (!response.ok) {
      throw new Error(order.error?.description || 'Failed to create order')
    }

    return NextResponse.json({
      success: true,
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