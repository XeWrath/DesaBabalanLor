'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function KampungTahuPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-teal-600 to-navy-700">
          <div className="absolute inset-0 bg-[url('/images/KampungTahu.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-2">
            Kampung Tahu
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Wisata Edukasi Inovatif di Desa Babalan Lor
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 transform-3d" style={{ transform: 'translateZ(30px)' }}>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-2">
                Tentang Kampung Tahu
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600"></div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Kampung Tahu di Desa Babalan Lor merupakan destinasi wisata edukasi yang unik, 
                menawarkan pengalaman langsung dalam proses pembuatan tahu tradisional. 
                Wisatawan dapat belajar tentang kearifan lokal dan proses produksi tahu yang 
                telah menjadi bagian dari kehidupan masyarakat desa.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Melalui kolaborasi dengan berbagai pihak, Kampung Tahu terus dikembangkan 
                sebagai pusat wisata edukasi yang inovatif, menggabungkan tradisi lokal 
                dengan konsep wisata modern untuk meningkatkan kesejahteraan masyarakat.
              </p>
            </div>
            
            <div className="relative transform-3d">
              {mounted && (
                <div className="rounded-3xl overflow-hidden shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500">
                  <Image
                    src="/images/KampungTahu.jpg"
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">Wisata Edukasi</h3>
              <p className="text-gray-700 leading-relaxed">
                Pelajari proses pembuatan tahu tradisional langsung dari para pengrajin berpengalaman
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">Kearifan Lokal</h3>
              <p className="text-gray-700 leading-relaxed">
                Rasakan kearifan lokal yang masih terjaga dan menjadi bagian dari kehidupan sehari-hari
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-3d-lg transform-3d hover:translate-z-50 transition-all duration-500 border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-3d">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-forest-800 mb-4">Ekonomi Lokal</h3>
              <p className="text-gray-700 leading-relaxed">
                Dukung perekonomian lokal dengan membeli produk tahu langsung dari pengrajin
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-br from-forest-50 to-earth-50 rounded-3xl p-12 shadow-3d-lg border-2 border-forest-200">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-forest-700 to-earth-700 mb-12 text-center leading-tight pb-2">
              Proses Pembuatan Tahu
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Persiapan', desc: 'Siapkan bahan baku kedelai berkualitas' },
                { step: '2', title: 'Pengolahan', desc: 'Proses perendaman dan penggilingan' },
                { step: '3', title: 'Pembentukan', desc: 'Pembentukan tahu dengan cetakan tradisional' },
                { step: '4', title: 'Pemasakan', desc: 'Proses pemasakan dan pengemasan' },
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-block px-10 py-4 bg-gradient-to-r from-navy-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-3d-lg transform-3d hover:translate-z-50 hover:scale-105 transition-all duration-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

