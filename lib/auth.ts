// Authentication utilities - Demo mode
// Add proper auth when you're ready

export const hashPassword = async (password: string): Promise<string> => {
  return password // Demo mode
}

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return password === hashedPassword // Demo mode
}

export const generateToken = (payload: any): string => {
  return 'demo-token' // Demo mode
}

export const verifyToken = (token: string): any | null => {
  return { userId: 'demo', email: 'demo@example.com', role: 'student' } // Demo mode
}

export const generateVideoToken = (userId: string, videoId: string): string => {
  return 'demo-video-token' // Demo mode
}

export const verifyVideoToken = (token: string): any | null => {
  return { userId: 'demo', videoId: 'demo' } // Demo mode
}