import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Demo mode - just return success
  return NextResponse.json({ received: true, demo: true })
}