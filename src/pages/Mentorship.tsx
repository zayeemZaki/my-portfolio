import { motion } from 'framer-motion';
import {
  Blocks,
  Brain,
  CodeXml,
  FileSearch,
  CalendarCheck,
  ExternalLink,
} from 'lucide-react';
import { Heading, Text, Card } from '../components/design-system';
import Cal from '@calcom/embed-react';

const services = [
  { icon: Blocks, title: 'OOP & Design Patterns', desc: 'SOLID principles, real-world patterns (Java focus)' },
  { icon: Brain, title: 'DSA & LeetCode Strategy', desc: 'Pattern recognition, complexity analysis, interview prep' },
  { icon: CodeXml, title: 'Project Code Reviews', desc: 'Architecture feedback, code quality, best practices' },
  { icon: FileSearch, title: 'Career & Resume Guidance', desc: 'Resume reviews, LinkedIn, job-search roadmaps' },
];

const SENJA_WIDGET_ID = 'bf380593-429e-45c9-83b3-e9c2310aa972';

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ───────── Header ───────── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 lg:mb-24 text-center px-4"
        >
          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
            /mentorship
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-5">
            Mentorship
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Helping students bridge the gap between university and industry.
          </p>
        </motion.header>

        {/* ───────── Two-Column: Services + Calendar ───────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {/* What I Offer */}
          <Card variant="glass" padding="lg" className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CalendarCheck className="text-accent-primary" size={20} />
                <Heading level={4} className="text-lg">What I Offer</Heading>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-accent-primary/10 shrink-0 mt-0.5">
                      <Icon className="text-accent-primary" size={15} />
                    </div>
                    <div>
                      <Text variant="small" color="primary" className="font-medium">{s.title}</Text>
                      <Text variant="caption" color="muted">{s.desc}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Book a Session */}
          <Card variant="glass" padding="lg">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CalendarCheck className="text-accent-primary" size={20} />
                <Heading level={4} className="text-lg">Book a Session</Heading>
              </div>
              <a
                href="https://senja.io/p/zayeem-zaki/r/dRPw67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-primary transition-colors"
              >
                Leave a review
                <ExternalLink size={12} />
              </a>
            </div>

            <Cal
              calLink="zayeem-zaki-8qugnk"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view', theme: 'light' }}
            />
          </Card>

          {/* ───────── Reviews ───────── */}
          <div className="mt-10">
            <div
              className="senja-embed"
              data-id={SENJA_WIDGET_ID}
              data-lazyload="false"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Mentorship;
