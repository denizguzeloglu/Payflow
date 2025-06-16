import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/sections/footer'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions about Payflow? We're here to help. Contact our team for support, 
              sales inquiries, or partnership opportunities.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales inquiry</option>
                    <option value="support">Technical support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Other ways to reach us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@payflow.com</p>
                    <p className="text-gray-600 dark:text-gray-400">sales@payflow.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400">Available Monday to Friday</p>
                    <p className="text-gray-600 dark:text-gray-400">9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-400">Mon-Fri 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Payment Street</p>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA 94105</p>
                    <p className="text-gray-600 dark:text-gray-400">United States</p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  Looking for quick answers?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Check out our frequently asked questions for instant help.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
                >
                  Visit FAQ
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
