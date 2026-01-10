'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamically import Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function ProfilDesaPage() {
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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-3">
            Profil Desa
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Informasi lengkap tentang Desa Babalan Lor
          </p>
        </div>
      </section>

      {/* Lokasi Geografis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Lokasi Geografis
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">Koordinat Geografis</h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Kecamatan:</span> Bojong
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Kabupaten:</span> Pekalongan
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Ketinggian:</span> ± 50 meter di atas permukaan laut
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">Batas Wilayah</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Sebelah Utara:</span> Desa Babalan Kidul</li>
                  <li><span className="font-semibold">Sebelah Selatan:</span> Desa JajarWayang</li>
                  <li><span className="font-semibold">Sebelah Timur:</span> Desa Karangsari</li>
                  <li><span className="font-semibold">Sebelah Barat:</span> Desa Sembung Jambu</li>
                </ul>
              </div>
            </div>
          </div>

          {mounted && <Map />}
        </div>
      </section>

      {/* Data Geografis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Data Geografis
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
              <div className="text-4xl font-black text-forest-700 mb-2">2,500+</div>
              <div className="text-gray-600 font-semibold">Jumlah Penduduk</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-4xl font-black text-forest-700 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Jumlah Keluarga</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center border-2 border-forest-100">
              <div className="w-16 h-16 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-4xl font-black text-forest-700 mb-2">150 Ha</div>
              <div className="text-gray-600 font-semibold">Luas Wilayah</div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Pemerintahan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Struktur Pemerintahan Desa
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-forest-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-2">Kepala Desa</h3>
              <p className="text-gray-600 font-semibold">[Nama Kepala Desa]</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-forest-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-2">Sekretaris</h3>
              <p className="text-gray-600 font-semibold">[Nama Sekretaris]</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-forest-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-2">Bendahara</h3>
              <p className="text-gray-600 font-semibold">[Nama Bendahara]</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-forest-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-forest-800 mb-2">Ketua BPD</h3>
              <p className="text-gray-600 font-semibold">[Nama Ketua BPD]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usaha Lokal - Jean Convection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 mb-4 leading-tight pb-2">
              Usaha Lokal
            </h2>
            <p className="text-xl text-gray-700 font-medium mb-4">Jean Convection</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Industri Konveksi Jeans
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Desa Babalan Lor dikenal sebagai pusat industri konveksi jeans yang berkembang pesat. 
                  Usaha konveksi jeans telah menjadi tulang punggung perekonomian masyarakat desa, 
                  menyerap banyak tenaga kerja lokal dan memberikan kontribusi signifikan terhadap 
                  kesejahteraan masyarakat.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Produk jeans yang dihasilkan oleh pengusaha lokal di Desa Babalan Lor telah dikenal 
                  kualitasnya dan dipasarkan ke berbagai daerah. Industri ini tidak hanya memberikan 
                  lapangan pekerjaan, tetapi juga menjadi identitas ekonomi desa yang membanggakan.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="text-3xl font-black text-amber-700 mb-1">50+</div>
                    <div className="text-sm text-gray-600 font-semibold">Unit Usaha</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="text-3xl font-black text-amber-700 mb-1">300+</div>
                    <div className="text-sm text-gray-600 font-semibold">Tenaga Kerja</div>
                  </div>
                </div>
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

