'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

type Category = 'rumah-ibadah' | 'sekolah'

interface Building {
  id: number
  name: string
  images: string[]
  type: string
  folder: string
  coordinates?: string
}

// Helper function to group images by base name
function groupImages(files: string[]): { [key: string]: string[] } {
  const groups: { [key: string]: string[] } = {}
  const normalizedToOriginal: { [key: string]: string } = {} // Maps normalized base names to original
  
  files.forEach(file => {
    // Remove extension
    const withoutExt = file.replace(/\.(jpg|jpeg|png)$/i, '')
    // Check if ends with number
    const match = withoutExt.match(/^(.+?)(\d+)$/)
    let baseName = match ? match[1] : withoutExt
    
    // Normalize base name (case-insensitive) for grouping
    const normalizedBase = baseName.toLowerCase()
    
    // Find existing group with same normalized base name
    let targetBaseName = normalizedToOriginal[normalizedBase]
    
    if (!targetBaseName) {
      // First time seeing this base name, use it as-is
      targetBaseName = baseName
      normalizedToOriginal[normalizedBase] = targetBaseName
    }
    
    if (!groups[targetBaseName]) {
      groups[targetBaseName] = []
    }
    groups[targetBaseName].push(file)
  })
  
  // Sort each group to have base image first (no number), then numbered ones in order
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => {
      const aWithoutExt = a.replace(/\.(jpg|jpeg|png)$/i, '')
      const bWithoutExt = b.replace(/\.(jpg|jpeg|png)$/i, '')
      
      const aMatch = aWithoutExt.match(/(\d+)$/)
      const bMatch = bWithoutExt.match(/(\d+)$/)
      
      const aNum = aMatch ? parseInt(aMatch[1]) : 0
      const bNum = bMatch ? parseInt(bMatch[1]) : 0
      
      // Base image (no number) comes first
      if (aNum === 0 && bNum > 0) return -1
      if (aNum > 0 && bNum === 0) return 1
      // Then sort by number
      return aNum - bNum
    })
  })
  
  return groups
}

// Rumah Ibadah data
const rumahIbadahFiles = [
  'MasjidBaitulKhikmah.jpg',
  'MasjidBaitussalam.jpg',
  'MasjidJami\'RoudhotusSholihin.jpg',
  'MasjidJami\'RoudhotusSholihin2.jpg',
  'mushola.jpg',
  'Mushola2.jpg',
  'MusholaAlBarokah.jpg',
  'MusholaAlHikam.jpg',
  'MusholaAlHikmah.jpg',
  'MusholaAlIman.png',
  'musholaBaitulIkhsanBabalanLor.jpg',
  'MusholaBaitulKhikmah.jpg',
  'MusholaBaiturrohman.jpg',
  'MusholaBaitussalam.jpg',
]

// Name mapping from base filename to display name
const rumahIbadahNameMap: { [key: string]: string } = {
  'mushola': 'Mushola',
  'MasjidBaitulKhikmah': 'Masjid Baitul Khikmah',
  'MasjidBaitussalam': 'Masjid Baitussalam',
  'MasjidJami\'RoudhotusSholihin': 'Masjid Jami\' Roudhotus Sholihin',
  'MusholaAlBarokah': 'Mushola Al Barokah',
  'MusholaAlHikam': 'Mushola Al Hikam',
  'MusholaAlHikmah': 'Mushola Al Hikmah',
  'MusholaAlIman': 'Mushola Al Iman',
  'musholaBaitulIkhsanBabalanLor': 'Mushola Baitul Ikhsan Babalan Lor',
  'MusholaBaitulKhikmah': 'Mushola Baitul Khikmah',
  'MusholaBaiturrohman': 'Mushola Baiturrohman',
  'MusholaBaitussalam': 'Mushola Baitussalam',
}

// Coordinates mapping for Rumah Ibadah
const rumahIbadahCoordinates: { [key: string]: string } = {
  'Mushola': '6°56\'02.0"S 109°36\'16.8"E',
  'Mushola Baitul Ikhsan Babalan Lor': '6°56\'03.7"S 109°36\'19.4"E',
  'Mushola Baiturrohman': '6°55\'58.4"S 109°36\'22.7"E',
  'Mushola Baitussalam': '6°56\'00.7"S 109°36\'30.0"E',
  'Masjid Jami\' Roudhotus Sholihin': '6°56\'03.0"S 109°36\'30.3"E',
  'Mushola Al Hikmah': '6°56\'10.2"S 109°36\'34.6"E',
  'Masjid Baitul Khikmah': '6°56\'08.3"S 109°36\'30.1"E',
  'Mushola Baitul Khikmah': '6°56\'30.1"S 109°36\'48.2"E',
  'Mushola Al Barokah': '6°56\'37.0"S 109°36\'56.7"E',
  'Mushola Al Hikam': '6°56\'16.5"S 109°36\'58.2"E',
  'Mushola Al Iman': '6°56\'31.3"S 109°36\'55.5"E',
  'Masjid Baitussalam': '6°56\'31.4"S 109°36\'55.6"E',
}

const rumahIbadahGroups = groupImages(rumahIbadahFiles)
const rumahIbadahBuildings: Building[] = Object.entries(rumahIbadahGroups).map(([baseName, images], index) => {
  // Get the exact display name from the mapping, or format it
  let name = rumahIbadahNameMap[baseName]
  
  if (!name) {
    // Fallback formatting if not in mapping
    if (baseName.includes('MasjidJami')) {
      name = baseName.replace('MasjidJami\'', 'Masjid Jami\' ').replace(/([a-z])([A-Z])/g, '$1 $2')
    } else if (baseName.startsWith('Masjid')) {
      name = baseName.replace(/([a-z])([A-Z])/g, '$1 $2')
    } else if (baseName.startsWith('Mushola')) {
      name = baseName.replace(/([a-z])([A-Z])/g, '$1 $2')
    } else if (baseName.startsWith('mushola')) {
      name = 'Mushola' + (baseName.replace('mushola', '').replace(/([a-z])([A-Z])/g, '$1 $2') || '')
    } else {
      name = baseName
    }
    name = name.charAt(0).toUpperCase() + name.slice(1)
  }
  
  // Get coordinates using the exact name
  const coordinates = rumahIbadahCoordinates[name]
  
  return {
    id: index + 1,
    name: name,
    images: images,
    type: baseName.toLowerCase().includes('masjid') ? 'Masjid' : 'Mushola',
    folder: 'rumahibadah',
    coordinates: coordinates || undefined
  }
})

// Sekolah data
const sekolahFiles = [
  'MDTTPQAlHikmah.jpg',
  'MDTTPQAlHikmah2.jpg',
  'SDN1BabalanLor.jpg',
  'SDN1BabalanLor2.jpg',
  'SDN2BabalanLor.jpg',
  'SDN2BabalanLor2.jpg',
  'TKMuslimatNU.jpg',
  'TKMuslimatNU2.jpg',
  'TKMuslimatNU3.jpg',
  'TPQ&MDTAHikamusSalafiyah(MHS).jpg',
  'TPQBaitussalam.jpg',
]

// Coordinates mapping for Sekolah
const sekolahCoordinates: { [key: string]: string } = {
  'SDN 1 Babalan Lor': '6°56\'06.9"S 109°36\'31.6"E',
  'SDN 2 Babalan Lor': '6°56\'22.6"S 109°36\'40.0"E',
  'MDT/TPQ Al Hikmah': '6°56\'12.3"S 109°36\'37.7"E',
  'TK Muslimat NU': '6°56\'04.3"S 109°36\'25.5"E',
  'TPQ & MDT Al Hikamus Salafiyah (MHS)': '6°56\'16.3"S 109°36\'57.6"E',
  'TPQ Baitussalam': '6°56\'31.7"S 109°36\'56.3"E',
}

const sekolahGroups = groupImages(sekolahFiles)
const sekolahBuildings: Building[] = Object.entries(sekolahGroups).map(([baseName, images], index) => {
  // Format name from filename - preserve acronyms
  let name = baseName
  
  // Handle special cases with & and parentheses
  if (baseName.includes('TPQ&MDTAHikamusSalafiyah(MHS)')) {
    name = 'TPQ & MDT Al Hikamus Salafiyah (MHS)'
  } else if (baseName.includes('TPQBaitussalam')) {
    name = 'TPQ Baitussalam'
  } else if (baseName.includes('SDN1')) {
    name = 'SDN 1 Babalan Lor'
  } else if (baseName.includes('SDN2')) {
    name = 'SDN 2 Babalan Lor'
  } else if (baseName.includes('TKMuslimatNU')) {
    name = 'TK Muslimat NU'
  } else if (baseName.includes('MDTTPQAlHikmah')) {
    name = 'MDT/TPQ Al Hikmah'
  } else {
    // Generic formatting
    name = baseName.replace(/([a-z])([A-Z])/g, '$1 $2')
    name = name.charAt(0).toUpperCase() + name.slice(1)
  }
  
  // Determine type
  let type = 'Sekolah'
  if (baseName.includes('SDN')) type = 'SD'
  else if (baseName.includes('TK')) type = 'TK'
  else if (baseName.includes('TPQ') || baseName.includes('MDT')) type = 'TPQ/MDT'
  
  // Try to find coordinates by matching the name (case-insensitive and flexible matching)
  let coordinates = sekolahCoordinates[name]
  if (!coordinates) {
    // Try case-insensitive match
    const matchingKey = Object.keys(sekolahCoordinates).find(
      key => key.toLowerCase() === name.toLowerCase()
    )
    if (matchingKey) {
      coordinates = sekolahCoordinates[matchingKey]
      name = matchingKey // Use the exact name from coordinates mapping
    }
  }
  
  return {
    id: index + 1,
    name: name,
    images: images,
    type: type,
    folder: 'sekolah',
    coordinates: coordinates || undefined
  }
})

// Image Slideshow Component
function ImageSlideshow({ images, folder, alt }: { images: string[], folder: string, alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  if (images.length === 1) {
    return (
      <div className="relative w-full h-48 bg-slate-100">
        <Image
          src={`/images/${folder}/${images[0]}`}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )
  }
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }
  
  return (
    <div className="relative w-full h-48 bg-slate-100 group">
      <Image
        src={`/images/${folder}/${images[currentIndex]}`}
        alt={`${alt} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default function InfrastrukturPage() {
  const heroAnim = useScrollAnimation()
  const contentAnim = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState<Category>('rumah-ibadah')

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
            Infrastruktur Desa
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 font-medium drop-shadow-lg">
            Daftar bangunan dan fasilitas infrastruktur Desa Babalan Lor
          </p>
        </div>
      </section>

      {/* Filter & Content Section */}
      <section
        ref={contentAnim.ref}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${contentAnim.isVisible ? 'animate-pop-up' : 'opacity-0'}`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('rumah-ibadah')}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeCategory === 'rumah-ibadah'
                  ? 'bg-gradient-to-r from-navy-600 to-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-teal-200 hover:border-teal-400 hover:shadow-md'
              }`}
            >
              Rumah Ibadah
            </button>
            <button
              onClick={() => setActiveCategory('sekolah')}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeCategory === 'sekolah'
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-sky-200 hover:border-sky-400 hover:shadow-md'
              }`}
            >
              Sekolah
            </button>
          </div>

          {/* Rumah Ibadah Content */}
          {activeCategory === 'rumah-ibadah' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-4 leading-tight pb-2">
                  Rumah Ibadah
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Daftar masjid dan mushola yang ada di Desa Babalan Lor
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-gold-600 mx-auto mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rumahIbadahBuildings.map((building) => (
                  <div
                    key={building.id}
                    className="bg-white rounded-2xl shadow-xl border-2 border-teal-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <ImageSlideshow
                      images={building.images}
                      folder={building.folder}
                      alt={building.name}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-teal-100 text-teal-700">
                          {building.type}
                        </span>
                        {building.images.length > 1 && (
                          <span className="text-xs text-gray-500">
                            {building.images.length} foto
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-black text-gray-900 mb-1">{building.name}</h3>
                      {building.coordinates && (
                        <p className="text-xs text-gray-500 mt-1 font-mono">
                          {building.coordinates}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sekolah Content */}
          {activeCategory === 'sekolah' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-blue-600 to-sky-800 mb-4 leading-tight pb-2">
                  Sekolah
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fasilitas pendidikan di Desa Babalan Lor
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sekolahBuildings.map((building) => (
                  <div
                    key={building.id}
                    className="bg-white rounded-2xl shadow-xl border-2 border-sky-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <ImageSlideshow
                      images={building.images}
                      folder={building.folder}
                      alt={building.name}
                    />
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-sky-100 text-sky-700">
                          {building.type}
                        </span>
                        {building.images.length > 1 && (
                          <span className="text-xs text-gray-500">
                            {building.images.length} foto
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-black text-gray-900 mb-1">{building.name}</h3>
                      {building.coordinates && (
                        <p className="text-xs text-gray-500 mt-1 font-mono">
                          {building.coordinates}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

