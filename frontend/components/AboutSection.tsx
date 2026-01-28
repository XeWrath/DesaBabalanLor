'use client'

import { useRef, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const sectionAnim = useScrollAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !imageRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', () => {
        if (imageRef.current) {
          imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
        }
      })
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionAnim.ref}
      id="about-section" 
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50 to-teal-50 relative overflow-hidden ${sectionAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
    >
      {/* Background 3D elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-300 rounded-full opacity-10 blur-3xl transform-3d" style={{ transform: 'translateZ(-100px)' }}></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-300 rounded-full opacity-10 blur-3xl transform-3d" style={{ transform: 'translateZ(-150px)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-2">
            {t('about.title')}
          </h2>
          <div className="relative inline-block">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto transform-3d shadow-3d"></div>
            <div className="absolute inset-0 w-32 h-1.5 bg-teal-300 blur-md opacity-50"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 transform-3d" style={{ transform: 'translateZ(30px)' }}>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-300">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {t('about.desc1')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-300 border-2 border-teal-200">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {t('about.desc2')}
              </p>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
              <p className="text-navy-700 font-bold italic text-lg px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-3d">
                "{t('about.quote')}"
              </p>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            </div>
          </div>

          <div ref={cardRef} className="relative transform-3d perspective-1000">
            <div 
              ref={imageRef}
              className="aspect-video rounded-3xl overflow-hidden shadow-3d-lg transition-transform duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-navy-600 via-teal-600 to-steel-500 flex items-center justify-center relative">
                {/* 3D layered effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/50 to-gold-500/50 transform-3d" style={{ transform: 'translateZ(20px)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-gold-500/30 to-teal-600/30 transform-3d" style={{ transform: 'translateZ(40px)' }}></div>
                
                <svg className="w-40 h-40 text-white opacity-80 relative z-10 transform-3d animate-float" style={{ transform: 'translateZ(60px)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-ocean-400 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-2xl"></div>
              </div>
            </div>
              {/* Decorative 3D elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400 rounded-2xl opacity-30 blur-xl transform-3d rotate-12" style={{ transform: 'translateZ(-30px) rotate(12deg)' }}></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gold-400 rounded-full opacity-40 blur-lg transform-3d -rotate-12" style={{ transform: 'translateZ(-20px) rotate(-12deg)' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

