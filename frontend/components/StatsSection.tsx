'use client'

import { useRef, useEffect, useState } from 'react'

export default function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      number: '2,500+',
      label: 'Penduduk',
      color: 'from-teal-400 to-steel-500',
      bgColor: 'bg-teal-50',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      number: '15+',
      label: 'Dusun',
      color: 'from-gold-400 to-amber-500',
      bgColor: 'bg-gold-50',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      number: '500+',
      label: 'Keluarga',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-amber-50',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      number: '100%',
      label: 'Gotong Royong',
      color: 'from-navy-500 to-teal-600',
      bgColor: 'bg-navy-50',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-teal-100 to-gold-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-300 rounded-full opacity-20 blur-3xl transform-3d animate-float" style={{ transform: 'translateZ(-200px)' }}></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-300 rounded-full opacity-20 blur-3xl transform-3d animate-float-delayed" style={{ transform: 'translateZ(-150px)' }}></div>
      
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6">
            Data Desa
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Statistik dan informasi umum tentang Desa Babalan Lor
          </p>
          <div className="relative inline-block mt-6">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto transform-3d shadow-3d"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative transform-3d transition-all duration-500"
              style={{
                transform: hoveredIndex === index 
                  ? 'perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(50px) scale(1.05)' 
                  : 'perspective(1000px) translateZ(0)',
              }}
            >
              {/* 3D Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-3d-lg transform-3d transition-all duration-500 ${hoveredIndex === index ? 'shadow-3d-lg' : ''}`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                
                {/* Icon with 3D effect */}
                <div className={`mb-6 flex justify-center transform-3d transition-all duration-500`} style={{
                  transform: hoveredIndex === index ? 'translateZ(30px) rotateY(360deg)' : 'translateZ(0)',
                }}>
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-3d transform-3d`} style={{
                    transform: hoveredIndex === index ? 'translateZ(20px) scale(1.1)' : 'translateZ(0)',
                  }}>
                    {stat.icon}
                  </div>
                </div>
                
                {/* Number with 3D text effect */}
                <div className="text-4xl md:text-5xl font-black mb-3 transform-3d transition-all duration-500" style={{
                  transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(0)',
                }}>
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                </div>
                
                {/* Label */}
                <div className="text-gray-700 font-bold text-sm md:text-base uppercase tracking-wide">
                  {stat.label}
                </div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl`}></div>
              </div>
              
              {/* Floating shadow effect */}
              <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

