import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../store/data';

const FeaturedExperience = () => {
  const { experiences } = portfolioData;
  const currentExperience = experiences[0]; // Most recent
  const previousExperiences = experiences.slice(1, 3); // Next 2 roles

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg">
            Building impactful solutions at scale
          </p>
        </motion.div>

        {/* Current Role - Expanded */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 shadow-xl mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-2xl font-bold text-white">
                  {currentExperience.role}
                </h3>
                {currentExperience.current && (
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">
                    Current
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-4">
                <a
                  href={currentExperience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors group"
                >
                  <Building2 size={18} />
                  <span className="font-semibold">{currentExperience.company}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <div className="flex items-center space-x-2">
                  <MapPin size={18} />
                  <span>{currentExperience.location}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(currentExperience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    {' - '}
                    {currentExperience.current ? 'Present' : new Date(currentExperience.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-4 mb-6">
            {currentExperience.bullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <ChevronRight className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-300 leading-relaxed">{bullet.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {currentExperience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Previous Roles - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {previousExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {exp.role}
              </h3>
              <div className="flex items-center space-x-2 text-slate-400 mb-3">
                <Building2 size={16} />
                <span className="font-semibold">{exp.company}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Calendar size={14} />
                <span>
                  {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  {' - '}
                  {new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Resume Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/experience"
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors group"
          >
            <span>View Full Resume</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperience;
