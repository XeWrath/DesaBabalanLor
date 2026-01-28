'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FilosofiDesa() {
  const sectionAnim = useScrollAnimation()
  const { t } = useLanguage()
  
  return (
    <section 
      ref={sectionAnim.ref}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold-50 via-white to-teal-50 relative overflow-hidden ${sectionAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-2">
            {t('filosofi.title')}
          </h2>
          <div className="relative inline-block">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto shadow-lg"></div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-teal-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic mb-8">
              &quot;{t('filosofi.quote')}&quot;
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('filosofi.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

