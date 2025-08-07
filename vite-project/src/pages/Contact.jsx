import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { User, Mail, MessageSquare, Send, Loader } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: 'Sending...', type: 'info' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        setFormData({ name: '', email: '', message: '' });
        setStatus({ message: 'Message sent successfully!', type: 'success' });
      },
      (error) => {
        console.log('FAILED...', error.text);
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });
      }
    )
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => setStatus({ message: '', type: '' }), 5000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-4 md:px-8 bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-xl w-full">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center mb-4"
          variants={itemVariants}
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>
        <motion.p 
          className="text-center text-gray-400 mb-10"
          variants={itemVariants}
        >
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>

        <motion.form 
          ref={form}
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={itemVariants}
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-5 -translate-y-1/2 text-gray-400" size={20} />
            <textarea
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required
            />
          </div>
          <div className="text-center">
            <motion.button 
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg w-full md:w-auto flex items-center justify-center gap-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed"
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
        {status.message && (
          <p className={`text-center mt-4 ${
            status.type === 'success' ? 'text-green-400' :
            status.type === 'error' ? 'text-red-400' :
            'text-gray-400'
          }`}>
            {status.message}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;