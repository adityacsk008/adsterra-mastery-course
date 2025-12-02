'use client'

import { useState } from 'react'
import { Users, DollarSign, BookOpen, TrendingUp, Download, Eye } from 'lucide-react'
import DashboardLayout from '@/components/DashboardLayout'

export default function AdminPanel() {
  const [stats] = useState({
    totalStudents: 523,
    totalRevenue: 25627,
    activeCourses: 1,
    completionRate: 78
  })

  const [recentStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', enrolled: '2025-01-20', progress: 45, amount: '$49' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', enrolled: '2025-01-19', progress: 89, amount: '$49' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', enrolled: '2025-01-18', progress: 23, amount: '$49' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', enrolled: '2025-01-17', progress: 67, amount: '$49' },
    { id: 5, name: 'David Brown', email: 'david@example.com', enrolled: '2025-01-16', progress: 100, amount: '$49' },
  ])

  const [recentPayments] = useState([
    { id: 'PAY001', student: 'John Doe', amount: '$49', method: 'Razorpay', date: '2025-01-20', status: 'Success' },
    { id: 'PAY002', student: 'Jane Smith', amount: '$49', method: 'Razorpay', date: '2025-01-19', status: 'Success' },
    { id: 'PAY003', student: 'Mike Johnson', amount: '$49', method: 'Razorpay', date: '2025-01-18', status: 'Success' },
  ])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="text-gray-600 mt-1">Manage your course platform</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Download size={18} />
            Export Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="text-blue-600" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.totalStudents}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="text-green-600" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+8%</span>
            </div>
            <div className="text-3xl font-bold mb-1">${stats.totalRevenue.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Revenue</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="text-purple-600" size={24} />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.activeCourses}</div>
            <div className="text-sm text-gray-600">Active Courses</div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <span className="text-sm text-green-600 font-semibold">+5%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stats.completionRate}%</div>
            <div className="text-sm text-gray-600">Completion Rate</div>
          </div>
        </div>

        {/* Recent Students */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Students</h3>
            <button className="text-primary hover:underline text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Enrolled</th>
                  <th className="text-left py-3 px-4">Progress</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-light">
                    <td className="py-3 px-4 font-medium">{student.name}</td>
                    <td className="py-3 px-4 text-gray-600">{student.email}</td>
                    <td className="py-3 px-4 text-gray-600">{student.enrolled}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div 
                            className="bg-primary h-full rounded-full"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold">{student.amount}</td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline flex items-center gap-1">
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Payments</h3>
            <button className="text-primary hover:underline text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Payment ID</th>
                  <th className="text-left py-3 px-4">Student</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4">Method</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((payment) => (
                  <tr key={payment.id} className="border-b hover:bg-light">
                    <td className="py-3 px-4 font-mono text-sm">{payment.id}</td>
                    <td className="py-3 px-4">{payment.student}</td>
                    <td className="py-3 px-4 font-semibold">{payment.amount}</td>
                    <td className="py-3 px-4">{payment.method}</td>
                    <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="font-semibold mb-2">Manage Content</h4>
            <p className="text-sm text-gray-600 mb-4">Upload videos, add modules, and manage course content</p>
            <button className="btn-primary w-full">Go to Content</button>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="font-semibold mb-2">Student Management</h4>
            <p className="text-sm text-gray-600 mb-4">View all students, manage access, and send notifications</p>
            <button className="btn-primary w-full">Manage Students</button>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer">
            <h4 className="font-semibold mb-2">Analytics</h4>
            <p className="text-sm text-gray-600 mb-4">View detailed analytics, revenue reports, and insights</p>
            <button className="btn-primary w-full">View Analytics</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}