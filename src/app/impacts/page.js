'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ImpactsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stats = [
    { number: '3,302', label: 'Learners Reached', icon: '👨‍🎓', color: 'from-blue-500 to-cyan-500' },
    { number: '56.4%', label: 'Girls Empowered', icon: '👧', color: 'from-pink-500 to-rose-500' },
    { number: '30', label: 'Wall Libraries', icon: '📚', color: 'from-green-500 to-emerald-500' },
    { number: '₹71,500', label: 'Scholarships Given', icon: '🎓', color: 'from-purple-500 to-indigo-500' },
    { number: '300+', label: 'Career Guidance Sessions', icon: '💼', color: 'from-orange-500 to-red-500' },
    { number: '52%', label: 'Girls in STEM', icon: '🔬', color: 'from-teal-500 to-cyan-500' },
    { number: '377', label: 'Assessments Conducted', icon: '📝', color: 'from-yellow-500 to-orange-500' },
    { number: '20+', label: 'Schools & Communities', icon: '🏫', color: 'from-indigo-500 to-purple-500' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <img
          src="/IMG-20251008-WA0044.jpg"
          alt="Our Impact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white z-10">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Impact</h1>
            <p className="text-2xl md:text-3xl max-w-4xl mx-auto">
              Creating lasting change in communities across West Bengal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Impact in <span className="text-primary-orange">2024-25</span>
            </h2>
            <p className="text-2xl text-gray-600">Numbers that tell our story</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Key <span className="text-primary-orange">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Career Guidance & Skill Inspiration',
                desc: 'Empowered 300+ students through comprehensive career guidance and confidence-building sessions',
                image: 'FB_IMG_1769767112614.jpg',
                icon: '💼'
              },
              {
                title: 'Reach & Community Influence',
                desc: 'Supporting a growing learning community of 3,302 learners, creating equitable access to education',
                image: 'IMG-20260130-WA0013.jpg',
                icon: '🌍'
              },
              {
                title: 'Women & Girl-Child Empowerment',
                desc: '56.4% of our beneficiaries are young girls and women, reflecting our commitment to gender equity',
                image: 'FB_IMG_1769767163668.jpg',
                icon: '👩'
              },
              {
                title: 'STEM & Digital Literacy',
                desc: '52% of girls actively enrolled in computer and digital awareness programs',
                image: 'IMG-20260131-WA0013.jpg',
                icon: '💻'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={`/${achievement.image}`}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <h3 className="text-3xl font-bold">{achievement.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gradient-to-br from-primary-blue via-purple-600 to-primary-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Community Impact</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Created inclusive learning spaces',
              'Increased participation in education',
              'Strengthened women\'s confidence',
              'Encouraged community ownership',
              'Prevented school dropouts',
              'Fostered STEM interest',
              'Built sustainable partnerships',
              'Promoted gender equity'
            ].map((impact, index) => (
              <motion.div
                key={impact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all flex items-center"
              >
                <span className="text-3xl mr-4">✓</span>
                <p className="text-lg font-semibold">{impact}</p>
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
              Be Part of Our Impact
            </h2>
            <p className="text-2xl text-gray-600 mb-10">
              Together, we can create even greater change
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/support"
                className="bg-primary-orange hover:bg-primary-orange-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
              >
                Support Our Work
              </Link>
              <Link
                href="/get-involved"
                className="bg-primary-blue hover:bg-primary-blue-dark text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl"
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
