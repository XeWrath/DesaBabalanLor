'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PanduanKeselamatanPage() {
  const heroAnim = useScrollAnimation()
  const konveksiAnim = useScrollAnimation()
  const pemindanganAnim = useScrollAnimation()
  const posterAnim = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Navbar */}
      <div className="bg-white/90 border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href="/warga"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-navy-800 border border-slate-200 bg-white hover:bg-slate-50 hover:border-teal-300 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Kembali</span>
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
              Panduan Keselamatan Kerja Berbasis Web
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-4 font-medium drop-shadow-lg">
              Penyusunan dan pengembangan panduan keselamatan kerja berbasis web untuk pelaku UMKM dan masyarakat Desa Babalan Lor.
            </p>
          </div>
        </div>
      </section>

      {/* UMKM Konveksi Section */}
      <div
        ref={konveksiAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${konveksiAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
                Upaya Perbaikan Keselamatan Kerja UMKM Konveksi
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
            </div>

            {/* 1. Perbaikan Tata Letak Area Kerja */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">1. Perbaikan Tata Letak Area Kerja</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Penataan area kerja yang lebih rapi merupakan salah satu upaya perbaikan yang dapat meningkatkan keselamatan dan kenyamanan kerja pada usaha konveksi. Kain yang disusun dengan baik di rak atau wadah khusus akan membantu mengurangi gangguan saat bekerja serta memperlancar pergerakan pekerja.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Jalur jalan yang dibiarkan kosong dan tertata dengan jelas juga memudahkan aktivitas produksi dan membuat area kerja terasa lebih lapang. Selain itu, merapikan area kerja setelah selesai produksi dan mengatur posisi meja potong agar mudah dijangkau dapat membantu menciptakan lingkungan kerja yang lebih aman dan tertib.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/alatperbaikan.jpg"
                      alt="Perbaikan Tata Letak Area Kerja"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Perbaikan Cara Penggunaan Alat Potong Kain */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">2. Perbaikan Cara Penggunaan Alat Potong Kain</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Upaya perbaikan dalam penggunaan alat potong kain dapat dilakukan dengan membiasakan penggunaan alat sesuai kebutuhan dan fungsinya. Saat memotong kain, arah potongan sebaiknya dijauhkan dari tubuh untuk meningkatkan keamanan kerja.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Setelah digunakan, alat potong perlu disimpan di tempat khusus agar tidak tercecer dan mudah ditemukan kembali.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/alatpotongkain.jpg"
                      alt="Perbaikan Cara Penggunaan Alat Potong Kain"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Perbaikan Pengoperasian Mesin Jahit */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">3. Perbaikan Pengoperasian Mesin Jahit</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Pengoperasian mesin jahit yang lebih tertib dan aman dapat mendukung kelancaran produksi serta mengurangi gangguan saat bekerja. Salah satu upaya perbaikan yang dapat diterapkan adalah membiasakan mematikan mesin ketika mengganti jarum atau saat membersihkan mesin.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/alatjahit.jpg"
                      alt="Perbaikan Pengoperasian Mesin Jahit"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Perbaikan Penataan Kabel dan Peralatan Listrik */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">4. Perbaikan Penataan Kabel dan Peralatan Listrik</h3>
              <div className="grid md:grid-cols-1 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Penataan kabel dan penggunaan peralatan listrik yang lebih baik merupakan langkah perbaikan penting dalam menciptakan lingkungan kerja yang aman. Kabel listrik sebaiknya dirapikan agar tidak melintang di jalur jalan dan mengganggu aktivitas kerja.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Selain itu, menghindari penggunaan kabel yang rusak juga merupakan bentuk perhatian terhadap keselamatan kerja sehari-hari.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Perbaikan Pencahayaan Area Kerja */}
            <div className="mb-10 pb-10 border-b-0">
              <h3 className="text-2xl font-black text-gray-900 mb-4">5. Perbaikan Pencahayaan Area Kerja</h3>
              <div className="grid md:grid-cols-1 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Pencahayaan yang memadai merupakan salah satu faktor penting dalam menunjang ketelitian kerja pada usaha konveksi. Upaya perbaikan dapat dilakukan dengan menambah lampu di area kerja utama dan mengarahkan cahaya langsung ke area jahit atau potong kain.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Lampu yang bersih dan berfungsi dengan baik akan membantu mengurangi kelelahan mata serta mendukung kenyamanan dan ketepatan kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UMKM Pemindangan Section */}
      <div
        ref={pemindanganAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${pemindanganAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
                Upaya Perbaikan Keselamatan Kerja UMKM Pemindangan
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
            </div>

            {/* 1. Penggunaan Sarung Tangan */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">1. Penggunaan Sarung Tangan</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Penggunaan sarung tangan dalam kegiatan pemindangan ikan bertujuan untuk melindungi tangan pekerja selama proses pencucian, pemindahan, dan penanganan ikan. Sarung tangan membantu menjaga kebersihan produk serta mengurangi kontak langsung dengan air, ikan, dan peralatan kerja.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dengan menggunakan sarung tangan secara rutin, proses kerja dapat berlangsung lebih nyaman dan tertib, sekaligus mendukung kebersihan area produksi.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/sarungtangan.jpg"
                      alt="Penggunaan Sarung Tangan"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Penggunaan Sepatu Boots */}
            <div className="mb-10 pb-10 border-b-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-4">2. Penggunaan Sepatu Boots</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Sepatu boots digunakan untuk melindungi kaki pekerja dari kondisi lantai yang basah dan licin akibat air dan sisa proses pemindangan. Penggunaan sepatu boots membantu menjaga kestabilan saat berjalan dan bekerja di sekitar area perebusan ikan.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Selain itu, sepatu boots juga memberikan kenyamanan dan perlindungan kaki selama aktivitas berlangsung, sehingga pekerja dapat bekerja dengan lebih aman dan percaya diri.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/sepatuboots.jpg"
                      alt="Penggunaan Sepatu Boots"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Penggunaan Alat Pengaman Panas */}
            <div className="mb-10 pb-10 border-b-0">
              <h3 className="text-2xl font-black text-gray-900 mb-4">3. Penggunaan Alat Pengaman Panas</h3>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Penggunaan alat pengaman panas sangat penting dalam usaha pemindangan ikan karena proses produksi melibatkan air panas dan peralatan bersuhu tinggi. Alat pengaman panas seperti sarung tangan tahan panas atau lap pelindung dapat digunakan saat mengangkat panci, tutup perebusan, atau wadah berisi ikan panas.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dengan penggunaan alat pengaman panas yang tepat, pekerja dapat melakukan proses perebusan dan pemindahan ikan dengan lebih aman, serta mengurangi ketidaknyamanan akibat paparan panas selama bekerja.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-gray-200">
                    <Image
                      src="/images/alatpengamanpanas.jpg"
                      alt="Penggunaan Alat Pengaman Panas"
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Section */}
      <div
        ref={posterAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${posterAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 mb-2 leading-tight pb-2">
                KESELAMATAN KERJA
              </h2>
              <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 mb-4 leading-tight">
                USAHA PEMINDANGAN IKAN
              </h3>
              <p className="text-xl font-bold text-amber-800 mb-6">
                Kerja Aman, Usaha Nyaman, Produksi Lancar
              </p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-red-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
                <h4 className="text-xl font-black text-amber-800 mb-3">AMAN SAAT DENGAN AIR PANAS</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Angkat panci dengan hati-hati</li>
                  <li>• Gunakan alat bantu mengangkat</li>
                  <li>• Jangan isi wadah terlalu penuh</li>
                </ul>
                <p className="text-sm font-semibold text-amber-700 italic">Ingat: Pelan tapi aman</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
                <h4 className="text-xl font-black text-amber-800 mb-3">CEGAH TERPELESET</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Pakai alas kaki anti licin</li>
                  <li>• Segera keringkan lantai basah</li>
                  <li>• Jaga area tetap rapi</li>
                </ul>
                <p className="text-sm font-semibold text-amber-700 italic">Ingat: Lantai kering, kerja tenang</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
                <h4 className="text-xl font-black text-amber-800 mb-3">GUNAKAN PERLINDUNGAN SEDERHANA</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Pakai sarung tangan</li>
                  <li>• Gunakan celemek</li>
                  <li>• Lap tangan sebelum pegang alat</li>
                </ul>
                <p className="text-sm font-semibold text-amber-700 italic">Ingat: Alat sederhana, manfaat besar</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-200">
                <h4 className="text-xl font-black text-amber-800 mb-3">JAGA KEBERSIHAN AREA</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Buang sisa ikan pada tempatnya</li>
                  <li>• Bersihkan alat setelah pakai</li>
                  <li>• Jaga saluran air lancar</li>
                </ul>
                <p className="text-sm font-semibold text-amber-700 italic">Ingat: Bersih itu sehat</p>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-700 italic">
                Keselamatan dimulai dari kebiasaan kecil.
              </p>
              <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 mt-2">
                Kerja Lebih Aman, Usaha Lebih Berkelanjutan!
              </p>
            </div>

            <div className="flex justify-center">
              <div className="inline-block max-w-5xl w-full rounded-2xl overflow-hidden border-2 border-amber-200">
                <Image
                  src="/images/poster.jpg"
                  alt="Poster Keselamatan Kerja Usaha Pemindangan Ikan"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
