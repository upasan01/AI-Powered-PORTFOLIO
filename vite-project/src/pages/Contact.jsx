import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd integrate with a service like EmailJS or a backend API.
    console.log('Form submitted:', formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
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
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={itemVariants}
        >
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-5 -translate-y-1/2 text-gray-400" size={20} />
            <textarea
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-10 text-gray-200 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>
          <div className="text-center">
            <motion.button 
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg w-full md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
        {status && <p className="text-center mt-4 text-green-400">{status}</p>}
      </div>
    </motion.section>
  );
};

export default Contact;