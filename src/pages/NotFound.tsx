import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-slate-400 text-lg mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Oops! The page you're looking for seems to have wandered off into the digital void.
            Let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/">
              <Button variant="primary" icon={Home} iconPosition="left">
                Go Home
              </Button>
            </Link>

            <button onClick={() => window.history.back()}>
              <Button variant="ghost" icon={ArrowLeft} iconPosition="left">
                Go Back
              </Button>
            </button>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            className="mt-12 text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm">
              Error Code: 404 | Lost in Cyberspace
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
