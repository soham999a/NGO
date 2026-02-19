'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ScholarshipPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const scholarships = [
    {
      name: 'Hashi Rani Debi Scholarship',
      classes: 'Classes II–V (Bolpur Area Only)',
      amount: 'Rank-based monetary award',
      criteria: 'Writing-based evaluation (min. 80% score)',
      income: '≤ ₹8,000/month',
      color: 'from-purple-500 to-pink-500',
      icon: '🏆'
    },
    {
      name: 'Utsaho Scholarship',
      classes: 'Classes II–V (Rural & Urban West Bengal)',
      amount: '₹1,000/- Yearly',
      criteria: 'Writing-based evaluation (min. 75% score)',
      income: 'Low-income families',
      color: 'from-blue-500 to-indigo-500',
      icon: '📚'
    },
    {
      name: 'Medha Anweshan Scholarship',
      classes: 'Classes VI, VII, VIII, IX & X (West Bengal)',
      amount: '₹1,500/- Yearly',
      criteria: 'OMR-based test + descriptive writing (min. 80% score)',
      income: 'First-generation learners',
      color: 'from-green-500 to-teal-500',
      icon: '🎓'
    },
    {
      name: 'Prof. Prafulla Chakrabarti Memorial',
      classes: 'Class 12 Pass Students',
      amount: '₹5,000/- One-time',
      criteria: 'Min. 60% in 10th & 12th, physical/mental challenges',
      income: '≤ ₹1,80,000/year',
      color: 'from-orange-500 to-red-500',
      icon: '🌟'
    }
  ]

  const awardees2024 = [
    { name: 'Kamal Lata Hasda', score: '100%', scholarship: 'Hashi Rani Debi', class: 'II-V' },
    { name: 'Srija Mistry', score: '100%', scholarship: 'Utsaho', class: 'II' },
    { name: 'Upasana Das', score: '76%', scholarship: 'Medha Anweshan', class: 'VI' },
    { name: 'Chaitali Patra', score: '84% (H.S.)', scholarship: 'Dr. Prafulla', class: '12 Pass' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scholarship Programs
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Shiksha Shakti - Power of Education
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering dreams through education. Merit-based scholarships supporting talented students from underprivileged backgrounds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border-l-4 border-purple-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Scholarship Exams</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Treasures of Innocence Scholarship Exams are designed to identify and support talented students from underprivileged backgrounds. Through fair, curriculum-aligned assessments, we reward academic excellence, nurture early potential, and reduce financial barriers to education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each exam is a step toward building confidence, curiosity, and brighter futures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Objective */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Objective</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Encourage Excellence', desc: 'Promote academic excellence in early and critical years of schooling' },
              { icon: '💰', title: 'Financial Support', desc: 'Provide financial assistance to students from low-income families' },
              { icon: '🚫', title: 'Prevent Dropouts', desc: 'Keep students motivated and engaged to prevent school dropouts' },
              { icon: '👨‍🎓', title: 'Empower Learners', desc: 'Empower first-generation learners to pursue education with confidence' },
              { icon: '🤝', title: 'Community Support', desc: 'Foster a culture of learning through mentorship and parental involvement' },
              { icon: '🌟', title: 'Equal Opportunity', desc: 'Ensure every child has the opportunity to learn, grow, and lead' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-purple-600">Scholarship Programs</span>
            </h2>
            <p className="text-xl text-gray-600">Empowering Dreams Through Education</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${scholarship.color} p-6 text-white`}>
                  <div className="text-5xl mb-4">{scholarship.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{scholarship.name}</h3>
                  <p className="text-lg opacity-90">{scholarship.classes}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">💵</span>
                    <div>
                      <p className="font-semibold text-gray-900">Amount</p>
                      <p className="text-gray-600">{scholarship.amount}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">📝</span>
                    <div>
                      <p className="font-semibold text-gray-900">Criteria</p>
                      <p className="text-gray-600">{scholarship.criteria}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">👨‍👩‍👧</span>
                    <div>
                      <p className="font-semibold text-gray-900">Eligibility</p>
                      <p className="text-gray-600">{scholarship.income}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Students Reached' },
              { number: '20+', label: 'Schools Covered' },
              { number: '₹71,500', label: 'Scholarships (2024-25)' },
              { number: '40', label: 'Scholars Supported' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-300">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Awardees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              2024 <span className="text-purple-600">Scholarship Awardees</span>
            </h2>
            <p className="text-xl text-gray-600">Celebrating Excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardees2024.map((awardee, index) => (
              <motion.div
                key={awardee.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {awardee.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{awardee.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">{awardee.score}</p>
                <p className="text-sm text-gray-600 mb-1">{awardee.scholarship} Scholar</p>
                <p className="text-sm text-gray-500">Class {awardee.class}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Support a Scholar&apos;s Journey
            </h2>
            <p className="text-xl mb-10">
              Each scholarship is not just financial aid—it&apos;s a spark of hope lighting the way for a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Fund a Scholarship
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Apply for Scholarship
              </Link>
            </div>
            <div className="mt-8 text-lg">
              <p>📧 info@treasuresofinnocence.org</p>
              <p>📱 8777475052</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
