1. Main Portfolio Layout: src/App.jsx
This file sets up the responsive layout and integrates the core components using React and Tailwind CSS.

JavaScript

// src/App.jsx
import React from 'react';
import AIChatbot from './components/AIChatbot';
import ContactForm from './components/ContactForm';
// Assuming other sections (Header, Projects, Skills) are also components
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold"
          >
            [Your Name]'s AI Portfolio
          </motion.h1>
          <p className="text-xl mt-2">Serverless, AI-Powered, and Ready to Work.</p>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT & CENTER COLUMN (Main Content) --- */}
        <div className="lg:col-span-2">
          {/* Example Section */}
          <section className="mb-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-600 border-b pb-2 mb-4">About Me</h2>
            <p className="text-gray-700">
              I am a full-stack developer specializing in modern, serverless architectures. 
              Scroll down to ask my AI assistant any question about my background!
            </p>
          </section>
          
          {/* Example Projects Section */}
          <motion.section 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="p-6 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-blue-600 border-b pb-2 mb-4">Key Projects</h2>
            {/* ... Project cards here ... */}
          </motion.section>
        </div>

        {/* --- RIGHT COLUMN (AI Chatbot) --- */}
        <div className="lg:col-span-1">
          <AIChatbot />
        </div>
      </main>

      {/* --- Contact Form Section --- */}
      <section id="contact" className="py-12 bg-gray-200">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
2. AI Serverless Function: netlify/functions/ai_chat.js
This Node.js function uses the Google Generative AI SDK to handle requests from the frontend. It is deployed automatically by Netlify.

JavaScript

// netlify/functions/ai_chat.js
const { GoogleGenAI } = require('@google/genai');

// Initialize the Google Generative AI client
// The API key is automatically pulled from Netlify environment variables (GEMINI_API_KEY)
const ai = new GoogleGenAI({}); 

// IMPORTANT: This system instruction is crucial for training the chatbot.
// Replace the placeholder text with your real data!
const SYSTEM_INSTRUCTION = `
You are Aura, an AI assistant for the developer [Your Name]. 
Your knowledge is strictly limited to the following professional profile data. 
Be helpful, concise, and professional. Do not invent any information.

--- START PROFILE DATA ---
- Name: [Your Name]
- Primary Role: Full-Stack Developer
- Strongest Languages: JavaScript (React/Node), Python (Django)
- Key Project 1: Collaborative Code Editor (Tech: Node.js, Socket.IO, React)
- Key Project 2: Serverless E-Commerce Platform (Tech: Next.js, Stripe, AWS Lambda)
- Background: 5 years experience, holds a Master's in Computer Science.
- Contact Method: Use the contact form on the page.
--- END PROFILE DATA ---
`;

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const { prompt } = JSON.parse(event.body);

        if (!prompt) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Prompt is required' }),
            };
        }

        // Call the Gemini API
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash", 
            contents: prompt,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                text: response.text
            }),
        };

    } catch (error) {
        console.error('Gemini API Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Failed to communicate with the AI service.', 
                details: error.message 
            }),
        };
    }
};
3. AI Chatbot Component: src/components/AIChatbot.jsx
This React component manages the chat interface and calls the Netlify Serverless Function.

JavaScript

// src/components/AIChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIChatbot = () => {
    const [messages, setMessages] = useState([{ sender: 'AI', text: "Hello! I'm Aura. Ask me anything about [Your Name]'s profile." }]);
    const [inputPrompt, setInputPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null);

    // Scroll to the bottom of the chat window on new message
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!inputPrompt.trim() || isLoading) return;

        const userMessage = inputPrompt.trim();
        setMessages(prev => [...prev, { sender: 'User', text: userMessage }]);
        setInputPrompt('');
        setIsLoading(true);

        try {
            // Call the Netlify Serverless Function
            const response = await fetch('/.netlify/functions/ai_chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: userMessage }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessages(prev => [...prev, { sender: 'AI', text: data.text }]);
            } else {
                setMessages(prev => [...prev, { sender: 'AI', text: `Error: ${data.error || 'Could not fetch response.'}` }]);
            }
        } catch (error) {
            console.error('Frontend Fetch Error:', error);
            setMessages(prev => [...prev, { sender: 'AI', text: 'Network error. Please check your connection.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-6 h-full flex flex-col"
        >
            <h3 className="text-2xl font-bold text-orange-500 mb-4 border-b pb-2">🤖 Aura AI Chatbot</h3>
            
            {/* Chat Output Area */}
            <div className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2 max-h-[400px]">
                {messages.map((msg, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl max-w-[80%] ${
                            msg.sender === 'User' 
                                ? 'ml-auto bg-blue-100 text-blue-800' 
                                : 'mr-auto bg-gray-100 text-gray-700'
                        }`}
                    >
                        <strong>{msg.sender}:</strong> {msg.text}
                    </motion.div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Chat Input Area */}
            <div className="flex">
                <input
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder={isLoading ? "Aura is typing..." : "Ask me anything..."}
                    className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                    disabled={isLoading}
                />
                <button
                    onClick={sendMessage}
                    className={`p-3 text-white rounded-r-lg transition duration-300 ${
                        isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? '...' : 'Send'}
                </button>
            </div>
        </motion.div>
    );
};

export default AIChatbot;
4. Contact Form Component: src/components/ContactForm.jsx
This React component uses EmailJS to send email without a backend.

JavaScript

// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

// NOTE: You must install EmailJS: npm install emailjs-com

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // IMPORTANT: Replace these with your actual EmailJS credentials
        const SERVICE_ID = 'YOUR_SERVICE_ID'; 
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
        const USER_ID = 'YOUR_USER_ID'; 

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then((result) => {
                console.log(result.text);
                setStatus('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            }, (error) => {
                console.error(error.text);
                setStatus('Failed to send message. Please try again later.');
            });
    };

    return (
        <motion.form 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="bg-white p-8 rounded-lg shadow-2xl" 
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
                Send Message
            </motion.button>

            {status && (
                <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                </p>
            )}
        </motion.form>
    );
};

export default ContactForm;
5. Netlify Configuration: netlify.toml
This file tells Netlify how to deploy your functions.

Ini, TOML

[build]
  # Assuming your build output is 'dist' or 'build'
  publish = "dist" 
  command = "npm run build"

[functions]
  # Location of your serverless functions
  directory = "netlify/functions"
Setup Summary
Initialize Project: npm create vite@latest portfolio-project -- --template react

Install Dependencies: npm install tailwindcss postcss autoprefixer emailjs-com framer-motion

Install AI SDK (for Serverless Function): Inside the netlify/functions directory, run npm init -y and npm install @google/genai.

Set Environment Variables: In Netlify, set the GEMINI_API_KEY and your EmailJS credentials.

Deploy: Push to GitHub and deploy with Netlify.
