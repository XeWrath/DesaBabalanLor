'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AlatTepatGunaPage() {
  const heroAnim = useScrollAnimation()
  const umkmAnim = useScrollAnimation()
  const pertanianAnim = useScrollAnimation()

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
              Alat Tepat Guna Desa Babalan Lor
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-4 font-medium drop-shadow-lg">
              Rekomendasi alat tepat guna untuk mendukung UMKM pindang dan sektor pertanian, disusun berdasarkan
              kebutuhan lapangan dan spesifikasi teknis.
            </p>
          </div>
        </div>
      </section>

      {/* Alat Tepat Guna UMKM */}
      <section
        ref={umkmAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${umkmAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-2">
              Alat Tepat Guna UMKM 
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Mesin Vacuum Sealer */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-forest-100 space-y-4">
              <h3 className="text-2xl font-black text-forest-800">
                1. Mesin Vacuum Sealer
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Tipe ARD-VC85 – Merek Ardin
              </p>
              <div className="bg-forest-50 rounded-2xl p-4 border-2 border-forest-100 mb-3">
                <h4 className="text-lg font-bold text-forest-800 mb-2">Spesifikasi Utama</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Listrik: 100 watt, 220V</li>
                  <li>- Jenis plastik: Plastik vakum emboss</li>
                  <li>- Batas ukuran plastik: maks. 29,5 cm</li>
                  <li>- Dimensi: 36 × 5,4 × 5 cm</li>
                  <li>- Berat: 0,6 kg</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-100">
                <h4 className="text-lg font-bold text-amber-800 mb-2">Alasan Pemilihan Alat</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Memudahkan transportasi dan penyimpanan makanan.</li>
                  <li>- Mempertahankan kesegaran dan melindungi makanan dari berkurangnya kelembapan dan cepat basi.</li>
                  <li>- Membuat makanan lebih awet segar 2–3 kali dibanding tanpa divakum.</li>
                  <li>- Mampu mempertahankan warna, bau, rasa, dan nutrisi makanan.</li>
                </ul>
              </div>
              <div className="flex justify-center pt-2">
                <div className="inline-block max-w-xs w-full rounded-2xl overflow-hidden border-2 border-forest-100 bg-slate-50 shadow-md">
                  <Image
                    src="/images/mesinvacuumsealer.jpg"
                    alt="Mesin vacuum sealer ARD-VC85"
                    width={500}
                    height={250}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* 2. Timbangan Digital */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-forest-100 space-y-4">
              <h3 className="text-2xl font-black text-forest-800">
                2. Timbangan Digital
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Tipe Tora – Timbangan lantai kapasitas besar
              </p>
              <div className="bg-forest-50 rounded-2xl p-4 border-2 border-forest-100 mb-3">
                <h4 className="text-lg font-bold text-forest-800 mb-2">Spesifikasi Utama</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Kapasitas: 100 kg</li>
                  <li>- Akurasi/ketelitian: 50 gram (0,05 kg) atau 20 gram</li>
                  <li>- Ukuran platform/bak: 30 × 40 cm (besi bertekstur/plate)</li>
                  <li>- Layar: LED ganda (depan &amp; belakang)</li>
                  <li>- Daya: listrik 220V dan baterai isi ulang 4V 4Ah</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-100">
                <h4 className="text-lg font-bold text-amber-800 mb-2">Alasan Pemilihan Alat</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Memudahkan penimbangan bahan baku ikan dan bumbu (garam).</li>
                  <li>- Memastikan konsistensi rasa dan kualitas produk.</li>
                </ul>
              </div>
              <div className="flex justify-center pt-2">
                <div className="inline-block max-w-xs w-full rounded-2xl overflow-hidden border-2 border-forest-100 bg-slate-50 shadow-md">
                  <Image
                    src="/images/timbangandigital.jpg"
                    alt="Timbangan digital Tora"
                    width={500}
                    height={250}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alat Tepat Guna Sektor Pertanian */}
      <section
        ref={pertanianAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${
          pertanianAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 leading-tight pb-2">
              Alat Tepat Guna Sektor Pertanian
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="space-y-10">
            {/* 1. Cultivator */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-forest-100 space-y-4">
              <h3 className="text-2xl font-black text-forest-800">
                1. Cultivator
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Merek Taiwo – Alat pengolah tanah dengan berbagai jenis pisau rotor
              </p>
              <div className="bg-forest-50 rounded-2xl p-4 border-2 border-forest-100 mb-3">
                <h4 className="text-lg font-bold text-forest-800 mb-2">Spesifikasi Utama</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Tipe struktur: poros ganda, tipe roda</li>
                  <li>- Ukuran kerja: 1.740 × 760 × 900 mm</li>
                  <li>- Berat bersih: 112 kg</li>
                  <li>- Model mesin: 170F</li>
                  <li>- Tipe daya: bensin</li>
                  <li>- Nilai daya: 4,0 kW pada 3.600 rpm</li>
                  <li>- Mode transmisi: langsung</li>
                  <li>- Lebar kerja: 260 mm</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-100">
                <h4 className="text-lg font-bold text-amber-800 mb-2">Alasan Pemilihan Alat</h4>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  Cultivator adalah alat pertanian modern yang berperan penting dalam pengolahan lahan pertanian.
                  Dengan berbagai pisau rotor seperti:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 pl-4 list-disc">
                  <li>Standar rotor untuk memotong dan membolak-balikkan tanah.</li>
                  <li>Star rotor untuk membantu penghilangan gulma.</li>
                  <li>Bajak singkal untuk pembajakan.</li>
                  <li>Garu sisir untuk kondisi tanah basah.</li>
                  <li>Garu piring yang berfungsi ganda.</li>
                </ul>
                <p className="text-sm text-gray-700 leading-relaxed mt-2">
                  Alat ini mampu mengolah tanah secara efisien dan meningkatkan kualitasnya, mempercepat proses
                  persiapan tanam, penghilangan gulma, serta pembersihan area pertanian yang secara keseluruhan
                  berkontribusi pada hasil panen yang lebih baik.
                </p>
              </div>
              <div className="flex justify-center pt-2">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 bg-slate-50 shadow-md">
                  <Image
                    src="/images/cultivator.jpg"
                    alt="Cultivator Taiwo untuk pengolahan tanah"
                    width={700}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2. Mesin Tanam Padi */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-forest-100 space-y-4">
              <h3 className="text-2xl font-black text-forest-800">
                2. Mesin Tanam Padi
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Merek Kubota – Model mesin D782-E2-P-4
              </p>
              <div className="bg-forest-50 rounded-2xl p-4 border-2 border-forest-100 mb-3">
                <h4 className="text-lg font-bold text-forest-800 mb-2">Spesifikasi Utama</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Total tenaga: 19,6 PS (14,4 kW)</li>
                  <li>- Kapasitas silinder: 778 cc</li>
                  <li>- Kapasitas tangki bahan bakar: 34 L</li>
                  <li>- Tipe bahan bakar: diesel</li>
                  <li>- Transmisi: hidrostatis (HST)</li>
                  <li>- Ground clearance: 500 mm</li>
                  <li>- Baris penanaman: 6 baris</li>
                  <li>- Jarak antar baris: 30 cm</li>
                  <li>- Kedalaman tanam: 1,5 – 5 cm (7 posisi)</li>
                  <li>- Jarak tanaman dalam barisan: 10, 12, 14, 16, 18, 21, 24 cm</li>
                  <li>- Posisi operator: duduk</li>
                  <li>- Dimensi: 3.090 × 2.200 × 2.600 mm</li>
                  <li>- Berat: 805 kg</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-100">
                <h4 className="text-lg font-bold text-amber-800 mb-2">Alasan Pemilihan Alat</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Mengurangi beban tenaga kerja dan meningkatkan efisiensi penanaman.</li>
                  <li>- Mampu menanam banyak benih dalam satu waktu.</li>
                  <li>- Menjaga jarak dan kedalaman tanam yang seragam untuk pertumbuhan padi yang optimal.</li>
                </ul>
              </div>
              <div className="flex justify-center pt-2">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 bg-slate-50 shadow-md">
                  <Image
                    src="/images/mesintanampadijpg.jpg"
                    alt="Mesin tanam padi Kubota"
                    width={700}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 3. Mesin Pemanen Padi */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-forest-100 space-y-4">
              <h3 className="text-2xl font-black text-forest-800">
                3. Mesin Pemanen Padi
              </h3>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Riding type – Penggerak Kubota RD 110 DI-N (diesel 4 langkah)
              </p>
              <div className="bg-forest-50 rounded-2xl p-4 border-2 border-forest-100 mb-3">
                <h4 className="text-lg font-bold text-forest-800 mb-2">Spesifikasi Utama</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Dimensi: panjang 343 cm, lebar 156 cm, tinggi 149 cm</li>
                  <li>- Berat: 877 kg</li>
                  <li>- Sistem pendingin: pendingin air</li>
                  <li>- Daya maksimal: 11 HP, 2.400 rpm</li>
                  <li>- Kapasitas tangki bahan bakar: 11 liter</li>
                  <li>- Kapasitas tangki oli: 2,8 L (SAE 30)</li>
                  <li>- Sistem starter: engkol</li>
                  <li>- Transmisi: 3 kecepatan maju, 1 kecepatan mundur</li>
                  <li>- Lebar crawler: 320 mm, material karet</li>
                  <li>- Ground clearance: 29 cm</li>
                  <li>- Lebar pisau potong: 123 cm; tinggi pisau: 20 cm</li>
                  <li>- Panjang pemotong padi tegak: 40 cm</li>
                  <li>- Kapasitas lapangan: 5,57 jam/ha</li>
                  <li>- Konsumsi bahan bakar: 1,74 liter/jam</li>
                  <li>- Tingkat kebersihan hasil panen: 92%</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 border-2 border-amber-100">
                <h4 className="text-lg font-bold text-amber-800 mb-2">Alasan Pemilihan Alat</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>- Dapat beroperasi di lahan berlumpur.</li>
                  <li>- Mudah dipindahkan, dapat dibawa dengan mobil pick up.</li>
                  <li>- Tenaga kuat dan lincah, dengan pengaturan ketinggian pemotongan padi.</li>
                  <li>- Memudahkan proses panen dalam skala besar dengan hasil bersih dan seragam.</li>
                </ul>
              </div>
              <div className="flex justify-center pt-2">
                <div className="inline-block max-w-md w-full rounded-2xl overflow-hidden border-2 border-forest-100 bg-slate-50 shadow-md">
                  <Image
                    src="/images/mesinpemanenpadi.jpg"
                    alt="Mesin pemanen padi riding type"
                    width={700}
                    height={350}
                    className="w-full h-auto object-cover"
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

