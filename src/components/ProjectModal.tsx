import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ZoomIn } from 'lucide-react';
import { Project } from '../types';
import { useState, useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  const isMobile = project.type === 'mobile';
  const hasArchitectureDiagram = project.systemDesign?.imageUrl && project.systemDesign.imageUrl !== project.thumbnail;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex-shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 pr-4">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                      title="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                      title="Source Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all ml-2"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
                {/* Main Project Screenshot */}
                <div className={`${isMobile ? 'bg-zinc-50 dark:bg-zinc-950' : 'bg-zinc-100 dark:bg-zinc-950'}`}>
                  {isMobile ? (
                    // Mobile Screenshot - Centered with phone styling
                    <div className="flex items-center justify-center py-12 px-6">
                      <div
                        className="relative group cursor-zoom-in"
                        onClick={() => setSelectedImage(project.thumbnail)}
                      >
                        <img
                          src={project.thumbnail}
                          alt={`${project.title} Screenshot`}
                          className="max-h-[500px] max-w-[280px] object-contain rounded-3xl shadow-2xl ring-1 ring-black/10 dark:ring-white/20 transition-transform duration-300 group-hover:scale-[1.02]"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/400x800/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-3xl">
                          <span className="bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                            <ZoomIn size={14} /> Click to Expand
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Web Screenshot - Full width with aspect ratio
                    <div className="relative overflow-hidden">
                      <div className="aspect-video relative">
                        <div
                          className="group cursor-zoom-in h-full w-full"
                          onClick={() => setSelectedImage(project.thumbnail)}
                        >
                          <img
                            src={project.thumbnail}
                            alt={`${project.title} Screenshot`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/1200x675/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                              <ZoomIn size={14} /> Click to Expand
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Body - Description & Features */}
                <div className="px-6 md:px-8 py-6 space-y-6">
                  {/* Full Description */}
                  <div>
                    <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* System Architecture - with diagram integrated */}
                  {project.systemDesign && (
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-3">
                        System Architecture
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                        {project.systemDesign.description}
                      </p>
                      
                      {/* Architecture Diagram */}
                      {hasArchitectureDiagram && (
                        <div 
                          className="mb-4 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 group cursor-zoom-in relative"
                          onClick={() => setSelectedImage(project.systemDesign!.imageUrl)}
                        >
                          <img
                            src={project.systemDesign.imageUrl}
                            alt="System Architecture Diagram"
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                            <span className="bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                              <ZoomIn size={14} /> View Full Size
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Architecture Components */}
                      {project.systemDesign.components && (
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-2">
                            Key Components
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.systemDesign.components.map((component, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900 px-3 py-2 rounded-lg">
                                <span className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full flex-shrink-0" />
                                <span className="font-mono text-xs">{component}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer - Tech Stack */}
              <div className="px-6 md:px-8 py-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex-shrink-0">
                <h3 className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-mono text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Lightbox for full-screen image */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                >
                  <X size={24} />
                </button>
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25 }}
                  src={selectedImage}
                  alt="Full screen preview"
                  className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
