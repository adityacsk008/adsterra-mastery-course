import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// LIVE Razorpay Secret
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'eVlJ4qnCKC4vDY3pmEXaG9wY'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { success: false, message: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const generated_signature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex')

    if (generated_signature === razorpay_signature) {
      // Payment verified successfully
      console.log('✅ Payment verified:', {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        timestamp: new Date().toISOString()
      })

      // TODO: Implement these actions:
      // 1. Create user account in database
      // 2. Grant course access
      // 3. Send confirmation email to Adityaenigma92@gmail.com
      // 4. Record payment in database
      // 5. Send receipt to customer

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id
      })
    } else {
      console.error('❌ Invalid signature:', {
        expected: generated_signature,
        received: razorpay_signature
      })
      
      return NextResponse.json(
        { success: false, message: 'Invalid payment signature' },
        { status: 400 }
      )
    }
  } catch (error: any) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Verification failed' },
      { status: 500 }
    )
  }
}
