import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, MapPin, Award, Mail, Copy, Linkedin, Github, Check, Terminal, Cpu, Globe, X, Star, GitFork, Users, Code } from 'lucide-react';
import { portfolioData } from '../store/data';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heading, Text, Section, Card, Button } from '../components/design-system';

const About = () => {
  const { personalInfo } = portfolioData;
  const location = useLocation();
  const [emailCopied, setEmailCopied] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  
  // Initialize with approximate fallback data (prevents loading state if API fails)
  const [githubStats, setGithubStats] = useState({ 
    stars: 25, 
    repos: 45, 
    followers: 15, 
    languages: ['Python', 'TypeScript', 'Java', 'Swift'] 
    });
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState(false);
  
  // Streak stats state
  const [streakError, setStreakError] = useState(false);
  const [streakLoading, setStreakLoading] = useState(true);

  // Updated Bio to position as professional Software Engineer and recent graduate
  const bio = {
    intro: "I am a Software Engineer and recent Computer Science graduate (Dec 2025), specializing in scalable backend systems and applied Artificial Intelligence.",
    journey: "My technical foundation is built on solving real-world friction. From engineering Spring Boot automations that reduced manual workflows from 2 weeks to 2 seconds at CCC Intelligent Solutions, to developing GraphRAG architectures for AI memory, I focus on delivering high-impact, measurable results.",
    future: "I am seeking full-time Software Engineering roles where I can deploy my expertise in Java (Spring Boot), Python (FastAPI), and Generative AI."
  };

  // Certifications sorted by technical impact (AI & Backend first)
  const certifications = [
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'DeepLearning.AI / Coursera',
      date: 'Dec 2024',
      status: 'Completed',
      icon: Cpu,
      image: '/certificates/ml.jpeg'
    },
    {
      name: 'Spring Boot Masterclass',
      issuer: 'Amigoscode',
      date: 'Jun 2023',
      status: 'Completed',
      icon: Terminal,
      image: '/certificates/spring_boot.jpeg'
    },
    {
      name: 'Python for Data Science',
      issuer: 'University of Michigan',
      date: '2020-2024',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/python1.jpg'
    },
    {
      name: 'Python Programming',
      issuer: 'Various',
      date: '2020-2024',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/python2.jpg'
    },
    {
      name: 'Python Advanced Topics',
      issuer: 'Various',
      date: '2020-2024',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/python3.jpg'
    },
    {
      name: 'Python Data Science Capstone',
      issuer: 'University of Michigan',
      date: '2020-2024',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/python4.jpg'
    },
    {
      name: 'Computer Networking',
      issuer: 'Google',
      date: '2021',
      status: 'Completed',
      icon: MapPin,
      image: '/certificates/computer_network.jpg'
    },
    {
      name: 'Operating Systems',
      issuer: 'Google',
      date: '2021',
      status: 'Completed',
      icon: Cpu,
      image: '/certificates/operating_system.jpg'
    },
    {
      name: 'HTML, CSS & JavaScript',
      issuer: 'Various',
      date: '2020-2021',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/html_css_js.jpg'
    },
    {
      name: 'Technical Support',
      issuer: 'Google',
      date: '2021',
      status: 'Completed',
      icon: Terminal,
      image: '/certificates/technical_support.jpg'
    },
    {
      name: 'Customer Service',
      issuer: 'Google',
      date: '2021',
      status: 'Completed',
      icon: Award,
      image: '/certificates/customer_service.jpg'
    },
    {
      name: 'Wix Website Development',
      issuer: 'Wix',
      date: '2020',
      status: 'Completed',
      icon: Globe,
      image: '/certificates/wix.jpg'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Fetch GitHub Data directly (Reliable Fallback)
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = 'zayeemZaki';
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`)
        ]);

        if (userRes.status === 403 || reposRes.status === 403) {
           setStatsLoading(false);
           return;
        }

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API Error');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        // Calculate Stars
        const stars = Array.isArray(reposData) 
          ? reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
          : 25;

        // Calculate Top Languages
        const langCounts: Record<string, number> = {};
        if (Array.isArray(reposData)) {
          reposData.forEach((repo: any) => {
            if (repo.language) {
              langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            }
          });
        }
        
        const topLangs = Object.entries(langCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 4)
          .map(([lang]) => lang);

        setGithubStats({
          stars,
          repos: userData.public_repos || 45,
          followers: userData.followers || 15,
          languages: topLangs.length > 0 ? topLangs : ['Python', 'TypeScript', 'Java', 'Swift']
        });
        setStatsLoading(false);
      } catch (error) {
        console.warn('Using fallback GitHub stats due to API error:', error);
        setStatsError(false);
        setStatsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  // Streak timeout logic - reduced to 5 seconds for better UX
  useEffect(() => {
    const streakTimeout = setTimeout(() => {
      if (streakLoading && !streakError) {
        console.log('Streak stats timeout - hiding loader');
        setStreakLoading(false);
      }
    }, 5000); // Reduced from 15s to 5s

    return () => {
      clearTimeout(streakTimeout);
    };
  }, [streakLoading, streakError]);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-bg-primary pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
      <Section width="md">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Heading level={1} align="center" animate className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            About Me
          </Heading>
          <Text variant="lead" align="center" color="muted" className="text-base sm:text-lg">
            Software Engineer | Generative AI Specialist | Backend Architect
          </Text>
        </div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <Card variant="elevated" padding="lg">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Terminal className="text-accent-primary" size={24} />
              <Heading level={3} className="text-lg sm:text-xl">Engineering Journey</Heading>
            </div>
            
            <div className="space-y-6">
              <Text>{bio.intro}</Text>
              <Text>{bio.journey}</Text>
              <Text>{bio.future}</Text>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap className="text-accent-secondary" size={20} />
                  <Heading level={4}>Education</Heading>
                </div>
                <Text variant="small" color="muted">B.S. Computer Science</Text>
                <Text variant="caption" color="muted">Graduated Dec 2025</Text>
              </Card>

              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-accent-primary" size={20} />
                  <Heading level={4}>Location</Heading>
                </div>
                <Text variant="small" color="muted">United States</Text>
                <Text variant="caption" color="muted">Open to Relocation</Text>
              </Card>

              <Card variant="default" padding="md">
                <div className="flex items-center space-x-2 mb-2">
                  <Cpu className="text-purple-500" size={20} />
                  <Heading level={4}>Core Stack</Heading>
                </div>
                <Text variant="small" color="muted">Spring Boot & React</Text>
                <Text variant="caption" color="muted">AI/ML & Cloud</Text>
              </Card>
            </div>
          </Card>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 sm:mb-16"
          id="certificates"
        >
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <Award className="text-accent-secondary" size={24} />
            <Heading level={2} className="text-xl sm:text-2xl md:text-3xl">Credentials & Certifications</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon || Award;
              return (
                <Card
                  key={index}
                  variant="glass"
                  hoverEffect="border"
                  padding="md"
                  animate
                  animationDelay={0.4 + index * 0.1}
                  className="cursor-pointer"
                  onClick={() => cert.image && setSelectedCertificate(cert.image)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="text-accent-primary flex-shrink-0" size={24} />
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'In Progress' 
                        ? 'bg-yellow-500/10 text-yellow-500' 
                        : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <Heading level={4} className="mb-2 leading-tight">{cert.name}</Heading>
                  <Text variant="small" color="muted" className="mb-1">{cert.issuer}</Text>
                  <Text variant="caption" color="muted">{cert.date}</Text>
                </Card>
              );
            })}
          </div>

          {/* Certificate Popup Modal */}
          <AnimatePresence>
            {selectedCertificate && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={() => setSelectedCertificate(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full max-h-[90vh] bg-bg-secondary rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-bg-primary/80 hover:bg-bg-primary rounded-full transition-colors"
                  >
                    <X className="text-text-primary" size={24} />
                  </button>
                  <img
                    src={selectedCertificate}
                    alt="Certificate"
                    className="w-full h-auto object-contain max-h-[90vh]"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* GitHub Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <Github className="text-accent-primary" size={24} />
            <Heading level={2} className="text-xl sm:text-2xl md:text-3xl">GitHub Activity</Heading>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Custom GitHub Stats Card (Reliable) */}
            <Card variant="glass" padding="lg" className="min-h-[200px] flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-6">
                <Github className="text-accent-primary" size={24} />
                <Heading level={4}>Overall Stats</Heading>
              </div>

              {statsLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-primary"></div>
                </div>
              ) : statsError ? (
                 <div className="text-center py-4">
                   <Text color="muted">Stats unavailable</Text>
                   <a href="https://github.com/zayeemZaki" target="_blank" rel="noreferrer" className="text-accent-primary hover:underline text-sm">View GitHub</a>
                 </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div className="flex flex-col items-center p-2 sm:p-3 bg-bg-primary/50 rounded-lg border border-border">
                      <Star className="text-yellow-400 mb-1 sm:mb-2" size={16} />
                      <span className="text-lg sm:text-xl font-bold text-text-primary">{githubStats.stars}</span>
                      <span className="text-xs text-text-secondary">Stars</span>
                    </div>
                    <div className="flex flex-col items-center p-2 sm:p-3 bg-bg-primary/50 rounded-lg border border-border">
                      <GitFork className="text-blue-400 mb-1 sm:mb-2" size={16} />
                      <span className="text-lg sm:text-xl font-bold text-text-primary">{githubStats.repos}</span>
                      <span className="text-xs text-text-secondary">Repos</span>
                    </div>
                    <div className="flex flex-col items-center p-2 sm:p-3 bg-bg-primary/50 rounded-lg border border-border">
                      <Users className="text-emerald-400 mb-1 sm:mb-2" size={16} />
                      <span className="text-lg sm:text-xl font-bold text-text-primary">{githubStats.followers}</span>
                      <span className="text-xs text-text-secondary">Followers</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Code size={16} />
                      <span>Top Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {githubStats.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-medium border border-accent-primary/20">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>

            <Card variant="glass" padding="md" className="min-h-[200px] flex items-center justify-center relative overflow-hidden">
              {streakLoading && !streakError && (
                <div className="text-center py-8">
                  {/* Skeleton loader */}
                    <div className="animate-pulse space-y-3">
                      <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mx-auto"></div>
                      <div className="h-8 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2 mx-auto"></div>
                      <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-2/3 mx-auto"></div>
                    </div>
                    <Text color="muted" variant="small" className="mt-4">Loading streak...</Text>
                </div>
              )}
              {!streakError && !streakLoading && (
                  <img
                  src={`https://github-readme-streak-stats-two-pied.vercel.app/demo/`}
                    alt="GitHub Streak"
                  className="w-full dark:block hidden"
                  loading="lazy"
                    onError={() => {
                      setStreakError(true);
                      setStreakLoading(false);
                    }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.complete && target.naturalWidth > 0) {
                      setStreakLoading(false);
                    }
                    }}
                  />
              )}
              {!streakError && !streakLoading && (
                  <img
                  src={`https://streak-stats.demolab.com/?user=zayeemZaki&theme=light&background=ffffff&border=e2e8f0&stroke=e2e8f0&ring=3b82f6&fire=10b981&currStreakLabel=0f172a&sideLabels=0f172a&currStreakNum=0f172a&dates=0f172a&sideNums=10b981`}
                    alt="GitHub Streak"
                  className="w-full dark:hidden block"
                  loading="lazy"
                    onError={() => {
                      setStreakError(true);
                      setStreakLoading(false);
                    }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.complete && target.naturalWidth > 0) {
                      setStreakLoading(false);
                    }
                    }}
                  />
              )}
              {streakError && (
                <div className="text-center py-4">
                  <Github className="text-accent-primary mx-auto mb-4" size={48} />
                  <Text color="muted" className="mb-2">Streak Stats Unavailable</Text>
                  <a
                    href="https://github.com/zayeemZaki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm"
                  >
                    View Profile →
                  </a>
                </div>
              )}
            </Card>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          id="contact"
        >
          <Card variant="elevated" padding="xl" className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/20">
            <div className="text-center mb-6 sm:mb-8">
              <Mail className="text-accent-primary mx-auto mb-3 sm:mb-4" size={40} />
              <Heading level={3} align="center" className="mb-3 sm:mb-4 text-xl sm:text-2xl">Let's Connect</Heading>
              <Text variant="lead" align="center" color="muted" className="text-base sm:text-lg">
                I'm always open to discussing new opportunities, high-impact projects, or AI engineering collaborations.
              </Text>
            </div>

            <Card variant="default" padding="md" className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-accent-primary hover:text-accent-primary/80 text-base sm:text-lg font-semibold transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <Button
                  size="sm"
                  variant="ghost"
                  icon={emailCopied ? Check : Copy}
                  iconPosition="left"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto"
                >
                  {emailCopied ? 'Copied!' : 'Copy Email'}
                </Button>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              {personalInfo.socialLinks
                .filter(social => social.platform === 'LinkedIn' || social.platform === 'GitHub')
                .map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-2 p-5 sm:p-6 bg-bg-primary/50 hover:bg-accent-primary/10 rounded-xl border border-border hover:border-accent-primary/50 transition-all duration-200 group"
                  >
                    {social.platform === 'LinkedIn' ? (
                      <Linkedin className="text-text-secondary group-hover:text-accent-primary transition-colors" size={28} />
                    ) : (
                      <Github className="text-text-secondary group-hover:text-accent-primary transition-colors" size={28} />
                    )}
                    <span className="text-sm text-text-secondary group-hover:text-accent-primary font-medium transition-colors">
                      {social.platform}
                    </span>
                  </motion.a>
                ))}
            </div>
          </Card>
        </motion.section>
      </Section>
    </div>
  );
};

export default About;
