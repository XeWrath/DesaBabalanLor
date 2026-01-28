'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function SumberDayaPage() {
  const heroAnim = useScrollAnimation()
  const sumberDayaAnim = useScrollAnimation()
  const angkatanKerjaAnim = useScrollAnimation()
  const pemasukanAnim = useScrollAnimation()

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-teal-50">
      {/* Hero Section */}
      <section
        ref={heroAnim.ref}
        className={`relative h-screen flex items-center justify-center overflow-hidden ${
          heroAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 via-teal-600 to-navy-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight pb-2">
            Sumber Daya Desa
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg">
            Pemetaan potensi sumber daya manusia, ekonomi, dan sosial Desa Babalan Lor.
          </p>
          <p className="text-sm text-sky-100/80 italic">
            Konten detail akan diperbarui setelah data lengkap dari tim tersedia.
          </p>
        </div>
      </section>

      {/* Sumber Daya & Hasil Unggulan */}
      <section
        ref={sumberDayaAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${sumberDayaAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Sumber Daya &amp; Hasil Unggulan
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Pendataan, pengelompokan, dan digitalisasi sumber daya serta hasil unggulan Desa Babalan Lor
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Halaman ini akan menampung peta potensi desa, mulai dari sumber daya alam, usaha lokal, hingga
                  produk unggulan yang menjadi identitas Desa Babalan Lor.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ke depan, data akan disajikan dalam bentuk grafik, peta, dan daftar terstruktur sehingga mudah
                  dipahami oleh perangkat desa, investor lokal, maupun masyarakat umum.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-100 shadow-md">
                  <h4 className="text-lg font-bold text-amber-800 mb-2">Produk Unggulan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Ruang untuk menampilkan hasil unggulan desa seperti produk olahan, kerajinan, dan komoditas
                    pertanian utama.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-forest-50 rounded-2xl p-6 border-2 border-forest-100 shadow-md">
                  <h4 className="text-lg font-bold text-forest-800 mb-2">Potensi Alam</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Informasi singkat mengenai potensi lahan, air, dan lingkungan yang akan diisi berdasarkan hasil
                    survei lapangan.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 border-2 border-teal-100 shadow-md sm:col-span-2">
                  <h4 className="text-lg font-bold text-navy-800 mb-2">Catatan Pengembangan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Kolom ini akan berisi catatan peluang pengembangan berdasarkan data yang dikumpulkan oleh tim
                    KKN dan pemerintah desa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angkatan Kerja Usia Produktif */}
      <section
        ref={angkatanKerjaAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-50 to-earth-50 ${
          angkatanKerjaAnim.isVisible ? 'animate-pop-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Angkatan Kerja Usia Produktif
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          {/* Table 1: Data Penduduk Desa Babalan Lor */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Data Penduduk Desa Babalan Lor
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Laki-laki</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Perempuan</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800 font-semibold text-lg">2.455(51.5%)</td>
                  
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800 font-semibold text-lg">2.309(48.5%)</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800 font-semibold text-lg">4.764</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-teal-600 to-navy-600 text-white">
                  <th className="border-2 border-teal-700 px-4 py-3 text-center font-black">Rasio Penduduk Bojong</th>
                  <th className="border-2 border-teal-700 px-4 py-3 text-center font-black">Luas Wilayah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800 font-semibold text-lg">5,83%</td>
                    <td className="border-2 border-teal-200 px-4 py-3 text-center text-gray-800 font-semibold text-lg">0,91 km²</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4 italic">
              Sumber: Disdukcapil Kabupaten Pekalongan
            </p>
          </div>

          {/* Table 2: Data Kelompok Usia dari analisis statistik */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Data Kelompok Usia dari Analisis Statistik
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Rentang Usia</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Jumlah</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Persentase</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">0 - 4</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">366</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,69%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Balita (Fokus Stunting)</td>
                  </tr>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">5 - 9</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">411</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">8,62%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Anak-anak (Pendidikan Dasar)</td>
                  </tr>
                  <tr className="bg-teal-50 hover:bg-teal-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">10 - 14</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">406</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">8,53%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Remaja (Pendidikan Menengah)</td>
                  </tr>
                  <tr className="bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">15 - 19</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">355</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,44%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Usia Produktif Awal (Transisi)</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">20 - 24</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">360</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,56%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Puncak Angkatan Kerja Muda</td>
                  </tr>
                  <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">25 - 29</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">393</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">8,24%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Puncak Angkatan Kerja Muda</td>
                  </tr>
                  <tr className="bg-forest-50 hover:bg-forest-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">30 - 34</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">398</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">8,36%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Produktif Matang</td>
                  </tr>
                  <tr className="bg-forest-50 hover:bg-forest-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">35 - 39</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">360</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,55%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Produktif Matang</td>
                  </tr>
                  <tr className="bg-earth-50 hover:bg-earth-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">40 - 44</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">367</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,71%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Produktif Senior</td>
                  </tr>
                  <tr className="bg-earth-50 hover:bg-earth-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">45 - 49</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">306</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">6,43%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Produktif Senior</td>
                  </tr>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">50 - 54</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">258</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">5,41%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Menjelang Pra-Pensiun</td>
                  </tr>
                  <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">55 - 59</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">244</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">5,11%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Pra-Pensiun</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">60 - 64</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">198</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">4,16%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Lansia Produktif</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">65 - 69</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">146</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">3,07%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Lansia</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">70 - 74</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">99</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">2,07%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Lansia</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">&gt; 75</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">97</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">2,04%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Lansia (Tanggungan)</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-forest-100 to-teal-100 font-black text-gray-900">
                    <td className="border-2 border-forest-300 px-4 py-3 font-black">TOTAL</td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">4.764</td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">100%</td>
                    <td className="border-2 border-forest-300 px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4 italic">
              Sumber: Disdukcapil Kabupaten Pekalongan
            </p>
          </div>

          {/* Table 3: Potensi Angkatan Kerja Usia */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Potensi Angkatan Kerja Usia
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Kelompok Usia</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Jumlah</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">Persentase</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Kategori Strategis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">0 - 14</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">1.183</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">24,83%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Usia Sekolah (Target Investasi Masa Depan)</td>
                  </tr>
                  <tr className="bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">15 - 24</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">715</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">15,01%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Angkatan Kerja Pemula (Fresh Graduate/Remaja)</td>
                  </tr>
                  <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">25 - 39</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">1.151</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">24,16%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Golden Age (Produktivitas & Konsumsi Tinggi)</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">40 - 64</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">1.373</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">28,82%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Senior Produktif (Pengambil Kebijakan/Pemilik Aset)</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">&gt; 65</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">342</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-700">7,18%</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Lansia (Target Jaminan Sosial/Kesehatan)</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-forest-100 to-teal-100 font-black text-gray-900">
                    <td className="border-2 border-forest-300 px-4 py-3 font-black">TOTAL</td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">4.764</td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">100%</td>
                    <td className="border-2 border-forest-300 px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Summary: Non-Produktif vs Produktif */}
            <div className="bg-gradient-to-br from-forest-50 to-teal-50 rounded-2xl p-6 border-2 border-forest-200 mb-4">
              <h4 className="text-lg font-bold text-forest-800 mb-4 text-center">Ringkasan Produktif vs Non-Produktif</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border-2 border-forest-200 text-center">
                  <div className="text-2xl font-black text-red-600 mb-2">1.525</div>
                  <div className="text-sm text-gray-600 font-semibold">Non-Produktif (0-14 & &gt;65)</div>
                  <div className="text-xs text-gray-500 mt-1">Beban ketergantungan</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-forest-200 text-center">
                  <div className="text-2xl font-black text-green-600 mb-2">3.239</div>
                  <div className="text-sm text-gray-600 font-semibold">Produktif (15-64)</div>
                  <div className="text-xs text-gray-500 mt-1">non produktif : produktif × 100%</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-forest-200 text-center">
                  <div className="text-2xl font-black text-navy-600 mb-2">47,08%</div>
                  <div className="text-sm text-gray-600 font-semibold">Rasio Ketergantungan</div>
                  <div className="text-xs text-gray-500 mt-1">Total: 4.764</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
              <p className="text-gray-700 leading-relaxed text-center">
                <span className="font-bold">Setiap 100 orang yang bekerja di desa Anda menanggung beban ekonomi sekitar 47 orang yang tidak bekerja.</span> Angka di bawah 50% dikategorikan sangat baik. Desa Babalan Lor sedang mengalami bonus demografi sejak 2025.
              </p>
            </div>
          </div>

          {/* Table 3b: Data Tingkat Pengangguran Terbuka */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Data Tingkat Pengangguran Terbuka Desa Babalan Lor
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">
                      Jenis Kelamin
                    </th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">
                      Presentase TPT Kec. Bojong
                    </th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">
                      Pekerja Produktif
                    </th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-center font-black">
                      Pengangguran Desa Babalan Lor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">
                      Laki-laki
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800">
                      3,31%
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800">
                      1.668
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-bold text-red-700">
                      55
                    </td>
                  </tr>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">
                      Perempuan
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800">
                      3,14%
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center text-gray-800">
                      1.570
                    </td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-center font-bold text-red-700">
                      49
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-forest-100 to-teal-100 font-black text-gray-900">
                    <td className="border-2 border-forest-300 px-4 py-3 font-black">Total</td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center text-gray-800">
                      {/* rata-rata kecamatan, tidak ditampilkan eksplisit di tabel sumber */}
                      -
                    </td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">
                      3.238
                    </td>
                    <td className="border-2 border-forest-300 px-4 py-3 text-center font-black">
                      104
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-4 border-2 border-amber-200">
                <p className="text-sm md:text-base text-gray-800 text-center">
                  <span className="font-bold">Tingkat Pengangguran:</span>{' '}
                  <span className="font-black text-red-700">3,21%</span>
                </p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-4 border-2 border-emerald-200">
                <p className="text-sm md:text-base text-gray-800 text-center">
                  <span className="font-bold">Keterangan:</span> Masih aman karena di bawah{' '}
                  <span className="font-black">5%</span>.
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 text-center mt-4 italic">
              Sumber: Keadaan Ketenagakerjaan Kabupaten Pekalongan Agustus 2025 No. 01/01/3326/Th. XI, 5 Januari 2026
            </p>
          </div>

          {/* Table 4: Indikator & Target */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100 mb-12">
            <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
              Indikator &amp; Target 10 Tahun
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-forest-600 to-teal-600 text-white">
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Indikator</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Kondisi Saat Ini</th>
                    <th className="border-2 border-forest-700 px-4 py-3 text-left font-black">Target Tahun ke-10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-amber-50 hover:bg-amber-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">Angka Pengangguran</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">(Input dari hasil kuisioner)</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700 font-semibold">&lt; 2%</td>
                  </tr>
                  <tr className="bg-sky-50 hover:bg-sky-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">Pendidikan</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Dominasi lulusan SMA/SMP</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700 font-semibold">30% penduduk usia produktif bersertifikat ahli</td>
                  </tr>
                  <tr className="bg-teal-50 hover:bg-teal-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">Pendapatan BUMDes</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">(Input kondisi sekarang)</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700 font-semibold">Meningkat 500%</td>
                  </tr>
                  <tr className="bg-emerald-50 hover:bg-emerald-100 transition-colors">
                    <td className="border-2 border-forest-200 px-4 py-3 font-semibold text-gray-800">Literasi Digital</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700">Terbatas pada media sosial</td>
                    <td className="border-2 border-forest-200 px-4 py-3 text-gray-700 font-semibold">80% penduduk mampu menggunakan aplikasi produktif</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Informasi Tambahan */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Pendataan dan pengelompokan angkatan kerja usia produktif
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Data angkatan kerja akan membantu desa memahami kapasitas tenaga kerja lokal, bidang keahlian,
                  serta potensi penyerapan di sektor-sektor strategis.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Data di atas menunjukkan distribusi penduduk berdasarkan kelompok umur dan kategori produktivitas,
                  yang dapat digunakan sebagai dasar perencanaan program pemberdayaan dan pengembangan ekonomi desa.
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 border-2 border-teal-200 shadow-md">
                  <h4 className="text-lg font-bold text-navy-800 mb-2">Fokus Pendataan</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ Kelompok usia produktif dan sebarannya.</li>
                    <li>✓ Latar belakang pendidikan dan pelatihan.</li>
                    <li>✓ Bidang pekerjaan utama dan minat usaha.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-forest-50 rounded-2xl p-6 border-2 border-forest-200 shadow-md">
                  <h4 className="text-lg font-bold text-forest-800 mb-2">Manfaat ke Depan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Data ini akan menjadi dasar perencanaan program pelatihan, pemberdayaan ekonomi, dan penguatan
                    wirausaha muda desa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pengelolaan Sektor Pemasukan Desa */}
      <section
        ref={pemasukanAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${pemasukanAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
              Sektor Pemasukan Desa
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto" />
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-forest-100">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Pendataan dan pengelolaan sektor pemasukan Desa Babalan Lor
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Halaman ini akan merangkum berbagai sumber pemasukan desa, seperti dana transfer, pendapatan asli
                  desa, hasil kerja sama, dan sumber lainnya.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nantinya, data tersebut akan digunakan sebagai dasar penyusunan informasi keuangan desa yang lebih
                  transparan, akuntabel, dan mudah dipahami masyarakat.
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 shadow-md">
                  <h4 className="text-lg font-bold text-amber-800 mb-2">Gambaran Sementara</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Diagram, tabel, dan ringkasan pemasukan desa akan ditampilkan di sini setelah data keuangan
                    terakhir dihimpun dan diverifikasi.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-2xl p-6 border-2 border-teal-200 shadow-md">
                  <h4 className="text-lg font-bold text-navy-800 mb-2">Catatan</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Format tampilan akan disesuaikan agar mudah dibaca warga, sekaligus tetap memenuhi standar
                    pelaporan keuangan desa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

