import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

// NEW: Array of suggested questions
const suggestedQuestions = [
  "What are Samim's top skills?",
  "Tell me about his projects.",
  "How can I contact him?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! How can I help you learn more about Sk Samim Ali's work today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // NEW: Refactored function to handle the core logic of sending a message
  const submitMessage = async (messageText) => {
    const userMessage = { sender: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong.');
      }

      const data = await response.json();
      const aiResponse = { sender: 'ai', text: data.reply };
      
      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorResponse = { sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  // MODIFIED: This now uses the submitMessage function
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    submitMessage(input);
    setInput('');
  };

  // NEW: Handler for clicking a suggestion button
  const handleSuggestionClick = (question) => {
    submitMessage(question);
  };

  return (
    <>
      {/* Chat Bubble Toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.5 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col h-[600px] max-h-[80vh] z-50 border border-gray-700"
          >
            {/* Header */}
            <div className="p-4 bg-gray-900 rounded-t-xl flex items-center gap-3 border-b border-gray-700">
              <Bot className="text-blue-400" size={24} />
              <h3 className="text-lg font-bold text-white">AI Assistant</h3>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 my-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
  <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center">
    <Bot size={20} className="text-white" />
  </div>
)}
                  <div className={`p-3 rounded-2xl max-w-xs ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 my-4 justify-start">
                     <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0" />
                     <div className="p-3 rounded-2xl bg-gray-700 text-gray-200 rounded-bl-none flex items-center gap-2">
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75" />
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150" />
                     </div>
                   </motion.div>
              )}

              {/* NEW: Suggestion buttons - only show at the start of the chat */}
              {messages.length <= 1 && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-2 mt-4"
                >
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(question)}
                      className="bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm py-2 px-4 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>
            
            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-gray-700">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-full py-2 pl-4 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-2 hover:bg-blue-700 disabled:bg-gray-500" disabled={isLoading}>
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
