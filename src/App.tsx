import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectDetails from './pages/ProjectDetails';
import Mentorship from './pages/Mentorship';
import NotFound from './pages/NotFound';

function App() {
  // Preload external assets for performance
  useEffect(() => {
    const preloadImages = [
      // Dark Mode Streak
      `https://streak-stats.demolab.com/?user=zayeemZaki&theme=dark&background=0f172a&border=334155&stroke=334155&ring=3b82f6&fire=10b981&currStreakLabel=e2e8f0&sideLabels=e2e8f0&currStreakNum=e2e8f0&dates=94a3b8&sideNums=10b981`,
      // Light Mode Streak
      `https://streak-stats.demolab.com/?user=zayeemZaki&theme=light&background=ffffff&border=e2e8f0&stroke=e2e8f0&ring=3b82f6&fire=10b981&currStreakLabel=0f172a&sideLabels=0f172a&currStreakNum=0f172a&dates=0f172a&sideNums=10b981`
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 overflow-x-hidden">
        {/* Dot Grid Background Pattern */}
        <div 
          className="fixed inset-0 z-[-1] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />
        
        {/* Optional: Fade mask for subtle vignette effect */}
        <div 
          className="fixed inset-0 z-[-1] bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-zinc-950/50 pointer-events-none"
          aria-hidden="true"
        />
        
        {/* Main Content - sits above the background */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
