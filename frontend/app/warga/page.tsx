'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WargaPage() {
  const panduanAnim = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Warga Navbar (matches site theme) */}
      <div className="bg-white/90 border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-end gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            <span>Buka Website Utama</span>
          </Link>
          <button
            type="button"
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-navy-800 border border-slate-200 bg-white hover:bg-slate-50 hover:border-teal-300 transition-all duration-200"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-teal-600 to-navy-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl leading-tight pb-1">
              Layanan Warga Desa Babalan Lor
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-4 font-medium drop-shadow-lg">
              Akses informasi alat tepat guna dan keselamatan kerja yang dirancang khusus untuk warga dan pelaku UMKM.
            </p>
            <p className="text-xs text-sky-100/80 italic">
              Konten detail akan diperbarui seiring masuknya data lengkap dari tim.
            </p>
          </div>
        </div>
      </section>

      {/* Data Digital Alat Tepat Guna */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Data Digital Alat Tepat Guna
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Data digital alat tepat guna Desa Babalan Lor
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Data digital alat tepat guna Desa Babalan Lor.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Identifikasi kebutuhan, perancangan konsep, dan digitalisasi informasi alat tepat guna yang
                  berpotensi diterapkan di Desa Babalan Lor.
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 border-2 border-teal-200 shadow-md">
                  <h4 className="text-lg font-bold text-navy-800 mb-2">Ruang Informasi</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Nantinya berisi daftar alat, fungsi, cara penggunaan, dan rekomendasi pemeliharaan untuk
                    mendukung aktivitas usaha dan pelayanan masyarakat.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-forest-50 rounded-2xl p-6 border-2 border-forest-200 shadow-md">
                  <h4 className="text-lg font-bold text-forest-800 mb-2">Catatan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Detail teknis dan visual (foto, skema, dan panduan) akan ditambahkan setelah proses pendataan
                    dan verifikasi di lapangan selesai.
                  </p>
                </div>
                <div className="pt-2 text-center">
                  <Link
                    href="/warga/alat-tepat-guna"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laporan Inspeksi K3 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Laporan Inspeksi K3
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-4">Laporan inspeksi K3</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Laporan inspeksi K3.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pelaksanaan inspeksi dan pendataan penerapan keselamatan dan kesehatan kerja (K3) pada penggunaan
                  alat kerja di lingkungan UMKM desa.
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 shadow-md">
                  <h4 className="text-lg font-bold text-amber-800 mb-2">Rangkuman Inspeksi</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ringkasan hasil inspeksi (status aman, temuan, dan tindak lanjut) akan ditampilkan setelah
                    kegiatan K3 dilaksanakan oleh tim terkait.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 border-2 border-teal-200 shadow-md">
                  <h4 className="text-lg font-bold text-navy-800 mb-2">Catatan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Format laporan dan indikator penilaian K3 akan disesuaikan dengan standar yang disepakati bersama
                    pemerintah desa dan pelaku UMKM.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/warga/laporan-inspeksi-k3"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panduan Keselamatan Kerja Berbasis Web */}
      <section 
        ref={panduanAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${panduanAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Panduan Keselamatan Kerja Berbasis Web
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Penyusunan dan pengembangan panduan keselamatan kerja berbasis web untuk pelaku UMKM dan masyarakat Desa Babalan Lor. Panduan ini mencakup upaya perbaikan keselamatan kerja untuk UMKM Konveksi dan UMKM Pemindangan, termasuk praktik terbaik dan tips keselamatan yang dapat diterapkan sehari-hari.
              </p>
              <Link
                href="/warga/panduan-keselamatan"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Pelajari Lebih Lanjut</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

