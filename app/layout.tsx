import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'REA - Contabilidad y trámites ante el SAT',
  description: 'Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.',
  keywords: 'contabilidad, SAT, trámites fiscales, facturación electrónica, nómina, Monterrey',
  authors: [{ name: 'REA Despacho Contable' }],
  openGraph: {
    title: 'REA - Contabilidad y trámites ante el SAT',
    description: 'Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.',
    type: 'website',
    locale: 'es_MX',
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
