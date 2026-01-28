'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Hide global navbar on warga routes (login + internal warga pages)
  if (pathname.startsWith('/warga')) {
    return null
  }

  return <Navbar />
}

