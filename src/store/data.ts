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
        endDate: 'Present',
        current: true,
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
        endDate: 'Present',
        current: true,
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
      id: 'project-1',
      title: 'AI Memory App',
      shortDescription: 'GraphRAG engine with Neo4j & Vector Search',
      fullDescription: 'A next-generation AI memory system that outperforms standard vector search by mapping entity relationships using GraphRAG. It features a multi-user sandbox with strict data isolation and a real-time "brain" visualization dashboard.',
      thumbnail: '/projects/project1.png',
      techStack: ['Neo4j', 'GraphRAG', 'React', 'D3.js', 'Python', 'Vector Search'],
      category: 'AI/ML',
      featured: true,
      liveUrl: 'https://ai-memory-app.vercel.app/',
      repoUrl: 'https://github.com/zayeemZaki/ai-memory-app',
      date: '2025-11',
      keyFeatures: [
        'GraphRAG engine mapping entity relationships',
        'Multi-user sandbox with strict data isolation',
        'Real-time "brain" visualization using React + D3.js',
        'Hybrid search (Vector + Graph) implementation'
      ],
      systemDesign: {
        description: 'Graph-based architecture ensuring data privacy and context retention',
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
      id: 'project-2',
      title: 'AI Resume Analyzer',
      shortDescription: 'LLM-powered Parser & Ranker',
      fullDescription: 'An intelligent tool using LLM-API integration to parse, score, and rank resumes against job descriptions. It utilizes advanced prompt chaining to extract key skills and generate actionable optimization feedback.',
      thumbnail: '', 
      techStack: ['Python', 'LLM API', 'Prompt Engineering', 'React'],
      category: 'AI/ML',
      featured: true,
      repoUrl: 'https://github.com/zayeemZaki/AI-resume-analyzer',
      date: '2025-04',
      keyFeatures: [
        `Automatic parsing, scoring, and ranking of resumes against job descriptions`,
        'Multi-step prompt chains for deep analysis',
        'Gap analysis and skill extraction',
        'Generation of actionable optimization feedback'
      ],
      systemDesign: {
        description: 'Pipeline-based LLM processing architecture',
        components: [
          'Input Parser (PDF/Text)',
          'Prompt Chain Orchestrator',
          'LLM Inference Engine',
          'Scoring Algorithm',
          'Feedback Generator'
        ]
      },
      technicalChallenges: {
        situation: 'Generic LLM prompts often produced vague advice or hallucinated skills that were not present in the resume.',
        task: 'Create a system that provides concrete, evidence-based feedback and accurate scoring.',
        action: 'Engineered a multi-step prompt-chain to guide the model specifically in extracting key skills and identifying experience gaps against the job description.',
        result: 'Achieved consistent, actionable, and in-depth optimization feedback for users.'
      }
    },
    {
      id: 'project-3',
      title: 'Food-Sharing Logistics Platform',
      shortDescription: 'Centralized donation workflow using React Context',
      fullDescription: 'A role-based logistics platform connecting volunteers and shelters. It eliminates manual coordination by centralizing the donation workflow.',
      thumbnail: '',
      techStack: ['React', 'Context API', 'JavaScript', 'CSS'],
      category: 'Full-Stack',
      featured: false,
      repoUrl: 'https://github.com/zayeemZaki/ShareBite',
      date: '2025-11',
      keyFeatures: [
        'Role-based logistics management',
        'Centralized donation workflow',
        'Real-time coordination elimination'
      ],
      systemDesign: {
        description: 'Frontend-focused state management architecture',
        components: [
          'React Frontend',
          'Context API (State Management)',
          'Role-Based Access Control (RBAC)',
          'Logistics Scheduler'
        ]
      }
    },
    {
      id: 'project-4',
      title: 'Neuro-Transmitter',
      shortDescription: 'Secure Zero-Trust iOS App',
      fullDescription: 'A responsive native interface built with SwiftUI featuring a zero-trust authentication environment where new accounts require explicit admin verification.',
      thumbnail: '/projects/project4.jpeg', // Placeholder
      techStack: ['SwiftUI', 'Firebase Auth', 'Firestore', 'Cloud Messaging'],
      liveUrl: 'https://apps.apple.com/us/app/neuro-transmitter/id6463495879',
      category: 'Mobile',
      featured: false,
      repoUrl: 'https://github.com/zayeemZaki/NeuroTransmitter',
      date: '2023-08',
      keyFeatures: [
        'Zero-trust authentication environment',
        'Explicit administrator verification logic',
        'Real-time push alerts via Cloud Messaging',
        'Automatic system-wide dark-mode adaptation'
      ],
      systemDesign: {
        description: 'Serverless mobile architecture',
        components: [
          'SwiftUI Native Client',
          'Firebase Authentication',
          'Firestore Security Rules',
          'Firebase Cloud Messaging'
        ]
      }
    },
    {
      id: 'project-5',
      title: 'Production Restaurant Website',
      shortDescription: 'High-availability web app with automated payments',
      fullDescription: 'A production-grade restaurant application hosted on AWS Amplify with 99% uptime. Features a fully automated checkout flow using Stripe and Node.js.',
      thumbnail: '/projects/project5.jpg', 
      liveUrl: 'https://main.d20ukwqpkslt8j.amplifyapp.com/',
      techStack: ['AWS Amplify', 'Node.js', 'Stripe', 'React'],
      category: 'Full-Stack',
      featured: false,
      repoUrl: 'https://github.com/zayeemZaki/U-Eats',
      date: '2023-12',
      keyFeatures: [
        '99% uptime during active business hours',
        'Custom payment pipeline integration (Stripe)',
        'Automated checkout flow',
        'AWS Amplify deployment'
      ],
      systemDesign: {
        description: 'Cloud-native serverless deployment',
        components: [
          'AWS Amplify (Hosting/CI/CD)',
          'Node.js Backend',
          'Stripe Payment Gateway',
          'React Frontend'
        ]
      }
    },
    {
      id: 'project-6',
      title: 'ArtisanVale',
      shortDescription: 'E-commerce Survey Platform',
      fullDescription: 'An  e-commerce survey platform for artisan products.',
      thumbnail: '/projects/artisan.jpg',
      techStack: ['Vue'], // Assumed stack based on common Java projects, update if specific
      category: 'Frontend',
      featured: false,
      liveUrl: 'https://artisanvale.in/',
      repoUrl: 'https://github.com/zayeemZaki/ArtisanVale',
      date: '2023', // Approximate
      keyFeatures: [
        'User authentication and profile management',
        'Product catalog and shopping cart',
        'Order management system'
      ],
      systemDesign: {
        description: 'Monolithic architecture with REST APIs',
        components: [
          'Frontend Client',
          'REST API Backend'
        ]
      }
    }
  ],
};
