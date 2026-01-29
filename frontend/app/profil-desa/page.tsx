'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

// Dynamically import Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function ProfilDesaPage() {
  const [mounted, setMounted] = useState(false)
  const lokasiAnim = useScrollAnimation()
  const dataAnim = useScrollAnimation()
  const strukturAnim = useScrollAnimation()
  const usahaAnim = useScrollAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-teal-600 to-navy-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-3">
            {t('profilDesa.hero')}
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('profilDesa.heroSub')}
          </p>
        </div>
      </section>

      {/* Lokasi Geografis Section */}
      <section 
        ref={lokasiAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${lokasiAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('profilDesa.lokasi')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">{t('profilDesa.koordinat')}</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">{t('profilDesa.kecamatan')}</span> Bojong
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">{t('profilDesa.kabupaten')}</span> Pekalongan
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t('profilDesa.ketinggian')}</span> {t('profilDesa.ketinggianValue')}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">{t('profilDesa.batas')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">{t('profilDesa.utara')}</span> Desa Babalan Kidul</li>
                  <li><span className="font-semibold">{t('profilDesa.selatan')}</span> Desa JajarWayang</li>
                  <li><span className="font-semibold">{t('profilDesa.timur')}</span> Desa Karangsari</li>
                  <li><span className="font-semibold">{t('profilDesa.barat')}</span> Desa Sembung Jambu</li>
                </ul>
              </div>
            </div>
          </div>

          {mounted && <Map />}
        </div>
      </section>

      {/* Data Geografis Section */}
      <section 
        ref={dataAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${dataAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('profilDesa.data')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-4xl font-black text-forest-700 mb-2">4.764</div>
              <div className="text-gray-600 font-semibold">{t('profilDesa.jumlahPenduduk')}</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-4xl font-black text-forest-700 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">{t('profilDesa.jumlahKeluarga')}</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-4xl font-black text-forest-700 mb-2">0,91 km²</div>
              <div className="text-gray-600 font-semibold">{t('profilDesa.luasWilayah')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Pemerintahan Section */}
      <section 
        ref={strukturAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${strukturAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              {t('profilDesa.struktur')}
            </h2>
            <p className="text-lg text-gray-600 mb-2">SUSUNAN ORGANISASI DAN TATA KERJA PEMERINTAH DESA BABALANLOR</p>
            <p className="text-md text-gray-500 mb-2">BOJONG - KABUPATEN PEKALONGAN</p>
            <p className="text-md text-gray-500 mb-4">PERIODE 2019-2025</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            {/* Organizational Tree Structure - More Precise Layout */}
            <div className="relative">
              {/* Level 1: Kepala Desa - Top Center */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-xl border-2 border-blue-800 text-center min-w-[280px] relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">KEPALA DESA</h3>
                  <p className="text-white font-semibold">BISRI AL KHOFI</p>
                </div>
              </div>

              {/* Vertical Connector from Kepala Desa */}
              <div className="flex justify-center mb-4">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 via-blue-500 to-teal-500"></div>
              </div>

              {/* Level 2: Sekretaris Desa - Below Kepala Desa */}
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 shadow-xl border-2 border-teal-800 text-center min-w-[280px] relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">SEKRETARIS DESA</h3>
                  <p className="text-white font-semibold">SLAMET BUDI SANTOSO</p>
                </div>
              </div>

              {/* Vertical Connector from Sekretaris Desa */}
              <div className="flex justify-center mb-4">
                <div className="w-1 h-12 bg-gradient-to-b from-teal-500 via-teal-400 to-green-500"></div>
              </div>

              {/* Horizontal connector line for KASI/KAUR */}
              <div className="relative mb-4">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-500"></div>
              </div>

              {/* Level 3: KASI and KAUR - Horizontal Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Connector lines from horizontal line to each box */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-green-500 to-green-600"></div>
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-5 shadow-lg border-2 border-green-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KASI PEMERINTAHAN</h3>
                    <p className="text-white text-sm font-semibold">ANDI WIBOWO</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-green-500 to-green-600"></div>
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-5 shadow-lg border-2 border-green-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KASI KESEJAHTERAAN</h3>
                    <h3 className="text-sm font-black text-white mb-1">DAN PELAYANAN</h3>
                    <p className="text-white text-sm font-semibold">SLAMET ABAS</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-green-500 to-green-600"></div>
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-5 shadow-lg border-2 border-green-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KAUR UMUM &</h3>
                    <h3 className="text-sm font-black text-white mb-1">PERENCANAAN</h3>
                    <p className="text-white text-sm font-semibold">ARIF WIBOWO</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-green-500 to-green-600"></div>
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-5 shadow-lg border-2 border-green-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KAUR KEUANGAN</h3>
                    <p className="text-white text-sm font-semibold">M. HERI SISWANTO</p>
                  </div>
                </div>
              </div>

              {/* Vertical Connector for KADUS */}
              <div className="flex justify-center mb-4">
                <div className="w-1 h-12 bg-gradient-to-b from-green-500 via-amber-400 to-amber-500"></div>
              </div>

              {/* Horizontal connector line for KADUS */}
              <div className="relative mb-4">
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500"></div>
              </div>

              {/* Level 4: KADUS - Horizontal Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600"></div>
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-5 shadow-lg border-2 border-amber-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KADUS I</h3>
                    <p className="text-white text-sm font-semibold">ISNA RAHMATILLAH</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600"></div>
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-5 shadow-lg border-2 border-amber-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KADUS II</h3>
                    <p className="text-white text-sm font-semibold">KHUSNA MARGIANA, S.Pd</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600"></div>
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-5 shadow-lg border-2 border-amber-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KADUS III</h3>
                    <p className="text-white text-sm font-semibold">MUHAMMAD SUBKHAN</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-amber-500 to-amber-600"></div>
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-5 shadow-lg border-2 border-amber-800 text-center mt-8 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-black text-white mb-1">KADUS IV</h3>
                    <p className="text-white text-sm font-semibold">TRI MEI LISYA VIDYAWATI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usaha Lokal - Jean Convection Section */}
      <section 
        ref={usahaAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50 ${usahaAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 mb-4 leading-tight pb-2">
              {t('profilDesa.usaha')}
            </h2>
            <p className="text-xl text-gray-700 font-medium mb-4">{t('profilDesa.jeanConvection')}</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  {t('profilDesa.industri')}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('profilDesa.industriDesc1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('profilDesa.industriDesc2')}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8 mb-6">
                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="text-3xl font-black text-amber-700 mb-1">50+</div>
                    <div className="text-sm text-gray-600 font-semibold">{t('profilDesa.unitUsaha')}</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="text-3xl font-black text-amber-700 mb-1">300+</div>
                    <div className="text-sm text-gray-600 font-semibold">{t('profilDesa.tenagaKerja')}</div>
                  </div>
                </div>
                <Link
                  href="/umkm"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {t('profilDesa.lihatUMKM')}
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

