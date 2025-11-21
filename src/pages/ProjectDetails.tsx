import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Lightbulb, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../store/data';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <Calendar size={16} />
              <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <ExternalLink size={18} />
                <span>View Live Demo</span>
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
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl overflow-hidden border border-slate-800"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/1200x600/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
            }}
          />
        </motion.div>

        {/* System Design Section */}
        {project.systemDesign && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="text-blue-500" size={28} />
              <h2 className="text-3xl font-bold text-white">System Architecture</h2>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
              <p className="text-slate-300 text-lg mb-8">
                {project.systemDesign.description}
              </p>

              {/* Architecture Diagram Placeholder */}
              <div className="bg-slate-950 rounded-lg p-8 border-2 border-dashed border-slate-700 mb-6">
                <div className="text-center text-slate-500">
                  {project.systemDesign.imageUrl ? (
                    <img
                      src={project.systemDesign.imageUrl}
                      alt="System Architecture Diagram"
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="py-12">
                      <Layers size={48} className="mx-auto mb-4 opacity-50" />
                      <p>System Architecture Diagram</p>
                      <p className="text-sm mt-2">Add your architecture diagram image here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Components */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.systemDesign.components.map((component, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-slate-800/50 rounded-lg text-slate-300 text-sm font-medium text-center border border-slate-700"
                  >
                    {component}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Technical Challenges (STAR Method) */}
        {project.technicalChallenges && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold text-white">Technical Challenge</h2>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Situation', content: project.technicalChallenges.situation, color: 'blue' },
                { label: 'Task', content: project.technicalChallenges.task, color: 'emerald' },
                { label: 'Action', content: project.technicalChallenges.action, color: 'purple' },
                { label: 'Result', content: project.technicalChallenges.result, color: 'green' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-500/10 rounded-lg flex items-center justify-center`}>
                      <span className={`text-${item.color}-500 font-bold text-lg`}>
                        {item.label.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <CheckCircle2 className="text-blue-500" size={28} />
            <h2 className="text-3xl font-bold text-white">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-start space-x-3 bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-slate-800"
              >
                <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg font-medium border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetails;
