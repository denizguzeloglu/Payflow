'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: '👩‍💼',
    content: 'Payflow transformed our payment processing. The integration was seamless, and our conversion rates increased by 35% within the first month.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'E-Commerce Plus',
    avatar: '👨‍💻',
    content: 'The best payment solution we\'ve ever used. The API is incredibly well-documented, and the fraud protection has saved us thousands.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StyleBoutique',
    avatar: '👩‍🎨',
    content: 'Customer support is outstanding. They helped us customize the checkout experience to match our brand perfectly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CFO',
    company: 'GlobalTrade Co.',
    avatar: '👨‍💼',
    content: 'The multi-currency support and competitive rates have been game-changers for our international business. Couldn\'t be happier.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Operations',
    company: 'FoodDelivery Pro',
    avatar: '👩‍🍳',
    content: 'Real-time analytics and instant settlements have given us the cash flow flexibility we needed to scale our business rapidly.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'SaaS Solutions',
    avatar: '👨‍🔧',
    content: 'The subscription billing features are exactly what we needed. Automated retry logic has reduced our churn significantly.',
    rating: 5,
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Continuous scroll animation
      const cards = gsap.utils.toArray('.testimonial-card')
      const totalWidth = cards.length * 400 // Approximate card width

      gsap.to('.testimonials-track', {
        x: -totalWidth / 2,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })

      // Pause on hover
      const track = document.querySelector('.testimonials-track')
      if (track) {
        track.addEventListener('mouseenter', () => {
          gsap.to('.testimonials-track', { timeScale: 0, duration: 0.5 })
        })
        track.addEventListener('mouseleave', () => {
          gsap.to('.testimonials-track', { timeScale: 1, duration: 0.5 })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            <span>Customer Success Stories</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by thousands of
            <br />
            <span className="gradient-text">businesses worldwide</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See what our customers have to say about their experience with Payflow.
          </p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={containerRef} className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="testimonials-track flex gap-6">
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="testimonial-card flex-shrink-0 w-[400px] p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 mb-4" />

                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '10K+', label: 'Active Merchants' },
            { value: '$2B+', label: 'Processed Annually' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '150+', label: 'Countries Supported' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
