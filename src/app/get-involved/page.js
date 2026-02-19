'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <img src="/IMG-20260130-WA0013.jpg" alt="Get Involved" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Get Involved</h1>
            <p className="text-2xl md:text-3xl mb-4">Join Us in Making a Difference</p>
            <p className="text-xl max-w-3xl mx-auto">Be part of our mission to empower communities</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
                <div className="text-6xl mb-4"></div>
                <h3 className="text-3xl font-bold mb-3">Volunteer</h3>
                <p className="text-xl">Support programmes and field activities</p>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700">Join us in making a direct impact in communities.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 text-white">
                <div className="text-6xl mb-4"></div>
                <h3 className="text-3xl font-bold mb-3">Internship</h3>
                <p className="text-xl">Hands-on experience in community development</p>
              </div>
              <div className="p-8">
                <p className="text-lg text-gray-700">Gain practical experience in education and social work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-orange text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
          <Link href="/support" className="inline-block bg-white text-primary-orange px-10 py-5 rounded-full font-bold text-xl">Support Our Cause</Link>
        </div>
      </section>
    </div>
  )
}
