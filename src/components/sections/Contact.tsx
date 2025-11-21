import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../../store/data';

const Contact = () => {
  const { personalInfo } = portfolioData;

  const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700"
        >
          {/* Email Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6">
              <Mail className="text-blue-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Get In Touch
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              <span className="text-lg">{personalInfo.email}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800/50 text-slate-400">Or connect with me on</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {personalInfo.socialLinks.map((social) => {
              const Icon = iconMap[social.icon.toLowerCase()];
              if (!Icon) return null;
              
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2 p-6 bg-slate-800/50 hover:bg-blue-500/10 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-200 group"
                >
                  <Icon className="text-slate-400 group-hover:text-blue-500 transition-colors" size={32} />
                  <span className="text-sm text-slate-400 group-hover:text-blue-500 font-medium transition-colors">
                    {social.platform}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-2">Based in</p>
            <p className="text-white font-semibold text-lg">{personalInfo.location}</p>
          </div>
        </motion.div>

        {/* Quick Stats or Fun Fact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            💡 Usually responds within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
