'use client'

import Link from 'next/link'
import { CreditCard, Twitter, Github, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'Integrations', href: '/integrations' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status', href: '/status' },
    { name: 'Support', href: '/support' },
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Licenses', href: '/licenses' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/payflow' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/payflow' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/payflow' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@payflow.com' },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8 sm:mb-12">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">Payflow</span>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-xs">
              The modern payment platform built for businesses of all sizes.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns - 2 columns on mobile, 4 on desktop */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className={`${index >= 2 ? 'hidden sm:block' : ''}`}>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile - Additional Links */}
        <div className="grid grid-cols-2 gap-8 mb-8 sm:hidden">
          {Object.entries(footerLinks).slice(2).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="w-full md:w-auto">
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1 sm:mb-2">
                Stay up to date
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Get the latest updates on new features.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-48 lg:w-64 px-3 sm:px-4 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <p className="text-center sm:text-left">© 2025 Payflow. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-600 dark:hover:text-primary-400">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary-600 dark:hover:text-primary-400">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
