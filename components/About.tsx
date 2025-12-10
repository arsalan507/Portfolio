'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Users, Award } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and frameworks',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to solving complex problems',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable code',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6">Who I Am</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate Full Stack Developer based in Bengaluru, India, with a focus on creating
              innovative and user-friendly web applications. I specialize in JavaScript technologies,
              including React, Next.js, Node.js, and TypeScript.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              My journey in web development has led me to work on various projects ranging from
              simple calculators to complex CRM systems. I'm particularly interested in building
              scalable SaaS applications and exploring new technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I'm not coding, I enjoy contributing to open-source projects, learning about
              new frameworks, and sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
