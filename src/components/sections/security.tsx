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
    description: 'Highest level of payment security certification',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit and at rest',
  },
  {
    icon: Eye,
    title: 'Fraud Detection',
    description: 'AI-powered real-time fraud monitoring',
  },
  {
    icon: Server,
    title: '99.99% Uptime',
    description: 'Redundant infrastructure across regions',
  },
  {
    icon: Key,
    title: 'Tokenization',
    description: 'Secure card data with advanced tokenization',
  },
  {
    icon: AlertTriangle,
    title: '3D Secure',
    description: 'Additional authentication for card payments',
  },
]

export function Security() {
  const sectionRef = useRef<HTMLElement>(null)
  const shieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate shield rotation
      gsap.to(shieldRef.current, {
        rotateY: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      })

      // Animate security cards on scroll
      gsap.from('.security-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Animate shield particles
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="security"
      className="py-20 lg:py-32 bg-gray-900 dark:bg-black relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4"
          >
            <Shield className="w-4 h-4" />
            <span>Bank-Level Security</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your security is our
            <br />
            <span className="gradient-text">top priority</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We use the latest security technologies and best practices to keep your
            data and your customers' data safe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Shield */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Particles */}
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

              {/* Shield Container */}
              <div
                ref={shieldRef}
                className="relative w-64 h-64 mx-auto"
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
                  <Shield className="w-32 h-32 text-white" />
                </motion.div>

                {/* Back face */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl"
                  style={{ transform: 'rotateY(180deg) translateZ(50px)' }}
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-50" />
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="security-card group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-8">Trusted and certified by</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['PCI DSS', 'ISO 27001', 'SOC 2', 'GDPR'].map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 text-gray-300 font-medium"
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
