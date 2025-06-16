'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Lock, Eye, Server, Key, AlertTriangle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const securityFeatures = [
  {
    icon: Shield,
    title: 'PCI DSS Level 1',
    description: 'Highest level of payment security',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit and at rest',
  },
  {
    icon: Eye,
    title: 'Fraud Detection',
    description: 'AI-powered real-time monitoring',
  },
  {
    icon: Server,
    title: '99.99% Uptime',
    description: 'Redundant infrastructure',
  },
  {
    icon: Key,
    title: 'Tokenization',
    description: 'Secure card data storage',
  },
  {
    icon: AlertTriangle,
    title: '3D Secure',
    description: 'Additional authentication layer',
  },
]

export function Security() {
  const sectionRef = useRef<HTMLElement>(null)
  const shieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Animate shield rotation - reduced on mobile
      if (!isMobile) {
        gsap.to(shieldRef.current, {
          rotateY: 360,
          duration: 20,
          repeat: -1,
          ease: 'none',
        })
      }

      // Animate security cards on scroll
      gsap.from('.security-card', {
        scale: isMobile ? 0.9 : 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: isMobile ? 0.08 : 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })

      // Animate shield particles - desktop only
      if (!isMobile) {
        gsap.to('.particle', {
          y: -100,
          opacity: 0,
          duration: 3,
          stagger: {
            each: 0.2,
            repeat: -1,
            from: 'random',
          },
          ease: 'power1.out',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="security"
      className="py-16 sm:py-20 lg:py-32 bg-gray-900 dark:bg-black relative overflow-hidden"
    >
      {/* Background Grid - Subtle on mobile */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 sm:opacity-10" />
      
      {/* Glowing Orbs - Reduced on mobile */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 sm:bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 sm:bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Bank-Level Security</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Your security is our
            <br />
            <span className="gradient-text">top priority</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            We use the latest security technologies and best practices to keep your
            data and your customers' data safe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 3D Shield - Hidden on mobile, simplified on tablet */}
          <div className="hidden sm:block relative">
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
              {/* Particles - Desktop only */}
              <div className="hidden lg:block">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="particle absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Shield Container */}
              <div
                ref={shieldRef}
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Shield className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white" />
                </motion.div>

                {/* Back face - Desktop only */}
                <div
                  className="hidden lg:block absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl"
                  style={{ transform: 'rotateY(180deg) translateZ(50px)' }}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl sm:blur-3xl opacity-30 sm:opacity-50" />
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="security-card group p-5 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile Shield - Only on mobile */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="sm:hidden mt-8 flex justify-center"
        >
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50" />
          </div>
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">Trusted and certified by</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
            {['PCI DSS', 'ISO 27001', 'SOC 2', 'GDPR'].map((cert, index) => (
              <div
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 text-gray-300 font-medium text-xs sm:text-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
