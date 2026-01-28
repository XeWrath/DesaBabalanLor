'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function LaporanInspeksiK3Page() {
  const heroAnim = useScrollAnimation()
  const ringkasanAnim = useScrollAnimation()
  const lampiranAnim = useScrollAnimation()

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
            <span>Kembali ke Layanan Warga</span>
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
              Laporan Inspeksi K3 UMKM Desa Babalan Lor
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-4 font-medium drop-shadow-lg">
              Ringkasan hasil inspeksi Keselamatan dan Kesehatan Kerja (K3) pada UMKM konveksi dan pemindangan ikan
              tongkol di Desa Babalan Lor.
            </p>
          </div>
        </div>
      </section>

      {/* Ringkasan Laporan */}
      <section
        ref={ringkasanAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${ringkasanAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-1 text-center">
              Ringkasan Laporan
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kegiatan inspeksi K3 ini dilaksanakan sebagai bagian dari program kerja KKN untuk membantu UMKM konveksi
              dan pemindangan ikan tongkol di Desa Babalan Lor. Fokus utama kegiatan adalah mengidentifikasi potensi
              bahaya kerja, menilai kondisi lingkungan kerja, serta memberikan rekomendasi perbaikan yang dapat
              diterapkan secara sederhana dan berkelanjutan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hasil inspeksi menunjukkan bahwa penerapan K3 pada kedua UMKM masih perlu ditingkatkan, terutama pada
              aspek tata letak area kerja, penggunaan alat kerja, penataan instalasi listrik, pencahayaan, serta
              penggunaan alat pelindung diri (APD). Rekomendasi utama meliputi penataan ulang area kerja, pemilihan
              alat yang lebih aman, perbaikan instalasi listrik dan pencahayaan, serta kewajiban penggunaan APD
              seperti sarung tangan dan pelindung panas.
            </p>
          </div>
        </div>
      </section>

      {/* Lampiran Tabel Temuan */}
      <section
        ref={lampiranAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${
          lampiranAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Tabel Konveksi */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
              Lampiran Hasil Inspeksi K3 – Usaha Konveksi
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black w-16">No</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black w-48">
                      Dokumentasi Temuan Lapangan
                    </th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">
                      Temuan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      1
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/1.jpg"
                          alt="Mesin jahit dan pedal pada usaha konveksi"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi mesin jahit dan pedal pengoperasian.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Pedal pengoperasian mesin jahit sering mengalami slip saat digunakan sehingga pengoperasian
                      mesin menjadi kurang stabil dan berpotensi memengaruhi keselamatan kerja operator.
                    </td>
                  </tr>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      2
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/2.jpg"
                          alt="Alat potong kain yang digunakan di usaha konveksi"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi alat potong kain pada usaha konveksi.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Penggunaan alat potong kain masih tergolong riskan dan berpotensi menimbulkan kecelakaan kerja
                      apabila tidak digunakan dengan tingkat kehati-hatian yang tinggi.
                    </td>
                  </tr>
                  <tr className="bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      3
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/3.jpg"
                          alt="Area kerja konveksi yang tidak rapi"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi area kerja konveksi yang belum tertata rapi.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Area kerja terlihat tidak rapi dengan material dan sisa potongan kain berserakan. Tidak terdapat
                      ruang penyimpanan khusus sehingga area kerja dan material produksi bercampur dalam satu ruang.
                    </td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      4
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/4.jpg"
                          alt="Kabel listrik di area produksi konveksi"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi kondisi kabel listrik di area produksi.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Kabel listrik terlihat tidak terlindungi dengan baik dan penataannya belum rapi sehingga
                      berpotensi membahayakan keselamatan kerja di area produksi.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tabel Pemindangan Ikan */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
              Lampiran Hasil Inspeksi K3 – Usaha Pemindangan Ikan Tongkol
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black w-16">No</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black w-48">
                      Dokumentasi Temuan Lapangan
                    </th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">
                      Temuan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      1
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/u1jpg.jpg"
                          alt="Area perebusan pada usaha pemindangan ikan"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi area perebusan pemindangan ikan tongkol.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Pada area perebusan tidak terdapat pengaman panas yang melindungi pekerja dari paparan suhu
                      tinggi selama proses produksi.
                    </td>
                  </tr>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      2
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/u2.jpg"
                          alt="Pekerja pemindangan tanpa sarung tangan"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi pekerja yang belum menggunakan sarung tangan.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Pelaku usaha tidak menggunakan sarung tangan untuk melindungi diri saat proses pemindangan,
                      sehingga dapat membahayakan tangan dan meningkatkan risiko cedera.
                    </td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-semibold text-gray-800">
                      3
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-600">
                      <div className="inline-block max-w-[160px] w-full rounded-xl overflow-hidden border border-forest-200 bg-slate-50 shadow-sm mb-2">
                        <Image
                          src="/images/u3.jpg"
                          alt="Lantai licin di area pengolahan pemindangan ikan"
                          width={320}
                          height={200}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-600">Dokumentasi lantai licin di area pengolahan pemindangan.</p>
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-sm text-gray-800">
                      Lantai di area pengolahan pemindangan ikan licin dan berpotensi menimbulkan bahaya terpeleset
                      bagi pekerja.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Download PDF */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-forest-100 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Unduh Laporan Lengkap
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Untuk membaca keseluruhan isi laporan, termasuk latar belakang, metodologi, pembahasan lengkap, dan
              dokumentasi foto, silakan unduh berkas PDF berikut.
            </p>
            <a
              href="/Laporan Inpeksi K3 UMKM.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              <span>Unduh Laporan Inspeksi K3 (PDF)</span>
            </a>
            <p className="text-xs text-gray-500 mt-3">
              Pastikan berkas <span className="font-mono">Laporan Inpeksi K3 UMKM.pdf</span> ditempatkan di folder{'href="/Laporan Inpeksi K3 UMKM.pdf"'}
              <span className="font-mono">public</span> agar tautan unduhan berfungsi.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

