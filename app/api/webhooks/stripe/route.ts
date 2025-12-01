import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase'
import { hashPassword, generateToken } from '@/lib/auth'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      const { customer_email, metadata, amount_total, id } = session
      const { fullName, country } = metadata || {}

      if (!customer_email || !fullName) {
        throw new Error('Missing customer information')
      }

      // Check if user already exists
      const { data: existingUser } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', customer_email)
        .single()

      let userId: string

      if (existingUser) {
        // Update existing user to grant access
        const { data: updatedUser, error: updateError } = await supabaseAdmin
          .from('users')
          .update({ has_access: true })
          .eq('email', customer_email)
          .select('id')
          .single()

        if (updateError) throw updateError
        userId = updatedUser.id
      } else {
        // Create new user with random password (they'll set it via email)
        const tempPassword = Math.random().toString(36).slice(-12)
        const hashedPassword = await hashPassword(tempPassword)

        const { data: newUser, error: createError } = await supabaseAdmin
          .from('users')
          .insert({
            email: customer_email,
            full_name: fullName,
            password_hash: hashedPassword,
            has_access: true,
            role: 'student',
          })
          .select('id')
          .single()

        if (createError) throw createError
        userId = newUser.id

        // TODO: Send welcome email with password setup link
      }

      // Record purchase
      await supabaseAdmin.from('purchases').insert({
        user_id: userId,
        stripe_payment_id: id,
        amount: (amount_total || 0) / 100,
        currency: 'USD',
        status: 'completed',
        payment_method: 'stripe',
      })

      // Track analytics event
      await supabaseAdmin.from('analytics_events').insert({
        user_id: userId,
        event_type: 'purchase_completed',
        event_data: {
          amount: (amount_total || 0) / 100,
          payment_method: 'stripe',
          country,
        },
      })

      console.log('Payment processed successfully for:', customer_email)
    } catch (error: any) {
      console.error('Error processing payment:', error)
      return NextResponse.json(
        { error: 'Failed to process payment' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}

export const config = {
  api: {
    bodyParser: false,
  },
}