'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Home, User, BookOpen, HelpCircle, LogOut, Menu, X, Shield } from 'lucide-react'
import Link from 'next/link'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'My Profile', path: '/profile' },
    { icon: BookOpen, label: 'My Courses', path: '/courses' },
    { icon: Shield, label: 'Admin Panel', path: '/admin', adminOnly: true },
    { icon: HelpCircle, label: 'Support', path: '/support' },
  ]

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('authToken')
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-light">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-primary">Adsterra Mastery</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-light rounded-custom"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-0 left-0 h-screen bg-white border-r z-50
          w-64 transition-transform duration-300 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="p-6 border-b hidden lg:block">
            <h1 className="text-2xl font-bold text-primary">Adsterra Mastery</h1>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-custom transition-all
                    ${isActive 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-light text-gray-700'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  {item.adminOnly && (
                    <span className="ml-auto text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      Admin
                    </span>
                  )}
                </Link>
              )
            })}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-custom hover:bg-red-50 text-red-600 transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </nav>

          {/* User Info at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-light">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                A
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">Aditya Kumar</div>
                <div className="text-xs text-gray-600 truncate">digitaladitya402@gmail.com</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  )
}