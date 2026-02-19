'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const focusAreas = [
    { icon: '📚', title: 'Education & STEM Learning', desc: 'Activity-based and experiential learning to promote curiosity and scientific thinking' },
    { icon: '👶', title: 'Child Development', desc: 'Creative learning, life skills, and value-based education' },
    { icon: '👩', title: 'Women Empowerment', desc: 'Skill training and confidence-building initiatives' },
    { icon: '🛠️', title: 'Skill Development', desc: 'Practical and vocational capacity building' },
    { icon: '🤝', title: 'Community Engagement', desc: 'Awareness programmes and collaborative initiatives' }
  ]

  const impact = [
    'Created inclusive learning spaces',
    'Increased participation in education',
    'Strengthened women\'s confidence',
    'Encouraged community ownership and collaboration'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue via-blue-600 to-primary-orange min-h-[500px] flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-2xl">
              A community-driven organisation working at the grassroots level to support children, women, and underserved communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We <span className="text-primary-orange">Are</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Treasures of Innocence is a community-driven organisation working at the grassroots level to support children, women, and underserved communities through education, skill development, and inclusive social initiatives.
                </p>
                <p>
                  The organisation focuses on creating meaningful learning opportunities and practical pathways that enable individuals to grow with confidence and dignity.
                </p>
                <p>
                  The work of Treasures of Innocence spans across education, child development, women empowerment, and skill-based learning. Through school-based programmes, community centres, and field-level engagement, the organisation addresses gaps in access, awareness, and opportunities, particularly in marginalised and under-resourced areas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/IMG-20260131-WA0022.jpg"
                alt="Treasures of Innocence"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-orange">Approach</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Treasures of Innocence believes that learning should be engaging, relevant, and rooted in real-life experiences. Educational initiatives emphasise joyful learning, STEM-based activities, creativity, and critical thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Alongside education, Treasures of Innocence actively works with women and young adults through skill development and capacity-building programmes that promote self-reliance and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary-orange">Do</span>
            </h2>
            <p className="text-xl text-gray-600">Our Focus Areas</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-primary-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl">Creating Lasting Change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {impact.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex items-center"
              >
                <span className="text-3xl mr-4">✓</span>
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a society where every child, woman, and community member has access to quality education, meaningful opportunities, and the confidence to build a better future with dignity and self-reliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Long-term Goals</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">•</span>
                  <span>Expand reach to more underserved communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">•</span>
                  <span>Strengthen STEM and skill development programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">•</span>
                  <span>Build sustainable community partnerships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">•</span>
                  <span>Empower more women through livelihood programs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-orange">Board Members</span>
            </h2>
            <p className="text-xl text-gray-600">Leadership guiding our mission</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Somnath Banerjee', role: 'Founder & Director', icon: '👨‍💼' },
              { name: 'Anindita Banerjee', role: 'Co-Founder & Program Director', icon: '👩‍💼' },
              { name: 'Rajesh Kumar', role: 'Education Advisor', icon: '👨‍🏫' },
              { name: 'Priya Sharma', role: 'Community Outreach Lead', icon: '👩‍💻' },
              { name: 'Amit Das', role: 'Finance & Operations', icon: '👨‍💼' },
              { name: 'Sneha Roy', role: 'Women Empowerment Lead', icon: '👩‍🎓' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-primary-orange font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-orange to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-xl mb-10">
              Be part of the change. Support our work or get involved today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-involved"
                className="bg-white hover:bg-gray-100 text-primary-orange px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Get Involved
              </Link>
              <Link
                href="/support"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
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
