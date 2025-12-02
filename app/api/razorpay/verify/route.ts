import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const RAZORPAY_KEY_SECRET = 'ECXbwK486ih003KGpKOUosIl'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`
    const generated_signature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex')

    if (generated_signature === razorpay_signature) {
      // Payment verified successfully
      // Here you would:
      // 1. Create user account
      // 2. Grant course access
      // 3. Send confirmation email
      // 4. Record payment in database

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
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