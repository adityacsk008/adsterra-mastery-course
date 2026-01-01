import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for demo (replace with database in production)
const progressStore = new Map<string, any>()

export async function GET(request: NextRequest) {
  try {
    // Get user from session/auth (placeholder)
    const userId = 'demo-user' // Replace with actual auth
    
    const userProgress = progressStore.get(userId) || {}
    
    return NextResponse.json({
      success: true,
      progress: userProgress
    })
  } catch (error) {
    console.error('Progress GET error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch progress' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { lessonId, completed, lastPosition } = body
    
    if (!lessonId) {
      return NextResponse.json(
        { success: false, error: 'Lesson ID required' },
        { status: 400 }
      )
    }
    
    // Get user from session/auth (placeholder)
    const userId = 'demo-user' // Replace with actual auth
    
    // Get existing progress
    const userProgress = progressStore.get(userId) || {}
    
    // Update progress
    userProgress[lessonId] = {
      completed: completed ?? userProgress[lessonId]?.completed ?? false,
      lastPosition: lastPosition ?? userProgress[lessonId]?.lastPosition ?? 0,
      updatedAt: new Date().toISOString()
    }
    
    // Save progress
    progressStore.set(userId, userProgress)
    
    return NextResponse.json({
      success: true,
      progress: userProgress[lessonId]
    })
  } catch (error) {
    console.error('Progress POST error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}
