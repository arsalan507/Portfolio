'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'KineticXhub - Digital Marketing & Automation',
      description: 'A comprehensive digital marketing agency platform specializing in ads management, marketing automation, and business growth solutions. Empowering businesses with data-driven strategies and cutting-edge automation tools.',
      tech: ['Next.js', 'TypeScript', 'Marketing Automation', 'Analytics', 'SEO'],
      github: '#',
      demo: 'https://kineticxhub.com',
      featured: true,
    },
    {
      title: 'SimpleQuran - Islamic Web Application',
      description: 'A beautiful and intuitive Quran reading web application featuring complete Quran text, advanced search functionality, bookmarking system, and audio recitations. Built for seamless spiritual experience.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/arsalan507/simplequran',
      demo: 'https://simplequran.in/',
      featured: true,
    },
    {
      title: 'FIXplanet - CRM & Service Platform',
      description: 'A comprehensive CRM solution for service management businesses. Features customer tracking, service scheduling, invoice management, and analytics dashboard for streamlined operations.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI'],
      github: '#',
      demo: 'https://crm-fixplanet.vercel.app',
      featured: false,
    },
    {
      title: 'Sky Crew Aviation - Landing Page',
      description: 'Professional landing page for an aviation training academy. Features course information, enrollment system, and modern UI showcasing flight training programs and certification courses.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      github: '#',
      demo: 'https://skycrewaviation.vercel.app',
      featured: false,
    },
    {
      title: '2XG - Business Website',
      description: 'Modern corporate website for a business solutions company. Features service showcase, client portfolio, contact forms, and responsive design for optimal user experience.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: 'https://2xg.vercel.app',
      featured: false,
    },
    {
      title: 'The Cinema Hub',
      description: 'Entertainment platform for movie enthusiasts. Features movie listings, reviews, ratings, and trailers. Built with modern web technologies for smooth browsing experience.',
      tech: ['React', 'Next.js', 'TypeScript', 'Movie API', 'Tailwind CSS'],
      github: '#',
      demo: 'https://thecinemahub.vercel.app',
      featured: false,
    },
    {
      title: 'TeleCRM - AI-Powered CRM System',
      description: 'A comprehensive SaaS-ready CRM system with AI capabilities for managing customer relationships, call tracking, and business analytics. Features automated workflows and intelligent insights.',
      tech: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'AI/ML'],
      github: 'https://github.com/arsalan507/telecrm',
      demo: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and TypeScript, featuring dark mode, smooth animations, and interactive UI components.',
      tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/arsalan507/Portfolio',
      demo: 'https://arsalan507.vercel.app',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my work across digital marketing, web applications, and business solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-6">
                {project.featured && (
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/arsalan507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
