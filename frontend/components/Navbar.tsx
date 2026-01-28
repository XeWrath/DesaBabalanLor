'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAlwaysVisible, setIsAlwaysVisible] = useState(false)
  const [isProfilMenuOpen, setIsProfilMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    // On touch / non-hover devices (mobile, most tablets), keep navbar always visible
    if (typeof window !== 'undefined') {
      const isTouchDevice =
        (window.matchMedia && window.matchMedia('(hover: none)').matches) ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0

      if (isTouchDevice) {
        setIsAlwaysVisible(true)
        setIsVisible(true)
        return
      }
    }

    let hoverTimeout: NodeJS.Timeout | null = null
    let lastMouseY = 0
    const HOVER_THRESHOLD = 150 // Increased hover area to 150px from top

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseY = e.clientY
      // Show navbar when mouse is near top of viewport (within 150px from top of screen)
      if (e.clientY < HOVER_THRESHOLD) {
        setIsVisible(true)
        // Clear any pending hide timeout
        if (hoverTimeout) {
          clearTimeout(hoverTimeout)
          hoverTimeout = null
        }
      } else {
        // Only hide if mouse is clearly away from top area and navbar
        // Delay hiding to prevent flickering when mouse moves quickly
        if (hoverTimeout) {
          clearTimeout(hoverTimeout)
        }
        hoverTimeout = setTimeout(() => {
          // Hide if mouse is not near top and not over navbar
          if (lastMouseY >= HOVER_THRESHOLD) {
            setIsVisible(false)
          }
        }, 300) // Increased delay for better UX
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
        isAlwaysVisible || isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => {
        if (!isAlwaysVisible) {
          setIsVisible(true)
        }
      }}
      onMouseLeave={(e) => {
        if (!isAlwaysVisible) {
          // Delay hiding when mouse leaves navbar
          // The mousemove handler will handle showing/hiding based on position
          const mouseY = e.clientY
          if (mouseY > 150) {
            const timeout = setTimeout(() => {
              setIsVisible(false)
            }, 200)
            return () => clearTimeout(timeout)
          }
        }
      }}
    >
      <div className="bg-white/95 backdrop-blur-xl shadow-3d-lg border-b-2 border-teal-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative transform-3d group-hover:translate-z-20 transition-transform duration-300">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-gradient-to-br from-navy-600 to-teal-600 rounded-xl shadow-3d flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-teal-400 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-navy-600 to-teal-600 bg-clip-text text-transparent whitespace-nowrap">
                Desa Babalan Lor
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-3 md:space-x-6 text-xs sm:text-sm md:text-base overflow-x-auto sm:overflow-visible no-scrollbar whitespace-nowrap sm:whitespace-normal">
              <Link
                href="/"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                {t('nav.beranda')}
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              {/* Profil Desa with click dropdown (desktop + mobile) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProfilMenuOpen((open) => !open)}
                  className={`px-2 py-2 font-semibold transition-all duration-200 relative flex items-center ${
                    pathname.startsWith('/profil-desa')
                      ? 'text-navy-700'
                      : 'text-navy-600 hover:text-navy-700'
                  }`}
                >
                  {t('nav.profilDesa')}
                  <svg
                    className={`w-4 h-4 ml-1 text-current transition-transform duration-200 ${
                      isProfilMenuOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {pathname.startsWith('/profil-desa') && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                  )}
                </button>
                {/* Dropdown menu */}
                <div
                  className={`absolute left-0 top-full mt-0 w-56 rounded-2xl bg-white shadow-xl border border-teal-100 py-2 z-50 transition-opacity duration-200 ${
                    isProfilMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
                  }`}
                >
                  <Link
                    href="/profil-desa"
                    onClick={() => setIsProfilMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-navy-600 hover:bg-teal-50 hover:text-navy-800"
                  >
                    Profil Desa
                  </Link>
                  <Link
                    href="/profil-desa/infrastruktur"
                    onClick={() => setIsProfilMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-navy-600 hover:bg-teal-50 hover:text-navy-800"
                  >
                    Infrastruktur
                  </Link>
                  <Link
                    href="/profil-desa/sumber-daya"
                    onClick={() => setIsProfilMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-semibold text-navy-600 hover:bg-teal-50 hover:text-navy-800"
                  >
                    Sumber Daya
                  </Link>
                </div>
              </div>
              <Link
                href="/kampung-tahu"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/kampung-tahu'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                {t('nav.kampungTahu')}
                {pathname === '/kampung-tahu' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <Link
                href="/umkm"
                className={`px-2 py-2 font-semibold transition-all duration-200 relative ${
                  pathname === '/umkm'
                    ? 'text-navy-700'
                    : 'text-navy-600 hover:text-navy-700'
                }`}
              >
                {t('nav.umkm')}
                {pathname === '/umkm' && (
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
                {t('nav.project')}
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
                {t('nav.profilKkn')}
                {pathname === '/profil-kkn' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
                )}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

