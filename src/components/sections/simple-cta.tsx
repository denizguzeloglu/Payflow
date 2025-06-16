'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function SimpleCTA() {
  return (
    <section className="py-24 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start accepting payments today
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Join thousands of businesses using Payflow to accept payments online.
            No setup fees, no monthly fees, no hidden costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-200"
            >
              Get started for free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-medium border border-gray-700 hover:bg-gray-800 transition-all duration-200"
            >
              View pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
