// Authentication Utilities

export interface User {
  id: string
  username: string
  email: string
  fullName: string
  purchaseDate: string
  courseAccess: boolean
  expiryDate?: string
}

// Generate unique username from email
export const generateUsername = (email: string): string => {
  const prefix = email.split('@')[0]
  const randomNum = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}${randomNum}`
}

// Generate secure random password
export const generatePassword = (length: number = 12): string => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*'
  
  const allChars = uppercase + lowercase + numbers + symbols
  let password = ''
  
  // Ensure at least one of each type
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += numbers[Math.floor(Math.random() * numbers.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]
  
  // Fill the rest randomly
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  
  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Hash password (use bcrypt in production)
export const hashPassword = async (password: string): Promise<string> => {
  // TODO: Implement actual bcrypt hashing
  // For now, return base64 encoded (NOT SECURE - use bcrypt in production)
  return btoa(password)
}

// Verify password
export const verifyPassword = async (password: string, hash: string): Promise<boolean> => {
  // TODO: Implement actual bcrypt verification
  return btoa(password) === hash
}

// Create user credentials after payment
export const createUserCredentials = async (email: string, fullName: string) => {
  const username = generateUsername(email)
  const password = generatePassword()
  const hashedPassword = await hashPassword(password)
  
  const user: User = {
    id: `user_${Date.now()}`,
    username,
    email,
    fullName,
    purchaseDate: new Date().toISOString(),
    courseAccess: true
  }
  
  return {
    user,
    credentials: {
      username,
      password, // Send this to user via email
      hashedPassword // Store this in database
    }
  }
}

// Send credentials email
export const sendCredentialsEmail = async (
  email: string, 
  username: string, 
  password: string,
  fullName: string
) => {
  const emailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #E50914; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f8f8; padding: 30px; border-radius: 0 0 8px 8px; }
        .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #E50914; }
        .button { display: inline-block; background: #E50914; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Welcome to Adsterra Mastery!</h1>
        </div>
        <div class="content">
          <h2>Hi ${fullName},</h2>
          <p>Thank you for purchasing the Adsterra Mastery course! Your payment has been confirmed.</p>
          
          <p>Here are your login credentials to access the course:</p>
          
          <div class="credentials">
            <h3>🔑 Your Login Credentials</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p><strong>Login URL:</strong> <a href="https://adsterra-mastery-course.vercel.app/login">Click here to login</a></p>
          </div>
          
          <p><strong>⚠️ Important:</strong></p>
          <ul>
            <li>Keep these credentials safe and secure</li>
            <li>Do not share your login details with anyone</li>
            <li>You can change your password after logging in</li>
            <li>Lifetime access to all course content</li>
          </ul>
          
          <a href="https://adsterra-mastery-course.vercel.app/login" class="button">
            Login to Dashboard →
          </a>
          
          <p>If you have any questions or need help, contact us:</p>
          <p>📧 Email: Adityaenigma92@gmail.com<br>
          📱 WhatsApp: +91 8294523068</p>
          
          <div class="footer">
            <p>© 2025 Adsterra Mastery. All rights reserved.</p>
            <p>Made with ❤️ for aspiring digital marketers</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
  
  // TODO: Implement actual email sending (SendGrid, Resend, etc.)
  console.log('Email would be sent to:', email)
  console.log('Content:', emailContent)
  
  return {
    success: true,
    message: 'Credentials email sent successfully'
  }
}

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('authToken')
}

// Get current user
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null
  
  const username = localStorage.getItem('username')
  if (!username) return null
  
  // TODO: Fetch from database
  return {
    id: 'demo-user',
    username,
    email: 'demo@example.com',
    fullName: 'Demo User',
    purchaseDate: new Date().toISOString(),
    courseAccess: true
  }
}

// Logout user
export const logout = () => {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('authToken')
  localStorage.removeItem('username')
  window.location.href = '/login'
}