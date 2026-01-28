'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function KampungTahuPage() {
  const [mounted, setMounted] = useState(false)
  const aboutAnim = useScrollAnimation()
  const featuresAnim = useScrollAnimation()
  const processAnim = useScrollAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kampungtahu1.jpg"
            alt="Kampung Tahu Babalan Lor"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-2">
            {t('kampungTahu.hero')}
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('kampungTahu.heroSub')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${aboutAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 transform-3d" style={{ transform: 'translateZ(30px)' }}>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-2">
                {t('kampungTahu.about')}
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600"></div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {t('kampungTahu.aboutDesc1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {t('kampungTahu.aboutDesc2')}
              </p>
            </div>
            
            <div className="relative transform-3d">
              {mounted && (
                <div className="rounded-3xl overflow-hidden shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500">
                  <Image
                    src="/images/kampungtahu2.jpg"
                    alt="Kampung Tahu Babalan Lor"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
                </div>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div 
            ref={featuresAnim.ref}
            className={`grid md:grid-cols-3 gap-8 mb-16 ${featuresAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">{t('kampungTahu.wisata')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('kampungTahu.wisataDesc')}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">{t('kampungTahu.kearifan')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('kampungTahu.kearifanDesc')}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">{t('kampungTahu.ekonomi')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('kampungTahu.ekonomiDesc')}
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div 
            ref={processAnim.ref}
            className={`bg-gradient-to-br from-forest-50 to-earth-50 rounded-3xl p-12 shadow-3d-lg border-2 border-forest-200 mb-16 ${processAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-earth-700 mb-12 text-center leading-tight pb-2">
              {t('kampungTahu.proses')}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: t('kampungTahu.persiapan'), desc: t('kampungTahu.persiapanDesc') },
                { step: '2', title: t('kampungTahu.pengolahan'), desc: t('kampungTahu.pengolahanDesc') },
                { step: '3', title: t('kampungTahu.pembentukan'), desc: t('kampungTahu.pembentukanDesc') },
                { step: '4', title: t('kampungTahu.pemasakan'), desc: t('kampungTahu.pemasakanDesc') },
              ].map((item, index) => (
                <div key={index} className="text-center transform-3d hover:translate-z-30 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-3d text-white text-2xl font-black">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-forest-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-forest-700 via-earth-600 to-amber-700 mb-4 leading-tight pb-2">
                Galeri Kampung Tahu
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dokumentasi visual kegiatan dan fasilitas di Kampung Tahu Desa Babalan Lor
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-forest-500 to-amber-600 mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/images/kampungtahu/KampungTahu3.jpg', alt: 'Kampung Tahu - Dokumentasi 1' },
                { src: '/images/kampungtahu/KampungTahu4.jpg', alt: 'Kampung Tahu - Dokumentasi 2' },
                { src: '/images/kampungtahu/KampungTahu5.jpg', alt: 'Kampung Tahu - Dokumentasi 3' },
                { src: '/images/kampungtahu/KampungTahu6.jpg', alt: 'Kampung Tahu - Dokumentasi 4' },
                { src: '/images/kampungtahu/KampungTahu7.jpg', alt: 'Kampung Tahu - Dokumentasi 5' },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 bg-white border-2 border-forest-100"
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

