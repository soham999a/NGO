'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const projects = [
    {
      title: 'Catch Them Young',
      description: 'Empowering Young Minds, Shaping Bright Futures',
      detail: 'Empowering young minds with knowledge and skills, we nurture creativity, resilience, and lifelong learning.',
      href: '/catch-them-young',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Proyash',
      description: 'Empowering Youth, Creating Opportunities',
      detail: 'A dynamic youth empowerment initiative that bridges creativity with opportunity.',
      href: '/proyash',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'STEM Learning',
      description: 'Fueling Curiosity, Powering Innovation',
      detail: 'Hands-on experiments and projects nurture scientific thinking, creativity, and problem-solving skills.',
      href: '/stem',
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Scholarship Programs',
      description: 'Shiksha Shakti - Power of Education',
      detail: 'Merit-based scholarships supporting talented students from underprivileged backgrounds.',
      href: '/scholarship',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const impactStats = [
    { number: '3,302', label: 'Learners Reached', icon: '👨‍🎓' },
    { number: '56.4%', label: 'Girls Empowered', icon: '👧' },
    { number: '30', label: 'Wall Libraries', icon: '📚' },
    { number: '₹71,500', label: 'Scholarships Given', icon: '🎓' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <img
          src="/IMG-20260131-WA0022.jpg"
          alt="Treasures of Innocence"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white z-10">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Communities Through Learning and Self-Reliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Treasures of Innocence works at the intersection of education, skills, and empowerment—uplifting children, youth, and women by closing the gaps, amplifying creativity, and nurturing self-reliance.
            </p>
            <p className="text-lg md:text-xl italic mb-10 text-blue-100">
              Because when one child learns, a family grows; when one woman thrives, a community flourishes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/support"
                className="bg-primary-orange hover:bg-primary-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 text-center"
              >
                Donate Now
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-gray-100 text-primary-blue px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Major Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Major <span className="text-primary-orange">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming lives through education, creativity, and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={project.href}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <h3 className="text-3xl font-bold text-white text-center px-4">{project.title}</h3>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-primary-orange mb-3">{project.description}</h4>
                      <p className="text-gray-600 mb-4">{project.detail}</p>
                      <span className="text-primary-blue font-semibold hover:text-primary-orange transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact in <span className="text-primary-orange">2024-25</span>
            </h2>
            <p className="text-xl text-blue-100">Creating lasting change in communities</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-orange">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary-orange">Do</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Remedial Education', desc: 'Lighting the Path to Knowledge', detail: 'We strengthen foundational learning and bridge academic gaps so every child can progress with confidence' },
              { title: 'STEM Learning', desc: 'Fueling Curiosity, Powering Innovation', detail: 'Hands-on experiments and projects nurture scientific thinking, creativity, and problem-solving skills' },
              { title: 'Digital Literacy', desc: 'Opening Doors to the Digital World', detail: 'We equip children with essential computer skills and safe online practices to expand their learning opportunities' },
              { title: 'Reading Enrichment', desc: 'Stories that Inspire, Knowledge that Empowers', detail: 'Curated books, wall libraries, and storytelling sessions cultivate imagination and a lifelong love for reading' },
              { title: 'Mental & Physical Wellbeing', desc: 'Thriving Minds, Healthy Futures', detail: 'We promote hygiene, nutrition awareness, and emotional wellbeing to support children\'s overall growth' },
              { title: 'Livelihood Program', desc: 'Empowering Skills, Enabling Independence', detail: 'Skill training and entrepreneurship support enable women and youth to build financial independence' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border-l-4 border-primary-orange"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-primary-orange font-semibold mb-3">{item.desc}</p>
                <p className="text-gray-600">{item.detail}</p>
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
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-10">
              Every contribution helps us empower more children and communities. Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-white hover:bg-gray-100 text-primary-orange px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Support Our Cause
              </Link>
              <Link
                href="/get-involved"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-orange">Work in Action</span>
            </h2>
            <p className="text-xl text-gray-600">Moments that inspire change</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'IMG-20260131-WA0022.jpg',
              'IMG-20260131-WA0013.jpg',
              'IMG-20260130-WA0016.jpg',
              'IMG-20260130-WA0013.jpg',
              'IMG-20260130-WA0012.jpg',
              'IMG-20251008-WA0044.jpg'
            ].map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={`/${img}`}
                  alt="Our work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/media"
              className="inline-block bg-primary-orange hover:bg-primary-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              View More Photos & Videos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
