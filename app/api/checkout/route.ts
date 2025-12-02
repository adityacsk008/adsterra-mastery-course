import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, country, paymentMethod } = body

    // Demo mode - just redirect to dashboard
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    return NextResponse.json({
      success: true,
      sessionUrl: `${appUrl}/dashboard`,
      message: 'Demo mode - Payment integration pending',
    })
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Checkout failed' },
      { status: 500 }
    )
  }
}