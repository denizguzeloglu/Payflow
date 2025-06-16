'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if mobile
    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: isMobile ? 30 : 50,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        ease: 'power3.out',
        delay: 0.2,
      })

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: isMobile ? 20 : 30,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        ease: 'power3.out',
        delay: 0.4,
      })

      // Animate CTA buttons
      gsap.from(ctaRef.current, {
        y: isMobile ? 20 : 30,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        ease: 'power3.out',
        delay: 0.6,
      })

      // Animate feature cards
      gsap.from('.feature-card', {
        y: isMobile ? 30 : 50,
        opacity: 0,
        duration: 0.8,
        stagger: isMobile ? 0.1 : 0.2,
        ease: 'power3.out',
        delay: 0.8,
      })

      // Floating animation for background elements - reduced for mobile
      if (!isMobile) {
        gsap.to('.float-element', {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          stagger: {
            each: 0.2,
            from: 'random',
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-4 sm:px-6 lg:px-8 pt-20"
    >
      {/* Animated Background Elements - Hidden on small mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-element absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-400/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="float-element absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-400/10 rounded-full blur-2xl sm:blur-3xl" />
        <div className="float-element hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary-400/5 to-secondary-400/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Trusted by 10,000+ businesses</span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
        >
          Accept Payments
          <br />
          <span className="gradient-text">Everywhere</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 px-4 sm:px-0"
        >
          The most powerful payment platform built for modern businesses. Accept payments, 
          manage subscriptions, and scale globally.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
          <Link
            href="/signup"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Watch Demo
          </Link>
        </div>

        {/* Feature Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="feature-card group p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
              Instant Setup
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Get started in minutes
            </p>
          </div>

          <div className="feature-card group p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
              Bank-Level Security
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              PCI DSS compliant
            </p>
          </div>

          <div className="feature-card group p-4 sm:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1.5 sm:mb-2">
              Global Reach
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              135+ currencies
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
