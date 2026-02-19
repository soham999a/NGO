'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #2874A6 0%, #6B46C1 50%, #FF8C00 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient-flow 6s ease infinite'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.3, 1, 1.3],
                x: [0, -100, 0],
                y: [0, 50, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4">
            {/* Logo with Advanced Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 1
              }}
              className="mb-12"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-48 h-48 mx-auto relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                <img src="/logo.svg" alt="Treasures of Innocence" className="w-full h-full drop-shadow-2xl relative z-10" />
              </motion.div>
            </motion.div>

            {/* Welcome Text with Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-7xl md:text-8xl font-black text-white mb-6 relative"
                style={{
                  textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(255,255,255,0.3)'
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #ffffff 0%, #ffd700 25%, #ffffff 50%, #ffd700 75%, #ffffff 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Welcome
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="space-y-3"
              >
                <p className="text-3xl md:text-4xl text-white/95 font-bold tracking-wide">
                  Treasures of Innocence
                </p>
                <p className="text-xl md:text-2xl text-white/80 font-light italic">
                  Empowering Communities Through Education
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-16 w-80 mx-auto"
            >
              <div className="relative">
                {/* Progress percentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white/90 text-sm font-semibold mb-3 text-center"
                >
                  {progress}%
                </motion.div>
                
                {/* Progress bar container */}
                <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full relative"
                    style={{
                      background: 'linear-gradient(90deg, #ffffff 0%, #ffd700 50%, #ffffff 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer-progress 2s linear infinite'
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-10 flex justify-center space-x-3"
            >
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -25, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut"
                  }}
                  className="w-3 h-3 bg-white rounded-full shadow-lg"
                  style={{
                    boxShadow: '0 0 20px rgba(255,255,255,0.8)'
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

