'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function SupportPage() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('onetime')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const amounts = [
    { value: 500, impact: 'Provides books for 5 students' },
    { value: 1000, impact: 'Funds a STEM workshop' },
    { value: 2500, impact: 'Supports a scholarship' },
    { value: 5000, impact: 'Sponsors a learning center for a month' },
    { value: 10000, impact: 'Empowers 10 children for a year' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-orange via-red-500 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Our Cause
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Every Contribution Makes a Difference
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              Your support helps us empower children, youth, and women through education and skill development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Donation Type */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Donation Type</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setDonationType('onetime')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    donationType === 'onetime'
                      ? 'bg-primary-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    donationType === 'monthly'
                      ? 'bg-primary-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Amount</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => {
                      setSelectedAmount(amount.value)
                      setCustomAmount('')
                    }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedAmount === amount.value
                        ? 'border-primary-orange bg-orange-50'
                        : 'border-gray-200 hover:border-primary-orange'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900">₹{amount.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{amount.impact}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-orange focus:ring-2 focus:ring-orange-200 transition-all"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Impact Message */}
            {(selectedAmount || customAmount) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-800 font-semibold">
                  Your {donationType === 'monthly' ? 'monthly' : ''} contribution of ₹{selectedAmount || customAmount} will make a real difference!
                </p>
              </motion.div>
            )}

            {/* Donate Button */}
            <button
              className="w-full bg-primary-orange hover:bg-primary-orange-dark text-white font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedAmount && !customAmount}
            >
              Donate Now
            </button>

            {/* Tax Benefit */}
            <p className="text-center text-sm text-gray-600 mt-4">
              🎯 80G Tax Exemption Available | Secure Payment Gateway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-primary-orange">Donate?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Direct Impact', desc: 'Your donation directly supports education and skill development programs' },
              { icon: '💯', title: 'Transparency', desc: '80G certified with full transparency in fund utilization' },
              { icon: '🌱', title: 'Sustainable Change', desc: 'Creating self-reliant communities for lasting impact' },
              { icon: '👨‍👩‍👧', title: 'Community Focus', desc: 'Supporting children, youth, and women from marginalized backgrounds' },
              { icon: '📊', title: 'Proven Results', desc: '3,302+ learners reached with measurable outcomes' },
              { icon: '🤝', title: 'CSR Ready', desc: 'Fully registered and partnership-eligible for corporate support' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Other Ways to <span className="text-primary-orange">Help</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-6">Share your time and skills to make a difference</p>
              <Link href="/get-involved" className="text-primary-blue hover:text-primary-orange font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">Partner with us for CSR initiatives</p>
              <Link href="/contact" className="text-primary-blue hover:text-primary-orange font-semibold">
                Get in Touch →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Spread the Word</h3>
              <p className="text-gray-600 mb-6">Share our mission with your network</p>
              <button className="text-primary-blue hover:text-primary-orange font-semibold">
                Share Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h2 className="text-3xl font-bold mb-8">ToI Assured: Your Trust Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: '✓', text: '80G Certified' },
                { icon: '✓', text: 'CSR Ready' },
                { icon: '✓', text: 'Sustainable Change' },
                { icon: '✓', text: 'Direct Reach' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-lg font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
