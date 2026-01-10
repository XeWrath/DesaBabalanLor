'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FilosofiDesa from '@/components/FilosofiDesa'

// Dynamically import Map component to avoid SSR issues with Leaflet
const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <FilosofiDesa />
      <StatsSection />
      {mounted && <Map />}
      <FeaturesSection />
    </main>
  )
}

