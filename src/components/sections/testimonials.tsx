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
    content: 'Payflow transformed our payment processing. Integration was seamless, and conversion rates increased by 35%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'E-Commerce Plus',
    avatar: '👨‍💻',
    content: 'The best payment solution we\'ve used. Well-documented API and excellent fraud protection.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StyleBoutique',
    avatar: '👩‍🎨',
    content: 'Outstanding customer support. They helped us customize the checkout to match our brand perfectly.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CFO',
    company: 'GlobalTrade Co.',
    avatar: '👨‍💼',
    content: 'Multi-currency support and competitive rates have been game-changers for our international business.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Operations',
    company: 'FoodDelivery Pro',
    avatar: '👩‍🍳',
    content: 'Real-time analytics and instant settlements give us the cash flow flexibility we need.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Product Manager',
    company: 'SaaS Solutions',
    avatar: '👨‍🔧',
    content: 'The subscription billing features are exactly what we needed. Reduced churn significantly.',
    rating: 5,
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Continuous scroll animation - slower on mobile
      const cards = gsap.utils.toArray('.testimonial-card')
      const totalWidth = cards.length * (isMobile ? 300 : 400)

      gsap.to('.testimonials-track', {
        x: -totalWidth / 2,
        duration: isMobile ? 40 : 30,
        ease: 'none',
        repeat: -1,
      })

      // Pause on hover/touch
      const track = document.querySelector('.testimonials-track')
      if (track) {
        const pauseAnimation = () => {
          gsap.to('.testimonials-track', { timeScale: 0, duration: 0.5 })
        }
        const resumeAnimation = () => {
          gsap.to('.testimonials-track', { timeScale: 1, duration: 0.5 })
        }

        track.addEventListener('mouseenter', pauseAnimation)
        track.addEventListener('mouseleave', resumeAnimation)
        track.addEventListener('touchstart', pauseAnimation)
        track.addEventListener('touchend', resumeAnimation)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Customer Success Stories</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Trusted by thousands of
            <br />
            <span className="gradient-text">businesses worldwide</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            See what our customers have to say about their experience.
          </p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={containerRef} className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="testimonials-track flex gap-4 sm:gap-6">
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="testimonial-card flex-shrink-0 w-[280px] sm:w-[350px] lg:w-[400px] p-5 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 dark:text-gray-600 mb-3 sm:mb-4" />

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic line-clamp-4">
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
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          {[
            { value: '10K+', label: 'Active Merchants' },
            { value: '$2B+', label: 'Processed' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
