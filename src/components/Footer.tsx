import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../store/data';

const Footer = () => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((social) => {
                const Icon = iconMap[social.icon.toLowerCase()] || Mail;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors block"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm flex items-center">
              © {currentYear} {personalInfo.name}. Built with Tailwind CSS and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
