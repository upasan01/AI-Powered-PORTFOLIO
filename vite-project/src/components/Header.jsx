import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;