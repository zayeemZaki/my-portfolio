import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Zayeem Zaki',
    title: 'Software Engineer & AI Enthusiast',
    headline: 'Building Scalable AI Solutions & Robust Systems',
    subheadline: 'Software Engineer & Founder. I build modern web applications and integrate LLMs into real-world products using TypeScript and Python.',
    email: 'contact@zayeemzaki.com',
    location: 'United States',
    profileImage: './profile.jpeg', 
    resumeUrl: '/Zaki, Zayeem.pdf',
    bio: "I'm a software engineer and the founder of Klaimiq. I've completed 5 engineering internships, starting out in Java and Spring Boot, but these days I build mostly with TypeScript, Python, React, and Next.js. Right now, my main focus is writing solid SQL and figuring out how to actually make AI models work inside real apps using FastAPI. At the end of the day, I just care about shipping code that doesn't break and keeping a public log of how I build things.",
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
      },
      {
        platform: 'Phone',
        url: 'tel:+15678017023',
        icon: '+1 567-801-7023'
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

    // Frameworks (Matches Resume)
    { name: 'Spring Boot', category: 'Frameworks' }, 
    { name: 'React', category: 'Frameworks' }, 
    { name: 'Next.js', category: 'Frameworks' }, 
    { name: 'Node.js', category: 'Frameworks' }, 
    { name: 'FAST API', category: 'Frameworks' }, 

    // AI & Data (Specific to your Projects)
    { name: 'OpenAI API', category: 'AI/ML' }, 
    { name: 'Groq', category: 'AI/ML' },
    { name: 'GraphRAG', category: 'AI/ML' }, 
    { name: 'Neo4j', category: 'AI/ML' }, 
    
    // Tools & Cloud (Matches Resume)
    { name: 'Docker', category: 'Tools' }, 
    { name: 'Git', category: 'Tools' }, 
    { name: 'AWS', category: 'Tools' }, 
  ],

  experiences: [
      {
        id: 'exp-6',
        role: 'Founding AI Software Engineer, Founder & CEO',
        company: 'KlaimIQ Startup',
        companyUrl: 'https://klaimiq.com',
        location: 'Remote',
        startDate: '2026-01',
        endDate: 'Present',
        current: true,
        bullets: [
          {
            text: 'Mapped end-to-end adjudication workflows with partner clinic to identify top denial patterns driving their 30% rejection rate.',
          },
          {
            text: 'Architected a HIPAA-compliant claims engine with CARC lookup + Claude AI to generate appeal drafts in under 30 seconds',
          },
          {
            text: 'Building AI-powered denial recovery, claim scrubbing, and eligibility verification to reduce clinic rejection rates by 80%.',
          },
          {
            text: 'Leading 0-to-1 full-stack development (Next.js/AWS Lambda/DynamoDB) with ModuleMD FHIR and Availity API integrations.',
          }
        ],
        technologies: ['TypeScript', 'Next.js', 'AWS', 'AI Agents', 'Healthcare Automation']
      },
      {
        id: 'exp-1',
        role: 'Full-Stack Software Engineering Intern',
        company: 'CCC Intelligent Solutions',
        companyUrl: 'https://cccis.com',
        location: 'Chicago, IL',
        startDate: '2025-05',
        endDate: '2025-12',
        current: false,
        bullets: [
          {
            text: 'Engineered a robust Spring Boot application that automated complex manual tasks, reducing a 2-week cycle to mere hours.',
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
        role: 'Front-End Software Engineer',
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
        role: 'Teaching Assistant - Object-Oriented Programming',
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
        role: 'Security Automation Intern',
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
  fullDescription: 'A social trading platform that combines real-time market data, AI-driven stock analysis, and community-driven investment insights. Built for retail investors who want actionable analysis without institutional overhead. Features a Global Analyst powered by Google Gemini 2.5 Flash that scores stocks across 20+ fundamental, technical, and institutional metrics, running autonomously 3x daily during market hours.',
  thumbnail: '/projects/stock-read.png',
  techStack: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Python',
    'FastAPI',
    'Google Gemini 2.5 Flash',
    'Supabase',
    'Redis',
    'yahoo-finance2',
    'Recharts',
    'Radix UI'
  ],
  category: 'Full-Stack',
  featured: true,
  type: 'web',
  liveUrl: 'https://stock-read.vercel.app/',
  repoUrl: 'https://github.com/zayeemZaki/StockRead',
  date: '2025-11',
  metrics: [
    { label: 'Background Services', value: '5' },
    { label: 'Analysis Metrics', value: '20+' },
    { label: 'Cache TTL', value: '5 min' }
  ],
  keyFeatures: [
    'Social investment feed with infinite scroll and real-time Supabase Realtime subscriptions',
    'AI Market Analyst scoring stocks 0–100 across fundamentals, technicals, news, and institutional consensus',
    'Live markets dashboard with WebSocket price updates and S&P 500 tracking',
    'Interactive candlestick charts with RSI, MACD, Bollinger Bands, and SMA overlays',
    'Global search with Cmd+K command palette across tickers and users',
    'User profiles with follower/following system, avatar uploads, and dark/light theme'
  ],
  systemDesign: {
    description: 'Hybrid architecture combining Next.js App Router (SSR + React Server Components) with client-side Supabase Realtime subscriptions and 5 autonomous Python background services. Services run as daemon threads managed by a central ServiceManager, handling AI analysis, market data, news aggregation, engagement, and database maintenance independently.',
    imageUrl: '/projects/stock-read_architecture.jpeg',
    components: [
      'Next.js Frontend (App Router + React Server Components)',
      'Supabase (PostgreSQL + Auth + Realtime + Storage)',
      'FastAPI Backend (Python daemon services)',
      'GlobalAnalyst Service (Gemini 2.5 Flash, 3× daily at 10 AM / 12 PM / 2:30 PM ET)',
      'MarketMaker Service (continuous S&P 500 price updates)',
      'NewsService (GoogleNews aggregation, hourly)',
      'MaintenanceService (DB cleanup) + ResponseBotService (auto-engagement)',
      'Redis (job queue + optional caching with 5-min TTL for prices, 1-hr for news)',
      'External APIs (yfinance, yahoo-finance2, GoogleNews, Google Gemini)'
    ]
  },
  technicalChallenges: {
    situation: 'Building a social trading platform requires coordinating real-time market data, multi-factor AI analysis, and live social interactions — all at low latency. The core challenge was integrating yfinance, GoogleNews, and Gemini 2.5 Flash into a coherent analysis pipeline while keeping the frontend responsive and the database consistent under concurrent writes.',
    task: 'Design a system where AI-generated stock analysis (scoring 20+ metrics across fundamentals, technicals, news sentiment, and institutional data) runs autonomously in the background without blocking user interactions or degrading feed performance.',
    action: 'Architected 5 autonomous Python services managed by a central ServiceManager running as daemon threads. The GlobalAnalyst uses a weighted scoring model (Institutional 40%, Technicals 25%, News 20%, Fundamentals 15%) and processes user-tracked stocks 3× daily during market hours. Redis provides a job queue and optional cache layer (5-min TTL for prices, 1-hr for news) with graceful degradation — post creation succeeds even if Redis is unavailable. Supabase Realtime drives live price subscriptions on the frontend.',
    result: 'A production-deployed platform on Vercel with real-time market updates, autonomous AI analysis running on schedule, and a responsive social feed. The system degrades gracefully under partial failures and separates background processing concerns cleanly from the user-facing Next.js app.'
  }
},

{
  id: 'project-10',
  title: 'Voice AI Interviewer',
  shortDescription: 'Real-time Voice-Based Technical Interview Prep',
  fullDescription: 'An AI-powered interview preparation platform that simulates real technical and behavioral interviews through voice conversation. Candidates speak naturally with an AI interviewer that adapts questions based on difficulty level and interview phase, then delivers detailed performance feedback at the end of each session.',
  thumbnail: '/projects/voice-ai.png',
  techStack: [
    'Next.js',
    'React',
    'TypeScript',
    'FastAPI',
    'Groq (Llama 3.1)',
    'Deepgram STT/TTS',
    'Tailwind CSS',
    'Framer Motion'
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
    'Voice-to-voice interviews using Deepgram STT (Nova-2) and TTS (Aura-Asteria)',
    'AI interviewer powered by Groq + Llama 3.1 for ultra-low latency responses',
    'Phase-based interview flow: Introduction → Technical → Behavioral → Wrap-up',
    'Adaptive difficulty levels: Easy, Medium, and Hard',
    'PDF resume parsing to personalize interview context',
    'AI-generated performance feedback with score, strengths, and improvement areas'
  ],
  systemDesign: {
    description: 'REST API architecture with a Next.js frontend and FastAPI backend. Audio is captured via the MediaRecorder API, base64-encoded, and sent to FastAPI endpoints that orchestrate Groq for inference and Deepgram for speech processing.',
    imageUrl: '/projects/voice-ai_architecture.jpeg',
    components: [
      'Next.js 15 + React 19 Frontend (Audio Capture & Playback)',
      'FastAPI Backend (REST Endpoints)',
      'Groq LPU + Llama 3.1 (AI Inference)',
      'Deepgram Nova-2 (Speech-to-Text)',
      'Deepgram Aura-Asteria (Text-to-Speech)',
      'PyPDF (Resume Parsing)'
    ]
  }
},

{
  id: 'project-9',
  title: 'Prompt Improver',
  shortDescription: 'AI-Powered Iterative Prompt Optimization',
  fullDescription: 'An intelligent system that automatically improves AI prompts through a data-driven feedback loop. It generates synthetic test cases, evaluates prompt performance against them, and uses Google Gemini to iteratively refine prompts, effectively acting as a CI/CD pipeline for prompt engineering. Tracks full version history with scores and diffs.',
  thumbnail: '/projects/prompt-improver.png',
  techStack: [
    'Python',
    'FastAPI',
    'Streamlit',
    'Google Gemini API',
    'SQLite',
    'Docker'
  ],
  category: 'AI/ML',
  featured: false,
  type: 'web',
  liveUrl: 'https://huggingface.co/spaces/zayeem11511/prompt-improver',
  repoUrl: 'https://github.com/zayeemZaki/prompt-improver',
  date: '2025-12',
  metrics: [
    { label: 'Optimization', value: 'Auto' },
    { label: 'Max Iterations', value: '10' }
  ],
  keyFeatures: [
    'AI-powered prompt optimization using Google Gemini',
    'Synthetic test case generation for automated evaluation',
    'Version history with scoring and prompt diff comparisons',
    'REST API (FastAPI) + Streamlit UI for full-stack usage',
    'Templated variable support for dynamic prompt inputs',
    'Persistent SQLite storage for all projects and results'
  ],
  systemDesign: {
    description: 'A feedback-loop architecture where a FastAPI backend orchestrates test generation, evaluation, and Gemini-powered optimization, while a Streamlit frontend provides real-time progress and diff visualization.',
    imageUrl: '/projects/prompt-improver_architecture.jpeg',
    components: [
      'Streamlit Frontend',
      'FastAPI Backend',
      'Google Gemini AI (optimizer & generator)',
      'SQLite Database (SQLAlchemy ORM)'
    ]
  }
},

{
  id: 'project-2',
  title: 'AI Second Brain',
  shortDescription: 'GraphRAG memory system powered by Neo4j & Google Gemini',
  fullDescription: 'A full-stack AI memory system that gives LLMs persistent, structured long-term memory using a Knowledge Graph. Unlike standard vector RAG, it maps typed entity relationships in Neo4j for relationship-aware retrieval. Features a multi-user sandbox with strict session-based data isolation and an interactive force-directed knowledge graph visualization.',
  thumbnail: '/projects/ai-memory.png',
  techStack: ['Neo4j', 'FastAPI', 'React', 'react-force-graph-2d', 'Python', 'Google Gemini'],
  category: 'AI/ML',
  featured: true,
  type: 'web',
  liveUrl: 'https://ai-memory-app.vercel.app/',
  repoUrl: 'https://github.com/zayeemZaki/ai-memory-app',
  date: '2025-11',
  metrics: [
    { label: 'LLM Calls Saved', value: '~40%' },
    { label: 'Graph Hops', value: '1–2' },
    { label: 'DB Indexes', value: '4' }
  ],
  keyFeatures: [
    'GraphRAG engine with typed entity relationships in Neo4j',
    'Session-based multi-user sandboxing with strict data isolation',
    'Interactive force-directed knowledge graph visualization',
    '2-stage intent classifier (regex fast-path + Gemini reasoning)',
    'Single-call query rewrite + keyword extraction (~40% latency reduction)',
    'Global vs. session node layers for verified vs. user-specific facts'
  ],
  systemDesign: {
    description: 'Layered graph architecture separating verified global facts from session-scoped user data, with deterministic Cypher query building for security',
    imageUrl: '/projects/ai-memory-architecture.png',
    components: [
      'Neo4j AuraDB (Knowledge Graph)',
      'FastAPI Backend (RAG Logic + Intent Classification)',
      'Google Gemini 2.5 Flash (LLM)',
      'React + react-force-graph-2d (Visualization)',
      'Session UUID Layer (Data Isolation)'
    ]
  },
  technicalChallenges: {
    situation: 'Standard vector RAG uses fuzzy semantic matching, which loses structured relationships between entities and leads to hallucinated or disconnected answers across sessions.',
    task: 'Build a retrieval system that understands typed entity relationships and maintains context across sessions, while preventing data leakage between users in a shared database.',
    action: 'Implemented a GraphRAG engine using Neo4j with normalized entity IDs and SCREAMING_SNAKE_CASE relationship types. Engineered UUID-based session isolation with parameterized Cypher queries built deterministically in Python (never by the LLM) to prevent injection. Optimized latency by combining query rewriting and keyword extraction into a single Gemini call.',
    result: 'Delivered relationship-aware retrieval with a secure multi-user environment, ~40% reduction in LLM call overhead, and a live interactive graph visualization that updates in real time as users add facts.'
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
    },
    {
  id: 'project-9',
  title: 'Pinkaura',
  shortDescription: 'Modern Pink Aura E-Commerce Platform',
  fullDescription: 'A full-stack e-commerce platform built around a "Pink Aura" aesthetic featuring glassmorphism, smooth animations, and a clean architecture. Supports product browsing with advanced filtering, a persistent shopping cart, checkout flow, and an admin panel. Built with atomic component design, business logic isolated in custom hooks, and a centralized design token system for zero hardcoding.',
  thumbnail: '/projects/pinkaura.png',
  techStack: [
    'React 18',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'Zustand',
    'Express',
    'Supabase',
    'Cloudinary'
  ],
  category: 'Full Stack',
  featured: false,
  type: 'web',
  liveUrl: 'https://pinkaura.vercel.app/',
  repoUrl: 'https://github.com/Pinkaurabym/Pinkaura',
  date: '2025-12',
  metrics: [
    { label: 'Architecture', value: 'Atomic' },
    { label: 'Responsive', value: 'Mobile-First' }
  ],
  keyFeatures: [
    'Clean atomic component hierarchy: Atoms → Molecules → Organisms → Pages',
    'Business logic fully extracted into custom hooks (useCart, useProducts, useFilters)',
    'Centralized design token system — no hardcoded colors or spacing',
    'Persistent cart synced to localStorage via Zustand',
    'Advanced product filtering: category, search, sort, and price range',
    'Admin panel for product and inventory management',
    'Image uploads via Cloudinary with Express backend',
    'Supabase for database and authentication'
  ],
  systemDesign: {
    description: 'A React SPA served by Vite with a clean atomic component architecture. An Express backend handles image uploads through Cloudinary and interacts with Supabase for persistent data. Zustand manages global cart state on the frontend.',
    components: [
      'React 18 Frontend (Vite)',
      'Express Backend (Node.js)',
      'Supabase (Database & Auth)',
      'Cloudinary (Image Storage)',
      'Zustand (Client State)',
      'Framer Motion (Animations)'
    ]
  }
}

  ],
};
