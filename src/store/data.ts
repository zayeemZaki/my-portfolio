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
    resumeUrl: '/Zaki, Zayeem.pdf',
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
    // Languages (Matches Resume + Portfolio Tech)
    { name: 'Java', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'SQL', category: 'Languages' },
    { name: 'Swift', category: 'Languages' },

    // Frameworks (Matches Resume)
    { name: 'Spring Boot', category: 'Frameworks' }, 
    { name: 'React', category: 'Frameworks' }, 
    { name: 'Vue.js', category: 'Frameworks' }, 
    { name: 'Next.js', category: 'Frameworks' }, 
    { name: 'Node.js', category: 'Frameworks' }, 
    { name: 'Flask', category: 'Frameworks' }, 
    { name: 'SwiftUI', category: 'Frameworks' }, 

    // AI & Data (Specific to your Projects)
    { name: 'OpenAI API', category: 'AI/ML' }, 
    { name: 'Groq', category: 'AI/ML' },
    { name: 'GraphRAG', category: 'AI/ML' }, 
    { name: 'Neo4j', category: 'AI/ML' }, 
    { name: 'Vector Search', category: 'AI/ML' }, 
    
    // Tools & Cloud (Matches Resume)
    { name: 'AWS', category: 'Tools' }, 
    { name: 'Docker', category: 'Tools' }, 
    { name: 'Kubernetes', category: 'Tools' }, 
    { name: 'Kafka', category: 'Tools' }, 
    { name: 'Firebase', category: 'Tools' }, 
    { name: 'Git', category: 'Tools' }, 
  ],

  experiences: [
      {
        id: 'exp-1',
        role: 'Software Engineering Intern',
        company: 'CCC Intelligent Solutions',
        companyUrl: 'https://cccis.com',
        location: 'Chicago, IL',
        startDate: '2025-05',
        endDate: '2025-12',
        current: false,
        bullets: [
          {
            text: 'Building a Spring Boot FIR application that reduces a 2-week manual process to 2 seconds through automation and scalable backend services.',
          },
          {
            text: 'Created a Node.js microservice for Puppeteer-based PDF generation and deployed it using Docker, improving form-rendering accuracy by 90% in a Spring Boot + Vue.js app.',
          },
          {
            text: 'Built 165+ responsive HTML/Vue.js forms with inline styles, reducing layout issues by 70% and optimizing for dynamic PDF generation.',
          },
          {
            text: 'Refactored a complex Kafka consumer to make the logic cleaner and more modular, resulting in easier debugging and faster feature development.',
          },
          {
            text: 'Developed reusable common-ui components for the flagship product, reducing front-end development effort by over 3x.',
          }
        ],
        technologies: ['Java', 'Spring Boot', 'Vue.js', 'Node.js', 'Docker', 'Kafka', 'Puppeteer', 'HTML']
      },
      {
        id: 'exp-2',
        role: 'Technical Solutions Architect (Volunteer)',
        company: 'Daffodil Studios',
        companyUrl: 'https://daffodilstudios.org', 
        location: 'Vienna, VA (Remote)',
        startDate: '2025-09',
        endDate: 'Present',
        current: true,
        bullets: [
          {
            text: 'Architected a full-stack donation platform using Firebase for backend logic and Stripe for payments, wrapping the frontend in Vue.js/Nuxt for a high-performance user experience.',
          },
          {
            text: 'Modernizing nonprofit websites to improve performance and enable secure donation workflows while maintaining legacy Wix and Squarespace sites for accessibility.',
          }
        ],
        technologies: ['Vue.js', 'Nuxt.js', 'Firebase', 'Stripe', 'JavaScript']
      },
      {
        id: 'exp-3',
        role: 'Peer Mentor',
        company: 'University of Toledo',
        companyUrl: 'https://www.utoledo.edu',
        location: 'Toledo, OH',
        startDate: '2025-01',
        endDate: '2025-05',
        current: false,
        bullets: [
          {
            text: 'Mentored 30+ students in Python and Object-Oriented Programming (OOP), helping them debug complex code and successfully complete course assignments.',
          },
          {
            text: 'Provided constructive feedback on projects and fostered problem-solving skills to support student success in foundational coding concepts.',
          }
        ],
        technologies: ['Python', 'OOP', 'Mentorship']
      },
      {
        id: 'exp-4',
        role: 'IT Security Intern',
        company: 'First Solar',
        companyUrl: 'https://www.firstsolar.com',
        location: 'Perrysburg, OH',
        startDate: '2024-01',
        endDate: '2024-12',
        current: false,
        bullets: [
          {
            text: 'Engineered a Flask-based automation service using Python to orchestrate CrowdStrike security workflows, reducing manual incident response time by 30%.',
          },
          {
            text: 'Built Python scripts to detect stale accounts, automate admin rights removal, and streamline Falcon Containment for multiple hosts.',
          },
          {
            text: 'Developed On-Demand Scan (ODS) automation scripts to proactively detect and remediate vulnerabilities across systems.',
          },
          {
            text: 'Created targeted search scripts to locate entities using specific filters, aiding in precise security investigations and audits.',
          }
        ],
        technologies: ['Python', 'Flask', 'CrowdStrike API', 'Automation', 'Excel', 'Security']
      },
      {
        id: 'exp-5',
        role: 'Information Technology Technician',
        company: 'University of Toledo',
        companyUrl: 'https://www.utoledo.edu',
        location: 'Toledo, OH',
        startDate: '2021-09',
        endDate: '2025-12',
        current: false,
        bullets: [
          {
            text: 'Resolved 100+ software and hardware issues with an average resolution time under 24 hours, including hardware replacements and malware removal.',
          },
          {
            text: 'Diagnosed and debugged staff and lab desktops using PXE boot, archive directory management, and system re-imaging.',
          },
          {
            text: 'Enhanced the efficiency and reliability of the university IT infrastructure, improving system performance and user satisfaction.',
          }
        ],
        technologies: ['Hardware Troubleshooting', 'Networking', 'System Imaging', 'Technical Support']
      }
    ],

  projects: [
    {
      id: 'project-8',
      title: 'Stock Read',
      shortDescription: 'AI-Powered Social Investment Intelligence Platform',
      fullDescription: 'A next-generation social trading platform that combines real-time market data, institutional-grade AI analysis, and community-driven investment insights. Built for retail investors who demand professional-quality analysis without the institutional price tag. Features an AI-powered Global Analyst that provides objective market reality checks using real-time data from Wall Street\'s institutional sources.',
      thumbnail: '/projects/stock-read.png',
      techStack: [
        'Next.js 16',
        'TypeScript',
        'Tailwind CSS',
        'Python',
        'FastAPI',
        'Google Gemini',
        'Supabase',
        'Redis',
        'yfinance',
        'Recharts'
      ],
      category: 'Full-Stack',
      featured: true,
      type: 'web',
      liveUrl: 'https://stock-read.vercel.app/',
      repoUrl: 'https://github.com/zayeemZaki/StockRead',
      date: '2025-11',
      metrics: [
        { label: 'Latency', value: '<200ms' },
        { label: 'Users', value: '10+' },
        { label: 'Accuracy', value: '94%' }
      ],
      keyFeatures: [
        'Social investment platform with real-time feed and infinite scroll',
        'AI Market Analyst with sentiment scoring (0-100) and risk classification',
        'Live market dashboard with WebSocket price updates and technical indicators',
        'Advanced stock analysis with interactive candlestick charts and fundamental metrics',
        'Global search with smart command palette (Cmd+K)',
        'User profiles with follower/following system and dark/light theme support'
      ],
      systemDesign: {
        description: 'Hybrid architecture combining server-side rendering (SSR) with client-side interactivity and background AI services. Features 5 autonomous background services for market analysis, real-time updates, and data maintenance.',
        imageUrl: '/projects/stock-read_architecture.jpeg',
        components: [
          'Next.js Frontend (App Router with React Server Components)',
          'Supabase (PostgreSQL + Auth + Realtime + Storage)',
          'FastAPI Backend Services (Python)',
          'Global Analyst Service (AI Batch Processing)',
          'Market Maker Service (Real-time Price Updates)',
          'Redis Cache Layer',
          'External APIs (yfinance, Google News, Google Gemini)'
        ]
      },
      technicalChallenges: {
        situation: 'Building a social trading platform requires real-time market data, complex AI analysis, and seamless user experience while maintaining performance and scalability. The challenge was integrating multiple data sources, processing AI analysis at scale, and providing instant feedback to users.',
        task: 'Create a platform that provides institutional-grade analysis to retail investors, combining social features with real-time market data and AI-powered insights, all while maintaining low latency and high availability.',
        action: 'Architected a hybrid system with Next.js SSR for performance, Supabase Realtime for live updates, and Python background services for AI processing. Implemented Redis caching for market data (60s TTL) and technical analysis (5min TTL). Built 5 autonomous background services that run independently, with the Global Analyst processing user-tracked stocks 3x daily during market hours.',
        result: 'Delivered a production-ready platform with real-time market updates, AI-powered analysis, and a seamless social experience. The system handles high traffic with optimized caching and background processing, providing users with professional-quality investment insights.'
      }
    },
    {
      id: 'project-10',
      title: 'Voice AI Interviewer',
      shortDescription: 'Real-time Voice-Based Technical Interview Prep',
      fullDescription: 'A real-time voice-interactive mock interview platform designed to simulate actual technical interviews. It uses ultra-low latency speech processing to conduct natural, conversational interviews, providing instant feedback on answers, tone, and technical accuracy.',
      thumbnail: '/projects/voice-ai.png',
      techStack: [
        'Next.js',
        'FastAPI',
        'Groq LPU',
        'WebSockets',
        'React',
        'Speech-to-Text API'
      ],
      category: 'AI/ML',
      featured: true,
      type: 'web',
      liveUrl: 'https://bot-interviewer.vercel.app/', 
      repoUrl: 'https://github.com/zayeemZaki/Bot-interviewer',
      date: '2025-12',
      metrics: [
        { label: 'Latency', value: '<500ms' },
        { label: 'Interviews', value: 'Beta' }
      ],
      keyFeatures: [
        'Real-time conversational AI using Groq for ultra-low latency',
        'Voice-to-Voice interaction (Speech-to-Text & Text-to-Speech)',
        'Instant feedback on technical accuracy and communication style',
        'Customizable interview topics (System Design, DSA, Behavioral)'
      ],
      systemDesign: {
        description: 'Event-driven architecture optimized for voice latency using WebSockets.',
        imageUrl: '/projects/voice-ai_architecture.jpeg',
        components: [
          'Next.js Frontend (Audio Capture)',
          'FastAPI WebSocket Server',
          'Groq LPU (Inference)',
          'TTS/STT Services'
        ]
      }
    },
    {
      id: 'project-9',
      title: 'Prompt Improver',
      shortDescription: 'Automated CI/CD for LLM Prompts',
      fullDescription: 'An automated prompt engineering system designed to act as a "CI/CD for prompts." It iteratively tests, evaluates, and refines LLM prompts to ensure consistent output quality and performance before deployment, effectively solving the "blank page" problem for prompt engineering.',
      thumbnail: '/projects/prompt-improver.png',
      techStack: [
        'Next.js',
        'TypeScript',
        'Python',
        'OpenAI API',
        'Tailwind CSS'
      ], 
      category: 'AI/ML',
      featured: false,
      type: 'web',
      liveUrl: 'https://huggingface.co/spaces/zayeem11511/prompt-improver',
      repoUrl: 'https://github.com/zayeemZaki/prompt-improver',
      date: '2025-12',
      metrics: [
        { label: 'Optimization', value: 'Auto' },
        { label: 'Iterations', value: '<5s' }
      ],
      keyFeatures: [
        'Automated prompt testing and scoring against defined criteria',
        'Version control for prompt iterations (CI/CD workflow)',
        'Comparative analysis of LLM outputs for quality assurance',
        'Iterative refinement engine to maximize prompt efficacy'
      ],
      systemDesign: {
        description: 'A feedback-loop architecture that separates prompt generation from evaluation, ensuring unbiased optimization.',
        imageUrl: '/projects/prompt-improver_architecture.jpeg',
        components: [
          'Next.js Frontend',
          'Python Evaluation Service',
          'LLM Integration (OpenAI/Groq)',
          'Prompt Versioning DB'
        ]
      }
    },
    {
      id: 'project-2',
      title: 'AI Memory App',
      shortDescription: 'GraphRAG engine with Neo4j & Vector Search',
      fullDescription: 'A next-generation AI memory system that outperforms standard vector search by mapping entity relationships using GraphRAG. It features a multi-user sandbox with strict data isolation and a real-time "brain" visualization dashboard.',
      thumbnail: '/projects/ai-memory.png',
      techStack: ['Neo4j', 'GraphRAG', 'React', 'D3.js', 'Python', 'Vector Search'],
      category: 'AI/ML',
      featured: true,
      type: 'web',
      liveUrl: 'https://ai-memory-app.vercel.app/',
      repoUrl: 'https://github.com/zayeemZaki/ai-memory-app',
      date: '2025-11',
      metrics: [
        { label: 'Nodes', value: '100+' },
        { label: 'Query Time', value: '<18ms' },
        { label: 'Accuracy', value: '98%' }
      ],
      keyFeatures: [
        'GraphRAG engine mapping entity relationships',
        'Multi-user sandbox with strict data isolation',
        'Real-time "brain" visualization using React + D3.js',
        'Hybrid search (Vector + Graph) implementation'
      ],
      systemDesign: {
        description: 'Graph-based architecture ensuring data privacy and context retention',
        imageUrl: '/projects/ai-memory-architecture.png',
        components: [
          'Graph Database (Neo4j)',
          'Vector Store',
          'React Frontend (Visualization)',
          'Python Backend (RAG Logic)',
          'Custom Session Logic (Data Isolation)'
        ]
      },
      technicalChallenges: {
        situation: 'Standard vector search struggles to understand complex relationships between entities, leading to hallucinated or disconnected answers.',
        task: 'Build a retrieval system that understands context and relationships while maintaining strict user privacy in a shared database.',
        action: 'Implemented a GraphRAG engine using Neo4j to map relationships and engineered custom session logic to enforce strict data isolation for multiple users.',
        result: 'Outperformed standard vector search by providing relationship-aware context and enabled a secure multi-user environment.'
      }
    },
    {
      id: 'project-4',
      title: 'Food-Sharing Logistics Platform',
      shortDescription: 'Centralized donation workflow using React Context',
      fullDescription: 'A role-based logistics platform connecting volunteers and shelters. It eliminates manual coordination by centralizing the donation workflow.',
      thumbnail: '/projects/sharebite.jpeg',
      techStack: ['React', 'Context API', 'JavaScript', 'CSS'],
      category: 'Full-Stack',
      featured: false,
      type: 'mobile',
      repoUrl: 'https://github.com/zayeemZaki/ShareBite',
      date: '2025-7',
      keyFeatures: [
        'Role-based logistics management',
        'Centralized donation workflow',
        'Real-time coordination elimination'
      ]
    },
    {
      id: 'project-5',
      title: 'Neuro-Transmitter',
      shortDescription: 'Secure Zero-Trust iOS App',
      fullDescription: 'A responsive native interface built with SwiftUI featuring a zero-trust authentication environment where new accounts require explicit admin verification.',
      thumbnail: '/projects/neurotransmitter.png', 
      techStack: ['SwiftUI', 'Firebase Auth', 'Firestore', 'Cloud Messaging'],
      category: 'Mobile',
      featured: false,
      type: 'mobile',
      repoUrl: 'https://github.com/zayeemZaki/NeuroTransmitter',
      date: '2023-08',
      keyFeatures: [
        'Zero-trust authentication environment',
        'Explicit administrator verification logic',
        'Real-time push alerts via Cloud Messaging',
        'Automatic system-wide dark-mode adaptation'
      ]
    },
    {
      id: 'project-6',
      title: 'Production Restaurant Website',
      shortDescription: 'High-availability web app with automated payments',
      fullDescription: 'A production-grade restaurant application hosted on AWS Amplify with 99% uptime. Features a fully automated checkout flow using Stripe and Node.js.',
      thumbnail: '/projects/project5.png', 
      liveUrl: 'https://main.d20ukwqpkslt8j.amplifyapp.com/',
      techStack: ['AWS Amplify', 'Node.js', 'Stripe', 'React'],
      category: 'Full-Stack',
      featured: false,
      type: 'web',
      repoUrl: 'https://github.com/zayeemZaki/U-Eats',
      date: '2023-12',
      keyFeatures: [
        '99% uptime during active business hours',
        'Custom payment pipeline integration (Stripe)',
        'Automated checkout flow',
        'AWS Amplify deployment'
      ]
    },
    {
      id: 'project-7',
      title: 'ArtisanVale',
      shortDescription: 'E-commerce Survey Platform',
      fullDescription: 'An  e-commerce survey platform for artisan products.',
      thumbnail: '/projects/artisan.jpg',
      techStack: ['Vue'], 
      category: 'Frontend',
      featured: false,
      type: 'mobile',
      liveUrl: 'https://artisanvale.in/',
      repoUrl: 'https://github.com/zayeemZaki/ArtisanVale',
      date: '2024', 
      keyFeatures: [
        'Smooth, responsive UI with Vue.js',
        'Survey forms for user feedback',
      ]
    }
  ],
};
