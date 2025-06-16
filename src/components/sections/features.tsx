'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CreditCard,
  Smartphone,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Users,
  Lock,
  RefreshCw,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Accept credit cards, debit cards, digital wallets, and 100+ payment methods.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Seamless checkout experience on any device with responsive forms.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Process payments in 135+ currencies with automatic conversion.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: 'AI-powered fraud detection to keep your business safe.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Get your money faster with real-time processing.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Track transactions and monitor performance in real-time.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Store customer data securely for one-click checkouts.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Lock,
    title: 'PCI DSS Compliant',
    description: 'Highest level security with end-to-end encryption.',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    icon: RefreshCw,
    title: 'Subscription Billing',
    description: 'Automate recurring payments with flexible billing.',
    gradient: 'from-teal-500 to-blue-500',
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Animate title on scroll
      gsap.from(titleRef.current, {
        y: isMobile ? 30 : 50,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animate feature cards with reduced motion on mobile
      gsap.from('.feature-card', {
        y: isMobile ? 30 : 60,
        opacity: 0,
        duration: 0.8,
        stagger: isMobile ? 0.08 : 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Hover animations - desktop only
      if (!isMobile) {
        const cards = gsap.utils.toArray('.feature-card') as HTMLElement[]
        cards.forEach((card) => {
          const icon = card.querySelector('.feature-icon')
          
          card.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.1,
              rotate: 5,
              duration: 0.3,
              ease: 'power2.out',
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.3,
              ease: 'power2.out',
            })
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-16 sm:py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern - Subtle on mobile */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-[0.03] sm:opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Powerful Features</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Everything you need to
            <br />
            <span className="gradient-text">accept payments online</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Our comprehensive suite of payment tools helps you increase conversion rates
            and grow your business globally.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="feature-card group relative p-6 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Border Effect - Desktop only */}
                <div className="hidden sm:block absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': feature.gradient.split(' ')[1],
                    '--tw-gradient-to': feature.gradient.split(' ')[3],
                  } as any}
                />

                <div className={`feature-icon w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line - Desktop only */}
                <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': feature.gradient.split(' ')[1],
                    '--tw-gradient-to': feature.gradient.split(' ')[3],
                  } as any}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
