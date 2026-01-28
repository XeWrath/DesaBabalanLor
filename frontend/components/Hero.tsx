'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/heroV.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 animate-slide-up drop-shadow-2xl leading-tight pb-2">
              {t('hero.title')}
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-sky-100 mb-12 animate-slide-up font-medium drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => {
                const aboutSection = document.getElementById('about-section')
                aboutSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative px-10 py-4 bg-white text-navy-700 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10">{t('hero.explore')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-gold-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
            </button>
            <a 
              href="/profil-desa"
              className="group relative px-10 py-4 bg-transparent border-3 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-navy-700 hover:scale-105 cursor-pointer inline-block"
              style={{ borderWidth: '3px' }}
            >
              <span className="relative z-10">{t('hero.learnMore')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-gold-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-xl"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => {
          const aboutSection = document.getElementById('about-section')
          aboutSection?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to content"
      >
        <div className="relative">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </button>
    </section>
  )
}

