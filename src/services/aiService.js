// AI Service for enhanced chat functionality with Groq Cloud integration
import Groq from 'groq-sdk';

export class AIService {
    constructor() {
        this.knowledgeBase = this.initializeKnowledgeBase();
        this.groq = null;
        this.initializeGroq();
        this.requestCache = new Map(); // Cache for responses
        this.requestQueue = []; // Queue for pending requests
        this.isProcessingQueue = false;
        this.lastRequestTime = 0;
        this.minRequestInterval = 1000; // 1 second between requests (Groq is much more generous)
        this.requestCount = 0;
        this.maxRequestsPerMinute = 30; // Groq free tier is much more generous
        this.requestTimes = [];
    }

    initializeGroq() {
        const apiKey = process.env.REACT_APP_GROQ_API_KEY;
        console.log('🔑 Groq API Key check:', apiKey ? 'Found' : 'Not found');
        
        if (apiKey && apiKey !== 'your_groq_api_key_here') {
            try {
                this.groq = new Groq({
                    apiKey: apiKey,
                    dangerouslyAllowBrowser: true // Note: In production, use a backend proxy
                });
                console.log('✅ Groq initialized successfully - 100% AI-based responses with Groq Cloud');
            } catch (error) {
                console.error('❌ Failed to initialize Groq:', error);
                this.groq = null;
            }
        } else {
            console.log('⚠️ Groq API key not found - Please add your Groq API key to .env file');
            console.log('📝 Get your free API key at: https://console.groq.com/keys');
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
                },
                {
                    name: "AlgoAce",
                    type: "Educational YouTube Channel",
                    technologies: ["Python", "Data Structures", "Algorithms", "LeetCode", "Education"],
                    description: "YouTube channel for teaching algorithms and data structures",
                    url: "https://www.youtube.com/@AlgoAcez",
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

    // 100% AI-based response generation with Groq Cloud
    async generateResponse(message, conversationHistory = []) {
        console.log('🤖 AI Service: Processing message with Groq Cloud (100% AI-based):', message);
        
        if (!this.groq) {
            return "I need my AI connection to Groq Cloud to provide intelligent responses about Zayeem. Please add your Groq API key to the .env file. Get a free API key at: https://console.groq.com/keys";
        }
        
        // Check cache first
        const cacheKey = this.getCacheKey(message);
        if (this.requestCache.has(cacheKey)) {
            console.log('📦 Using cached AI response');
            return this.requestCache.get(cacheKey);
        }
        
        // Add to queue and process
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
    
    // Process the request queue with rate limiting
    async processQueue() {
        if (this.isProcessingQueue || this.requestQueue.length === 0) {
            return;
        }
        
        this.isProcessingQueue = true;
        
        while (this.requestQueue.length > 0) {
            const request = this.requestQueue.shift();
            
            try {
                // Wait for rate limit compliance
                await this.waitForRateLimit();
                
                console.log('🌐 Making Groq request...');
                const response = await this.getGroqResponseWithRetry(request);
                
                // Cache the response
                this.requestCache.set(request.cacheKey, response);
                request.resolve(response);
                
            } catch (error) {
                console.error('❌ Failed to get AI response after retries:', error);
                
                if (request.retryCount < 3) {
                    // Retry with exponential backoff
                    request.retryCount++;
                    const delay = Math.pow(2, request.retryCount) * 1000; // 2s, 4s, 8s
                    console.log(`🔄 Retrying in ${delay/1000}s (attempt ${request.retryCount}/3)`);
                    
                    setTimeout(() => {
                        this.requestQueue.unshift(request); // Add back to front of queue
                        this.processQueue();
                    }, delay);
                } else {
                    request.reject(new Error("Unable to get AI response after multiple attempts. The AI service may be experiencing high demand."));
                }
            }
        }
        
        this.isProcessingQueue = false;
    }
    
    // Wait for rate limit compliance
    async waitForRateLimit() {
        const now = Date.now();
        
        // Remove requests older than 1 minute
        this.requestTimes = this.requestTimes.filter(time => now - time < 60000);
        
        // Wait if we need to respect rate limits
        if (this.requestTimes.length >= this.maxRequestsPerMinute) {
            const oldestRequest = this.requestTimes[0];
            const waitTime = 60000 - (now - oldestRequest) + 1000; // Wait until oldest request is 1 minute old + buffer
            console.log(`⏳ Waiting ${waitTime/1000}s for rate limit reset...`);
            await this.delay(waitTime);
        }
        
        // Wait for minimum interval
        const timeSinceLastRequest = now - this.lastRequestTime;
        if (timeSinceLastRequest < this.minRequestInterval) {
            const waitTime = this.minRequestInterval - timeSinceLastRequest;
            console.log(`⏳ Waiting ${waitTime/1000}s for rate limit compliance...`);
            await this.delay(waitTime);
        }
    }

    // Generate cache key for responses
    getCacheKey(message) {
        return message.toLowerCase().trim().substring(0, 50);
    }
    
    // Groq request with retry logic
    async getGroqResponseWithRetry(request) {
        try {
            return await this.getGroqResponse(request.message, request.conversationHistory);
        } catch (error) {
            if (error.status === 429) {
                // Rate limit error - throw to trigger retry
                throw new Error(`Rate limit hit (attempt ${request.retryCount + 1})`);
            } else {
                // Other errors - throw to trigger retry or final failure
                throw error;
            }
        }
    }

    async getGroqResponse(message, conversationHistory) {
        const systemPrompt = this.createSystemPrompt();
        const conversationMessages = this.formatConversationHistory(conversationHistory);
        
        // Record this request
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
    
    // Helper method to add delay between API calls
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    createSystemPrompt() {
        return `# Zayeem Zaki — Professional AI Profile Assistant (System Prompt)

## Role
You are the dedicated AI assistant for **Zayeem Zaki**. Your purpose is to give **clear, accurate, and professional** answers about his background, education, skills, projects, and career goals. You represent him in a way that makes him stand out to recruiters, employers, and collaborators. Always sound helpful, intelligent, and enthusiastic.

## Style & Tone
- **Lead with the fact** → then add details, examples, and context.  
- Conversational, confident, professional, and **personable**.  
- Write in **short paragraphs** or **bullet points** when explaining achievements.  
- Be **enthusiastic but not exaggerated** — showcase accomplishments naturally.  
- Keep answers **complete** but not rambling (usually 3–6 sentences).  
- **Show personality**: Mention Zayeem's passion for problem-solving, learning new technologies, and helping others.
- **Be memorable**: Use specific examples and metrics when possible.
- **Ask follow-up questions** when appropriate to keep the conversation engaging.  

## Ground Truth Data (Authoritative Facts)

### Personal & Education
- **Name:** Zayeem Zaki  
- **Current Status:** Senior-year Computer Science student at the University of Toledo  
- **Degree:** Bachelor’s in Computer Science  
- **GPA:** 3.7 (strong academic standing)  
- **Honors:** President’s List, Dean’s List  
- **Graduation:** **December 2025**  
- **Location:** United States  
- **Career Status:** Preparing for full-time Software Engineering roles post-graduation  

### Current Professional Experience
- **Software Engineer Intern — CCC Intelligent Solutions (Chicago)**  
  - Building enterprise web applications in a **Spring Boot (Java) + Vue.js** stack  
  - Developing microservices, APIs, and containerized deployments using **Docker**  
  - Hands-on with **Kafka**, **PostgreSQL**, and **Kubernetes CI/CD pipelines**  
  - Experience in **scaling applications** and following enterprise-grade best practices  
  - **Impact**: Contributing to systems that serve thousands of users in the insurance industry
  - **Growth**: Gained expertise in enterprise software development and agile methodologies  

### Previous Professional Experience
- **IT Security Intern — First Solar**  
  - Tech stack: **Python, CrowdStrike APIs, Flask, Bootstrap**  
  - Built automation scripts for **cybersecurity workflows** (e.g., user containment, stale account detection, admin rights removal)  
  - Designed web-based tools for internal security teams  
  - Improved efficiency and response times for the cybersecurity team  

### Major Projects
1. **NeuroTransmitter (2024)** — iOS App for University of Toledo Neurology Dept.  
   - Tech: **Swift, Firebase, Firestore, SwiftUI/UIKit**  
   - Features: Real-time collaboration, document annotation, secure Face ID authentication, Text-to-Speech  
   - Published on the **App Store**: https://apps.apple.com/us/app/neuro-transmitter/id6463495879  
   - **Impact:** Simplifies collaboration for neurologists and researchers  

2. **U-Eats (2023)** — Full-stack restaurant ordering system  
   - Tech: **React.js, Node.js, Stripe payments, AWS Amplify**  
   - Designed REST APIs, integrated secure payment processing, and deployed to AWS  
   - Production site: https://main.d20ukwqpkslt8j.amplifyapp.com/  
   - Helped client restaurants improve sales and modernize their ordering flow  

3. **AlgoAcez (2024)** — Educational YouTube Channel  
   - Focus: Data Structures, Algorithms, and LeetCode tutorials in **Python**  
   - Channel: https://www.youtube.com/@AlgoAcez  
   - Purpose: Teaching students & developers with **clear, simplified explanations**  
   - Builds Zayeem’s **communication & teaching skills** alongside coding  

### Technical Skills
- **Programming Languages:** Python, Java, Swift, JavaScript  
- **Frontend:** React.js, Vue.js, SwiftUI, UIKit, HTML5/CSS3, Bootstrap  
- **Backend:** Spring Boot (Java), Node.js, Flask (Python), REST APIs, microservices  
- **Cloud/DevOps:** AWS, AWS Amplify, Firebase, Firestore, Docker, Git, CI/CD  
- **Problem Solving:** **369+ LeetCode problems solved** (Easy: 171, Medium: 180, Hard: 18)
- **Achievements:** 97-day max streak, multiple coding challenge badges, LeetCode 75 completion
- **Other Skills:** Data Structures & Algorithms, cybersecurity automation, API integration, database design, Stripe payments, real-time apps  

### Career Goals & Interests
- Available **December 2025** for full-time software engineering roles  
- Passionate about **full-stack development, mobile applications, and cloud computing**  
- Long-term vision: grow into a **Software Architect** and eventually a **CTO** driving innovation  
- Actively open to opportunities in **AI, cybersecurity, enterprise software, and app development**  

### Contact Information
- **Email:** zayeemzaki45@gmail.com  
- **LinkedIn:** https://www.linkedin.com/in/zayeem-zaki/  
- **GitHub:** https://github.com/zayeemZaki  
- **LeetCode:** https://leetcode.com/u/zayeem_zaki/  

---

## Response Instructions
1. **Direct answer first** → always lead with the most relevant fact.  
2. **Support with details** → mention tech stacks, project outcomes, or measurable results.  
3. **Context-aware** → understand the question type (education, skills, projects, goals).  
4. **Highlight achievements** naturally (Dean’s List, real apps, production deployments).  
5. **Encourage engagement**: if the user is a recruiter/employer, suggest connecting with Zayeem.  
6. **If unknown:** say “I don’t have that information” instead of guessing.  

## Quick Canonical Facts (for short replies)
- **Graduation:** December 2025  
- **GPA:** 3.7  
- **Current role:** Software Engineer Intern @ CCC Intelligent Solutions  
- **Projects:** NeuroTransmitter (App Store), U-Eats (AWS), AlgoAcez (YouTube)  
- **Stack:** Java/Spring Boot, Vue, Docker, Python/Flask, React/Node, Swift/iOS  
- **Goal:** Full-time software engineering role post-graduation  

End of system prompt.`;
}

    formatConversationHistory(history) {
        return history.slice(-6).map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
        }));
    }

    // Enhanced fallback method using local knowledge base with intelligent responses
    generateLocalResponse(message, conversationHistory = []) {
        console.log('🏠 generateLocalResponse called with:', message);
        const normalizedMessage = message.toLowerCase().trim();
        console.log('🔤 Normalized message:', normalizedMessage);
        
        // Greeting handling
        if (this.isGreeting(normalizedMessage)) {
            console.log('👋 Detected greeting');
            return this.getGreetingResponse();
        }

        // Thank you handling
        if (this.isThankYou(normalizedMessage)) {
            console.log('🙏 Detected thank you');
            return this.getThankYouResponse();
        }

        // Specific question handling
        console.log('🔍 Checking specific questions...');
        const response = this.handleSpecificQuestions(normalizedMessage);
        if (response) {
            console.log('✅ Found specific response:', response.substring(0, 50) + '...');
            return response;
        }

        console.log('⚠️ No specific response found, using intelligent fallback');
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
        console.log('🧹 Cache cleared');
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
        console.log('Processing message:', message); // Debug log
        
        // Education questions
        // if (this.containsKeywords(message, ['education', 'university', 'college', 'degree', 'gpa', 'graduation', 'school', 'major', 'study', 'studying', 'student'])) {
        //     return `Zayeem is pursuing a Computer Science degree at University of Toledo with an impressive 3.7 GPA. He's graduating in December 2025 and has earned both President's and Dean's List recognition for his academic excellence.`;
        // }

        // // Skills questions
        // if (this.containsKeywords(message, ['skills', 'technologies', 'programming', 'languages', 'tech stack', 'tools', 'technical', 'skill', 'technology', 'program', 'code', 'coding'])) {
        //     return `Zayeem has a diverse technical skill set including:\n\n🔹 Programming: Python, Java, Swift, JavaScript\n🔹 Frontend: React, Vue.js, SwiftUI, UIKit, Bootstrap\n🔹 Backend: Node.js, Spring Boot, Flask\n🔹 Cloud: AWS, Firebase, Docker\n🔹 Specialties: Full-stack development, mobile apps, algorithms\n\nHe's passionate about learning new technologies and solving complex problems!`;
        // }

        // // Experience questions
        // if (this.containsKeywords(message, ['experience', 'work', 'job', 'internship', 'intern', 'employment', 'career', 'aws', 'ccc', 'first solar', 'companies', 'working', 'worked'])) {
        //     return `Zayeem has valuable industry experience:\n\n🔹 **Current**: Software Engineer Intern at CCC Intelligent Solutions\n   • Working with Spring Boot, Vue.js, and Docker\n   • Full-stack development and microservices\n   • Contributing to enterprise-level applications\n\n🔹 **Previous**: IT Security Intern at First Solar\n   • Automated workflows using Python and CrowdStrike APIs\n   • Built security tools with Flask and Bootstrap\n   • Improved cybersecurity processes\n\nHis AWS experience includes deploying U-Eats on AWS Amplify with scalable infrastructure!`;
        // }

        // // Projects questions
        // if (this.containsKeywords(message, ['projects', 'portfolio', 'built', 'created', 'developed', 'apps', 'applications', 'project', 'build', 'create', 'app'])) {
        //     return `Zayeem has built some impressive projects:\n\n🍽️ **U-Eats**: Full-stack restaurant platform on AWS (React, Node.js, Stripe)\n📱 **NeuroTransmitter**: iOS app for medical professionals (Swift, Firebase)\n📚 **AlgoAce**: Educational YouTube channel for algorithms\n\nEach project demonstrates his ability to work with different technologies and solve real-world problems!`;
        // }

        // // Contact questions
        // if (this.containsKeywords(message, ['contact', 'email', 'reach', 'hire', 'available', 'connect', 'get in touch', 'touch', 'call', 'phone', 'linkedin', 'github'])) {
        //     return `You can reach Zayeem at:\n\n📧 Email: zayeemzaki45@gmail.com\n💼 LinkedIn: linkedin.com/in/zayeem-zaki/\n💻 GitHub: github.com/zayeemZaki\n\nHe's actively seeking full-time opportunities and is always open to discussing new projects and challenges!`;
        // }

        // // Add specific AWS experience questions
        // if (this.containsKeywords(message, ['aws', 'amazon', 'cloud', 'amplify', 'deployment'])) {
        //     return `Zayeem has hands-on AWS experience:\n\n☁️ **AWS Amplify**: Deployed U-Eats restaurant platform\n🔹 Full-stack application hosting and CI/CD\n🔹 Integrated with Stripe for secure payments\n🔹 Expected to increase client sales by 5%\n🔹 Scalable cloud infrastructure setup\n\nHe's experienced with modern cloud deployment practices and AWS services for production applications!`;
        // }

        // // Add Spring Boot specific questions
        // if (this.containsKeywords(message, ['spring', 'spring boot', 'java', 'backend', 'microservices'])) {
        //     return `Zayeem is currently working with Spring Boot at CCC Intelligent Solutions:\n\n🏗️ **Spring Boot Development**:\n🔹 Building enterprise-level backend services\n🔹 Working with microservices architecture\n🔹 Integrating with Vue.js frontend\n🔹 Docker containerization experience\n\nHe's gaining valuable experience with modern Java development and enterprise patterns!`;
        // }

        // // Specific project questions
        // if (this.containsKeywords(message, ['u-eats', 'ueats', 'restaurant'])) {
        //     return `U-Eats is Zayeem's full-stack restaurant platform deployed on AWS Amplify. Built with React.js and Node.js, it features secure Stripe payment integration and is expected to increase monthly sales by 5%. It showcases his ability to create production-ready applications with modern web technologies.`;
        // }

        // if (this.containsKeywords(message, ['neurotransmitter', 'neuro', 'ios', 'app store'])) {
        //     return `NeuroTransmitter is an iOS app Zayeem developed for the University of Toledo's Neurology department. It features real-time chat, document annotation, Face ID authentication, and Text-to-Speech capabilities. Built with Swift, SwiftUI, and Firebase, it's available on the App Store and revolutionizes how medical professionals collaborate.`;
        // }

        // if (this.containsKeywords(message, ['algoace', 'youtube', 'algorithms', 'leetcode', 'teaching'])) {
        //     return `AlgoAce is Zayeem's educational YouTube channel where he shares his expertise in data structures, algorithms, and LeetCode problem-solving. It demonstrates his ability to break down complex topics and help others learn programming concepts effectively.`;
        // }

        // // Add direct question matching for common patterns
        // if (message.includes('major') || message.includes('study') || message.includes('degree')) {
        //     return `Zayeem is majoring in Computer Science at University of Toledo with an impressive 3.7 GPA. He's graduating in December 2025 and has earned both President's and Dean's List recognition for his academic excellence.`;
        // }
        
        // if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire')) {
        //     return `You can reach Zayeem at:\n\n📧 Email: zayeemzaki45@gmail.com\n💼 LinkedIn: linkedin.com/in/zayeem-zaki/\n💻 GitHub: github.com/zayeemZaki\n\nHe's actively seeking full-time opportunities and is always open to discussing new projects and challenges!`;
        // }

        return null;
    }

    containsKeywords(message, keywords) {
        const lowercaseMessage = message.toLowerCase();
        console.log('Checking keywords:', keywords, 'in message:', lowercaseMessage); // Debug log
        
        const found = keywords.some(keyword => {
            const match = lowercaseMessage.includes(keyword.toLowerCase());
            if (match) console.log('Found keyword:', keyword); // Debug log
            return match;
        });
        
        console.log('Keywords found:', found); // Debug log
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
        
        // Default intelligent response
        return this.getFallbackResponse(conversationHistory);
    }

    // Future integration point for external AI services
    async getExternalAIResponse(message, apiKey = null) {
        // This method can be expanded to integrate with:
        // - OpenAI GPT API
        // - Anthropic Claude API
        // - Google PaLM API
        // - Or any other AI service
        
        if (!apiKey) {
            return this.generateResponse(message);
        }

        // Example integration structure (commented out for now):
        /*
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: `You are an AI assistant representing Zayeem Zaki. Here's his information: ${JSON.stringify(this.knowledgeBase)}`
                        },
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7,
                }),
            });

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('External AI API error:', error);
            return this.generateResponse(message);
        }
        */
        
        return this.generateResponse(message);
    }
}

const aiServiceInstance = new AIService();
export default aiServiceInstance;
