import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payflow - Modern Payment Solutions',
  description: 'Secure and seamless online payment processing platform',
  keywords: 'payment, online payment, payment gateway, secure checkout',
  authors: [{ name: 'Payflow Team' }],
  openGraph: {
    title: 'Payflow - Modern Payment Solutions',
    description: 'Secure and seamless online payment processing platform',
    url: 'https://payflow.vercel.app',
    siteName: 'Payflow',
    images: [
      {
        url: 'https://payflow.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payflow - Modern Payment Solutions',
    description: 'Secure and seamless online payment processing platform',
    images: ['https://payflow.vercel.app/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
