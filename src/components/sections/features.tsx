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
    description: 'Accept credit cards, debit cards, digital wallets, and 100+ payment methods globally.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Seamless checkout experience on any device with our responsive payment forms.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Process payments in 135+ currencies with automatic currency conversion.',
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Advanced Fraud Protection',
    description: 'AI-powered fraud detection and prevention to keep your business safe.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Get your money faster with real-time payment processing and daily payouts.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    description: 'Track transactions, monitor performance, and gain insights with real-time dashboards.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Store customer data securely and enable one-click checkouts for returning customers.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Lock,
    title: 'PCI DSS Compliant',
    description: 'Highest level of payment security with end-to-end encryption and tokenization.',
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    icon: RefreshCw,
    title: 'Subscription Billing',
    description: 'Automate recurring payments with flexible billing cycles and retry logic.',
    gradient: 'from-teal-500 to-blue-500',
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Animate title on scroll
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animate feature cards
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Hover animations
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">accept payments online</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive suite of payment tools helps you increase conversion rates
            and grow your business globally.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="feature-card group relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    '--tw-gradient-from': feature.gradient.split(' ')[1],
                    '--tw-gradient-to': feature.gradient.split(' ')[3],
                  } as any}
                />

                <div className={`feature-icon w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
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
