import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, ExternalLink, ChevronRight, Download } from 'lucide-react';
import { portfolioData } from '../store/data';

const Experience = () => {
  const { experiences, personalInfo } = portfolioData;

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my career journey and key achievements
          </p>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
          >
            <Download size={20} />
            <span>Download Full Resume</span>
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-transparent md:transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 md:transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}>
                  <div className="ml-8 md:ml-0 bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group w-fit"
                        >
                          <Building2 size={18} />
                          <span className="font-semibold">{exp.company}</span>
                          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>

                        <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm">
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
                        <div
                          key={bulletIndex}
                          className="flex items-start space-x-3"
                        >
                          <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {bullet.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date Badge (Hidden on mobile, shown on desktop) */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-1 text-right' : 'md:col-start-2'}`}>
                  <div className={`inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <p className="text-blue-400 font-semibold text-sm">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-slate-400 mb-6">
              Let's discuss how I can help bring your project to life
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
