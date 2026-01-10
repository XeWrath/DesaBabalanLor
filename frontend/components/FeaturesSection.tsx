'use client'

import { useState } from 'react'

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      title: 'Keindahan Alam',
      description: 'Desa dengan pemandangan yang menawan dan udara yang sejuk, dikelilingi oleh perbukitan dan sawah yang hijau.',
      gradient: 'from-teal-400 via-steel-500 to-teal-600',
      bgGradient: 'from-teal-50 to-steel-50',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Budaya Lokal',
      description: 'Kearifan lokal yang masih terjaga dengan baik, termasuk tradisi dan adat istiadat yang diwariskan turun temurun.',
      gradient: 'from-gold-400 via-amber-500 to-gold-600',
      bgGradient: 'from-gold-50 to-amber-50',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Gotong Royong',
      description: 'Semangat gotong royong yang masih sangat kental dalam kehidupan bermasyarakat sehari-hari.',
      gradient: 'from-amber-400 via-orange-500 to-amber-600',
      bgGradient: 'from-amber-50 to-orange-50',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Potensi Ekonomi',
      description: 'Berbagai potensi ekonomi lokal yang terus dikembangkan untuk meningkatkan kesejahteraan masyarakat.',
      gradient: 'from-navy-400 via-teal-500 to-navy-600',
      bgGradient: 'from-navy-50 to-teal-50',
      icon: (
        <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50 to-teal-50 relative overflow-hidden">
      {/* 3D Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-gold-300 rounded-full opacity-10 blur-3xl transform-3d animate-float" style={{ transform: 'translateZ(-100px)' }}></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-br from-gold-300 to-amber-300 rounded-full opacity-10 blur-3xl transform-3d animate-float-delayed" style={{ transform: 'translateZ(-150px)' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-navy-700 via-teal-600 to-gold-600 mb-6">
            Keunggulan Desa
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            Hal-hal yang membuat Desa Babalan Lor istimewa
          </p>
          <div className="relative inline-block">
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto transform-3d shadow-3d"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative transform-3d transition-all duration-500"
              style={{
                transform: hoveredIndex === index 
                  ? 'perspective(1000px) rotateY(-5deg) rotateX(5deg) translateZ(60px)' 
                  : 'perspective(1000px) translateZ(0)',
              }}
            >
              {/* 3D Card */}
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-3d-lg transform-3d transition-all duration-500 border-2 border-transparent group-hover:border-ocean-300`}>
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-2xl`}></div>
                
                {/* Icon with 3D rotation */}
                <div className="mb-6 transform-3d transition-all duration-500" style={{
                  transform: hoveredIndex === index ? 'translateZ(40px) rotateY(360deg) scale(1.1)' : 'translateZ(0)',
                }}>
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-3d transform-3d`} style={{
                    transform: hoveredIndex === index ? 'translateZ(30px)' : 'translateZ(0)',
                  }}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 mb-4 transform-3d transition-all duration-500" style={{
                  transform: hoveredIndex === index ? 'translateZ(20px)' : 'translateZ(0)',
                }}>
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </span>
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed font-medium transform-3d transition-all duration-500" style={{
                  transform: hoveredIndex === index ? 'translateZ(10px)' : 'translateZ(0)',
                }}>
                  {feature.description}
                </p>
                
                {/* Decorative corner elements */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-tr-full transition-opacity duration-500`}></div>
              </div>
              
              {/* Floating shadow */}
              <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

