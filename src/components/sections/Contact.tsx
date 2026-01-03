import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { Button } from '../ui';

const Contact = () => {
  const { personalInfo } = portfolioData;

  const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Ready to start your next project?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            I'm currently available for freelance projects and open to full-time opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              href={`mailto:${personalInfo.email}`}
              size="lg"
              icon={Mail}
              iconPosition="left"
            >
              Say Hello
            </Button>
            
            <div className="flex gap-4">
              {personalInfo.socialLinks.map((social) => {
                const Icon = iconMap[social.icon.toLowerCase()];
                
                return (
                  <Button
                    key={social.platform}
                    variant="ghost"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Icon ? "p-3" : "px-4 py-2"}
                    aria-label={social.platform}
                  >
                    {Icon ? <Icon size={24} /> : <span className="text-sm font-medium">{social.icon}</span>}
                  </Button>
                );
              })}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;
