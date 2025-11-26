import { motion } from 'framer-motion';
import { 
  Code2, Database, Globe, Cpu, Server, Cloud, Terminal, 
  Layers, Box, Workflow, Braces, Command, Hash, Layout 
} from 'lucide-react';
import { portfolioData } from '../../store/data';

const TechStack = () => {
  const { skills } = portfolioData;

  // Duplicate the list to ensure seamless scrolling
  const duplicatedSkills = [...skills, ...skills];

  const getIcon = (name: string) => {
    const normalized = name.toLowerCase();
    if (normalized.includes('react') || normalized.includes('vue') || normalized.includes('next')) return Layout;
    if (normalized.includes('node') || normalized.includes('spring') || normalized.includes('flask')) return Server;
    if (normalized.includes('python') || normalized.includes('java') || normalized.includes('swift')) return Code2;
    if (normalized.includes('sql') || normalized.includes('mongo') || normalized.includes('firebase') || normalized.includes('redis')) return Database;
    if (normalized.includes('aws') || normalized.includes('docker') || normalized.includes('kubernetes')) return Cloud;
    if (normalized.includes('ai') || normalized.includes('ml') || normalized.includes('graph')) return Cpu;
    if (normalized.includes('git')) return Command;
    return Terminal;
  };

  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider text-center">
          Technologies & Tools
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-900/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-900/50 to-transparent z-10" />
        
        <motion.div
          className="flex gap-16 px-8 whitespace-nowrap"
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {duplicatedSkills.map((skill, index) => {
            const Icon = getIcon(skill.name);
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-3 group/item cursor-default"
              >
                <Icon 
                  className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                <span className="text-lg font-medium text-zinc-600 dark:text-zinc-400 group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-50 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
