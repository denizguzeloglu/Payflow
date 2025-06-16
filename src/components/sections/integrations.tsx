'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Puzzle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const integrations = [
  { name: 'Shopify', logo: '🛍️', color: 'from-green-400 to-green-600' },
  { name: 'WooCommerce', logo: '🟣', color: 'from-purple-400 to-purple-600' },
  { name: 'Stripe', logo: '💳', color: 'from-blue-400 to-blue-600' },
  { name: 'Salesforce', logo: '☁️', color: 'from-sky-400 to-sky-600' },
  { name: 'Slack', logo: '💬', color: 'from-pink-400 to-pink-600' },
  { name: 'QuickBooks', logo: '📊', color: 'from-teal-400 to-teal-600' },
  { name: 'Zoom', logo: '📹', color: 'from-blue-500 to-blue-700' },
  { name: 'HubSpot', logo: '🧲', color: 'from-orange-400 to-orange-600' },
  { name: 'Mailchimp', logo: '📧', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Zapier', logo: '⚡', color: 'from-orange-500 to-red-500' },
  { name: 'WordPress', logo: '📝', color: 'from-blue-600 to-blue-800' },
  { name: 'Magento', logo: '🛒', color: 'from-red-400 to-red-600' },
]

export function Integrations() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Floating animation for integration cards - reduced on mobile
      if (!isMobile) {
        gsap.to('.integration-card', {
          y: -10,
          duration: 2,
          ease: 'power1.inOut',
          stagger: {
            each: 0.2,
            yoyo: true,
            repeat: -1,
          },
        })
      }

      // Scroll-triggered animations
      gsap.from('.integration-card', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: {
          each: 0.05,
          from: 'center',
        },
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      })

      // Connection lines animation - desktop only
      if (!isMobile) {
        gsap.to('.connection-line', {
          opacity: 0.3,
          duration: 2,
          stagger: {
            each: 0.1,
            yoyo: true,
            repeat: -1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern - Subtle on mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/circuit.svg')] opacity-[0.03] sm:opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Puzzle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Seamless Integrations</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Works with your
            <br />
            <span className="gradient-text">favorite tools</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Connect Payflow with your existing tech stack. One-click integrations
            with the most popular e-commerce and business tools.
          </p>
        </div>

        {/* Mobile Grid Layout */}
        <div className="sm:hidden grid grid-cols-3 gap-4 mb-12" ref={containerRef}>
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              whileTap={{ scale: 0.95 }}
              className="integration-card"
            >
              <div
                className={`group w-16 h-16 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <span className="text-2xl">{integration.logo}</span>
                
                {/* Tooltip - Mobile optimized */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-active:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {integration.name}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Circular Layout */}
        <div ref={containerRef} className="hidden sm:block relative max-w-4xl lg:max-w-6xl mx-auto">
          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl lg:text-4xl font-bold text-white">PF</span>
            </div>
          </motion.div>

          {/* Connection Lines - Desktop only */}
          <svg className="absolute inset-0 w-full h-full hidden lg:block" style={{ zIndex: 1 }}>
            {integrations.map((_, index) => {
              const angle = (index / integrations.length) * 2 * Math.PI
              const x1 = 50
              const y1 = 50
              const x2 = 50 + 35 * Math.cos(angle)
              const y2 = 50 + 35 * Math.sin(angle)

              return (
                <line
                  key={index}
                  className="connection-line"
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0"
                  className="text-gray-300 dark:text-gray-700"
                />
              )
            })}
          </svg>

          {/* Integration Cards - Desktop */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            {integrations.map((integration, index) => {
              const angle = (index / integrations.length) * 2 * Math.PI
              const radius = window.innerWidth < 1024 ? 180 : 250
              const x = radius * Math.cos(angle)
              const y = radius * Math.sin(angle)

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, zIndex: 30 }}
                  className="integration-card absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <div
                    className={`group w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                  >
                    <span className="text-2xl lg:text-3xl">{integration.logo}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                        {integration.name}
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
            Don't see your platform? We support custom integrations via our REST API.
          </p>
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View All Integrations
            <Puzzle className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
