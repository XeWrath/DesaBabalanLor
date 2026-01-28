'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AlatMaggotPage() {
  const heroAnim = useScrollAnimation()
  const separatorAnim = useScrollAnimation()
  const dryerAnim = useScrollAnimation()
  const shredderAnim = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Navbar */}
      <div className="bg-white/90 border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-navy-800 border border-slate-200 bg-white hover:bg-slate-50 hover:border-teal-300 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Project</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            <span>Buka Website Utama</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroAnim.ref}
        className={`relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
          heroAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-teal-600 to-navy-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-2xl leading-tight pb-1">
              Alat untuk Project Maggot
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-4 font-medium drop-shadow-lg">
              Rangkaian alat pendukung pemisahan, pengeringan, dan pengolahan media budidaya maggot agar proses
              lebih efisien, higienis, dan mudah direplikasi di tingkat desa.
            </p>
          </div>
        </div>
      </section>

      {/* Maggot Separator with Slider System */}
      <section
        ref={separatorAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${separatorAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-1 text-center">
              Maggot Separator with Slider System
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto mb-10" />

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Fungsi</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Alat penyaring maggot ini berfungsi untuk memisahkan maggot dari media tanah atau sisa substrat
                    budidaya dengan memanfaatkan perbedaan ukuran partikel melalui sistem ayakan yang bergerak maju
                    dan mundur. Gerakan linier pada bak ayakan membantu mempercepat proses pemisahan antara maggot
                    dan tanah secara lebih merata dan efisien.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Prinsip Kerja</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Alat penyaring maggot ini menggunakan mekanisme engkol yang dihubungkan dengan <em>flywheel</em>{' '}
                    dan lengan penggerak (<em>arm</em>) untuk menghasilkan gerak maju dan mundur pada bak ayakan.
                    Campuran maggot dan tanah dimasukkan ke dalam bak penyaring yang dilengkapi dengan pelat ayakan
                    berlubang di bagian bawah.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Ketika engkol diputar secara manual, putaran poros engkol diteruskan ke <em>flywheel</em> yang
                    berfungsi menstabilkan putaran, kemudian diubah oleh lengan penggerak menjadi gerak linier
                    bolak-balik pada bak ayakan.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Bak ayakan bergerak maju dan mundur mengikuti <em>linear rail</em> yang terpasang pada rangka
                    alat, sehingga pergerakannya tetap lurus, stabil, dan minim gesekan. Partikel tanah dan kotoran
                    yang berukuran lebih kecil dari lubang ayakan akan jatuh ke bagian bawah rangka alat, sedangkan
                    maggot tertahan di dalam bak, sehingga terjadi proses pemisahan maggot dari tanah secara efektif.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 shadow-xl bg-slate-50">
                  <Image
                    src="/images/maggotseparator.jpg"
                    alt="Desain Maggot Separator dengan sistem slider"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Dryer Maggot */}
      <section
        ref={dryerAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${
          dryerAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-1 text-center">
              Solar Dryer Maggot
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto mb-10" />

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Fungsi</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Alat ini berfungsi untuk menurunkan kadar air pada hasil panen maggot secara intensif dengan
                    memanfaatkan prinsip efek rumah kaca, di mana panas matahari dimaksimalkan di dalam ruang
                    pengering berukuran 2 × 1 meter. Penggunaan alat ini dirancang untuk menggantikan metode
                    penjemuran konvensional yang rawan terkontaminasi, sehingga proses pengeringan menjadi lebih
                    higienis, terhindar dari debu, serta terlindung dari gangguan hewan predator maupun perubahan
                    cuaca yang tidak menentu.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Prinsip Kerja</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Alat pengering maggot ini bekerja dengan menerapkan mekanisme efek rumah kaca (
                    <em>greenhouse effect</em>) untuk memaksimalkan penyerapan energi surya. Radiasi sinar matahari
                    menembus penutup transparan (kaca atau plastik UV) pada bagian atap, kemudian panasnya
                    terperangkap di dalam ruang pengering (<em>drying chamber</em>) yang berukuran 2 × 1 meter.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Akumulasi panas ini menyebabkan suhu di dalam ruangan meningkat secara signifikan melebihi suhu
                    lingkungan luar, menciptakan kondisi termal yang ideal untuk mempercepat proses penguapan air
                    dari tubuh maggot tanpa pembakaran langsung.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 shadow-xl bg-slate-50">
                  <Image
                    src="/images/solardryer.jpg"
                    alt="Desain Solar Dryer Maggot"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alat Pencacah Sampah Organik */}
      <section
        ref={shredderAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${shredderAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-1 text-center">
              Alat Pencacah Sampah Organik
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto mb-10" />

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Fungsi</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Alat ini berfungsi untuk mencacah sampah organik menjadi potongan yang lebih kecil dengan bantuan
                    pisau pencacah yang digerakkan oleh motor listrik. Hasil cacahan dapat dimanfaatkan untuk pakan
                    maggot atau untuk proses pengomposan.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-3">Prinsip Kerja</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Alat pencacah sampah organik tipe vertikal bermotor ini bekerja berdasarkan prinsip pemotongan
                    mekanis (<em>mechanical shearing</em>) dan gaya tumbukan (<em>impact force</em>) yang dihasilkan
                    oleh pisau pencacah berputar di dalam tabung silinder tertutup.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Proses kerja alat dimulai ketika sumber listrik dihubungkan dan saklar <strong>ON</strong>{' '}
                    diaktifkan. Arus listrik mengalir ke motor listrik, yang kemudian mengubah energi listrik menjadi
                    energi mekanik berupa gerak putar pada poros motor.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Putaran motor ini diteruskan ke poros utama pencacah melalui sistem kopling atau <em>pulley</em>,
                    sehingga poros pencacah berputar dengan kecepatan tertentu yang telah dirancang agar optimal
                    untuk pencacahan sampah organik.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 shadow-xl bg-slate-50">
                  <Image
                    src="/images/pencacah.jpg"
                    alt="Desain alat pencacah sampah organik"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

