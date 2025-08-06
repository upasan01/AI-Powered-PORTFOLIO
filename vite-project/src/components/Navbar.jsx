import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons from lucide-react

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
          Sk.dev
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}>
          <li>
            <Link to="/" className="block py-2 px-4 text-white hover:text-blue-400 transition-colors duration-300 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 text-white hover:text-blue-400 transition-colors duration-300 rounded-md" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="block py-2 px-4 text-white hover:text-blue-400 transition-colors duration-300 rounded-md" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block py-2 px-4 text-white hover:text-blue-400 transition-colors duration-300 rounded-md" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 text-white hover:text-blue-400 transition-colors duration-300 rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
