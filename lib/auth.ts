import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET!

export interface JWTPayload {
  userId: string
  email: string
  role: 'student' | 'admin'
}

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10)
}

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    return null
  }
}

export const generateVideoToken = (userId: string, videoId: string): string => {
  return jwt.sign({ userId, videoId }, JWT_SECRET, { expiresIn: '2h' })
}

export const verifyVideoToken = (
  token: string
): { userId: string; videoId: string } | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; videoId: string }
  } catch (error) {
    return null
  }
}