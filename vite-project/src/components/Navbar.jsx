import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: -25, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-gray-800/80 backdrop-blur-sm p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
          Sk.dev
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) =>
                  `block text-white transition-colors duration-300 ${isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'}`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col items-start mt-4 space-y-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link) => (
              <li key={link.title} className="w-full">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-2 px-4 w-full rounded-md transition-colors duration-300 ${isActive ? 'bg-blue-500/20 text-blue-300' : 'text-white hover:bg-gray-700'}`
                  }
                  onClick={toggleMenu}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;