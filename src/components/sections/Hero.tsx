import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { Button } from '../ui';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sentence = personalInfo.headline.split("");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pb-16 lg:pb-20 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50vh] sm:w-[70vh] h-[50vh] sm:h-[70vh] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40vh] sm:w-[50vh] h-[40vh] sm:h-[50vh] bg-indigo-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-4 sm:mb-6">
                Available for hire
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight mb-4 sm:mb-6">
                {sentence.map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    variants={letterVariants}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {personalInfo.subheadline}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                icon={ArrowRight}
              >
                View Work
              </Button>
              
              <Button
                variant="outline"
                href={personalInfo.resumeUrl}
                download
                icon={Download}
              >
                Resume
              </Button>

              <Button
                variant="ghost"
                onClick={() => scrollToSection('contact')}
                icon={Mail}
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-400/20 rounded-[2rem] rotate-6 blur-xl" />
              <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
                 <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
