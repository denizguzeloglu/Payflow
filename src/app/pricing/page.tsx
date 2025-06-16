import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for small businesses just getting started',
    features: [
      '2.9% + 30¢ per transaction',
      'Up to $10,000 monthly volume',
      'Standard support',
      'Basic analytics',
      'All payment methods',
    ],
    cta: 'Get started',
    href: '/signup',
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/month',
    description: 'For growing businesses with higher volume',
    features: [
      '2.5% + 25¢ per transaction',
      'Up to $100,000 monthly volume',
      'Priority support',
      'Advanced analytics',
      'Custom checkout',
      'Webhook events',
    ],
    cta: 'Start free trial',
    href: '/signup?plan=growth',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large businesses with custom needs',
    features: [
      'Volume discounts available',
      'Unlimited monthly volume',
      'Dedicated support',
      'Custom reporting',
      'White-label options',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    href: '/contact',
  },
]

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              No setup fees. No monthly fees. No hidden costs. Just pay for what you use.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 bg-white dark:bg-gray-900 rounded-2xl border ${
                  plan.popular
                    ? 'border-gray-900 dark:border-white shadow-xl'
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full">
                    Most popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-colors ${
                    plan.popular
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Are there any setup fees?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No. Payflow is completely free to set up. You only pay when you process payments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  What payment methods do you support?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We support all major credit and debit cards, digital wallets like Apple Pay and Google Pay, 
                  bank transfers, and many local payment methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
