import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Search, Home, Compass, Book, Users, Settings, ChevronDown, Plus } from 'lucide-react'

interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated')
    router.push('/signin')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md flex flex-col">
        <div className="flex items-center p-4 border-b">
          <div className="w-8 h-8 bg-primary-600 rounded-lg mr-2"></div>
          <span className="text-xl font-semibold text-gray-800">AI Template</span>
        </div>

        <button className="m-4 bg-primary-600 text-white px-4 py-2 rounded-md flex items-center justify-between hover:bg-primary-700 transition-colors">
          <span>New Thread</span>
          <Plus className="w-4 h-4" />
        </button>

        <nav className="flex-1 p-4">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" href="/dashboard" />
          <NavItem icon={<Compass className="w-5 h-5" />} label="Discover" href="/discover" />
          <NavItem icon={<Book className="w-5 h-5" />} label="Library" href="/library" />
        </nav>

        <div className="p-4 border-t">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2 text-gray-700">Invite your teammates</h3>
            <p className="text-sm text-gray-600 mb-2">Want to use AI Template with your team or business?</p>
            <button className="text-sm text-primary-600 flex items-center hover:text-primary-700 transition-colors">
              Learn More
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
            <span className="flex-1 text-gray-700">username</span>
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" onClick={handleSignOut} />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-8 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <Link href={href} className="flex items-center py-2 px-4 rounded-md text-gray-700 hover:bg-gray-200 transition-colors">
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  )
}