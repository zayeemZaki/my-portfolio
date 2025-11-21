import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Zayeem Zaki',
    title: 'Software Engineer & AI Enthusiast',
    headline: 'Building Scalable AI Solutions & Robust Systems',
    subheadline: 'Software Engineer specialized in Full-Stack Development & Machine Learning | Transforming complex data into actionable insights',
    email: 'zayeemzaki45@gmail.com',
    location: 'United States',
    profileImage: './profile.jpeg', 
    resumeUrl: '/resume.pdf',
    bio: 'Passionate software engineer with 5+ years of experience building scalable systems and AI-powered applications. Specialized in full-stack development, machine learning, and cloud architecture. I thrive on solving complex problems and delivering high-impact solutions.',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/zayeemZaki',
        icon: 'github'
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/zayeem-zaki/',
        icon: 'linkedin'
      }
    ]
  },

  skills: [
    // Languages
    { name: 'Python', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'Go', category: 'Languages' },
    
    // Frameworks
    { name: 'React', category: 'Frameworks' },
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'Next.js', category: 'Frameworks' },
    { name: 'FastAPI', category: 'Frameworks' },
    { name: 'Django', category: 'Frameworks' },
    { name: 'Express', category: 'Frameworks' },
    { name: 'Spring Boot', category: 'Frameworks' },
    
    // AI/ML
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'Scikit-learn', category: 'AI/ML' },
    { name: 'OpenAI API', category: 'AI/ML' },
    { name: 'LangChain', category: 'AI/ML' },
    { name: 'Hugging Face', category: 'AI/ML' },
    
    // Tools
    { name: 'Docker', category: 'Tools' },
    { name: 'Kubernetes', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Google Cloud', category: 'Tools' },
    { name: 'PostgreSQL', category: 'Tools' },
    { name: 'MongoDB', category: 'Tools' },
    { name: 'Redis', category: 'Tools' },
    { name: 'Git', category: 'Tools' },
    { name: 'CI/CD', category: 'Tools' },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Senior Software Engineer',
      company: 'Tech Company',
      companyUrl: 'https://techcompany.com',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: 'Present',
      current: true,
      bullets: [
        {
          text: 'Architected and deployed a microservices-based AI recommendation system serving 2M+ daily users, reducing latency by 45% and increasing user engagement by 30%',
          impact: '45% latency reduction, 30% engagement increase'
        },
        {
          text: 'Led a team of 5 engineers to rebuild the core platform using React, TypeScript, and Node.js, resulting in 60% faster page loads and 99.9% uptime',
          impact: '60% performance improvement, 99.9% uptime'
        },
        {
          text: 'Implemented automated CI/CD pipelines using GitHub Actions and Docker, cutting deployment time from 2 hours to 15 minutes',
          impact: '87% deployment time reduction'
        }
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 'exp-2',
      role: 'Full Stack Developer',
      company: 'Startup Inc',
      companyUrl: 'https://startup.com',
      location: 'Remote',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      bullets: [
        {
          text: 'Built a real-time data analytics dashboard using React and D3.js, enabling clients to visualize KPIs and make data-driven decisions',
        },
        {
          text: 'Developed RESTful APIs with Node.js and Express, handling 10K+ requests per minute with 99.95% reliability',
        },
        {
          text: 'Integrated third-party payment systems (Stripe, PayPal) and implemented secure authentication with JWT and OAuth 2.0',
        }
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'D3.js', 'AWS']
    },
    {
      id: 'exp-3',
      role: 'Software Engineer Intern',
      company: 'Big Tech Corp',
      companyUrl: 'https://bigtech.com',
      location: 'Seattle, WA',
      startDate: '2019-06',
      endDate: '2019-12',
      current: false,
      bullets: [
        {
          text: 'Developed an internal tool for automated code review using Python and ML models, improving code quality scores by 25%',
        },
        {
          text: 'Collaborated with cross-functional teams to design and implement new features for a cloud-based platform',
        }
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL']
    }
  ],

  projects: [
    {
      id: 'project-1',
      title: 'AI-Powered Code Review Assistant',
      shortDescription: 'Automated code review system using LLMs',
      fullDescription: 'An intelligent code review assistant that leverages large language models to analyze pull requests, detect potential bugs, suggest improvements, and ensure code quality standards. Built with a microservices architecture for scalability.',
      thumbnail: '/projects/code-review.jpg',
      techStack: ['Python', 'FastAPI', 'OpenAI API', 'React', 'TypeScript', 'Docker', 'PostgreSQL', 'Redis'],
      category: 'AI/ML',
      featured: true,
      liveUrl: 'https://demo.yourproject.com',
      repoUrl: 'https://github.com/yourusername/project',
      date: '2024-03',
      keyFeatures: [
        'Real-time code analysis using GPT-4',
        'Custom rule engine for team-specific standards',
        'Integration with GitHub and GitLab',
        'Detailed reporting dashboard with metrics',
        'Machine learning model for bug prediction'
      ],
      systemDesign: {
        description: 'Microservices architecture with event-driven processing',
        components: [
          'React Frontend (TypeScript)',
          'API Gateway (Kong)',
          'Analysis Service (Python/FastAPI)',
          'LLM Processing Service (OpenAI API)',
          'PostgreSQL Database',
          'Redis Cache',
          'Message Queue (RabbitMQ)',
          'Docker/Kubernetes'
        ]
      },
      technicalChallenges: {
        situation: 'Processing large pull requests (1000+ lines) was taking over 2 minutes, causing poor user experience and API timeouts.',
        task: 'Reduce processing time to under 30 seconds while maintaining accuracy and keeping costs under control.',
        action: 'Implemented a chunking strategy to break large files into smaller segments, added parallel processing with worker pools, and introduced Redis caching for repeated code patterns. Also optimized LLM prompts to reduce token usage by 40%.',
        result: 'Reduced average processing time from 120s to 22s (82% improvement), cut API costs by 45%, and achieved 95% user satisfaction rating.'
      }
    },
    {
      id: 'project-2',
      title: 'Real-Time Analytics Platform',
      shortDescription: 'Scalable data visualization and analytics dashboard',
      fullDescription: 'A comprehensive analytics platform that processes and visualizes real-time data streams from multiple sources. Features interactive dashboards, custom reporting, and predictive analytics powered by machine learning.',
      thumbnail: '/projects/analytics.jpg',
      techStack: ['React', 'Next.js', 'TypeScript', 'Python', 'Apache Kafka', 'TimescaleDB', 'D3.js', 'TailwindCSS'],
      category: 'Full-Stack',
      featured: true,
      liveUrl: 'https://analytics.yourproject.com',
      repoUrl: 'https://github.com/yourusername/analytics',
      date: '2024-01',
      keyFeatures: [
        'Real-time data ingestion from Kafka streams',
        'Interactive visualizations with D3.js',
        'Custom dashboard builder with drag-and-drop',
        'Predictive analytics using ML models',
        'Export capabilities (PDF, CSV, Excel)',
        'Role-based access control'
      ],
      systemDesign: {
        description: 'Event-driven architecture with real-time data processing',
        components: [
          'Next.js Frontend',
          'REST API (Node.js)',
          'Apache Kafka (Data Streaming)',
          'Python Analytics Engine',
          'TimescaleDB (Time-series data)',
          'Redis (Caching)',
          'AWS S3 (Storage)',
          'Docker/ECS'
        ]
      },
      technicalChallenges: {
        situation: 'Dashboard performance degraded significantly when visualizing datasets with over 100K data points, causing browser freezes.',
        task: 'Enable smooth visualization of large datasets without compromising interactivity or requiring page refreshes.',
        action: 'Implemented data aggregation on the backend, virtual scrolling for tables, canvas-based rendering for large charts, and Web Workers for heavy computations. Added intelligent data sampling that maintains statistical accuracy.',
        result: 'Achieved smooth 60fps rendering with datasets up to 1M points, reduced initial load time by 70%, and enabled real-time updates without performance impact.'
      }
    },
    {
      id: 'project-3',
      title: 'E-Commerce Recommendation Engine',
      shortDescription: 'ML-powered product recommendation system',
      fullDescription: 'A sophisticated recommendation engine that uses collaborative filtering, content-based filtering, and deep learning to provide personalized product suggestions.',
      thumbnail: '/projects/ecommerce.jpg',
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'AI/ML',
      featured: false,
      repoUrl: 'https://github.com/yourusername/recommendations',
      date: '2023-09',
      keyFeatures: [
        'Hybrid recommendation algorithm',
        'Real-time personalization',
        'A/B testing framework',
        'Performance metrics dashboard',
        'Cold-start problem handling'
      ],
      systemDesign: {
        description: 'ML pipeline with real-time inference',
        components: [
          'Data Collection Service',
          'Feature Engineering Pipeline',
          'TensorFlow Model Training',
          'FastAPI Inference API',
          'PostgreSQL (User/Product data)',
          'Redis (Model cache)',
          'Airflow (Workflow orchestration)'
        ]
      }
    }
  ]
};
