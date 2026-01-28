'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectPage() {
  const aboutAnim = useScrollAnimation()
  const purposeAnim = useScrollAnimation()
  const leleAnim = useScrollAnimation()
  const maggotAnim = useScrollAnimation()
  const processAnim = useScrollAnimation()
  const alatAnim = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/maggot.jpeg)' }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-2">
            {t('project.hero')}
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('project.heroSub')}
          </p>
        </div>
      </section>

      {/* About Project Section */}
      <section 
        ref={aboutAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${aboutAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('project.about')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                {t('project.aboutTitle')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('project.aboutDesc1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('project.aboutDesc2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section 
        ref={purposeAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${purposeAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('project.tujuan')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.pengelolaan')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.pengelolaanDesc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.ekonomi')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.ekonomiDesc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.pemberdayaan')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.pemberdayaanDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peternakan Lele Section */}
      <section 
        ref={leleAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${leleAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('project.lele')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  {t('project.leleTitle')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('project.leleDesc1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('project.leleDesc2')}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/lele.jpg" 
                    alt="Peternakan Lele" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.produksi')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.produksiDesc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.ekonomiLele')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.ekonomiLeleDesc')}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">{t('project.pemberdayaanLele')}</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {t('project.pemberdayaanLeleDesc')}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-teal-200">
            <h3 className="text-2xl font-black text-forest-800 mb-6">{t('project.keunggulan')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
                <h4 className="text-xl font-black text-forest-800 mb-3">{t('project.siklus')}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {t('project.siklusDesc')}
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-teal-200">
                <h4 className="text-xl font-black text-forest-800 mb-3">{t('project.pasar')}</h4>
                <p className="text-gray-700 leading-relaxed">
                  {t('project.pasarDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maggot Types Section */}
      <section 
        ref={maggotAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${maggotAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('project.jenis')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-4">{t('project.bsf')}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {t('project.bsfDesc')}
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>{t('project.efisien')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>{t('project.protein')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>{t('project.pakan')}</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/maggot.jpeg" 
                      alt="Maggot BSF" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-forest-100 pt-8">
                <h3 className="text-2xl font-black text-forest-800 mb-6">{t('project.siklusHidup')}</h3>
                <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-2xl p-6 md:p-8 border-2 border-forest-200 mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('project.siklusHidupDesc')}
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 border-2 border-forest-200 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-black text-white">1</span>
                      </div>
                      <h4 className="text-lg font-black text-forest-800 mb-3">{t('project.telur')}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {t('project.telurDesc')}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-forest-200 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-black text-white">2</span>
                      </div>
                      <h4 className="text-lg font-black text-forest-800 mb-3">{t('project.larva')}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {t('project.larvaDesc')}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-forest-200 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-black text-white">3</span>
                      </div>
                      <h4 className="text-lg font-black text-forest-800 mb-3">{t('project.prepupa')}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {t('project.prepupaDesc')}
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-2 border-forest-200 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-black text-white">4</span>
                      </div>
                      <h4 className="text-lg font-black text-forest-800 mb-3">{t('project.dewasa')}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {t('project.dewasaDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-white rounded-xl p-6 border-2 border-forest-200">
                    <h4 className="text-xl font-black text-forest-800 mb-4">{t('project.karakteristik')}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <span className="font-semibold text-forest-700">{t('project.durasi')}</span> {t('project.durasiValue')}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <span className="font-semibold text-forest-700">{t('project.tahapProduktif')}</span> {t('project.tahapProduktifValue')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <span className="font-semibold text-forest-700">{t('project.kondisi')}</span> {t('project.kondisiValue')}
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-2">
                          <span className="font-semibold text-forest-700">{t('project.produktivitas')}</span> {t('project.produktivitasValue')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-forest-100 pt-8">
                <h3 className="text-2xl font-black text-forest-800 mb-4">{t('project.produk')}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-forest-50 rounded-xl p-6 border-2 border-forest-200">
                    <h4 className="text-xl font-black text-forest-800 mb-3">{t('project.maggot')}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('project.maggotDesc')}
                    </p>
                    <div className="flex items-center gap-2 text-forest-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{t('project.nilaiEkonomi')}</span>
                    </div>
                  </div>

                  <div className="bg-earth-50 rounded-xl p-6 border-2 border-earth-200">
                    <h4 className="text-xl font-black text-earth-800 mb-3">{t('project.kasgot')}</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('project.kasgotDesc')}
                    </p>
                    <div className="flex items-center gap-2 text-earth-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{t('project.pupuk')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alat untuk Project Maggot */}
      <section
        ref={alatAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${
          alatAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-1">
                Alat untuk Project Maggot
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rangkaian alat sederhana dirancang untuk mendukung pemisahan, pengeringan, dan pengolahan media maggot secara lebih efektif dan higienis.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/project/alat-maggot"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Pelajari Detail Alat</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${processAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('project.proses')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: t('project.pengumpulan'), desc: t('project.pengumpulanDesc') },
              { step: '2', title: t('project.budidaya'), desc: t('project.budidayaDesc') },
              { step: '3', title: t('project.panen'), desc: t('project.panenDesc') },
              { step: '4', title: t('project.pemanfaatan'), desc: t('project.pemanfaatanDesc') },
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
      </section>

    </main>
  )
}

