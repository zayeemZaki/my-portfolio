import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Mail, Copy, Linkedin, Github, Check } from 'lucide-react';
import { portfolioData } from '../store/data';
import { useState } from 'react';
import { Heading, Text, Section, Card, Button } from '../components/design-system';

const About = () => {
  const { personalInfo } = portfolioData;
  const [emailCopied, setEmailCopied] = useState(false);

  const bio = {
    intro: "I am a Computer Science student graduating in Dec 2025. Originally from India, I am currently on an F1 visa in the USA.",
    journey: "My journey started with full-stack development, but I have pivoted deeply into AI/ML and Backend Engineering. I am passionate about building secure, scalable systems.",
    future: "I plan to pursue a part-time M.S. in CS (Security focus) at Georgia Tech while working."
  };

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'In Progress'
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2024',
      status: 'Planned'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      status: 'Planned'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <Section width="md">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading level={1} align="center" animate className="mb-6">
            About Me
          </Heading>
          <Text variant="lead" align="center" color="muted">
            Computer Science Student | AI/ML Enthusiast | Backend Engineer
          </Text>
        </div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="elevated" padding="lg">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-blue-500" size={32} />
              <Heading level={3}>My Journey</Heading>
            </div>
            
            <div className="space-y-6">
              <Text>{bio.intro}</Text>
              <Text>{bio.journey}</Text>
              <Text>{bio.future}</Text>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="text-emerald-500" size={20} />
                  <Heading level={4}>Education</Heading>
                </div>
                <Text variant="small" color="muted">B.S. Computer Science</Text>
                <Text variant="caption" color="muted">Graduating Dec 2025</Text>
              </Card>

              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-blue-500" size={20} />
                  <Heading level={4}>Location</Heading>
                </div>
                <Text variant="small" color="muted">United States</Text>
                <Text variant="caption" color="muted">F1 Visa Status</Text>
              </Card>

              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="text-purple-500" size={20} />
                  <Heading level={4}>Focus</Heading>
                </div>
                <Text variant="small" color="muted">AI/ML & Backend</Text>
                <Text variant="caption" color="muted">Security Engineering</Text>
              </Card>
            </div>
          </Card>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="text-emerald-500" size={32} />
            <Heading level={2}>Certifications</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                variant="glass"
                hoverEffect="border"
                padding="md"
                animate
                animationDelay={0.4 + index * 0.1}
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-blue-500 flex-shrink-0" size={24} />
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    cert.status === 'In Progress' 
                      ? 'bg-yellow-500/10 text-yellow-400' 
                      : 'bg-slate-700 text-slate-400'
                  }`}>
                    {cert.status}
                  </span>
                </div>
                <Heading level={4} className="mb-2">{cert.name}</Heading>
                <Text variant="small" color="muted" className="mb-1">{cert.issuer}</Text>
                <Text variant="caption" color="muted">{cert.date}</Text>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* GitHub Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Github className="text-blue-500" size={32} />
            <Heading level={2}>GitHub Activity</Heading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" padding="md">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${personalInfo.socialLinks.find(s => s.platform === 'GitHub')?.url.split('/').pop() || 'yourusername'}&show_icons=true&theme=transparent&title_color=3b82f6&text_color=e2e8f0&icon_color=10b981&bg_color=00000000&border_color=334155&hide_border=false`}
                alt="GitHub Stats"
                className="w-full"
              />
            </Card>

            <Card variant="glass" padding="md">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${personalInfo.socialLinks.find(s => s.platform === 'GitHub')?.url.split('/').pop() || 'yourusername'}&theme=transparent&background=00000000&border=334155&stroke=334155&ring=3b82f6&fire=10b981&currStreakLabel=e2e8f0&sideLabels=e2e8f0&currStreakNum=e2e8f0&dates=94a3b8&sideNums=10b981`}
                alt="GitHub Streak"
                className="w-full"
              />
            </Card>
          </div>

          <Card variant="glass" padding="md" className="mt-6">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${personalInfo.socialLinks.find(s => s.platform === 'GitHub')?.url.split('/').pop() || 'yourusername'}&layout=compact&theme=transparent&title_color=3b82f6&text_color=e2e8f0&bg_color=00000000&border_color=334155&hide_border=false`}
              alt="Top Languages"
              className="w-full max-w-md mx-auto"
            />
          </Card>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          id="contact"
        >
          <Card variant="elevated" padding="xl" className="bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border-blue-500/20">
            <div className="text-center mb-8">
              <Mail className="text-blue-500 mx-auto mb-4" size={48} />
              <Heading level={3} align="center" className="mb-4">Let's Connect</Heading>
              <Text variant="lead" align="center" color="muted">
                I'm always open to discussing new opportunities, projects, or collaborations
              </Text>
            </div>

            <Card variant="default" padding="md" className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors"
                >
                  {personalInfo.email}
                </a>
                <Button
                  size="sm"
                  variant="ghost"
                  icon={emailCopied ? Check : Copy}
                  iconPosition="left"
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? 'Copied!' : 'Copy Email'}
                </Button>
              </div>
            </Card>

            <div className="flex justify-center space-x-6">
              {personalInfo.socialLinks
                .filter(social => social.platform === 'LinkedIn' || social.platform === 'GitHub')
                .map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-2 p-6 bg-slate-800/50 hover:bg-blue-500/10 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    {social.platform === 'LinkedIn' ? (
                      <Linkedin className="text-slate-400 group-hover:text-blue-500 transition-colors" size={32} />
                    ) : (
                      <Github className="text-slate-400 group-hover:text-blue-500 transition-colors" size={32} />
                    )}
                    <span className="text-sm text-slate-400 group-hover:text-blue-500 font-medium transition-colors">
                      {social.platform}
                    </span>
                  </motion.a>
                ))}
            </div>

            <div className="mt-8 text-center">
              <Text variant="small" color="muted">
                💡 Usually responds within 24 hours
              </Text>
            </div>
          </Card>
        </motion.section>
      </Section>
    </div>
  );
};

export default About;
