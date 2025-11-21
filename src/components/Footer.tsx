import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-slate-400 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-slate-500 text-xs">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-slate-400 hover:text-blue-500 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
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
                    className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-blue-500/10 hover:text-blue-500 transition-all duration-200"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-400 hover:text-blue-500 text-sm transition-colors block"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm flex items-center">
              © {currentYear} {personalInfo.name}. Built with{' '}
              <Heart size={14} className="mx-1 text-red-500 fill-current" /> and React
            </p>
            <div className="flex space-x-6 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
