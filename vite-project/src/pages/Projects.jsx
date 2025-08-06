// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../projectData'; // Import your custom project data

function Projects() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden flex flex-col shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={project.imageUrl} 
                alt={`${project.name} preview`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-end space-x-4">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;