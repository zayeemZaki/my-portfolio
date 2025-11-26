import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { Link } from 'react-router-dom';

const FeaturedExperience = () => {
  const { experiences } = portfolioData;
  // Display up to 3 experiences on home
  const displayExperiences = experiences.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Work Experience</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              My professional journey in software engineering.
            </p>
          </div>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium group"
          >
            View Full Resume <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800 md:left-8 hidden md:block" />

          {displayExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 top-2 w-3 h-3 -translate-x-[6px] rounded-full border-2 border-indigo-600 dark:border-indigo-500 bg-zinc-50 dark:bg-zinc-900/50 z-10 hidden md:block" />

              <div className="group relative p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-600/30 dark:hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-3">
                      {exp.role}
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 text-xs rounded-full font-medium border border-green-200 dark:border-green-800">
                          Current
                        </span>
                      )}
                    </h3>
                    <a 
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      {exp.company} <ArrowUpRight size={14} />
                    </a>
                  </div>
                  
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {' - '}
                        {exp.current ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Only show first 2 bullets for preview */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.slice(0, 2).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-600/50 dark:bg-indigo-500/50 flex-shrink-0" />
                      {bullet.text}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience;
