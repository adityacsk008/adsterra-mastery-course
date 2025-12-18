'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { User, Mail, Phone, Globe, Calendar, Shield, Award, Download, CreditCard, LogOut, Camera, Save, X } from 'lucide-react'
import toast from 'react-hot-toast'
import DashboardLayout from '@/components/DashboardLayout'

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    fullName: 'Aditya Kumar',
    email: 'Adityaenigma92@gmail.com',
    phone: '+91 8294523068',
    country: 'India',
    whatsapp: '+91 8294523068',
    language: 'English',
    bio: 'Digital marketing enthusiast learning Adsterra',
    joinedDate: '2025-01-15',
    verified: true,
    courseCompleted: false,
    progress: 85,
    completedLessons: 17,
    totalLessons: 20
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [payments, setPayments] = useState([
    {
      id: 'PAY001',
      date: '2025-01-15',
      course: 'Adsterra Mastery',
      amount: '$49',
      method: 'Razorpay',
      status: 'Paid'
    }
  ])

  const handleProfileUpdate = async () => {
    setLoading(true)
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('✅ Profile updated successfully')
      setEditMode(false)
    } catch (error) {
      toast.error('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    if (passwordData.newPassword.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }

    setLoading(true)
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('🔒 Your password has been changed')
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    } catch (error) {
      toast.error('Failed to change password')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('authToken')
      router.push('/')
    }
  }

  const handleDeleteAccount = () => {
    if (confirm('Are you sure? This action cannot be undone.')) {
      if (confirm('Final confirmation: Delete your account permanently?')) {
        toast.success('Account deletion request submitted')
        router.push('/')
      }
    }
  }

  const downloadInvoice = (paymentId: string) => {
    toast.success('Invoice downloaded')
    // Generate PDF logic here
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-gray-600 mt-1">Manage your personal information and account settings</p>
        </div>

        {/* Profile Overview Card */}
        <div className="card">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary">
                {profileData.fullName.split(' ').map(n => n[0]).join('')}
              </div>
              {editMode && (
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-red-700">
                  <Camera size={20} />
                </button>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">{profileData.fullName}</h2>
              <p className="text-gray-600">{profileData.email}</p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {profileData.verified && (
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <Shield size={14} />
                    Verified Student
                  </span>
                )}
                {profileData.courseCompleted && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    <Award size={14} />
                    Adsterra Pro
                  </span>
                )}
              </div>
            </div>

            <button 
              onClick={() => setEditMode(!editMode)}
              className={editMode ? 'btn-secondary' : 'btn-primary'}
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Edit Profile Section */}
        {editMode && (
          <div className="card">
            <h3 className="text-xl font-semibold mb-6">Edit Profile Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text"
                  value={profileData.fullName}
                  onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <select 
                  value={profileData.country}
                  onChange={(e) => setProfileData({...profileData, country: e.target.value})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp Contact</label>
                <input 
                  type="tel"
                  value={profileData.whatsapp}
                  onChange={(e) => setProfileData({...profileData, whatsapp: e.target.value})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Display Language</label>
                <select 
                  value={profileData.language}
                  onChange={(e) => setProfileData({...profileData, language: e.target.value})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Bio (max 150 characters)</label>
                <textarea 
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value.slice(0, 150)})}
                  className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none resize-none"
                  rows={3}
                  maxLength={150}
                />
                <p className="text-sm text-gray-500 mt-1">{profileData.bio.length}/150</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={handleProfileUpdate}
                disabled={loading}
                className="btn-primary flex items-center gap-2"
              >
                <Save size={18} />
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button 
                onClick={() => setEditMode(false)}
                className="btn-secondary flex items-center gap-2"
              >
                <X size={18} />
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Course Progress */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Course Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Adsterra Mastery</span>
                <span className="text-primary font-semibold">{profileData.progress}% Complete</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-primary h-full transition-all duration-500"
                  style={{ width: `${profileData.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {profileData.completedLessons} / {profileData.totalLessons} Lessons completed
              </p>
            </div>
            <button 
              onClick={() => router.push('/dashboard')}
              className="btn-primary"
            >
              Continue Course
            </button>
          </div>
        </div>

        {/* Payment History */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Payment History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Course</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-light">
                    <td className="py-3 px-4">{payment.date}</td>
                    <td className="py-3 px-4">{payment.course}</td>
                    <td className="py-3 px-4 font-semibold">{payment.amount}</td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        ✅ {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => downloadInvoice(payment.id)}
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <Download size={16} />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Account Settings */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
          
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input 
              type="email"
              value={profileData.email}
              disabled
              className="w-full px-4 py-3 border rounded-custom bg-gray-100 cursor-not-allowed"
            />
            <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
          </div>

          {/* Password Change */}
          <div className="space-y-4 mb-6">
            <h4 className="font-semibold">Change Password</h4>
            <div>
              <label className="block text-sm font-medium mb-2">Current Password</label>
              <input 
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <input 
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm New Password</label>
              <input 
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 border rounded-custom focus:border-primary focus:outline-none"
              />
            </div>
            <button 
              onClick={handlePasswordChange}
              disabled={loading}
              className="btn-primary"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </div>

          {/* Delete Account */}
          <div className="pt-6 border-t">
            <h4 className="font-semibold text-red-600 mb-2">Danger Zone</h4>
            <p className="text-sm text-gray-600 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button 
              onClick={handleDeleteAccount}
              className="bg-red-600 text-white px-6 py-3 rounded-custom hover:bg-red-700 transition-all"
            >
              Delete My Account
            </button>
          </div>
        </div>

        {/* Support Links */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://wa.me/918294523068?text=Hi,%20I%20need%20help%20with%20my%20Adsterra%20Mastery%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border rounded-custom hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">WhatsApp Support</div>
                <div className="text-sm text-gray-600">Get instant help</div>
              </div>
            </a>

            <a 
              href="mailto:Adityaenigma92@gmail.com"
              className="flex items-center gap-3 p-4 border rounded-custom hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-semibold">Email Support</div>
                <div className="text-sm text-gray-600">Adityaenigma92@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}