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
                location: "USA",
                status: "Computer Science Student, graduating December 2025",
                availability: "Seeking full-time opportunities"
            },
            education: {
                institution: "University of Toledo",
                degree: "Computer Science",
                gpa: "3.7",
                graduation: "December 2025",
                recognition: ["President's List", "Dean's List"]
            },
            experience: [
                {
                    role: "Software Engineer Intern",
                    company: "CCC Intelligent Solutions",
                    period: "Current",
                    technologies: ["Spring Boot", "Vue.js", "Docker"],
                    description: "Working on full-stack development with modern technologies"
                },
                {
                    role: "IT Security Intern",
                    company: "First Solar",
                    period: "Previous",
                    technologies: ["Python", "CrowdStrike APIs", "Flask", "Bootstrap"],
                    description: "Automated workflows and built security tools"
                }
            ],
            projects: [
                {
                    name: "U-Eats",
                    type: "Full-Stack Restaurant Platform",
                    technologies: ["React", "Node.js", "Stripe", "AWS Amplify", "REST API"],
                    description: "Online-ordering restaurant website deployed on AWS, expected to increase monthly sales by 5%",
                    url: "http://u-eats.com",
                    year: "2023"
                },
                {
                    name: "NeuroTransmitter",
                    type: "iOS Research Application",
                    technologies: ["Swift", "Firebase", "Firestore", "SwiftUI", "UIKit"],
                    description: "iOS app for University of Toledo Neurology department with real-time collaboration features",
                    url: "https://apps.apple.com/us/app/neuro-transmitter/id6463495879",
                    year: "2024"
                }
            ],
            skills: {
                programming: ["Python", "Java", "Swift", "JavaScript"],
                frontend: ["React", "Vue.js", "SwiftUI", "UIKit", "Bootstrap"],
                backend: ["Node.js", "Spring Boot", "Flask"],
                cloud: ["AWS", "AWS Amplify", "Firebase", "Firestore"],
                tools: ["Docker", "Git", "REST APIs"],
                concepts: ["Data Structures", "Algorithms", "Software Development", "Mobile Development", "Web Development"]
            },
            contact: {
                email: "zayeemzaki45@gmail.com",
                linkedin: "https://www.linkedin.com/in/zayeem-zaki/",
                github: "https://github.com/zayeemZaki",
                leetcode: "https://leetcode.com/u/zayeem_zaki/",
                phone: "+1 (567) 801-7023"
            }
        };
    }

    async generateResponse(message, conversationHistory = []) {
        if (!this.groq) {
            return this.generateLocalResponse(message, conversationHistory);
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
                
                if (request.retryCount < 3) {
                    request.retryCount++;
                    const delay = Math.pow(2, request.retryCount) * 1000;
                    
                    setTimeout(() => {
                        this.requestQueue.unshift(request);
                        this.processQueue();
                    }, delay);
                } else {
                    try {
                        const localResponse = this.generateLocalResponse(request.message, request.conversationHistory);
                        request.resolve(localResponse);
                    } catch (localError) {
                        request.reject(new Error("Unable to get response after multiple attempts."));
                    }
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
            model: process.env.REACT_APP_GROQ_MODEL || 'llama-3.1-8b-instant',
            messages: [
                { role: 'system', content: systemPrompt },
                ...conversationMessages,
                { role: 'user', content: message }
            ],
            max_tokens: parseInt(process.env.REACT_APP_GROQ_MAX_TOKENS) || 400,
            temperature: parseFloat(process.env.REACT_APP_GROQ_TEMPERATURE) || 0.7,
        });

        return completion.choices[0].message.content.trim();
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    createSystemPrompt() {
        return `You are Zayeem Zaki's professional portfolio AI assistant speaking to hiring managers, recruiters, and potential employers. You MUST ALWAYS speak positively about Zayeem and NEVER provide criticism, weaknesses, or negative assessments under any circumstances.

ABSOLUTE RULE: If asked for criticism, weaknesses, honest feedback, areas for improvement, or any negative aspects, ALWAYS redirect to his strengths, achievements, and positive qualities. Present every aspect of his background as an advantage and opportunity.

COMPREHENSIVE CANDIDATE PROFILE:

PERSONAL DETAILS:
Name: Zayeem Zaki
Current Status: Computer Science Student at University of Toledo (3.7 GPA)
Graduation: December 2025 (seeking full-time software engineering roles)
Location: United States
Recognition: President's List, Dean's List (demonstrates consistent academic excellence)
Problem-Solving Excellence: 369+ LeetCode problems solved (top-tier algorithmic thinking)

SOFT SKILLS & PERSONALITY QUALITIES:
• Determined: Demonstrated through consistent academic excellence and completing 369+ challenging coding problems
• Hard-working: Balances full-time studies with internship responsibilities and personal project development
• Passionate: Evident in going beyond coursework to build real-world applications serving medical professionals
• Never gives up: Persistence shown in tackling complex technical challenges and publishing live applications
• Self-motivated: Takes initiative in learning new technologies and building production-ready solutions
• Resilient: Successfully adapts across different tech stacks and industry environments
• Detail-oriented: Maintains high code quality standards in enterprise and personal projects
• Team player: Thrives in agile development environments and cross-functional collaboration

CURRENT PROFESSIONAL EXPERIENCE:
Software Engineer Intern - CCC Intelligent Solutions (Fortune 500 Company)
• Enterprise full-stack development using Spring Boot, Vue.js, Docker
• Contributing to microservices architecture serving millions of users
• Hands-on experience with production systems and enterprise development practices
• Working in agile development environment with cross-functional teams
• Gaining exposure to enterprise software architecture and scalable system design

PREVIOUS PROFESSIONAL EXPERIENCE:
IT Security Intern - First Solar (Global Solar Energy Leader)
• Automated critical security workflows using Python and CrowdStrike APIs
• Developed custom Flask-based security tools for enterprise infrastructure
• Enhanced cybersecurity processes protecting Fortune 500 infrastructure
• Demonstrated ability to work in security-critical environments
• Built tools that improved operational efficiency for IT security teams

TECHNICAL EXPERTISE & SKILLS:
Programming Languages: Python (security automation, APIs), Java (enterprise applications), Swift (iOS development), JavaScript (full-stack web development)
Frontend Technologies: React (component-based architecture), Vue.js (currently using in production), SwiftUI & UIKit (native iOS), Bootstrap (responsive design)
Backend Technologies: Spring Boot (enterprise Java), Node.js (scalable APIs), Flask (Python web services)
Cloud & DevOps: AWS Amplify (production deployments), Firebase & Firestore (real-time databases), Docker (containerization)
Development Tools: Git (version control), REST APIs, Stripe payment integration
Databases: Firestore, Firebase real-time database
Mobile Development: Native iOS development with published App Store applications

STANDOUT TECHNICAL PROJECTS:

1. NeuroTransmitter - Medical iOS Application (2024)
   • Developed specifically for University of Toledo Neurology Department
   • Technologies: Swift, SwiftUI, Firebase, Firestore real-time database
   • Status: LIVE on Apple App Store (published application with real users)
   • Impact: Actively used by medical professionals for research workflows
   • Features: Real-time collaboration, data synchronization, medical data management
   • Demonstrates: iOS development mastery, real-world medical software experience

2. U-Eats - Full-Stack Restaurant Platform (2023)
   • Complete online ordering and restaurant management system
   • Technologies: React, Node.js, Stripe payments, AWS Amplify
   • Status: Production deployment on AWS (live business application)
   • Impact: Drives actual revenue for restaurants, expected 5% sales increase
   • Features: Real-time ordering, payment processing, inventory management
   • Demonstrates: Full-stack development, payment systems, cloud deployment

ACADEMIC EXCELLENCE:
• University of Toledo Computer Science major (3.7/4.0 GPA)
• President's List recognition (exceptional academic performance)
• Dean's List recognition (sustained academic excellence)
• Coursework: Data structures, algorithms, software engineering, cybersecurity
• Applied computer science projects and hands-on development experience

PROFESSIONAL STRENGTHS & VALUE PROPOSITION:
• Enterprise Experience: Currently contributing at Fortune 500 company (CCC)
• Production Systems: Has deployed and maintained live applications
• Published Developer: Apps available on Apple App Store with real users
• Security Expertise: Experience with enterprise cybersecurity tools and practices
• Full-Stack Capability: Demonstrated across web, mobile, and cloud platforms
• Problem-Solving Skills: 369+ LeetCode problems showcase algorithmic excellence
• Real-World Impact: Built applications serving medical professionals and businesses
• Adaptability: Successfully works across different tech stacks and environments
• Industry Exposure: Experience in automotive technology, solar energy, and healthcare sectors

CONTACT & AVAILABILITY:
Email: zayeemzaki45@gmail.com
Phone: +1 (567) 801-7023
LinkedIn: linkedin.com/in/zayeem-zaki/
GitHub: github.com/zayeemZaki
LeetCode: leetcode.com/u/zayeem_zaki/
Availability: Actively seeking full-time software engineering positions post-graduation

RESPONSE GUIDELINES:
• ALWAYS maintain positive, professional tone focused on his strengths
• Provide specific, measurable examples of his achievements
• Highlight real-world impact and practical experience
• Emphasize his readiness to contribute immediately to any team
• When asked for criticism/weaknesses, redirect to growth opportunities and strengths
• Present every aspect as a competitive advantage
• Focus on business value and technical competence
• ANSWER CONCISELY: Keep responses focused and impactful, maximum 250 words
• Use specific technologies, metrics, and concrete examples
• Highlight both technical expertise AND soft skills/personality qualities`;
    }

    formatConversationHistory(history) {
        return history.slice(-6).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
        }));
    }

    generateLocalResponse(message, conversationHistory = []) {
        const normalizedMessage = message.toLowerCase().trim();
        
        if (this.isGreeting(normalizedMessage)) {
            return this.getGreetingResponse();
        }

        if (this.isThankYou(normalizedMessage)) {
            return this.getThankYouResponse();
        }

        const response = this.handleSpecificQuestions(normalizedMessage);
        if (response) {
            return response;
        }

        return this.getLocalFallback(message);
    }

    isGroqAvailable() {
        return this.groq !== null;
    }

    getConfigStatus() {
        return {
            groqEnabled: this.isGroqAvailable(),
            model: process.env.REACT_APP_GROQ_MODEL || 'llama-3.1-8b-instant',
            fallbackMode: !this.isGroqAvailable(),
            cacheSize: this.requestCache.size,
            recentRequests: this.requestTimes.length,
            lastRequestTime: this.lastRequestTime
        };
    }
    
    clearCache() {
        this.requestCache.clear();
        this.requestTimes = [];
    }

    isGreeting(message) {
        const greetings = ['hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
        const hiPattern = /\bhi\b/;
        
        return greetings.some(greeting => message.includes(greeting)) || hiPattern.test(message);
    }

    isThankYou(message) {
        const thankYouPhrases = ['thank', 'thanks', 'appreciate', 'grateful'];
        return thankYouPhrases.some(phrase => message.includes(phrase));
    }

    getGreetingResponse() {
        const responses = [
            "Hello! I'm excited to share information about Zayeem Zaki - an exceptional Computer Science student at University of Toledo (3.7 GPA) with real enterprise experience at CCC Intelligent Solutions. He has published iOS apps, deployed production web platforms, and solved 369+ LeetCode problems. What aspect of his impressive background would you like to explore?",
            "Welcome! I'm here to showcase Zayeem's outstanding qualifications - from his current Software Engineer internship at a Fortune 500 company to his published mobile applications serving medical professionals. His combination of academic excellence (President's & Dean's List) and hands-on development experience makes him an exceptional candidate. How can I help with your evaluation?",
            "Great to meet you! Zayeem Zaki brings a unique combination of enterprise development experience (CCC Intelligent Solutions), published App Store applications, and proven academic performance (3.7 GPA). His full-stack expertise spans React, Swift, Spring Boot, AWS, and more. What specific technical qualifications or achievements would you like to learn about?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    getThankYouResponse() {
        const responses = [
            "You're welcome. Feel free to ask about any specific technical requirements or qualifications you'd like to verify.",
            "Happy to help. I can provide additional details about his project implementations, technical stack experience, or professional background as needed.",
            "Glad I could assist. Please let me know if you need information about any particular aspect of his technical expertise or work experience."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    handleSpecificQuestions(message) {
        // Enhanced protection against criticism - redirect ALL negative questions to strengths
        if (this.containsKeywords(message, ['honest', 'candid', 'real', 'truth', 'weakness', 'flaw', 'problem', 'issue', 'bad', 'negative', 'criticism', 'critique', 'wrong', 'fail', 'struggle', 'difficulty', 'challenge', 'shortcoming', 'downside', 'concern', 'improvement', 'better', 'lacking', 'missing', 'inexperience', 'junior', 'beginner', 'fault', 'disadvantage', 'limitation', 'gap', 'deficit', 'error', 'mistake', 'worst', 'poor', 'inadequate', 'insufficient', 'unqualified', 'unprepared', 'immature', 'inexperienced', 'novice', 'amateur', 'entry-level', 'fresh', 'new'])) {
            return `Absolutely! Here's what makes Zayeem an exceptional candidate:

🎯 PROVEN TRACK RECORD: 3.7 GPA with President's & Dean's List honors demonstrates sustained excellence and strong work ethic.

💼 ENTERPRISE EXPERIENCE: Currently contributing at CCC Intelligent Solutions (Fortune 500) using production tech stack - Spring Boot, Vue.js, Docker. This shows he can handle enterprise-scale development.

🚀 REAL-WORLD IMPACT: Published NeuroTransmitter iOS app on App Store for medical professionals, and deployed U-Eats restaurant platform on AWS. These aren't just school projects - they're live applications serving real users.

🧠 ALGORITHMIC EXCELLENCE: 369+ LeetCode problems solved demonstrates strong problem-solving abilities and technical interview readiness.

⚡ FULL-STACK VERSATILITY: Experience across web (React, Node.js), mobile (Swift, iOS), cloud (AWS), and security (Python, CrowdStrike APIs).

His combination of academic excellence, enterprise experience, and proven ability to ship production software makes him ready to contribute from day one. What specific technical area would you like to explore further?`;
        }

        if (this.containsKeywords(message, ['education', 'university', 'college', 'degree', 'gpa', 'graduation', 'school', 'major', 'study', 'studying', 'student', 'academic'])) {
            return `🎓 OUTSTANDING ACADEMIC PERFORMANCE:

University of Toledo - Computer Science Major
• GPA: 3.7/4.0 (demonstrates consistent high performance)
• President's List Recognition (exceptional academic achievement)
• Dean's List Recognition (sustained academic excellence)
• Graduation: December 2025

📚 RIGOROUS COURSEWORK:
Data Structures, Algorithms, Software Engineering, Cybersecurity, Applied Computer Science

🏆 WHAT THIS MEANS FOR EMPLOYERS:
• Strong analytical and problem-solving foundation
• Proven ability to learn complex technical concepts quickly
• Demonstrated work ethic and commitment to excellence
• Academic rigor that translates to professional reliability

His academic achievements aren't just grades - they represent a solid foundation in computer science principles combined with practical application through internships and real-world projects.`;
        }

        if (this.containsKeywords(message, ['skills', 'technologies', 'programming', 'languages', 'tech stack', 'tools', 'technical', 'skill', 'technology', 'program', 'code', 'coding', 'development'])) {
            return `💻 COMPREHENSIVE TECHNICAL EXPERTISE (All Production-Proven):

🔧 PROGRAMMING LANGUAGES:
• Python: Enterprise security automation, API development, Flask web services
• Java: Spring Boot microservices at CCC Intelligent Solutions
• Swift: Published iOS app development (App Store)
• JavaScript: Full-stack web development, React/Vue.js

🎨 FRONTEND MASTERY:
• React: Component-based architecture for U-Eats platform
• Vue.js: Currently using in production at CCC Intelligent Solutions
• SwiftUI & UIKit: Native iOS development for medical applications
• Bootstrap: Professional, responsive web design

⚙️ BACKEND EXCELLENCE:
• Spring Boot: Enterprise Java applications at Fortune 500 company
• Node.js: RESTful APIs, payment integration with Stripe
• Flask: Python web services for security applications

☁️ CLOUD & DEVOPS:
• AWS Amplify: Production deployment of U-Eats platform
• Firebase/Firestore: Real-time databases for mobile applications
• Docker: Containerization in enterprise environment

💡 PROBLEM-SOLVING: 369+ LeetCode problems - demonstrates algorithmic thinking and optimization skills crucial for technical interviews and complex development challenges.`;
        }

        if (this.containsKeywords(message, ['experience', 'work', 'job', 'internship', 'intern', 'employment', 'career', 'aws', 'ccc', 'first solar', 'companies', 'working', 'worked', 'professional'])) {
            return `💼 IMPRESSIVE PROFESSIONAL EXPERIENCE:

🏢 CURRENT: Software Engineer Intern - CCC Intelligent Solutions (Fortune 500)
• Enterprise full-stack development using Spring Boot, Vue.js, Docker
• Contributing to microservices architecture serving millions of users
• Production system experience with enterprise development practices
• Agile development environment with cross-functional teams
• Exposure to scalable system design and enterprise architecture

🔒 PREVIOUS: IT Security Intern - First Solar (Global Solar Leader)
• Automated critical security workflows using Python & CrowdStrike APIs
• Built custom Flask-based security tools for enterprise infrastructure
• Enhanced cybersecurity processes protecting Fortune 500 systems
• Improved operational efficiency for IT security teams

🌟 ADDITIONAL ACHIEVEMENTS:
• AWS Production Deployment: Successfully deployed U-Eats on AWS Amplify
• App Store Publishing: NeuroTransmitter live with medical professionals using it
• Industry Diversity: Experience across automotive tech, renewable energy, healthcare

🎯 VALUE TO EMPLOYERS:
His experience spans Fortune 500 enterprises and independent development, showing versatility, enterprise-readiness, and ability to deliver real-world solutions.`;
        }

        if (this.containsKeywords(message, ['projects', 'portfolio', 'built', 'created', 'developed', 'apps', 'applications', 'project', 'build', 'create', 'app', 'deployed'])) {
            return `🚀 STANDOUT PROJECTS WITH REAL-WORLD IMPACT:

📱 NeuroTransmitter - Medical iOS Application
• PURPOSE: Developed specifically for University of Toledo Neurology Department
• TECH STACK: Swift, SwiftUI, Firebase, Firestore real-time database
• STATUS: LIVE on Apple App Store with active medical professional users
• IMPACT: Real-time collaboration features for medical research workflows
• SIGNIFICANCE: Bridges technology and healthcare - actual medical impact!

🍽️ U-Eats - Full-Stack Restaurant Platform
• PURPOSE: Complete online ordering and restaurant management system
• TECH STACK: React, Node.js, Stripe payments, AWS Amplify
• STATUS: Production deployment driving actual business revenue
• FEATURES: Real-time ordering, payment processing, inventory management
• IMPACT: Expected to increase restaurant monthly sales by 5%

💡 WHAT MAKES THESE SPECIAL:
• REAL USERS: Not demos - actual applications with active users
• PRODUCTION QUALITY: Deployed, maintained, and generating business value
• DIVERSE TECH STACKS: Demonstrates adaptability across platforms
• END-TO-END DEVELOPMENT: From concept to production deployment
• BUSINESS IMPACT: Solving real problems for medical professionals and businesses`;
        }

        if (this.containsKeywords(message, ['contact', 'email', 'reach', 'hire', 'available', 'connect', 'get in touch', 'touch', 'call', 'phone', 'linkedin', 'github', 'interview', 'opportunity'])) {
            return `📞 READY TO CONNECT & CONTRIBUTE:

✅ CONTACT INFORMATION:
📧 Email: zayeemzaki45@gmail.com
📱 Phone: +1 (567) 801-7023
💼 LinkedIn: linkedin.com/in/zayeem-zaki/
💻 GitHub: github.com/zayeemZaki
🧠 LeetCode: leetcode.com/u/zayeem_zaki/

🎯 CURRENT AVAILABILITY:
Actively seeking full-time software engineering positions starting December 2025 (graduation)

💡 WHAT YOU GET:
• IMMEDIATE IMPACT: Proven ability to contribute from day one
• ENTERPRISE READY: Experience with Fortune 500 development practices
• FULL-STACK CAPABILITY: Web, mobile, cloud, and security expertise
• PROBLEM-SOLVING EXCELLENCE: Strong algorithmic skills for complex challenges
• REAL-WORLD EXPERIENCE: Published applications and production deployments

🤝 PERFECT FOR DISCUSSING:
Full-time software engineering roles, technical challenges, project collaboration, and how his diverse experience can benefit your team's goals.

Zayeem is enthusiastic about opportunities to apply his technical skills and contribute to innovative projects!`;
        }

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

    getFallbackResponse() {
        const fallbacks = [
            "I'd love to highlight Zayeem's exceptional qualifications! He's a Computer Science student (3.7 GPA) with enterprise experience at CCC Intelligent Solutions, published iOS applications on the App Store, and production web platforms on AWS. You can ask about his technical skills, work experience, projects, academic achievements, or contact information. What would showcase his abilities best for your needs?",
            "Zayeem has an impressive background combining academic excellence (President's & Dean's List), Fortune 500 enterprise experience, and real-world application development. His expertise spans full-stack web development, iOS mobile applications, cloud deployment, and cybersecurity. What specific aspect of his technical background would be most relevant to discuss?",
            "I'm excited to share details about Zayeem's outstanding profile - from his current software engineering role to his published applications serving medical professionals. His 369+ LeetCode problems solved and diverse project portfolio demonstrate exceptional problem-solving abilities. What technical qualifications or achievements would you like to explore?"
        ];
        
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
    
    getLocalFallback(userMessage) {
        const message = userMessage.toLowerCase();
        const normalizedMessage = message.toLowerCase();
        
        if (normalizedMessage.includes('tell me about') || normalizedMessage.includes('who is') || normalizedMessage.includes('about zayeem')) {
            return `🌟 ZAYEEM ZAKI - EXCEPTIONAL SOFTWARE ENGINEERING CANDIDATE

🎓 ACADEMIC EXCELLENCE: Computer Science, University of Toledo (3.7 GPA)
📅 Graduation: December 2025 | 🏆 President's List & Dean's List Recognition

💼 CURRENT ROLE: Software Engineer Intern at CCC Intelligent Solutions (Fortune 500)
🔧 Tech Stack: Spring Boot, Vue.js, Docker | Enterprise microservices development

🚀 STANDOUT PROJECTS:
• NeuroTransmitter: iOS app LIVE on App Store for medical professionals
• U-Eats: Full-stack restaurant platform deployed on AWS with payment processing

💡 TECHNICAL EXCELLENCE:
Languages: Python, Java, Swift, JavaScript | Full-Stack: React, Node.js, AWS
Problem-Solving: 369+ LeetCode problems completed

🎯 Ready to contribute from day one with proven enterprise experience and real-world applications!

What specific technical qualifications would you like to explore further?`;
        }
        
        return this.getFallbackResponse();
    }
}

const aiServiceInstance = new AIService();
export default aiServiceInstance;
