'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const toggleVisibility = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      setIsVisible(scrollY > 300)
    }

    // Check initial scroll position
    toggleVisibility()

    // Add scroll listener
    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [mounted])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-button p-4 bg-gradient-to-br from-navy-600/80 to-teal-600/80 backdrop-blur-sm text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border border-white/20 ${
        isVisible ? 'opacity-50 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  )
}
