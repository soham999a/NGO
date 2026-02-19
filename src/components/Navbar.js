'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Our Impacts', href: '/impacts' },
    { name: 'Programs', href: '#', submenu: [
      { name: 'Catch Them Young', href: '/catch-them-young' },
      { name: 'Proyash', href: '/proyash' },
      { name: 'STEM Learning', href: '/stem' },
      { name: 'Scholarship', href: '/scholarship' },
    ]},
    { name: 'Media', href: '/media' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white/60 backdrop-blur-sm border-b border-gray-100 relative z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.svg" alt="Treasures of Innocence" className="w-full h-full" />
            </div>
            <div className="hidden md:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-blue via-purple-600 to-primary-orange bg-clip-text text-transparent">
                Treasures of Innocence
              </div>
              <div className="text-sm text-gray-600 font-medium">Empowering Communities</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              link.submenu ? (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <button className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center ${
                    pathname.includes('/catch-them-young') || pathname.includes('/proyash') || pathname.includes('/stem') || pathname.includes('/scholarship')
                      ? 'text-white bg-gradient-to-r from-primary-blue to-primary-orange shadow-lg'
                      : 'text-gray-700 hover:text-primary-orange hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50'
                  }`}>
                    {link.name}
                    <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${programsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {programsOpen && (
                    <div className="absolute left-0 mt-2 w-64 z-[200] animate-fade-in">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className={`block px-6 py-4 text-sm font-medium transition-all duration-300 ${
                              pathname === sublink.href
                                ? 'bg-gradient-to-r from-primary-blue to-primary-orange text-white'
                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 hover:text-primary-orange hover:pl-8'
                            }`}
                            onClick={() => setProgramsOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-white bg-gradient-to-r from-primary-blue to-primary-orange shadow-lg'
                      : 'text-gray-700 hover:text-primary-orange hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/support"
              className="ml-4 px-8 py-3 bg-gradient-to-r from-primary-orange via-red-500 to-primary-orange bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-full font-bold text-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-gradient"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.name} className="space-y-2">
                  <div className="px-4 py-3 text-gray-900 font-bold text-sm bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">{link.name}</div>
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className={`block pl-8 pr-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        pathname === sublink.href
                          ? 'bg-gradient-to-r from-primary-blue to-primary-orange text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 hover:text-primary-orange'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-primary-blue to-primary-orange text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 hover:text-primary-orange'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/support"
              className="block mx-4 mt-6 text-center bg-gradient-to-r from-primary-orange to-red-500 text-white px-8 py-4 rounded-full font-bold text-sm shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
