'use client'

import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { SimpleStats } from '@/components/sections/simple-stats'
import { SimpleCTA } from '@/components/sections/simple-cta'
import { Footer } from '@/components/sections/footer'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <SimpleStats />
        <SimpleCTA />
      </main>
      <Footer />
    </>
  )
}
