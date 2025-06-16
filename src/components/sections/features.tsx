'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CreditCard,
  Zap,
  Globe,
  Shield,
  BarChart3,
  RefreshCw,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: CreditCard,
    title: 'All Payment Methods',
    description: 'Accept credit cards, debit cards, digital wallets, bank transfers, and more.',
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get started in minutes with our simple integration. No complex setup required.',
  },
  {
    icon: Globe,
    title: 'Global Payments',
    description: 'Accept payments from customers worldwide in 135+ currencies.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'PCI DSS Level 1 certified with advanced fraud protection built-in.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track your payments, revenue, and customer insights in real-time.',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Payments',
    description: 'Set up subscriptions and recurring billing with automated retry logic.',
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Simple fade in animation
      gsap.from('.feature-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            All the tools you need to accept payments and grow your business anywhere on the planet.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="feature-card group"
              >
                <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
