'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ProyashPage() {
  const [activeTab, setActiveTab] = useState('education')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const tabs = [
    { id: 'education', name: 'Educational Support', icon: '📚' },
    { id: 'arts', name: 'Creative Arts', icon: '🎨' },
    { id: 'livelihood', name: 'Livelihood Skills', icon: '💼' }
  ]

  const tabContent = {
    education: {
      title: 'Educational Support',
      description: 'Bridging academic gaps and building confidence',
      points: [
        'Remedial classes for struggling students',
        'Career guidance and counseling',
        'Exam preparation support',
        'Digital learning resources',
        'Mentorship programs'
      ]
    },
    arts: {
      title: 'Creative Arts & Expression',
      description: 'Unleashing creativity and building self-confidence',
      points: [
        'Art and craft workshops',
        'Music and dance classes',
        'Drama and theater',
        'Photography and videography',
        'Creative writing and storytelling'
      ]
    },
    livelihood: {
      title: 'Livelihood & Skill Training',
      description: 'Empowering youth with marketable skills',
      points: [
        'Vocational training programs',
        'Computer and digital skills',
        'Entrepreneurship development',
        'Soft skills training',
        'Job placement assistance'
      ]
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Proyash
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Empowering Youth, Creating Opportunities
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              A dynamic youth empowerment initiative that bridges creativity with opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-2xl font-bold text-gray-800">452+ Youth</p>
                <p className="text-lg text-gray-600">Empowered Through Proyash</p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Proyash</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Proyash is our comprehensive youth empowerment program designed for adolescents and young adults from marginalized communities. We recognize that this age group faces unique challenges—academic pressure, career uncertainty, and limited opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Through Proyash, we provide a safe space for young people to explore their interests, develop skills, and build confidence. Our multi-faceted approach combines education, creativity, and livelihood training to prepare youth for a successful future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that when youth are empowered with knowledge, skills, and opportunities, they become agents of change in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Program <span className="text-blue-600">Modules</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive Youth Development</p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
            <p className="text-xl text-blue-600 mb-6">{tabContent[activeTab].description}</p>
            <ul className="space-y-4">
              {tabContent[activeTab].points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 text-2xl mr-3">✓</span>
                  <span className="text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">Real Lives, Real Change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Swagata Chatterjee',
                story: 'From Sacrifice to Self-Discovery',
                achievement: 'Empowered through Art & Financial Independence',
                icon: '🎨'
              },
              {
                name: 'Krishna Patra',
                story: 'From Hardship to Hope',
                achievement: 'Turning Struggles into Strength',
                icon: '💪'
              },
              {
                name: 'Payel Patra',
                story: 'From Paintbrush to Pixels',
                achievement: 'Blending Tradition with Technology',
                icon: '💻'
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{story.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{story.story}</p>
                <p className="text-gray-600">{story.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '452', label: 'Youth Empowered' },
              { number: '300+', label: 'Career Guidance Sessions' },
              { number: '85%', label: 'Skill Completion Rate' },
              { number: '50+', label: 'Success Stories' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="text-5xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empower a Young Life Today
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Your support can help a young person discover their potential and build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Support Proyash
              </Link>
              <Link
                href="/get-involved"
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Become a Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
