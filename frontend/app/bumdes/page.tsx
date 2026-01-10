'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function BUMDESPage() {
  const [mounted, setMounted] = useState(false)

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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-2">
            BUMDES
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Badan Usaha Milik Desa Babalan Lor
          </p>
        </div>
      </section>

      {/* About BUMDES Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Tentang BUMDES
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Badan Usaha Milik Desa
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  BUMDES (Badan Usaha Milik Desa) Babalan Lor adalah lembaga usaha yang dimiliki 
                  dan dikelola oleh desa dengan tujuan untuk meningkatkan perekonomian desa dan 
                  kesejahteraan masyarakat. BUMDES berperan sebagai motor penggerak ekonomi lokal 
                  yang mengelola berbagai unit usaha strategis.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Dengan prinsip transparansi dan akuntabilitas, BUMDES Babalan Lor mengembangkan 
                  berbagai sektor usaha yang potensial, mulai dari pengelolaan sumber daya alam, 
                  jasa, hingga perdagangan, dengan fokus pada pemberdayaan masyarakat desa.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-forest-50 rounded-xl p-4 border-2 border-forest-200">
                    <div className="text-3xl font-black text-forest-700 mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-semibold">Milik Desa</div>
                  </div>
                  <div className="bg-earth-50 rounded-xl p-4 border-2 border-earth-200">
                    <div className="text-3xl font-black text-earth-700 mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-semibold">Untuk Desa</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest-400 to-earth-500 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4 text-center">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Menjadi BUMDES yang mandiri, profesional, dan berkelanjutan dalam menggerakkan 
                perekonomian desa untuk meningkatkan kesejahteraan masyarakat Babalan Lor.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4 text-center">Misi</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Mengembangkan unit usaha yang strategis dan berkelanjutan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Meningkatkan partisipasi masyarakat dalam pengelolaan BUMDES</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Mengoptimalkan pemanfaatan sumber daya lokal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Meningkatkan pendapatan asli desa secara berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Units Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Unit Usaha
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-2">Unit Jasa</h3>
              <p className="text-gray-600 text-sm">Pelayanan jasa untuk masyarakat</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-2">Unit Perdagangan</h3>
              <p className="text-gray-600 text-sm">Pengelolaan produk lokal</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-2">Unit Pengelolaan SDA</h3>
              <p className="text-gray-600 text-sm">Pemanfaatan sumber daya alam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-gradient-to-r from-navy-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}

