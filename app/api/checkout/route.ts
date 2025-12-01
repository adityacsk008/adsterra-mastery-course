import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, country, paymentMethod } = body

    // Validate input
    if (!fullName || !email || !country || !paymentMethod) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    const coursePrice = parseInt(process.env.COURSE_PRICE || '49')
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    if (paymentMethod === 'stripe') {
      // Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Adsterra Mastery Course',
                description: 'Complete digital marketing course with lifetime access',
                images: [`${appUrl}/course-image.jpg`],
              },
              unit_amount: coursePrice * 100, // Convert to cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${appUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${appUrl}/checkout?canceled=true`,
        customer_email: email,
        metadata: {
          fullName,
          country,
        },
      })

      return NextResponse.json({
        success: true,
        sessionUrl: session.url,
        sessionId: session.id,
      })
    } else if (paymentMethod === 'paypal') {
      // PayPal integration would go here
      // For now, return placeholder
      return NextResponse.json({
        success: true,
        approvalUrl: `${appUrl}/dashboard`, // Replace with actual PayPal URL
        message: 'PayPal integration pending',
      })
    } else if (paymentMethod === 'crypto') {
      // Coinbase Commerce integration would go here
      return NextResponse.json({
        success: true,
        checkoutUrl: `${appUrl}/dashboard`, // Replace with actual Coinbase URL
        message: 'Crypto payment integration pending',
      })
    }

    return NextResponse.json(
      { success: false, message: 'Invalid payment method' },
      { status: 400 }
    )
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Checkout failed' },
      { status: 500 }
    )
  }
}