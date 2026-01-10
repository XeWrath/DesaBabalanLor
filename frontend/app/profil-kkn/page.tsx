'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProfilKKNPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Team members data - 9 members
  const teamMembers = [
    { id: 1, name: 'Fakhril Azhar', role: 'Koordinator', description: 'Bertanggung jawab atas koordinasi tim KKN dengan desa' },
    { id: 2, name: 'Kerren Lintang', role: 'Sekretaris', description: 'Mengelola administrasi dan dokumentasi kegiatan KKN' },
    { id: 3, name: 'Arina Miliaty', role: 'Bendahara', description: 'Mengelola keuangan dan anggaran kegiatan KKN' },
    { id: 4, name: 'Alya Samha', role: 'Humas', description: 'Juru Bicara kegiatan' },
    { id: 5, name: 'Muhammad Raihan Wardhana', role: 'Logistik', description: 'Menyediakan alat dan bahan selama kegiatan KKN' },
    { id: 6, name: 'Zen Ashar', role: 'Logistik', description: 'Menyediakan alat dan bahan selama kegiatan KKN' },
    { id: 7, name: 'Yoann Harahap', role: 'Logistik', description: 'Menyediakan alat dan bahan selama kegiatan KKN' },
    { id: 8, name: 'Krisna Satrio Permana', role: 'PDD', description: 'Mendokumentasikan seluruh kegiatan project' },
    { id: 9, name: 'Alzah', role: 'PDD', description: 'Mendokumentasikan seluruh kegiatan project' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/logoKKN.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy-600/80 via-teal-600/80 to-navy-700/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl animate-slide-up leading-tight pb-2">
            Profil KKN
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Tim KKN Desa Babalan Lor - Project Maggot
          </p>
        </div>
      </section>

      {/* About KKN Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Tentang Tim KKN
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tim Kuliah Kerja Nyata (KKN) Desa Babalan Lor terdiri dari 9 mahasiswa yang berdedikasi 
                untuk memberikan kontribusi nyata kepada masyarakat desa. Melalui program KKN ini, 
                kami berkomitmen untuk mengembangkan Desa Babalan Lor dengan fokus pada project maggot 
                untuk pengelolaan sampah organik.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Project maggot yang kami kembangkan bertujuan untuk mengatasi masalah sampah organik 
                di desa sekaligus menciptakan peluang ekonomi baru. Melalui budidaya maggot, sampah 
                organik dapat diubah menjadi produk bernilai tinggi seperti pakan ikan dan pupuk organik.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-forest-50 rounded-xl p-4 border-2 border-forest-200 text-center">
                  <div className="text-3xl font-black text-forest-700 mb-1">9</div>
                  <div className="text-sm text-gray-600 font-semibold">Anggota Tim</div>
                </div>
                <div className="bg-earth-50 rounded-xl p-4 border-2 border-earth-200 text-center">
                  <div className="text-3xl font-black text-earth-700 mb-1">1</div>
                  <div className="text-sm text-gray-600 font-semibold">Project Utama</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200 text-center">
                  <div className="text-3xl font-black text-amber-700 mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Dedikasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Maggot Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Project Maggot Kami
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Project Maggot untuk Pengelolaan Sampah
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Sebagai bagian dari program KKN, kami mengembangkan project maggot yang bertujuan 
                  untuk mengelola sampah organik di Desa Babalan Lor. Project ini memanfaatkan larva 
                  lalat hitam (Black Soldier Fly) untuk mengubah sampah organik menjadi produk bernilai 
                  ekonomi tinggi.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Maggot yang dihasilkan dapat dijual sebagai pakan ikan berkualitas tinggi, sementara 
                  limbah maggot (kasgot) dapat digunakan sebagai pupuk organik untuk tanaman. Project 
                  ini tidak hanya membantu mengatasi masalah sampah, tetapi juga menciptakan peluang 
                  ekonomi baru bagi masyarakat desa.
                </p>
                <Link
                  href="/project"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-navy-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest-400 to-earth-500 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Anggota Tim
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">9 Anggota Tim KKN Desa Babalan Lor</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-forest-100 text-center transform-3d hover:translate-z-30 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-forest-500 to-earth-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-3d">
                  <span className="text-3xl font-black text-white">
                    {member.id}
                  </span>
                </div>
                <h3 className="text-xl font-black text-forest-800 mb-2">{member.name}</h3>
                <p className="text-forest-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Visi & Misi Tim
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto"></div>
          </div>

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
                Menjadi tim KKN yang berkontribusi nyata dalam pengembangan Desa Babalan Lor melalui 
                project maggot yang berkelanjutan dan memberikan manfaat jangka panjang bagi masyarakat.
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
                  <span>Mengembangkan project maggot yang berkelanjutan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Memberdayakan masyarakat dalam pengelolaan sampah organik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Menciptakan peluang ekonomi baru bagi desa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-forest-600 mr-2">•</span>
                  <span>Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan sampah</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-gradient-to-r from-forest-600 to-earth-700 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  )
}

