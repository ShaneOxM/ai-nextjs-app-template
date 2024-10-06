import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = router.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-primary-600' : 'text-gray-900'}`}>AI Template</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>Features</Link>
              <Link href="/mission" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>Mission</Link>
              <Link href="/pricing" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>Pricing</Link>
              <Link href="/docs" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>Docs</Link>
              <Link href="/about" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>About</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/signin" className={`${isScrolled || !isHomePage ? 'text-gray-600 hover:text-primary-600' : 'text-gray-900 hover:text-primary-600'} transition duration-300`}>Sign In</Link>
              <Link href="/signup" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition duration-300">Get Started</Link>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className={isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-900'} /> : <Menu size={24} className={isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-900'} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <div className="container mx-auto px-4 space-y-2">
              <Link href="/features" className="block py-2 text-gray-600 hover:text-primary-600">Features</Link>
              <Link href="/mission" className="block py-2 text-gray-600 hover:text-primary-600">Mission</Link>
              <Link href="/pricing" className="block py-2 text-gray-600 hover:text-primary-600">Pricing</Link>
              <Link href="/docs" className="block py-2 text-gray-600 hover:text-primary-600">Docs</Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-primary-600">About</Link>
              <Link href="/signin" className="block py-2 text-gray-600 hover:text-primary-600">Sign In</Link>
              <Link href="/signup" className="block py-2 bg-primary-600 text-white px-4 rounded-md">Get Started</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="text-gray-600 hover:text-primary-600 transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-600 hover:text-primary-600 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">Blog</Link></li>
                <li><Link href="/tutorials" className="text-gray-600 hover:text-primary-600 transition-colors">Tutorials</Link></li>
                <li><Link href="/support" className="text-gray-600 hover:text-primary-600 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">&copy; 2023 AI Template. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}