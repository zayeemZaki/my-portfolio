import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../store/data';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/about#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if path contains a hash (anchor link)
    if (path.includes('#')) {
      const [routePath, hash] = path.split('#');
      navigate(routePath);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Regular page navigation
      navigate(path);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 shadow-sm'
            : 'bg-white/60 dark:bg-zinc-950/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
              >
                &lt;{portfolioData.personalInfo.name.split(' ')[0]} /&gt;
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-2 md:hidden z-50 -mr-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
              
              {/* Animated Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-lg text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 rounded-full origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 rounded-full"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-0.5 bg-zinc-900 dark:bg-zinc-50 rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-white dark:bg-zinc-900 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => handleNavClick(link.path)}
                      className="block w-full text-left px-5 py-4 rounded-xl text-base font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-zinc-200 dark:border-zinc-800"
                >
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
                    © {new Date().getFullYear()} {portfolioData.personalInfo.name}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
