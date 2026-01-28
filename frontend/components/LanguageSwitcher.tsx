'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'id' as const, name: 'ID', flag: '🇮🇩' },
    { code: 'en' as const, name: 'EN', flag: '🇬🇧' },
  ]

  const currentLang = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-2 py-2 font-semibold transition-all duration-200 relative flex items-center gap-1 ${
          isOpen
            ? 'text-navy-700'
            : 'text-navy-600 hover:text-navy-700'
        }`}
        aria-label="Change language"
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="text-sm">{currentLang.name}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {isOpen && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-gold-600"></span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-teal-50 transition-colors ${
                  language === lang.code ? 'bg-teal-50 font-semibold' : ''
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm text-navy-700">{lang.name}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 text-teal-600 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
