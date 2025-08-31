import React, { useState, useRef, useEffect } from 'react';
import './AIChat.css';
import aiService from '../../services/aiService';

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Zayeem's AI assistant powered by Groq Cloud. I can answer detailed questions about his background, technical skills, projects, work experience, and more. Try asking me anything - I understand natural language! 🤖\n\nI have comprehensive knowledge about:\n• His education at University of Toledo\n• Technical skills in JavaScript, React, Node.js, Python, and more\n• Projects like U-Eats, NeuroTransmitter, and AlgoAce\n• Work experience and internships\n• Contact information and career goals\n\nFeel free to ask specific questions or use the quick question buttons below!",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        setTimeout(() => {
            const messagesContainer = document.querySelector('.chat-messages');
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }, 100);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Use the enhanced AI service
        try {
            // Simulate realistic AI response time
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
            
            const aiResponseText = await aiService.generateResponse(inputMessage, messages);
            
            const aiResponse = {
                id: Date.now() + 1,
                text: aiResponseText,
                sender: 'ai',
                timestamp: new Date()
            };
            
            setMessages(prev => [...prev, aiResponse]);
        } catch (error) {
            console.error('AI response error:', error);
            let errorMessage = "I'm experiencing high demand right now. ";
            
            if (error.message?.includes('multiple attempts')) {
                errorMessage += "Please wait a moment and try asking about Zayeem's education, skills, projects, or experience again.";
            } else {
                errorMessage += "Let me try to process your question again shortly.";
            }
            
            const errorResponse = {
                id: Date.now() + 1,
                text: errorMessage,
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const quickQuestions = [
        "Tell me about Zayeem's education",
        "What are his technical skills?",
        "What projects has he built?",
        "What's his work experience?",
        "How can I contact him?"
    ];

    const handleQuickQuestion = (question) => {
        setInputMessage(question);
        setTimeout(handleSendMessage, 100);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <div className={`chat-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                {isOpen ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <div className="chat-button-content">
                        <i className="fas fa-robot"></i>
                        <span className="ai-text">AI</span>
                        <span className="assistant-text">Assistant</span>
                    </div>
                )}
                {!isOpen && <span className="chat-tooltip">Ask AI about Zayeem</span>}
            </div>

            {/* Chat Window */}
            <div className={`chat-container ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-title">
                            <h4>Zayeem's AI Assistant</h4>
                            <span className="chat-status">
                                {aiService.isGroqAvailable() ? '🧠 Groq Powered' : '⚡ Quick Response'} • Online
                            </span>
                        </div>
                    </div>
                    <button className="chat-close" onClick={toggleChat}>
                        <i className="fas fa-minus"></i>
                    </button>
                </div>

                <div className="chat-messages">
                    <div className="messages-wrapper">
                        {messages.map((message) => (
                            <div key={message.id} className={`message ${message.sender}`}>
                                <div className="message-content">
                                    <p>{message.text}</p>
                                    <span className="message-time">
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {/* Quick Questions */}
                        {messages.length === 1 && (
                            <div className="quick-questions">
                                <p>Quick questions you can ask:</p>
                                <div className="quick-question-buttons">
                                    {quickQuestions.slice(0, 3).map((question, index) => (
                                        <button
                                            key={index}
                                            className="quick-question-btn"
                                            onClick={() => handleQuickQuestion(question)}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {isTyping && (
                            <div className="message ai">
                                <div className="message-content">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="chat-input-container">
                    <div className="chat-input-wrapper">
                        <textarea
                            ref={inputRef}
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about Zayeem..."
                            className="chat-input"
                            rows="1"
                        />
                        <button 
                            className="send-button"
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim()}
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChat;
