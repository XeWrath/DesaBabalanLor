import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desa Babalan Lor - Profil Desa',
  description: 'Website profil resmi Desa Babalan Lor, Kecamatan Bojong, Pekalongan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Invisible hover area at top to trigger navbar */}
        <div className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

