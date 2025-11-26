import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../../store/data';
import { Button } from '../ui';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const { personalInfo } = portfolioData;
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              <p>{personalInfo.bio}</p>
              <p>
                I specialize in bridging the gap between complex backend logic and intuitive frontend experiences. 
                Whether it's optimizing distributed systems or crafting pixel-perfect UIs, I bring a detail-oriented 
                approach to every project.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            
            <Button 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/about');
              }}
              icon={ArrowRight}
            >
              More About Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-indigo-400 opacity-20 blur-xl rounded-xl" />
            <div className="relative bg-zinc-900 dark:bg-zinc-900 rounded-xl p-6 shadow-2xl overflow-hidden border border-zinc-700 dark:border-zinc-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="font-mono text-sm text-zinc-300 dark:text-zinc-300 overflow-x-auto">
                <code>
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">SoftwareEngineer</span> {'{'}
                  {'\n'}  <span className="text-blue-400">constructor</span>() {'{'}
                  {'\n'}    <span className="text-red-400">this</span>.name = <span className="text-green-400">"{personalInfo.name}"</span>;
                  {'\n'}    <span className="text-red-400">this</span>.role = <span className="text-green-400">"{personalInfo.title}"</span>;
                  {'\n'}    <span className="text-red-400">this</span>.passion = <span className="text-green-400">"Building scalable systems"</span>;
                  {'\n'}  {'}'}
                  {'\n\n'}  <span className="text-blue-400">solveProblem</span>(complex_issue) {'{'}
                  {'\n'}    <span className="text-purple-400">while</span> (complex_issue.<span className="text-blue-400">exists</span>()) {'{'}
                  {'\n'}      <span className="text-red-400">this</span>.<span className="text-blue-400">analyze</span>();
                  {'\n'}      <span className="text-red-400">this</span>.<span className="text-blue-400">code</span>();
                  {'\n'}      <span className="text-red-400">this</span>.<span className="text-blue-400">optimize</span>();
                  {'\n'}    {'}'}
                  {'\n'}    <span className="text-purple-400">return</span> <span className="text-green-400">"Solution Deployed 🚀"</span>;
                  {'\n'}  {'}'}
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
