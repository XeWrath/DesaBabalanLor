'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let hoverTimeout: NodeJS.Timeout | null = null
    let lastMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseY = e.clientY
      // Show navbar when mouse is near top of viewport (within 120px from top of screen)
      if (e.clientY < 120) {
        setIsVisible(true)
        // Clear any pending hide timeout
        if (hoverTimeout) {
          clearTimeout(hoverTimeout)
          hoverTimeout = null
        }
      } else {
        // Delay hiding to prevent flickering when mouse moves quickly
        if (hoverTimeout) {
          clearTimeout(hoverTimeout)
        }
        hoverTimeout = setTimeout(() => {
          // Hide if mouse is not near top
          if (lastMouseY >= 120) {
            setIsVisible(false)
          }
        }, 200)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
        // Hide navbar when mouse leaves the navbar area
        const timeout = setTimeout(() => {
          setIsVisible(false)
        }, 200)
        return () => clearTimeout(timeout)
      }}
    >
      <div className="bg-white/95 backdrop-blur-xl shadow-3d-lg border-b-2 border-teal-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative transform-3d group-hover:translate-z-20 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-navy-600 to-teal-600 rounded-xl shadow-3d flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-teal-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-lg md:text-xl font-black bg-gradient-to-r from-navy-600 to-teal-600 bg-clip-text text-transparent">
                Desa Babalan Lor
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-6 md:space-x-8">
              <Link
                href="/"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                Beranda
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/profil-desa"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/profil-desa'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                Profil Desa
                {pathname === '/profil-desa' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/kampung-tahu"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/kampung-tahu'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                Kampung Tahu
                {pathname === '/kampung-tahu' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/bumdes"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/bumdes'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                BUMDES
                {pathname === '/bumdes' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/project"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/project'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                Project
                {pathname === '/project' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/profil-kkn"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/profil-kkn'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                Profil KKN
                {pathname === '/profil-kkn' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

