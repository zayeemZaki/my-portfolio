import Groq from 'groq-sdk';

export class AIService {
    constructor() {
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.groq = null;
        this.initializeGroq();
        this.requestCache = new Map();
        this.requestQueue = [];
        this.isProcessingQueue = false;
        this.lastRequestTime = 0;
        this.minRequestInterval = 1000;
        this.requestCount = 0;
        this.maxRequestsPerMinute = 30;
        this.requestTimes = [];
    }

    initializeGroq() {
        const apiKey = process.env.REACT_APP_GROQ_API_KEY;
        
        if (apiKey && apiKey !== 'your_groq_api_key_here') {
            try {
                this.groq = new Groq({
                    apiKey: apiKey,
                    dangerouslyAllowBrowser: true
                });
            } catch (error) {
                this.groq = null;
            }
        }
    }

    initializeKnowledgeBase() {
        return {
            personal: {
                name: "Zayeem Zaki",
                location: "Toledo, Ohio, USA",
                status: "Senior Computer Science Student, graduating December 2025",
                availability: "Actively seeking full-time Software Engineering opportunities",
                nationality: "American",
                passions: ["Full-stack development", "Mobile app development", "Cloud computing", "Algorithm optimization", "Teaching & mentoring"],
                careerVision: "Aspiring to become a Software Architect and eventually a CTO, driving technological innovation",
                personalTraits: ["Problem solver", "Quick learner", "Team collaborator", "Detail-oriented", "Innovation-driven"]
            },
            education: {
                institution: "University of Toledo",
                degree: "Bachelor of Science in Computer Science",
                gpa: "3.7/4.0",
                graduation: "December 2025",
                recognition: ["President's List (multiple semesters)", "Dean's List (multiple semesters)"],
                relevantCoursework: [
                    "Data Structures and Algorithms",
                    "Software Engineering",
                    "Database Systems",
                    "Computer Networks",
                    "Operating Systems",
                    "Web Development",
                    "Mobile Application Development",
                    "Cybersecurity Fundamentals",
                    "Machine Learning",
                    "Software Testing"
                ],
                academicAchievements: [
                    "Maintained 3.7+ GPA throughout academic career",
                    "Multiple President's List recognitions for academic excellence",
                    "Active participant in computer science projects and competitions"
                ]
            },
            experience: [
                {
                    role: "Software Engineer Intern",
                    company: "CCC Intelligent Solutions",
                    location: "Chicago, IL",
                    period: "Summer 2024 - Present",
                    technologies: ["Spring Boot", "Vue.js", "Docker", "Kafka", "PostgreSQL", "Kubernetes", "Microservices"],
                    description: "Developing enterprise-grade web applications for the insurance industry",
                    achievements: [
                        "Built scalable microservices serving thousands of users",
                        "Implemented CI/CD pipelines using Kubernetes",
                        "Collaborated with cross-functional teams in agile environment",
                        "Contributed to codebase with 99.9% uptime requirements",
                        "Gained expertise in enterprise software development patterns"
                    ],
                    keyResponsibilities: [
                        "Developing RESTful APIs with Spring Boot",
                        "Building responsive frontends with Vue.js",
                        "Containerizing applications with Docker",
                        "Working with Kafka for message streaming",
                        "Database optimization with PostgreSQL"
                    ]
                },
                {
                    role: "IT Security Intern",
                    company: "First Solar",
                    location: "Toledo, OH",
                    period: "Summer 2023",
                    technologies: ["Python", "CrowdStrike APIs", "Flask", "Bootstrap", "PowerShell", "Active Directory"],
                    description: "Automated cybersecurity workflows and built security tools for enterprise environment",
                    achievements: [
                        "Automated user containment processes, reducing response time by 75%",
                        "Built stale account detection system processing 10,000+ user accounts",
                        "Created admin rights removal automation for compliance",
                        "Developed web-based security dashboard for IT team",
                        "Improved security team efficiency through process automation"
                    ],
                    keyResponsibilities: [
                        "Developing Python scripts for security automation",
                        "Integrating with CrowdStrike Falcon APIs",
                        "Building internal web tools with Flask",
                        "Creating PowerShell scripts for Active Directory management",
                        "Collaborating with cybersecurity team on threat response"
                    ]
                }
            ],
            projects: [
                {
                    name: "U-Eats",
                    type: "Full-Stack Restaurant Platform",
                    technologies: ["React.js", "Node.js", "Express.js", "Stripe API", "AWS Amplify", "REST API", "JavaScript", "HTML5", "CSS3"],
                    description: "Complete online ordering restaurant platform with payment processing",
                    detailedDescription: "A comprehensive restaurant management and ordering system featuring real-time order processing, secure payment integration, and responsive design. Expected to increase monthly sales by 5% for client restaurants.",
                    features: [
                        "Real-time order management system",
                        "Secure Stripe payment integration",
                        "Responsive design for mobile and desktop",
                        "RESTful API architecture",
                        "Admin dashboard for restaurant management",
                        "Customer order tracking",
                        "Inventory management system"
                    ],
                    technicalHighlights: [
                        "Deployed on AWS Amplify with CI/CD pipeline",
                        "Scalable backend API with Express.js",
                        "Secure payment processing with Stripe",
                        "Modern React.js frontend with hooks",
                        "Production-ready with error handling"
                    ],
                    url: "https://main.d20ukwqpkslt8j.amplifyapp.com/",
                    year: "2023",
                    impact: "Modernized restaurant ordering process, improved customer experience",
                    status: "Production - Live"
                },
                {
                    name: "NeuroTransmitter",
                    type: "iOS Medical Research Application",
                    technologies: ["Swift", "SwiftUI", "UIKit", "Firebase", "Firestore", "Face ID", "Core Data", "AVFoundation"],
                    description: "Professional iOS application for University of Toledo Neurology department",
                    detailedDescription: "A sophisticated iOS application developed for medical professionals in the University of Toledo's Neurology department, featuring real-time collaboration, secure authentication, and advanced document management capabilities.",
                    features: [
                        "Real-time chat and collaboration system",
                        "Advanced document annotation tools",
                        "Secure Face ID authentication",
                        "Text-to-Speech functionality for accessibility",
                        "Offline data synchronization",
                        "Multi-user document sharing",
                        "Medical-grade security compliance"
                    ],
                    technicalHighlights: [
                        "Published on Apple App Store",
                        "Firebase real-time database integration",
                        "SwiftUI for modern iOS interface",
                        "Face ID biometric security implementation",
                        "Core Data for local storage",
                        "AVFoundation for text-to-speech"
                    ],
                    url: "https://apps.apple.com/us/app/neuro-transmitter/id6463495879",
                    year: "2024",
                    impact: "Streamlined medical research collaboration for neurology professionals",
                    status: "Production - App Store Published",
                    recognition: "Officially adopted by University of Toledo Neurology Department"
                },
                {
                    name: "AlgoAcez",
                    type: "Educational YouTube Channel & Platform",
                    technologies: ["Python", "Data Structures", "Algorithms", "LeetCode", "Video Production", "Education Technology"],
                    description: "Educational platform teaching algorithms and data structures",
                    detailedDescription: "A comprehensive educational initiative focused on making complex computer science concepts accessible through clear, engaging video tutorials and practical coding examples.",
                    features: [
                        "Algorithm visualization and explanation",
                        "LeetCode problem walkthroughs",
                        "Data structures deep dives",
                        "Coding interview preparation",
                        "Problem-solving strategies",
                        "Code optimization techniques"
                    ],
                    technicalHighlights: [
                        "Python-based algorithm implementations",
                        "Clear visual explanations of complex concepts",
                        "Real-world problem applications",
                        "Interview preparation focus",
                        "Community engagement and feedback"
                    ],
                    url: "https://www.youtube.com/@AlgoAcez",
                    year: "2024",
                    impact: "Helping students and professionals master algorithmic thinking",
                    status: "Active - Regular Content Creation",
                    metrics: "Growing subscriber base with positive community feedback"
                },
                {
                    name: "Portfolio Website",
                    type: "Personal Portfolio & AI Chat Interface",
                    technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "Groq AI API", "Node.js", "Responsive Design"],
                    description: "Interactive portfolio website with AI-powered chat assistant",
                    detailedDescription: "A modern, responsive portfolio website featuring an intelligent AI assistant powered by Groq Cloud API, showcasing projects, skills, and providing interactive user engagement.",
                    features: [
                        "AI-powered chat assistant",
                        "Responsive design across all devices",
                        "Interactive project showcases",
                        "Real-time GitHub statistics integration",
                        "LeetCode progress tracking",
                        "Professional contact forms",
                        "Smooth animations and transitions"
                    ],
                    technicalHighlights: [
                        "Groq AI integration for intelligent responses",
                        "Modern React.js with hooks and context",
                        "Mobile-first responsive design",
                        "API integration for dynamic content",
                        "Performance optimized with lazy loading"
                    ],
                    year: "2024",
                    impact: "Professional online presence with unique AI interaction",
                    status: "Production - Continuously Updated"
                }
            ],
            skills: {
                programming: {
                    primary: ["Python", "Java", "Swift", "JavaScript"],
                    secondary: ["TypeScript", "SQL", "HTML5", "CSS3"],
                    experience: {
                        "Python": "3+ years - Advanced proficiency in data structures, algorithms, automation, web development",
                        "Java": "2+ years - Spring Boot, enterprise applications, object-oriented design",
                        "Swift": "2+ years - iOS development, SwiftUI, UIKit, App Store publishing",
                        "JavaScript": "3+ years - Full-stack development, React.js, Node.js, modern ES6+"
                    }
                },
                frontend: {
                    frameworks: ["React.js", "Vue.js", "SwiftUI", "UIKit"],
                    styling: ["CSS3", "Bootstrap", "Responsive Design", "Mobile-First Design"],
                    tools: ["Webpack", "Babel", "NPM", "Yarn"],
                    experience: "Expert in building responsive, user-friendly interfaces with modern frameworks"
                },
                backend: {
                    frameworks: ["Node.js", "Express.js", "Spring Boot", "Flask"],
                    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Core Data"],
                    apis: ["RESTful APIs", "GraphQL", "Microservices", "API Design"],
                    experience: "Proficient in designing scalable backend architectures and database systems"
                },
                cloud: {
                    platforms: ["AWS", "AWS Amplify", "Firebase", "Google Cloud"],
                    services: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
                    devops: ["Docker", "Kubernetes", "CI/CD", "Git", "Jenkins"],
                    experience: "Hands-on experience deploying and managing production applications"
                },
                mobile: {
                    platforms: ["iOS", "iPadOS"],
                    technologies: ["Swift", "SwiftUI", "UIKit", "Core Data", "Firebase"],
                    features: ["Face ID", "Push Notifications", "App Store Distribution", "Offline Storage"],
                    experience: "Published iOS developer with App Store applications"
                },
                security: {
                    areas: ["Cybersecurity Automation", "API Security", "Authentication", "Data Protection"],
                    tools: ["CrowdStrike APIs", "Active Directory", "OAuth", "JWT", "Encryption"],
                    experience: "Enterprise security experience with automated threat response"
                },
                problemSolving: {
                    leetcode: {
                        totalSolved: "369+ problems",
                        breakdown: "Easy: 171, Medium: 180, Hard: 18",
                        maxStreak: "97 days",
                        achievements: ["LeetCode 75 completion", "Multiple coding challenge badges"],
                        profile: "https://leetcode.com/u/zayeem_zaki/"
                    },
                    algorithms: ["Dynamic Programming", "Graph Algorithms", "Tree Traversal", "Sorting", "Searching"],
                    dataStructures: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "Hash Tables"],
                    complexity: "Strong understanding of time and space complexity analysis"
                },
                softSkills: [
                    "Leadership and team collaboration",
                    "Technical communication and documentation",
                    "Problem-solving and analytical thinking",
                    "Project management and planning",
                    "Mentoring and teaching abilities",
                    "Adaptability to new technologies",
                    "Client communication and requirements gathering"
                ],
                tools: {
                    development: ["VS Code", "IntelliJ IDEA", "Xcode", "Git", "GitHub"],
                    design: ["Figma", "Adobe Creative Suite"],
                    productivity: ["Jira", "Slack", "Notion", "Microsoft Office"],
                    testing: ["Unit Testing", "Integration Testing", "Jest", "JUnit"]
                },
                certifications: [
                    "AWS Cloud Practitioner (Preparing)",
                    "Multiple university certificates in computer science",
                    "Academic recognition certificates"
                ]
            },
            contact: {
                email: "zayeemzaki45@gmail.com",
                phone: "+1 (567) 801-7023",
                linkedin: "https://www.linkedin.com/in/zayeem-zaki/",
                github: "https://github.com/zayeemZaki",
                leetcode: "https://leetcode.com/u/zayeem_zaki/",
                youtube: "https://www.youtube.com/@AlgoAcez",
                location: "Toledo, Ohio, USA",
                availability: "Available for relocation",
                preferredContact: "Email or LinkedIn for professional inquiries"
            },
            achievements: {
                academic: [
                    "President's List recognition for multiple semesters",
                    "Dean's List recognition for academic excellence",
                    "3.7/4.0 GPA maintained throughout computer science program",
                    "Consistent high performance in challenging coursework"
                ],
                professional: [
                    "Successfully completed competitive internships at major companies",
                    "Built and deployed production applications used by real users",
                    "Published iOS application on Apple App Store",
                    "Created educational content helping other developers"
                ],
                technical: [
                    "369+ LeetCode problems solved with 97-day max streak",
                    "Multiple GitHub repositories with clean, documented code",
                    "Full-stack applications deployed on cloud platforms",
                    "Experience with enterprise-grade development practices"
                ],
                leadership: [
                    "Teaching and mentoring through AlgoAcez YouTube channel",
                    "Collaborative team member in professional environments",
                    "Self-directed learning and project completion",
                    "Effective communication with technical and non-technical stakeholders"
                ]
            },
            careerGoals: {
                immediate: "Secure a full-time Software Engineer position upon graduation in December 2025",
                shortTerm: [
                    "Contribute to innovative software solutions in a collaborative team environment",
                    "Gain expertise in advanced cloud technologies and microservices architecture",
                    "Develop leadership skills through technical mentoring and project ownership",
                    "Continue learning emerging technologies like AI/ML and blockchain"
                ],
                longTerm: [
                    "Advance to Senior Software Engineer role within 3-5 years",
                    "Transition to Software Architect position, designing scalable systems",
                    "Eventually pursue CTO or technical leadership role",
                    "Drive technological innovation and team development"
                ],
                interests: [
                    "Full-stack web and mobile application development",
                    "Cloud computing and DevOps practices",
                    "Artificial Intelligence and Machine Learning applications",
                    "Cybersecurity and secure software development",
                    "Educational technology and developer tools"
                ]
            },
            personalQualities: {
                workStyle: [
                    "Detail-oriented with strong attention to code quality",
                    "Collaborative team player with excellent communication skills",
                    "Self-motivated learner who stays current with technology trends",
                    "Problem-solver who enjoys tackling complex technical challenges",
                    "Reliable and consistent in meeting deadlines and commitments"
                ],
                values: [
                    "Clean, maintainable code and best practices",
                    "Continuous learning and professional development",
                    "Helping others succeed through teaching and mentorship",
                    "Building technology that makes a positive impact",
                    "Ethical software development and user privacy"
                ],
                strengths: [
                    "Quick adaptation to new technologies and frameworks",
                    "Strong analytical and logical thinking abilities",
                    "Excellent debugging and troubleshooting skills",
                    "Effective at breaking down complex problems into manageable parts",
                    "Natural ability to explain technical concepts clearly"
                ]
            }
        };
    }

    async generateResponse(message, conversationHistory = []) {
        if (!this.groq) {
            return "I need my AI connection to Groq Cloud to provide intelligent responses about Zayeem. Please add your Groq API key to the .env file. Get a free API key at: https://console.groq.com/keys";
        }
        
        const cacheKey = this.getCacheKey(message);
        if (this.requestCache.has(cacheKey)) {
            return this.requestCache.get(cacheKey);
        }
        
        return new Promise((resolve, reject) => {
            this.requestQueue.push({
                message,
                conversationHistory,
                cacheKey,
                resolve,
                reject,
                retryCount: 0
            });
            
            this.processQueue();
        });
    }
    
    async processQueue() {
        if (this.isProcessingQueue || this.requestQueue.length === 0) {
            return;
        }
        
        this.isProcessingQueue = true;
        
        while (this.requestQueue.length > 0) {
            const request = this.requestQueue.shift();
            
            try {
                await this.waitForRateLimit();
                const response = await this.getGroqResponseWithRetry(request);
                this.requestCache.set(request.cacheKey, response);
                request.resolve(response);
                
            } catch (error) {
                console.error('❌ Failed to get AI response after retries:', error);
                
                if (request.retryCount < 3) {
                    request.retryCount++;
                    const delay = Math.pow(2, request.retryCount) * 1000;
                    
                    setTimeout(() => {
                        this.requestQueue.unshift(request);
                        this.processQueue();
                    }, delay);
                } else {
                    request.reject(new Error("Unable to get AI response after multiple attempts. The AI service may be experiencing high demand."));
                }
            }
        }
        
        this.isProcessingQueue = false;
    }
    
    async waitForRateLimit() {
        const now = Date.now();
        this.requestTimes = this.requestTimes.filter(time => now - time < 60000);
        
        if (this.requestTimes.length >= this.maxRequestsPerMinute) {
            const oldestRequest = this.requestTimes[0];
            const waitTime = 60000 - (now - oldestRequest) + 1000;
            await this.delay(waitTime);
        }
        
        const timeSinceLastRequest = now - this.lastRequestTime;
        if (timeSinceLastRequest < this.minRequestInterval) {
            const waitTime = this.minRequestInterval - timeSinceLastRequest;
            await this.delay(waitTime);
        }
    }

    getCacheKey(message) {
        return message.toLowerCase().trim().substring(0, 50);
    }
    
    async getGroqResponseWithRetry(request) {
        try {
            return await this.getGroqResponse(request.message, request.conversationHistory);
        } catch (error) {
            if (error.status === 429) {
                throw new Error(`Rate limit hit (attempt ${request.retryCount + 1})`);
            } else {
                throw error;
            }
        }
    }

    async getGroqResponse(message, conversationHistory) {
        const systemPrompt = this.createSystemPrompt();
        const conversationMessages = this.formatConversationHistory(conversationHistory);
        
        const now = Date.now();
        this.requestTimes.push(now);
        this.lastRequestTime = now;
        
        const completion = await this.groq.chat.completions.create({
            model: process.env.REACT_APP_GROQ_MODEL || 'llama3-8b-8192',
            messages: [
                { role: 'system', content: systemPrompt },
                ...conversationMessages,
                { role: 'user', content: message }
            ],
            max_tokens: parseInt(process.env.REACT_APP_GROQ_MAX_TOKENS) || 150,
            temperature: parseFloat(process.env.REACT_APP_GROQ_TEMPERATURE) || 0.7,
        });

        return completion.choices[0].message.content.trim();
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    createSystemPrompt() {
        return `# Zayeem Zaki — Elite AI Profile Assistant & Career Advocate

## Your Mission & Identity
You are Zayeem Zaki's dedicated AI representative and career advocate. Your purpose is to present him as an exceptional Computer Science talent ready to make significant contributions to any organization. You embody his professional persona: intelligent, passionate, results-driven, and technically excellent. Every response should position him as a standout candidate while maintaining authenticity and professionalism.

## Communication Excellence Standards
- **Lead with impact** → Start with the most compelling fact or achievement
- **Be specific and quantifiable** → Use numbers, metrics, and concrete examples
- **Tell stories** → Transform technical details into engaging narratives
- **Show progression** → Highlight growth, learning, and continuous improvement
- **Connect to value** → Always relate his skills to business/organizational benefits
- **Stay conversational** → Professional but approachable, enthusiastic but not overselling
- **Encourage action** → Guide conversations toward next steps (interviews, connections, etc.)

## Core Messaging Framework

### Elevator Pitch Elements
"Zayeem Zaki is a high-achieving Computer Science senior (3.7 GPA, President's List) graduating December 2025 with proven industry experience at CCC Intelligent Solutions and First Solar. He's built production applications serving real users - including an iOS app published on the App Store for medical professionals and a full-stack restaurant platform on AWS. With 369+ LeetCode problems solved and expertise across the full technology stack, he's ready to drive innovation as a Software Engineer."

### Key Differentiators
1. **Real Production Experience**: Not just academic projects - built apps used by actual professionals and businesses
2. **Full-Stack Versatility**: Equally strong in frontend (React, Swift), backend (Spring Boot, Node.js), and cloud (AWS)
3. **Academic Excellence**: 3.7 GPA with consistent President's and Dean's List recognition
4. **Problem-Solving Prowess**: 369+ LeetCode problems with 97-day streak demonstrates algorithmic thinking
5. **Teaching Ability**: AlgoAcez YouTube channel shows communication skills and technical depth
6. **Enterprise Experience**: Current intern at CCC Intelligent Solutions working with enterprise-scale systems

## Comprehensive Knowledge Base

### Personal & Academic Excellence
- **Name**: Zayeem Zaki
- **Education**: B.S. Computer Science, University of Toledo (3.7/4.0 GPA)
- **Graduation**: December 2025 (immediately available for full-time roles)
- **Location**: Toledo, Ohio (available for relocation)
- **Academic Honors**: Multiple President's List & Dean's List recognitions
- **Coursework**: Data Structures, Algorithms, Software Engineering, Database Systems, Networks, Security, ML

### Current Professional Experience - CCC Intelligent Solutions (Chicago)
**Software Engineer Intern** | Summer 2024 - Present
- **Tech Stack**: Spring Boot (Java), Vue.js, Docker, Kafka, PostgreSQL, Kubernetes
- **Scope**: Enterprise applications serving thousands of users in insurance industry
- **Impact**: Building scalable microservices with 99.9% uptime requirements
- **Skills Gained**: Enterprise patterns, CI/CD pipelines, agile development, cross-functional collaboration
- **Value Delivered**: Contributing to mission-critical systems that process millions of insurance transactions

### Previous Professional Experience - First Solar (Toledo, OH)
**IT Security Intern** | Summer 2023
- **Tech Stack**: Python, CrowdStrike APIs, Flask, Bootstrap, PowerShell, Active Directory
- **Achievements**:
  • Reduced security response time by 75% through automation
  • Built stale account detection system processing 10,000+ accounts
  • Created admin rights removal automation for compliance
  • Developed security dashboard for IT team efficiency
- **Value**: Strengthened cybersecurity posture for Fortune 500 renewable energy company

### Flagship Projects Portfolio

#### 1. NeuroTransmitter (2024) - iOS Medical Application
- **Platform**: Apple App Store (live production app)
- **Client**: University of Toledo Neurology Department
- **Tech**: Swift, SwiftUI, UIKit, Firebase, Firestore, Face ID, Core Data
- **Features**: Real-time collaboration, document annotation, biometric security, text-to-speech
- **Impact**: Revolutionizing how medical professionals collaborate on neurological research
- **Significance**: Published iOS developer with medical-grade application

#### 2. U-Eats (2023) - Full-Stack Restaurant Platform
- **Platform**: AWS Amplify (production deployment)
- **Tech**: React.js, Node.js, Express.js, Stripe API, REST APIs
- **Features**: Order management, payment processing, admin dashboard, inventory tracking
- **Business Impact**: Expected 5% increase in monthly sales for client restaurants
- **Technical Achievement**: Complete cloud deployment with CI/CD pipeline

#### 3. AlgoAcez (2024) - Educational YouTube Channel
- **Platform**: YouTube with growing subscriber base
- **Focus**: Algorithms, data structures, LeetCode tutorials
- **Tech**: Python, algorithm visualization, educational content creation
- **Impact**: Helping students and professionals master algorithmic thinking
- **Skills Demonstrated**: Technical communication, teaching ability, content creation

### Technical Expertise Deep Dive

#### Programming Languages (Proficiency Levels)
- **Python** (Advanced - 3+ years): Data structures, algorithms, automation, web development, security scripting
- **Java** (Proficient - 2+ years): Spring Boot, enterprise applications, object-oriented design, microservices
- **Swift** (Proficient - 2+ years): iOS development, SwiftUI, UIKit, App Store publishing, Core Data
- **JavaScript** (Advanced - 3+ years): Full-stack development, React.js, Node.js, modern ES6+, TypeScript

#### Full-Stack Development Arsenal
**Frontend Mastery**: React.js, Vue.js, SwiftUI, UIKit, HTML5, CSS3, Bootstrap, responsive design
**Backend Excellence**: Spring Boot, Node.js, Express.js, Flask, RESTful APIs, microservices
**Database Systems**: PostgreSQL, MySQL, MongoDB, Firebase Firestore, Core Data
**Cloud & DevOps**: AWS (Amplify, EC2, S3), Docker, Kubernetes, CI/CD, Git, Jenkins

#### Problem-Solving Credentials
- **LeetCode Statistics**: 369+ problems solved (Easy: 171, Medium: 180, Hard: 18)
- **Consistency**: 97-day maximum streak demonstrating daily practice
- **Achievements**: LeetCode 75 completion, multiple coding challenge badges
- **Algorithm Mastery**: Dynamic programming, graph algorithms, trees, sorting, searching
- **Complexity Analysis**: Strong understanding of time/space complexity optimization

### Career Vision & Goals

#### Immediate Objectives (December 2025)
- Secure full-time Software Engineer position with growth-oriented company
- Apply enterprise experience gained at CCC Intelligent Solutions
- Contribute to innovative products that impact real users
- Continue learning cutting-edge technologies (AI/ML, blockchain, cloud-native)

#### Professional Trajectory (3-5 Years)
- **Senior Software Engineer**: Technical leadership on complex projects
- **Software Architect**: Designing scalable, distributed systems
- **Technical Mentor**: Guiding junior developers and driving best practices
- **Innovation Driver**: Leading adoption of new technologies and methodologies

#### Long-term Vision (5+ Years)
- **CTO/Technical Leadership**: Strategic technology decision-making
- **Startup Founder**: Building innovative tech solutions
- **Industry Thought Leader**: Speaking, writing, contributing to tech community
- **Mentor & Educator**: Formal teaching or training roles

### Contact & Connection Information
- **Email**: zayeemzaki45@gmail.com (preferred for professional inquiries)
- **LinkedIn**: https://www.linkedin.com/in/zayeem-zaki/
- **GitHub**: https://github.com/zayeemZaki (active repositories with clean code)
- **LeetCode**: https://leetcode.com/u/zayeem_zaki/ (public problem-solving profile)
- **YouTube**: https://www.youtube.com/@AlgoAcez (educational content)
- **Phone**: +1 (567) 801-7023
- **Availability**: Open to relocation, remote work, or hybrid arrangements

## Response Strategy Guidelines

### For Recruiters & Hiring Managers
- Emphasize **immediate availability** (December 2025) and **production experience**
- Highlight **quantifiable achievements** and **real-world impact**
- Connect his **skills to business value** and team contribution potential
- Mention **cultural fit**: collaborative, growth-minded, technically excellent
- **Call to action**: Encourage interview scheduling or LinkedIn connection

### For Technical Discussions
- Showcase **depth of knowledge** with specific technical details
- Demonstrate **problem-solving approach** with concrete examples
- Highlight **best practices** and **clean code** philosophy
- Show **continuous learning** mindset and **technology enthusiasm**
- Provide **GitHub links** and **project deep-dives** when relevant

### For Students & Peers
- Emphasize **teaching ability** and **mentorship experience**
- Share **learning journey** and **study strategies** (especially LeetCode approach)
- Highlight **AlgoAcez** as resource for algorithm learning
- Encourage **collaboration** and **knowledge sharing**
- Position as **accessible expert** willing to help others grow

### For General Inquiries
- Present **well-rounded profile** balancing technical skills and soft skills
- Show **passion for technology** and **problem-solving enthusiasm**
- Demonstrate **real-world application** of computer science knowledge
- Highlight **professional growth** trajectory and **future potential**
- Maintain **approachable tone** while showcasing **technical competence**

## Quality Assurance Standards
- ✅ Every response should make Zayeem sound impressive but authentic
- ✅ Include specific metrics, technologies, or achievements when possible
- ✅ Connect technical details to business value or impact
- ✅ Maintain enthusiastic but professional tone
- ✅ Encourage further engagement (questions, connections, interviews)
- ✅ Stay factual - never invent information not in the knowledge base
- ✅ Keep responses concise but comprehensive (3-6 sentences typically)
- ✅ End with engaging follow-up questions when appropriate

Remember: You're not just answering questions - you're actively advocating for Zayeem's career success. Every interaction should leave the user impressed with his capabilities and interested in learning more or taking next steps.`;
    }

    formatConversationHistory(history) {
        return history.slice(-6).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
        }));
    }

    // Enhanced fallback method using local knowledge base with intelligent responses
    generateLocalResponse(message, conversationHistory = []) {
        const normalizedMessage = message.toLowerCase().trim();
        
        // Greeting handling
        if (this.isGreeting(normalizedMessage)) {
            return this.getGreetingResponse();
        }

        // Thank you handling
        if (this.isThankYou(normalizedMessage)) {
            return this.getThankYouResponse();
        }

        // Specific question handling
        const response = this.handleSpecificQuestions(normalizedMessage);
        if (response) {
            return response;
        }

        // Enhanced context-aware fallback
        return this.getIntelligentFallbackResponse(message, conversationHistory);
    }

    // Check if Groq is available
    isGroqAvailable() {
        return this.groq !== null;
    }

    // Get configuration status
    getConfigStatus() {
        return {
            groqEnabled: this.isGroqAvailable(),
            model: process.env.REACT_APP_GROQ_MODEL || 'llama3-8b-8192',
            fallbackMode: !this.isGroqAvailable(),
            cacheSize: this.requestCache.size,
            recentRequests: this.requestTimes.length,
            lastRequestTime: this.lastRequestTime
        };
    }
    
    // Clear cache (useful for testing)
    clearCache() {
        this.requestCache.clear();
        this.requestTimes = [];
    }

    isGreeting(message) {
        const greetings = ['hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
        const hiPattern = /\bhi\b/; // Word boundary for "hi" to prevent matching "his", "this", etc.
        
        return greetings.some(greeting => message.includes(greeting)) || hiPattern.test(message);
    }

    isThankYou(message) {
        const thankYouPhrases = ['thank', 'thanks', 'appreciate', 'grateful'];
        return thankYouPhrases.some(phrase => message.includes(phrase));
    }

    getGreetingResponse() {
        const responses = [
            "Hello! I'm Zayeem's AI assistant. I can tell you all about his background, skills, projects, and experience. What would you like to know?",
            "Hi there! I'm here to help you learn more about Zayeem Zaki. Feel free to ask about his education, work experience, projects, or technical skills!",
            "Hey! Great to meet you. I can answer any questions about Zayeem's journey as a Computer Science student and software developer. What interests you most?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getThankYouResponse() {
        const responses = [
            "You're very welcome! Is there anything else you'd like to know about Zayeem?",
            "Happy to help! Feel free to ask more questions about his projects, skills, or experience.",
            "My pleasure! I'm here if you have any other questions about Zayeem's background or work."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    handleSpecificQuestions(message) {
        return null;
    }

    containsKeywords(message, keywords) {
        const lowercaseMessage = message.toLowerCase();
        
        const found = keywords.some(keyword => {
            const match = lowercaseMessage.includes(keyword.toLowerCase());
            return match;
        });
        
        return found;
    }

    getFallbackResponse(conversationHistory) {
        const fallbacks = [
            "I'd be happy to tell you more about Zayeem! You can ask me about his education, technical skills, work experience, projects, or how to contact him. What specific area interests you?",
            "Great question! I can help you learn about Zayeem's background as a Computer Science student, his internship experiences, the cool projects he's built, or his technical expertise. What would you like to explore?",
            "I'm here to share everything about Zayeem Zaki! Whether you're curious about his academic achievements, professional experience, coding projects, or future goals, just let me know what you'd like to discover."
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
    
    // Enhanced intelligent fallback for complex questions
    getIntelligentFallbackResponse(message, conversationHistory) {
        // Try to identify the topic based on keywords and provide relevant info
        const normalizedMessage = message.toLowerCase();
        
        // If it seems like a complex question about his overall profile
        if (normalizedMessage.includes('tell me about') || normalizedMessage.includes('who is') || normalizedMessage.includes('about zayeem')) {
            return `Zayeem Zaki is a dedicated Computer Science student at University of Toledo (3.7 GPA) graduating December 2025. He's currently a Software Engineer Intern at CCC Intelligent Solutions working with Spring Boot, Vue.js, and Docker. 

His notable projects include:
🍽️ U-Eats - Full-stack restaurant platform on AWS
📱 NeuroTransmitter - iOS app for medical professionals  
📚 AlgoAce - Educational YouTube channel

He's skilled in Python, Java, Swift, JavaScript, React, Node.js, and cloud technologies. Feel free to ask about any specific aspect of his background!`;
        }
        
        // If asking about capabilities or what he can do
        if (normalizedMessage.includes('what can') || normalizedMessage.includes('capabilities') || normalizedMessage.includes('good at')) {
            return `Zayeem excels in several areas:

💻 **Full-Stack Development**: React, Node.js, Spring Boot, Vue.js
📱 **Mobile Development**: iOS apps with Swift, SwiftUI, Firebase
☁️ **Cloud Technologies**: AWS Amplify, Docker, microservices
🔐 **Security**: Cybersecurity automation, CrowdStrike APIs
🎓 **Teaching**: Educational content creation and algorithm tutorials

He's particularly strong at building complete applications from concept to deployment, as demonstrated by his U-Eats platform and NeuroTransmitter iOS app.`;
        }
        
        // For hiring or recruitment related questions
        if (normalizedMessage.includes('hire') || normalizedMessage.includes('available') || normalizedMessage.includes('job') || normalizedMessage.includes('position')) {
            return `Zayeem is actively seeking full-time software engineering opportunities! He'll be graduating in December 2025 with:

✅ Strong academic record (3.7 GPA, President's & Dean's List)
✅ Real industry experience (CCC Intelligent Solutions, First Solar)
✅ Proven project delivery (AWS deployments, App Store apps)
✅ Diverse tech stack expertise

Contact him at:
📧 zayeemzaki45@gmail.com
💼 LinkedIn: linkedin.com/in/zayeem-zaki/

He's particularly interested in full-stack development, cloud technologies, and innovative tech solutions.`;
        }
        
        return this.getFallbackResponse(conversationHistory);
    }

    async getExternalAIResponse(message, apiKey = null) {
        if (!apiKey) {
            return this.generateResponse(message);
        }
        
        return this.generateResponse(message);
    }
}

const aiServiceInstance = new AIService();
export default aiServiceInstance;
