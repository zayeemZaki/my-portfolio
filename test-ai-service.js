// // Test AI Service responses
// import aiService from './src/services/aiService.js';

// console.log('Testing AI Service...');

// // Test different types of questions
// const testQuestions = [
//     "Hi, tell me about Zayeem's education",
//     "What are his technical skills?", 
//     "What projects has he built?",
//     "What's his work experience?",
//     "How can I contact him?"
// ];

// async function testAIService() {
//     for (const question of testQuestions) {
//         console.log('\n--- Testing Question ---');
//         console.log('Q:', question);
        
//         try {
//             const response = await aiService.generateResponse(question, []);
//             console.log('A:', response);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     }
    
//     // Test configuration
//     console.log('\n--- AI Service Config ---');
//     console.log('OpenAI Available:', aiService.isOpenAIAvailable());
//     console.log('Config:', aiService.getConfigStatus());
// }

// testAIService();
