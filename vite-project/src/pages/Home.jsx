import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../config'; // Import personal info

function Home() {
  return (
    <motion.section 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-400">{personalInfo.name}</span>
        </motion.h1>
        <motion.div 
          className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8 h-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ReactTyped
            strings={[
              "A Full Stack Developer",
              "A MERN Stack Specialist",
              "A Lifelong Learner"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Welcome to my digital space! I build robust and scalable web applications from front to back. Explore my work and learn more about my journey in web development.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            View My Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            Get in Touch
            <Mail size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;