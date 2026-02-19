'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function STEMPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const features = [
    {
      title: 'Interactive Learning',
      description: 'Hands-on experiments that make science come alive',
      icon: '🔬'
    },
    {
      title: 'Creative Engagement',
      description: 'Science storytelling, poster-making, and role-playing',
      icon: '🎨'
    },
    {
      title: 'Mathematical Thinking',
      description: 'Fun tricks, puzzles, and real-life applications',
      icon: '🧮'
    },
    {
      title: 'Confidence Building',
      description: 'Teamwork and discovery-based activities',
      icon: '💪'
    }
  ]

  const experiments = [
    'Sugar Density Experiments',
    'Air Pressure Demonstrations',
    'Electromagnetism Projects',
    'Filtration Systems',
    'Static Electricity',
    'Turmeric as Indicator',
    'Electric Circuits',
    'Magnetism Models',
    'Heart Model',
    'Pinhole Camera',
    'Lungs Model',
    'Newton\'s Colour Wheel',
    'Convection Currents'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              STEM Learning Program
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Fueling Curiosity, Powering Innovation
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              Making science, technology, engineering, and mathematics accessible, engaging, and inspiring for underprivileged children
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 border-l-4 border-green-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Treasures of Innocence, we believe that every child deserves the chance to explore the wonders of science, regardless of their background. Our STEM Learning Program is a mission-driven initiative designed to make science, technology, engineering, and mathematics accessible, engaging, and inspiring for underprivileged children.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through hands-on activities, creative exploration, and real-world learning, we aim to ignite curiosity and empower young minds to think critically, solve problems, and dream big.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Objective</span>
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              The primary objective of our STEM Learning Program is to bridge the educational divide by offering under-resourced children a dynamic and inclusive science education. We focus on fostering scientific thinking, digital literacy, and problem-solving skills through experiential learning. By providing access to quality resources, guidance, and engaging STEM activities, we aim to nurture innovation, boost confidence, and open pathways to future opportunities in science and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-green-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600">Our Unique Learning Approach</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl">Interactive Learning Experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🔬 Hands-On Experiments</h3>
              <p className="text-green-100 mb-4">Explore real-world science through engaging experiments:</p>
              <ul className="space-y-2">
                {experiments.slice(0, 5).map((exp) => (
                  <li key={exp} className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Model Demonstrations</h3>
              <p className="text-green-100 mb-4">Visualize abstract concepts using simple, effective models:</p>
              <ul className="space-y-2">
                {experiments.slice(5, 10).map((exp) => (
                  <li key={exp} className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🎨 Creative Engagement</h3>
              <p className="text-green-100 mb-4">Fuel imagination through:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Science Storytelling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Poster Making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Quizzes about Scientists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Mathematical Magic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We <span className="text-green-600">Serve</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-500">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urban Slums</h3>
              <p className="text-gray-600">Children living in urban slums with inadequate educational infrastructure</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-500">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rural Students</h3>
              <p className="text-gray-600">Rural students with limited or no access to science labs or digital tools</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
              <div className="text-4xl mb-4">👧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Girls & First-Gen Learners</h3>
              <p className="text-gray-600">Girls and first-generation learners who are most vulnerable to educational neglect</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              STEM is Not Just a Subject—It's a Pathway to Possibility
            </h2>
            <p className="text-xl mb-10">
              With our STEM Learning Program, every child can explore, innovate, and envision a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Support STEM Education
              </Link>
              <Link
                href="/get-involved"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
