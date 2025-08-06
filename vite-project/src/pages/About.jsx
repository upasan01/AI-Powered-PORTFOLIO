import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed'; // Use named import
import { Link } from 'react-router-dom'; // For CTA buttons

// Icons from react-icons (as you have it installed)
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si';

import profilePicture from '../assets/ProfilePicture.png';

function About() {
  const skills = [
    { icon: <FaHtml5 size={28} className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={28} className="text-blue-500" />, name: 'CSS3' },
    { icon: <SiJavascript size={28} className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <FaReact size={28} className="text-cyan-400" />, name: 'React' },
    { icon: <SiTailwindcss size={28} className="text-cyan-300" />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs size={28} className="text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress size={28} className="text-gray-400" />, name: 'Express.js' },
    { icon: <SiMongodb size={28} className="text-green-600" />, name: 'MongoDB' },
    { icon: <FaGitAlt size={28} className="text-orange-600" />, name: 'Git' },
  ];

  // Animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Animated Profile Picture */}
          <motion.div 
            className="md:w-1/3 mb-10 md:mb-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profilePicture} 
              alt="My Profile"
              className="rounded-full w-60 h-60 lg:w-72 lg:h-72 object-cover shadow-2xl border-4 border-blue-500 transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          
          {/* Animated About Me Text */}
          <motion.div 
            className="md:w-2/3 text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold text-white mb-2">Hello! I'm Your Name</h3>
            <div className="text-xl font-light text-blue-300 mb-6 h-8">
              <ReactTyped
                strings={[
                  'A Full Stack Developer',
                  'A MERN Stack Specialist',
                  'A Lifelong Learner',
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </div>
            
            <p className="mb-4">
              I thrive on building robust, scalable, and user-friendly applications that solve real-world problems. From designing intuitive user interfaces with React to developing powerful and efficient APIs with Node.js and Express, I enjoy every step of the development process.
            </p>
            <p>
              Beyond coding, I am a continuous learner, always exploring new technologies to enhance my skills. When I'm not at the keyboard, you can find me playing chess.
            </p>
          </motion.div>
        </div>

        {/* Animated Call to Action (CTA) */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-400 mb-8">Have a project in mind or just want to connect? Feel free to reach out.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/projects" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/50">
              View My Work
            </Link>
            <Link to="/contact" className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-gray-600 shadow-lg">
              Get in Touch
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;