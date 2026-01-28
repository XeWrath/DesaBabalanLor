'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useLanguage } from '@/contexts/LanguageContext'

const umkmList = [
  { id: 1, name: 'Rumah Konveksi Mursalim', type: 'Konveksi', note: 'Produksi pakaian/jeans rumahan' },
  { id: 2, name: 'Konveksi Castielo H. Subiyanto', type: 'Konveksi', note: 'Usaha konveksi skala kecil-menengah' },
  { id: 3, name: 'CV. Buana Indah Textile', type: 'Tekstil / Konveksi', note: 'Produsen tekstil dan konveksi' },
  { id: 4, name: 'Ahmad Mugiono Konveksi', type: 'Konveksi', note: 'Jasa jahit dan produksi pakaian' },
  { id: 5, name: 'Konveksi Lomen Collection', type: 'Konveksi', note: 'Brand lokal koleksi pakaian' },
  { id: 6, name: 'Kampung Tahu', type: 'Pangan Olahan', note: 'Produksi tahu dan wisata edukasi' },
  { id: 7, name: 'Pindang', type: 'Pangan Olahan', note: 'Usaha olahan ikan pindang' },
  { id: 8, name: 'Zakaria Collection', type: 'Konveksi', note: 'Konveksi dan penjahit pakaian' },
  { id: 9, name: 'Supriyanto Konveksi', type: 'Konveksi', note: 'Konveksi skala rumahan' },
  { id: 10, name: 'Konfeksi Ucok Pernah Tampan', type: 'Konveksi', note: 'Brand konveksi kreatif lokal' },
  { id: 11, name: 'Konfeksi Alex', type: 'Konveksi', note: 'Usaha konfeksi pakaian' },
  { id: 12, name: 'River Denim', type: 'Konveksi Denim', note: 'Produksi jeans/denim lokal', highlight: true },
  { id: 13, name: 'Harjo Konfeksi', type: 'Konveksi', note: 'Konveksi pakaian dan seragam' },
]

export default function UMKMPage() {
  const heroAnim = useScrollAnimation()
  const aboutAnim = useScrollAnimation()
  const listAnim = useScrollAnimation()
  const visionAnim = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section 
        ref={heroAnim.ref}
        className={`relative h-screen flex items-center justify-center overflow-hidden ${heroAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight pb-2">
            {t('umkm.hero')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 font-medium drop-shadow-lg">
            {t('umkm.heroSub')}
          </p>
        </div>
      </section>

      {/* About UMKM Section + Peta UMKM */}
      <section 
        ref={aboutAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${aboutAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 mb-4 leading-tight pb-2">
              {t('umkm.about')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
          </div>

          {/* Deskripsi singkat UMKM */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-amber-200 mb-10">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              UMKM Konveksi dan Pangan Desa Babalan Lor
            </h3>
            <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-4">
              Skala 1:10.000 · Datum WGS 1984 · Coordinate System UTM Zone 49S · Projection Transverse Mercator
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Peta persebaran UMKM ini disusun oleh <span className="font-semibold">KKN Kelompok 60 Universitas Diponegoro 2025/2026</span>
              {' '}untuk memetakan lokasi usaha konveksi, pangan olahan, dan unit usaha lain di Desa Babalan Lor, Kecamatan Bojong.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                <div className="text-3xl font-black text-amber-700 mb-1">13</div>
                <div className="text-sm text-gray-600 font-semibold">Titik UMKM Terdata</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                <div className="text-3xl font-black text-amber-700 mb-1">3</div>
                <div className="text-sm text-gray-600 font-semibold">Sumber Data</div>
                <p className="text-[11px] text-gray-500 mt-1">BIG 2025, Google Earth 2024, Observasi Lapangan 2026</p>
              </div>
            </div>
          </div>

          {/* Peta utama + inset */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-amber-200 mb-10">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="w-full rounded-2xl overflow-hidden shadow-xl border-2 border-amber-300 bg-slate-100">
                  <img
                    src="/images/peta.jpg"
                    alt="Peta Persebaran UMKM Desa Babalan Lor"
                    className="w-full h-auto object-contain align-middle"
                  />
                </div>
              </div>

              <div className="w-full lg:w-48 flex flex-col items-center gap-4">
                <div className="bg-white rounded-2xl shadow-md border border-amber-200 p-3 w-full">
                  <p className="text-xs font-bold text-gray-800 text-center mb-2">INSET PETA</p>
                  <div className="w-full rounded-lg overflow-hidden border border-gray-300 bg-slate-100">
                    <img
                      src="/images/insetpeta.jpg"
                      alt="Inset Peta Lokasi Desa Babalan Lor"
                      className="w-full h-auto object-contain align-middle"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Legenda singkat */}
            <div className="mt-6 border-t border-amber-100 pt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-blue-700 inline-block" /> <span>Balai Desa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-blue-400 inline-block" /> <span>Sekolah</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block" /> <span>UMKM (titik merah bernomor)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-green-700 inline-block" /> <span>Masjid</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-sky-500 inline-block" /> <span>Sungai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[repeating-linear-gradient(45deg,#c5e1a5,#c5e1a5_2px,#a5d6a7_2px,#a5d6a7_4px)] inline-block" />{' '}
                <span>Sawah</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-red-700 inline-block" /> <span>Batas Kecamatan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-pink-400 inline-block" /> <span>Batas Desa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-emerald-300 inline-block" /> <span>DK. Sidokerti</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-cyan-300 inline-block" /> <span>DK. Kepundangan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-orange-300 inline-block" /> <span>DK. Ulok</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-red-300 inline-block" /> <span>DK. Tenagh</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic text-right">
              Sumber peta: Badan Informasi Geospasial 2025, Google Earth 2024, dan hasil observasi lapangan 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Daftar UMKM dari Peta (tabel bernomor seperti pada peta) */}
      <section 
        ref={listAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50 ${listAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 mb-4 leading-tight pb-2">
              {t('umkm.daftar')}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{t('umkm.daftarSub')}</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-amber-200 max-w-xl mx-auto">
            <h3 className="text-xl font-black text-gray-900 mb-4 text-center">
              DAFTAR UMKM (sesuai penomoran pada peta)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-amber-100 text-gray-800">
                    <th className="border border-amber-300 px-3 py-2 text-center font-bold w-14">No</th>
                    <th className="border border-amber-300 px-3 py-2 text-left font-bold">Nama UMKM</th>
                  </tr>
                </thead>
                <tbody>
                  {umkmList.map((place) => (
                    <tr key={place.id} className="hover:bg-amber-50 transition-colors">
                      <td className="border border-amber-200 px-3 py-2 text-center font-semibold">
                        {place.id}
                      </td>
                      <td className="border border-amber-200 px-3 py-2">
                        {place.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-gray-500 mt-3 text-center italic">
              Daftar ini mengikuti urutan dan penomoran yang ditampilkan pada peta persebaran UMKM.
            </p>
          </div>

          {/* Profil singkat tiap UMKM (lebih detail) */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmList.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-amber-200 transform-3d hover:translate-z-30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black shadow-md">
                    {place.id}
                  </div>
                  {place.highlight && (
                    <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-300">
                      Highlight Denim
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-black text-amber-800 mb-1">{place.name}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-1">{place.type}</p>
                <p className="text-sm text-gray-600 mb-3">{place.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section 
        ref={visionAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${visionAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-amber-800 mb-4 text-center">{t('umkm.visi')}</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {t('umkm.visiDesc')}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-amber-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-amber-800 mb-4 text-center">{t('umkm.misi')}</h3>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>{t('umkm.misi1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>{t('umkm.misi2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>{t('umkm.misi3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>{t('umkm.misi4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
