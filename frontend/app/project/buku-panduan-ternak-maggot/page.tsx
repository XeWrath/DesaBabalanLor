'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BukuPanduanTernakMaggotPage() {
  const heroAnim = useScrollAnimation()
  const contentAnim = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero / cover section with image */}
      <section
        ref={heroAnim.ref}
        className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${
          heroAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight">
                Buku Panduan Desain Peternakan Maggot
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Buku panduan ini merupakan luaran KKN Tim 60 Universitas Diponegoro 2025/2026 yang berisi
                panduan praktis perencanaan dan perancangan peternakan maggot di Desa Babalan Lor sebagai
                solusi pengelolaan sampah organik dan penguatan ekonomi desa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Buku Panduan Ternak Maggot.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-navy-600 to-teal-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Unduh PDF Lengkap</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  </svg>
                </a>
                <Link
                  href="/project"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-navy-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-300"
                >
                  <span>Kembali ke Halaman Project</span>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-100 bg-slate-100">
                <Image
                  src="/images/panduanternakmaggot.jpg"
                  alt="Sampul Buku Panduan Desain Peternakan Maggot"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan isi penting buku */}
      <section
        ref={contentAnim.ref}
        className={`pb-20 px-4 sm:px-6 lg:px-8 ${
          contentAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-forest-100">
            <h2 className="text-2xl md:text-3xl font-black text-forest-800 mb-4">
              Tujuan dan Manfaat Buku Panduan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Buku panduan ini disusun untuk membantu pemerintah desa, BUMDes, dan masyarakat dalam
              merencanakan peternakan maggot yang fungsional, efisien, dan mudah dibangun dengan kondisi
              lokal Desa Babalan Lor. Fokus utamanya adalah:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Mengintegrasikan pengelolaan sampah organik desa ke dalam sistem budidaya maggot BSF.</li>
              <li>Menyediakan acuan desain bangunan dan fasilitas yang sederhana namun efektif.</li>
              <li>Mendukung lahirnya unit usaha baru yang dikelola desa atau BUMDes secara berkelanjutan.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-forest-100 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-forest-800">
              Gambaran Umum Desain Peternakan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desain peternakan maggot disusun mengikuti alur siklus hidup Black Soldier Fly (BSF), mulai
              dari perkawinan lalat dewasa hingga panen maggot dan pengolahan hasil. Tata letak ruang
              mempertimbangkan kemudahan alur kerja, kebersihan, dan kenyamanan pekerja, sekaligus
              memanfaatkan material yang mudah didapat dan ekonomis.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-forest-50 rounded-2xl p-4 border border-forest-100">
                <h3 className="text-lg font-black text-forest-800 mb-2">Kandang Kawin</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ruang khusus lalat BSF dewasa untuk kawin, dengan pencahayaan alami yang cukup, tinggi
                  ruang memadai untuk terbang, rangka galvalum ringan, dan insect net untuk mencegah
                  hama masuk/keluar.
                </p>
              </div>
              <div className="bg-forest-50 rounded-2xl p-4 border border-forest-100">
                <h3 className="text-lg font-black text-forest-800 mb-2">Rak Maggot</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sistem rak vertikal untuk tempat penetasan telur dan biopond. Menghemat ruang,
                  menjaga kerapian, dan memudahkan pengelolaan budidaya dengan struktur galvalum dan
                  penutup insect net.
                </p>
              </div>
              <div className="bg-forest-50 rounded-2xl p-4 border border-forest-100">
                <h3 className="text-lg font-black text-forest-800 mb-2">Tempat Pembesaran Pupa</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ruang gelap dan terlindung untuk pupa hingga menetas menjadi lalat dewasa, dengan
                  jalur langsung menuju kandang kawin sehingga lalat dapat berpindah secara alami.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-forest-100 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-forest-800">
              Biopond dan Alur Produksi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Buku ini membedakan dua jenis biopond: biopond pembesaran dan biopond panen. Biopond
              pembesaran difungsikan untuk menghasilkan pupa sebagai indukan, sementara biopond panen
              difokuskan pada produksi maggot konsumsi.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Biopond Pembesaran:</span> dilengkapi sisi miring dan
                paralon penangkap pupa agar maggot yang siap berubah fase dapat memisahkan diri
                otomatis.
              </li>
              <li>
                <span className="font-semibold">Biopond Panen:</span> menggunakan kontainer plastik besar
                yang ringan dan mudah dibersihkan, ideal untuk produksi maggot skala kecil-menengah.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-forest-100 space-y-6">
            <h2 className="text-2xl md:text-3xl font-black text-forest-800">
              Peralatan Pendukung Utama
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Selain bangunan utama, buku panduan juga menjelaskan desain dan fungsi peralatan pendukung
              yang dirancang agar sederhana tetapi efektif:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-earth-50 rounded-2xl p-4 border border-earth-100">
                <h3 className="text-lg font-black text-earth-800 mb-2">Lampu Penerangan</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mengoptimalkan aktivitas lalat BSF dan pekerja di area kandang, terutama pada fase
                  kawin dan penetasan.
                </p>
              </div>
              <div className="bg-earth-50 rounded-2xl p-4 border border-earth-100">
                <h3 className="text-lg font-black text-earth-800 mb-2">Mesin Pengayak & Pencacah</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Membantu memisahkan maggot dari media dan mencacah bahan pakan organik agar lebih
                  mudah dikonsumsi.
                </p>
              </div>
              <div className="bg-earth-50 rounded-2xl p-4 border border-earth-100">
                <h3 className="text-lg font-black text-earth-800 mb-2">Solar Dryer</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Alat pengering sederhana berbasis energi matahari untuk mengolah maggot atau kasgot
                  menjadi produk yang lebih awet dan mudah dipasarkan.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-forest-100">
            <h2 className="text-2xl md:text-3xl font-black text-forest-800 mb-3">
              Siapa yang Dapat Menggunakan Panduan Ini?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Panduan ini ditujukan untuk pemerintah desa, pengelola BUMDes, kelompok tani, pelaku UMKM,
              maupun warga yang ingin memulai budidaya maggot secara terencana. Dengan mengikuti desain
              yang disarankan, diharapkan peternakan maggot dapat dibangun secara bertahap sesuai
              kemampuan anggaran, namun tetap aman, higienis, dan produktif.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Untuk detail ukuran teknis, gambar kerja lengkap, dan rincian RAB, silakan baca{' '}
              <span className="font-semibold">Buku Panduan Ternak Maggot</span> versi PDF melalui tombol
              unduh di bagian atas halaman ini.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

