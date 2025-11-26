import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, ExternalLink, ChevronRight, Download } from 'lucide-react';
import { portfolioData } from '../store/data';

const Experience = () => {
  const { experiences, personalInfo } = portfolioData;

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 sm:mb-6">
              Professional Experience
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6 sm:mb-8"
          >
            A comprehensive overview of my career journey and key achievements
          </motion.p>
          <motion.a
            href={personalInfo.resumeUrl}
            download
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200"
          >
            <Download size={20} />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 via-indigo-500 to-transparent dark:from-indigo-500 dark:via-indigo-400 md:transform md:-translate-x-1/2 origin-top"
          />

          {/* Experience Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-zinc-950 md:transform md:-translate-x-1/2 z-10 shadow-lg shadow-indigo-500/50"
                />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="ml-6 sm:ml-8 md:ml-0 bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.4, type: 'spring' }}
                            className="px-2 py-1 bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold border border-green-200 dark:border-green-800"
                          >
                            Current
                          </motion.span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group w-fit"
                        >
                          <Building2 size={18} />
                          <span className="font-semibold">{exp.company}</span>
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <div className="flex flex-wrap items-center gap-3 text-zinc-600 dark:text-zinc-400 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>
                              {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              {' - '}
                              {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-4">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <motion.div
                          key={bulletIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + bulletIndex * 0.05 + 0.5 }}
                          className="flex items-start space-x-3"
                        >
                          <ChevronRight className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={18} />
                          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                            {bullet.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                      className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800"
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.03 + 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Date Badge (Hidden on mobile, shown on desktop) */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-1 text-right' : 'md:col-start-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    className={`inline-block px-4 py-2 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}
                  >
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs">
                      {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-r from-indigo-50 to-indigo-100/50 dark:from-indigo-950/50 dark:to-indigo-900/30 rounded-2xl p-6 sm:p-8 border border-indigo-200 dark:border-indigo-800"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 sm:mb-4">
              Interested in working together?
            </h3>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-5 sm:mb-6">
              Let's discuss how I can help bring your project to life
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ChevronRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
