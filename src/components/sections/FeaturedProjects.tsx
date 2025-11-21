import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../store/data';

const FeaturedProjects = () => {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work in AI, full-stack development, and system design
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 lg:h-full min-h-[300px]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/800x600/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-sm text-slate-500 font-semibold mb-2">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={`/project/${project.id}`}
                        className="group/btn inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
                      >
                        <span>View Case Study</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200"
                        >
                          <Github size={18} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects */}
        {portfolioData.projects.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 mb-4">
              Want to see more? I have {portfolioData.projects.length - 2} more projects to share!
            </p>
            <button className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-400 font-semibold transition-colors group">
              <span>View All Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
