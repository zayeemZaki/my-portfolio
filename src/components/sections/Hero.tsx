import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { Button } from '../ui';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-blue-500 font-semibold mb-2">Hi, my name is</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400 mb-6">
                {personalInfo.headline}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              {personalInfo.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              
              <Button
                variant="outline"
                icon={Download}
                iconPosition="left"
                href={personalInfo.resumeUrl}
                download
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full blur-3xl opacity-20"
              />
              
              <div className="relative rounded-2xl overflow-hidden border-4 border-blue-500/20 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/500x600?text=Your+Photo';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-xl"
              >
                <p className="text-sm font-semibold">Available for hire</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
