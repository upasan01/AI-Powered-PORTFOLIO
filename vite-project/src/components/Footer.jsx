import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../config'; // Import social links

function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-center text-gray-400 mt-auto shadow-inner">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href={socialLinks.email} className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Sk Samim Ali. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;