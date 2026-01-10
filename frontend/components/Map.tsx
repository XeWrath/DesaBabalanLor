'use client'

export default function Map() {
  // Coordinates for Desa Babalan Lor, Kecamatan Bojong, Pekalongan
  const latitude = -6.9350483
  const longitude = 109.5856234

  return (
    <section id="map-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 via-white to-teal-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-300 to-gold-300 rounded-full opacity-10 blur-3xl transform-3d animate-float" style={{ transform: 'translateZ(-100px)' }}></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-gold-300 to-amber-300 rounded-full opacity-10 blur-3xl transform-3d animate-float-delayed" style={{ transform: 'translateZ(-150px)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6 leading-tight pb-2">
            Lokasi Desa
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Temukan lokasi Desa Babalan Lor di peta
          </p>
          <div className="relative inline-block">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto transform-3d shadow-3d"></div>
          </div>
        </div>

        {/* 3D Map Container */}
        <div className="relative transform-3d perspective-1000 group">
          <div className="rounded-3xl overflow-hidden shadow-3d-lg transform-3d transition-all duration-500 group-hover:shadow-3d-lg" style={{
            transform: 'perspective(1000px) rotateX(2deg)',
          }}>
            <div className="h-[550px] w-full relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-gold-400 to-teal-400 opacity-20 blur-2xl -z-10 rounded-3xl"></div>
              
              <iframe
                src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=id&z=13&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
            </div>
          </div>
          
          {/* Decorative 3D elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-gold-500 rounded-2xl opacity-30 blur-xl transform-3d rotate-12 group-hover:rotate-24 transition-transform duration-500" style={{ transform: 'translateZ(-30px) rotate(12deg)' }}></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full opacity-30 blur-lg transform-3d -rotate-12 group-hover:-rotate-24 transition-transform duration-500" style={{ transform: 'translateZ(-20px) rotate(-12deg)' }}></div>
        </div>

        {/* Address card with 3D effect */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="relative transform-3d group">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-3d-lg transform-3d transition-all duration-500 group-hover:translate-z-50 group-hover:shadow-3d-lg border-2 border-teal-200">
              <p className="text-gray-700 text-lg">
                <span className="font-black bg-gradient-to-r from-navy-600 to-teal-600 bg-clip-text text-transparent">Alamat:</span>{' '}
                <span className="font-semibold">Desa Babalan Lor, Kecamatan Bojong, Kabupaten Pekalongan, Jawa Tengah</span>
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-gold-400 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500"></div>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-navy-600 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-3d-lg transform-3d hover:translate-z-50 hover:scale-105 transition-all duration-300"
          >
            Dapatkan Petunjuk Arah
          </a>
        </div>
      </div>
    </section>
  )
}

