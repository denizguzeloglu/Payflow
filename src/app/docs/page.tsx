import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Book, Code, Zap, Shield, CreditCard, Globe, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: 'Getting Started',
    icon: Zap,
    description: 'Quick start guide to integrate Payflow',
    links: [
      { name: 'Introduction', href: '/docs/introduction' },
      { name: 'Quick Start', href: '/docs/quick-start' },
      { name: 'Authentication', href: '/docs/authentication' },
      { name: 'API Keys', href: '/docs/api-keys' },
    ],
  },
  {
    title: 'Payments',
    icon: CreditCard,
    description: 'Accept and manage payments',
    links: [
      { name: 'Create Payment', href: '/docs/create-payment' },
      { name: 'Payment Methods', href: '/docs/payment-methods' },
      { name: 'Webhooks', href: '/docs/webhooks' },
      { name: 'Testing', href: '/docs/testing' },
    ],
  },
  {
    title: 'Integration',
    icon: Code,
    description: 'SDK and platform integrations',
    links: [
      { name: 'JavaScript SDK', href: '/docs/js-sdk' },
      { name: 'React Components', href: '/docs/react' },
      { name: 'Mobile SDKs', href: '/docs/mobile' },
      { name: 'Plugins', href: '/docs/plugins' },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    description: 'Security and compliance',
    links: [
      { name: 'PCI Compliance', href: '/docs/pci' },
      { name: 'Fraud Prevention', href: '/docs/fraud' },
      { name: 'Data Security', href: '/docs/security' },
      { name: 'Best Practices', href: '/docs/best-practices' },
    ],
  },
]

const codeExample = `// Initialize Payflow
import { Payflow } from '@payflow/js';

const payflow = new Payflow('pk_test_your_key_here');

// Create a payment
const payment = await payflow.payments.create({
  amount: 2000, // $20.00
  currency: 'usd',
  payment_method: 'card',
  return_url: 'https://example.com/success'
});`

export default function Docs() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center">
                  <Book className="w-6 h-6 text-white dark:text-gray-900" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Documentation
                </h1>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Everything you need to integrate Payflow and start accepting payments. 
                Our API is RESTful, uses standard HTTP codes, and returns JSON responses.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Start
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get up and running with Payflow in less than 5 minutes. Follow these simple steps to start accepting payments.
              </p>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Create your account</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sign up for a free Payflow account</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Get your API keys</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Find your keys in the dashboard</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Install the SDK</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">npm install @payflow/js</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-medium">
                    4
                  </span>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Start accepting payments</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">You're ready to go!</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Code Example */}
            <div>
              <div className="bg-gray-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{codeExample}</code>
                </pre>
              </div>
              <div className="mt-4 flex gap-4">
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
                >
                  View full guide
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://github.com/payflow/examples"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  See examples
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <div
                  key={section.title}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 group"
                        >
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need help?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Our team is here to help you get started. Contact us for integration support or check out our community resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Contact support
                </Link>
                <Link
                  href="https://github.com/payflow/payflow"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
