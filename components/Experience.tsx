'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'TeleCRM Solutions',
      location: 'Bengaluru, India',
      period: '2023 - Present',
      description: [
        'Developed and maintained AI-powered CRM system serving multiple clients',
        'Built Android application for call tracking with 10k+ downloads',
        'Implemented RESTful APIs and microservices architecture',
        'Collaborated with cross-functional teams using Agile methodology',
      ],
    },
    {
      type: 'work',
      title: 'Web Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - 2023',
      description: [
        'Developed responsive web applications for various clients',
        'Created inventory management systems and e-commerce solutions',
        'Implemented modern UI/UX designs with React and Tailwind CSS',
        'Provided technical consultation and project management',
      ],
    },
  ]

  const education = [
    {
      type: 'education',
      degree: 'Google IT Automation with Python',
      institution: 'Coursera',
      period: '2023',
      description: [
        'Completed professional certificate program',
        'Learned Python automation, Git, and system administration',
        'Gained expertise in troubleshooting and debugging',
      ],
    },
    {
      type: 'education',
      degree: 'Bachelor of Technology',
      institution: 'University Name',
      period: '2018 - 2022',
      description: [
        'Computer Science and Engineering',
        'Relevant coursework: Data Structures, Algorithms, Web Development',
        'Active member of coding clubs and tech communities',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-blue-600"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {exp.location} | {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-purple-600"
                >
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {edu.period}
                    </p>
                    <ul className="space-y-2">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
