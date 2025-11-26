import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { portfolioData } from '../store/data';
import { useState } from 'react';
import BorderBeamCard from '../components/ui/BorderBeamCard';

const Projects = () => {
  const { projects } = portfolioData;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Sort projects: featured first, then by date
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Color themes for project shadows
  const getProjectTheme = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai/ml':
        return 'from-purple-500/30 via-blue-500/20 to-transparent';
      case 'full-stack':
        return 'from-blue-500/30 via-cyan-500/20 to-transparent';
      case 'mobile':
        return 'from-emerald-500/30 via-teal-500/20 to-transparent';
      case 'frontend':
        return 'from-orange-500/30 via-amber-500/20 to-transparent';
      default:
        return 'from-accent-primary/30 via-accent-secondary/20 to-transparent';
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
            /projects
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-5">
            Featured Work
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore {projects.length} projects spanning AI systems, full-stack applications, and mobile experiences
          </p>
        </motion.header>

        {/* Projects - Alternating Layout */}
        <div className="space-y-32 lg:space-y-40">
          {sortedProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isMobile = project.type === 'mobile';
            const themeGradient = getProjectTheme(project.category);

            const showSystemArchitecture = ['project-8', 'project-2'].includes(project.id);
            const images = [
              { src: project.thumbnail, label: 'Project Screenshot' },
              ...(showSystemArchitecture && project.systemDesign?.imageUrl && project.systemDesign.imageUrl !== project.thumbnail 
                  ? [{ src: project.systemDesign.imageUrl, label: 'System Architecture' }] 
                  : [])
            ].filter(img => img.src);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Content */}
                <div className={`space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="px-2.5 py-1 bg-accent-primary/10 text-accent-primary rounded-md text-xs font-semibold uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-mono text-text-secondary/70 uppercase tracking-wider">
                      {project.category} • {new Date(project.date).getFullYear()}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
                        Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {project.keyFeatures.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-text-secondary">
                            <span className="mt-2 w-1.5 h-1.5 bg-accent-primary rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex items-center gap-4 py-4 px-5 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                              {metric.label}:
                            </span>
                            <span className="font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                              {metric.value}
                            </span>
                          </div>
                          {idx < (project.metrics?.length ?? 0) - 1 && (
                            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-bg-secondary/80 text-text-secondary rounded-lg text-xs font-medium border border-border/50 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-accent-primary/25"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent-primary/50 hover:bg-bg-secondary/50 text-text-primary text-sm font-semibold rounded-lg transition-all"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Container with 3D Effect */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <BorderBeamCard>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative group"
                      style={{
                        perspective: '1000px',
                      }}
                    >
                      {isMobile ? (
                        // Mobile Phone Mockup with 3D Tilt
                        <div
                          className="relative mx-auto w-[320px] transition-transform duration-500 group-hover:scale-[1.02] cursor-zoom-in"
                          style={{
                            transform: isEven 
                              ? 'rotateY(-8deg) rotateX(2deg)' 
                              : 'rotateY(8deg) rotateX(2deg)',
                          }}
                          onClick={() => setLightboxImage(images[0].src)}
                        >
                        {/* Phone Frame */}
                        <div className="relative rounded-[3rem] overflow-hidden bg-zinc-900 dark:bg-zinc-800 p-3 shadow-2xl ring-1 ring-zinc-900/10 dark:ring-white/10">
                          {/* Screen */}
                          <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-zinc-950">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl z-10" />
                            
                            {/* Image */}
                            <div className="aspect-[9/19.5]">
                              <img
                                src={images[0].src}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = `https://via.placeholder.com/400x867/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
                                }}
                              />
                            </div>
                          </div>
                          
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-zinc-700 dark:bg-zinc-600 rounded-full" />
                        </div>
                        
                        {/* Colored Shadow */}
                        <div className="absolute inset-0 -z-10 blur-3xl opacity-40 transition-opacity group-hover:opacity-60">
                          <div className={`w-full h-full bg-gradient-to-br ${themeGradient} rounded-[3rem]`} />
                        </div>
                      </div>
                    ) : (
                      // Browser Window with 3D Tilt
                      <div
                        className="relative transition-transform duration-500 group-hover:scale-[1.02] cursor-zoom-in"
                        style={{
                          transform: isEven 
                            ? 'perspective(1400px) rotateY(-5deg) rotateX(3deg)' 
                            : 'perspective(1400px) rotateY(5deg) rotateX(3deg)',
                        }}
                        onClick={() => setLightboxImage(images[0].src)}
                      >
                        {/* Browser Chrome - Minimal Mac Dots */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                          {/* Top Bar - Clean White/Light with Dots Only */}
                          <div className="bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm px-4 py-3 border-b border-gray-200/50 dark:border-zinc-700/50">
                            <div className="flex items-center gap-2">
                              {/* Mac Window Dots */}
                              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                            </div>
                          </div>
                          
                          {/* Browser Content - Unified Aspect Ratio */}
                          <div className="aspect-video bg-white dark:bg-zinc-950">
                            <img
                              src={images[0].src}
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = `https://via.placeholder.com/1200x675/1e293b/3b82f6?text=${encodeURIComponent(project.title)}`;
                              }}
                            />
                          </div>
                        </div>
                        
                        {/* Large Colored Shadow for Depth */}
                        <div className="absolute inset-0 -z-10 blur-[60px] opacity-40 transition-opacity group-hover:opacity-60">
                          <div className={`w-full h-full bg-gradient-to-br ${themeGradient} rounded-2xl scale-110`} />
                        </div>
                      </div>
                    )}

                    {/* Additional Architecture Images */}
                    {images.length > 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 space-y-4"
                      >
                        {images.slice(1).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10 cursor-zoom-in hover:shadow-2xl transition-shadow"
                            style={{
                              transform: 'perspective(1000px) rotateX(1deg)',
                            }}
                            onClick={() => setLightboxImage(img.src)}
                          >
                            {/* Minimal top bar */}
                            <div className="bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm px-3 py-2 border-b border-gray-200/50 dark:border-zinc-700/50">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                                <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                                <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                              </div>
                            </div>
                            <div className="aspect-video bg-white dark:bg-zinc-950">
                              <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    </motion.div>
                  </BorderBeamCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={lightboxImage}
              alt="Full screen preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
