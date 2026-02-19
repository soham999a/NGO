'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ApproachPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const approaches = [
    {
      title: 'Joyful Learning',
      icon: '🎨',
      description: 'We believe learning should be engaging, relevant, and rooted in real-life experiences',
      image: 'IMG-20260131-WA0011.jpg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'STEM-Based Activities',
      icon: '🔬',
      description: 'Hands-on experiments and projects that nurture scientific thinking and creativity',
      image: 'IMG-20251008-WA0042.jpg',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Critical Thinking',
      icon: '🧠',
      description: 'Encouraging curiosity, questioning, and problem-solving skills',
      image: 'IMG-20260130-WA0012.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Skill Development',
      icon: '🛠️',
      description: 'Practical and vocational training that promotes self-reliance and confidence',
      image: 'FB_IMG_1769767084421.jpg',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <img
          src="/IMG-20260130-WA0016.jpg"
          alt="Our Approach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white z-10">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Approach</h1>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto">
              Creating meaningful learning opportunities through innovative, community-driven methods
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-orange">Philosophy</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Treasures of Innocence believes that learning should be engaging, relevant, and rooted in real-life experiences. Educational initiatives emphasise joyful learning, STEM-based activities, creativity, and critical thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={`/${approach.image}`}
                    alt={approach.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${approach.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-6xl mb-4">{approach.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{approach.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-br from-primary-blue via-purple-600 to-primary-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Methodology</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👥', title: 'Community-Driven', desc: 'Working directly with communities to understand and address their needs' },
              { icon: '🎯', title: 'Grassroots Level', desc: 'Field-level engagement ensuring direct impact and sustainable change' },
              { icon: '🌱', title: 'Holistic Development', desc: 'Addressing education, skills, and empowerment together' },
              { icon: '🤲', title: 'Inclusive Approach', desc: 'Creating opportunities for all, especially marginalized groups' },
              { icon: '💡', title: 'Innovation', desc: 'Using creative methods to make learning engaging and effective' },
              { icon: '🔄', title: 'Sustainable Impact', desc: 'Building capacity for long-term community ownership' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-lg opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-2xl text-gray-600 mb-10">
              Be part of our innovative approach to community development
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/get-involved"
                className="bg-primary-orange hover:bg-primary-orange-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                Get Involved
              </Link>
              <Link
                href="/support"
                className="bg-primary-blue hover:bg-primary-blue-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                Support Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
