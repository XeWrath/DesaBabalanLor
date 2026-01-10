'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProjectPage() {
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
            Project Maggot
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Pengelolaan Sampah Organik dengan Teknologi Maggot
          </p>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Tentang Project
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                Project Maggot untuk Pengelolaan Sampah Organik
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Project Maggot adalah inisiatif inovatif untuk mengelola sampah organik di Desa Babalan Lor 
                dengan memanfaatkan larva lalat hitam (Black Soldier Fly) atau yang dikenal sebagai maggot. 
                Project ini bertujuan untuk mengurangi volume sampah organik sekaligus menghasilkan produk 
                bernilai ekonomi tinggi.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Melalui proses biokonversi, maggot mengonsumsi sampah organik dan mengubahnya menjadi 
                produk yang bermanfaat. Maggot yang dihasilkan dapat dijual sebagai pakan ikan berkualitas 
                tinggi, sementara limbah maggot (kasgot) dapat digunakan sebagai pupuk organik untuk tanaman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Tujuan Project
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
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">Pengelolaan Sampah</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Mengurangi volume sampah organik di desa dengan cara yang ramah lingkungan dan berkelanjutan
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">Ekonomi Berkelanjutan</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Menciptakan sumber pendapatan baru melalui penjualan maggot sebagai pakan ikan dan kasgot sebagai pupuk
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-forest-800 mb-4 text-center">Pemberdayaan Masyarakat</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Memberikan peluang usaha dan peningkatan keterampilan masyarakat dalam pengelolaan sampah organik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maggot Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Jenis Maggot
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-4">Black Soldier Fly (BSF)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold">Hermetia illucens</span> adalah jenis lalat yang paling umum 
                    digunakan dalam budidaya maggot. Larva BSF memiliki kemampuan tinggi dalam mengonsumsi 
                    sampah organik dan mengubahnya menjadi biomassa berkualitas.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>Efisien dalam mengonsumsi sampah organik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>Kandungan protein tinggi (40-45%)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-forest-600 mr-2">✓</span>
                      <span>Cocok sebagai pakan ikan dan ternak</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest-400 to-earth-500 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-forest-100 pt-8">
                <h3 className="text-2xl font-black text-forest-800 mb-4">Produk yang Dihasilkan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-forest-50 rounded-xl p-6 border-2 border-forest-200">
                    <h4 className="text-xl font-black text-forest-800 mb-3">Maggot (Larva)</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Maggot yang dihasilkan memiliki kandungan protein tinggi dan dapat dijual sebagai 
                      pakan ikan berkualitas. Maggot segar atau yang telah dikeringkan memiliki nilai 
                      ekonomi yang tinggi di pasar.
                    </p>
                    <div className="flex items-center gap-2 text-forest-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Nilai Ekonomi Tinggi</span>
                    </div>
                  </div>

                  <div className="bg-earth-50 rounded-xl p-6 border-2 border-earth-200">
                    <h4 className="text-xl font-black text-earth-800 mb-3">Kasgot (Limbah Maggot)</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kasgot adalah limbah yang dihasilkan setelah maggot mengonsumsi sampah organik. 
                      Kasgot kaya akan nutrisi dan dapat digunakan sebagai pupuk organik yang sangat 
                      baik untuk tanaman.
                    </p>
                    <div className="flex items-center gap-2 text-earth-700 font-semibold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Pupuk Organik Berkualitas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Proses Pengelolaan
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Pengumpulan Sampah', desc: 'Sampah organik dikumpulkan dari rumah tangga' },
              { step: '2', title: 'Budidaya Maggot', desc: 'Maggot dipelihara dan diberi makan sampah organik' },
              { step: '3', title: 'Panen Maggot', desc: 'Maggot dipanen untuk dijual sebagai pakan ikan' },
              { step: '4', title: 'Pemanfaatan Kasgot', desc: 'Kasgot digunakan sebagai pupuk organik' },
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

