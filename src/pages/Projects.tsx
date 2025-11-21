import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Calendar, Tag } from 'lucide-react';
import { portfolioData } from '../store/data';

const Projects = () => {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Project Archive
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of {projects.length} projects showcasing my work in AI/ML, full-stack development, and system design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
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
                  <span className="flex items-center space-x-1 px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                    <Tag size={14} />
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center space-x-1 px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-slate-300 rounded-full text-xs">
                    <Calendar size={14} />
                    <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-xs font-medium">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 group/btn inline-flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white rounded-lg transition-all duration-200"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white rounded-lg transition-all duration-200"
                      title="Source Code"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No projects found. Add some projects to your data.ts file!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
