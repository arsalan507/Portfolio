'use client'

import { Github, Linkedin, Instagram, Twitter, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/arsalan507', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/arsalan507', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/arsalan507', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/arsalan507', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Arsalan Ahmed
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
              Building innovative web applications with modern technologies.
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors font-medium flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-2">Based in</p>
            <p className="text-xl font-semibold">Bengaluru, India 🇮🇳</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
