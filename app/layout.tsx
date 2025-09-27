import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rea-drab.vercel.app'),
  title: 'REA - Contabilidad y trámites ante el SAT',
  description: 'Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.',
  keywords: 'contabilidad, SAT, trámites fiscales, facturación electrónica, nómina, Monterrey',
  authors: [{ name: 'REA Despacho Contable' }],
  openGraph: {
    title: 'REA - Contabilidad y trámites ante el SAT',
    description: 'Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://rea-drab.vercel.app',
    siteName: 'REA Despacho Contable',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REA - Contabilidad y trámites ante el SAT',
    description: 'Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
