import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, Lightbulb, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { portfolioData } from '../store/data';
import { useState, useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = portfolioData.projects.find((p) => p.id === id);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent-primary hover:text-accent-primary/80 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors mb-8 group"
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
            <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <div className="flex items-center space-x-2 text-text-secondary text-sm">
              <Calendar size={16} />
              <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold rounded-lg transition-all duration-200"
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
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-border hover:border-accent-primary text-text-secondary hover:text-text-primary font-semibold rounded-lg transition-all duration-200"
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
          className="mb-16 rounded-2xl overflow-hidden border border-border shadow-lg group cursor-zoom-in relative"
          onClick={() => setSelectedImage(project.thumbnail)}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/1200x600/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md">
              <ZoomIn size={18} /> View Fullscreen
            </span>
          </div>
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
              <Layers className="text-accent-primary" size={28} />
              <h2 className="text-3xl font-bold text-text-primary">System Architecture</h2>
            </div>

            <div className="bg-bg-secondary rounded-xl p-8 border border-border">
              <p className="text-text-secondary text-lg mb-8">
                {project.systemDesign.description}
              </p>

              {/* Architecture Diagram - Only show if image exists */}
              {(project.systemDesign.imageUrl || project.thumbnail) && (
                <div className="bg-bg-primary rounded-lg p-8 border-2 border-dashed border-border mb-6">
                  <div 
                    className="text-center text-text-secondary cursor-zoom-in relative group"
                    onClick={() => setSelectedImage(project.systemDesign?.imageUrl || project.thumbnail)}
                  >
                    <img
                      src={project.systemDesign.imageUrl || project.thumbnail}
                      alt="System Architecture Diagram"
                      className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                        <span className="bg-black/50 text-white px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md text-sm">
                          <ZoomIn size={14} /> Zoom
                        </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Components */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {project.systemDesign.components.map((component, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-bg-primary rounded-lg text-text-secondary text-sm font-medium text-center border border-border"
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
              <Lightbulb className="text-accent-secondary" size={28} />
              <h2 className="text-3xl font-bold text-text-primary">Technical Challenge</h2>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Situation', content: project.technicalChallenges.situation, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Task', content: project.technicalChallenges.task, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                { label: 'Action', content: project.technicalChallenges.action, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                { label: 'Result', content: project.technicalChallenges.result, color: 'text-green-500', bg: 'bg-green-500/10' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-bg-secondary rounded-xl p-6 border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center`}>
                      <span className={`${item.color} font-bold text-lg`}>
                        {item.label.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary mb-2">{item.label}</h3>
                      <p className="text-text-secondary leading-relaxed">{item.content}</p>
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
            <CheckCircle2 className="text-accent-primary" size={28} />
            <h2 className="text-3xl font-bold text-text-primary">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="flex items-start space-x-3 bg-bg-secondary rounded-lg p-4 border border-border"
              >
                <CheckCircle2 className="text-accent-secondary flex-shrink-0 mt-1" size={20} />
                <span className="text-text-secondary">{feature}</span>
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
          <h2 className="text-3xl font-bold text-text-primary mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-medium border border-accent-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full screen preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
