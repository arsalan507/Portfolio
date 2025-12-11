'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'Java', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 65 },
      ],
    },
    {
      category: 'Database & Tools',
      color: 'from-green-600 to-emerald-600',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Vercel', level: 85 },
      ],
    },
    {
      category: 'Mobile & Other',
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Android (Java)', level: 70 },
        { name: 'Framer Motion', level: 80 },
        { name: 'Redux', level: 75 },
        { name: 'Jest', level: 70 },
        { name: 'Agile/Scrum', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard
              key={category.category}
              category={category}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl">
        {/* Gradient Background Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${category.color}`}
            initial={{ x: '-100%', y: '-100%' }}
            animate={isHovered ? { x: '100%', y: '100%' } : { x: '-100%', y: '-100%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              width: '200%',
              height: '200%',
              opacity: 0.3
            }}
          />
        </div>

        {/* Content */}
        <div className="relative p-6 z-10">
          {/* Category Header */}
          <motion.div
            className="mb-6"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold text-lg shadow-lg`}>
              {category.category}
            </div>
          </motion.div>

          {/* Skills List */}
          <div className="space-y-4">
            {category.skills.map((skill: any, skillIndex: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + skillIndex * 0.05
                }}
                className="group/skill"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1 + skillIndex * 0.05,
                      ease: "easeOut"
                    }}
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-20`}
          animate={isHovered ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}
