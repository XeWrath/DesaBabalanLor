import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import NavbarWrapper from '@/components/NavbarWrapper'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

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
        <Providers>
          <NavbarWrapper />
          {children}
          <Footer />
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  )
}

