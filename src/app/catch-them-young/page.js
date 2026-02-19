'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CatchThemYoungPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const pillars = [
    {
      title: 'Creative Learning',
      description: 'Nurturing creativity through art, music, and hands-on activities',
      icon: '🎨',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Skill Development',
      description: 'Building essential life skills and academic foundations',
      icon: '🛠️',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Character Building',
      description: 'Fostering resilience, empathy, and leadership qualities',
      icon: '💪',
      color: 'from-green-400 to-teal-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Catch Them Young
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Empowering Young Minds, Shaping Bright Futures
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering young minds with knowledge and skills, we nurture creativity, resilience, and lifelong learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About the <span className="text-orange-600">Program</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Catch Them Young is our flagship early childhood education program designed to reach children at their most formative years. We believe that early intervention and quality education can transform lives and break cycles of poverty.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Through engaging activities, creative exploration, and personalized attention, we help children develop strong foundations in literacy, numeracy, and social-emotional skills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our holistic approach ensures that every child receives the support they need to thrive academically, socially, and emotionally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👧👦</div>
                <p className="text-2xl font-bold text-gray-800">2,850+ Children</p>
                <p className="text-lg text-gray-600">Empowered Through CTY</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Three <span className="text-orange-600">Pillars</span>
            </h2>
            <p className="text-xl text-gray-600">Building Strong Foundations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${pillar.color} p-8 text-white text-center`}>
                  <div className="text-6xl mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-orange-600">Offer</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Remedial Education', desc: 'Personalized learning support to bridge academic gaps', icon: '📚' },
              { title: 'Creative Arts', desc: 'Art, music, and drama to foster self-expression', icon: '🎭' },
              { title: 'Life Skills', desc: 'Communication, teamwork, and problem-solving', icon: '🤝' },
              { title: 'Health & Hygiene', desc: 'Promoting physical and mental wellbeing', icon: '🏥' },
              { title: 'Digital Literacy', desc: 'Basic computer skills and digital awareness', icon: '💻' },
              { title: 'Reading Program', desc: 'Building a love for books and storytelling', icon: '📖' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2,850', label: 'Children Reached' },
              { number: '56.4%', label: 'Girls Enrolled' },
              { number: '12+', label: 'Learning Centers' },
              { number: '95%', label: 'Retention Rate' }
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
              Join Us in Empowering Young Minds
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Every child deserves a chance to learn, grow, and succeed. Help us make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Support This Program
              </Link>
              <Link
                href="/get-involved"
                className="bg-transparent border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
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
