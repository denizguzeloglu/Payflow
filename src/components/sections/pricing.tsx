'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: { monthly: 29, annually: 290 },
    features: [
      { name: 'Up to 1,000 transactions/month', included: true },
      { name: '2.9% + $0.30 per transaction', included: true },
      { name: 'Basic payment methods', included: true },
      { name: 'Email support', included: true },
      { name: 'Standard checkout', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Advanced fraud protection', included: false },
      { name: 'Custom branding', included: false },
      { name: 'Priority support', included: false },
    ],
  },
  {
    name: 'Growth',
    description: 'For growing businesses',
    price: { monthly: 99, annually: 990 },
    popular: true,
    features: [
      { name: 'Up to 10,000 transactions/month', included: true },
      { name: '2.5% + $0.25 per transaction', included: true },
      { name: 'All payment methods', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Customizable checkout', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Advanced fraud protection', included: true },
      { name: 'Custom branding', included: true },
      { name: 'Priority support', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: { monthly: 299, annually: 2990 },
    features: [
      { name: 'Unlimited transactions', included: true },
      { name: 'Custom pricing', included: true },
      { name: 'All payment methods + crypto', included: true },
      { name: '24/7 phone & email support', included: true },
      { name: 'White-label checkout', included: true },
      { name: 'Custom analytics & reports', included: true },
      { name: 'Advanced fraud protection', included: true },
      { name: 'Full custom branding', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
  },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section
      id="pricing"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Transparent Pricing</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose the plan that
            <br />
            <span className="gradient-text">fits your business</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            No hidden fees. No setup costs. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-md"
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 inline-block px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    ${isAnnual ? plan.price.annually : plan.price.monthly}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && (
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-white/70' : 'text-gray-500 dark:text-gray-500'}`}>
                    ${Math.round(plan.price.annually / 12)}/month billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    ) : (
                      <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white/30' : 'text-gray-300 dark:text-gray-600'}`} />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                        : plan.popular ? 'text-white/50 line-through' : 'text-gray-400 dark:text-gray-600 line-through'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Pricing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need a custom plan for your business?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            Contact our sales team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
