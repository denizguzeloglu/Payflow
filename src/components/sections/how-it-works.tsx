'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Palette, Rocket, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: Code2,
    title: 'Quick Integration',
    description: 'Add our SDK to your project with just a few lines of code. Support for all major frameworks.',
    features: ['React/Next.js', 'Vue.js', 'Angular', 'Mobile SDKs'],
  },
  {
    number: '02',
    icon: Palette,
    title: 'Customize & Brand',
    description: 'Design your checkout experience to match your brand. Use our themes or create your own.',
    features: ['Custom themes', 'White-label', 'Responsive', 'Multi-language'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Go Live Instantly',
    description: 'Test in sandbox mode, then flip the switch to start accepting real payments.',
    features: ['Instant activation', 'Real-time monitoring', 'Auto-scaling', '24/7 support'],
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const isMobile = window.innerWidth < 768

    const ctx = gsap.context(() => {
      // Animate timeline line - desktop only
      if (!isMobile) {
        gsap.fromTo('.timeline-line',
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: 1,
            },
          }
        )
      }

      // Animate step cards
      gsap.from('.step-card', {
        x: (index) => isMobile ? 0 : (index % 2 === 0 ? -100 : 100),
        y: isMobile ? 30 : 0,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        stagger: isMobile ? 0.2 : 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 85%',
        },
      })

      // Animate step numbers
      gsap.from('.step-number', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: isMobile ? 0.2 : 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-12 sm:py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background Elements - Reduced on mobile */}
      <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-200/10 sm:bg-primary-200/20 dark:bg-primary-800/10 sm:dark:bg-primary-800/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-200/10 sm:bg-secondary-200/20 dark:bg-secondary-800/10 sm:dark:bg-secondary-800/20 rounded-full blur-2xl sm:blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4"
          >
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Simple Setup Process</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4 sm:px-0">
            Start accepting payments
            <br />
            <span className="gradient-text">in minutes, not days</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Our streamlined integration process gets you up and running faster.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden hidden lg:block">
            <div className="timeline-line h-full bg-gradient-to-b from-primary-500 to-secondary-500 origin-top" />
          </div>

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  className={`step-card relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number (Desktop) */}
                  <div className="step-number hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full items-center justify-center text-white font-bold text-xl z-10">
                    {step.number}
                  </div>

                  {/* Mobile Card */}
                  <div className="lg:hidden w-full">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      {/* Mobile Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="step-number w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
                        {step.description}
                      </p>

                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Desktop Content */}
                  <div className={`hidden lg:block flex-1 ${isEven ? 'lg:text-right' : ''}`}>
                    <div className={`inline-block ${isEven ? 'lg:ml-auto' : ''}`}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                        {step.description}
                      </p>

                      <ul className={`space-y-2 ${isEven ? 'lg:ml-auto lg:text-left' : ''} max-w-sm`}>
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Icon (Desktop) */}
                  <div className="hidden lg:block flex-1">
                    <div className={`${isEven ? '' : 'ml-auto'} w-fit`}>
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center shadow-2xl"
                      >
                        <Icon className="w-20 h-20 lg:w-24 lg:h-24 text-primary-600 dark:text-primary-400" />
                      </motion.div>
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
          <a
            href="/docs"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View Documentation
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
