import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react'; // Import icons

function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-center text-gray-400 mt-auto shadow-inner">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin size={28} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Mail size={28} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
