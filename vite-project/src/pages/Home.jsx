import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import Typed from 'typed.js'; // Import Typed.js directly
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  // Create a ref to attach to the <span> element where the typing animation will appear
  const el = useRef(null);
  // Create another ref to hold the Typed.js instance itself
  const typed = useRef(null);

  useEffect(() => {
    // Define the options for the Typed.js instance
    const options = {
      strings: [
        "A Full Stack Developer",
        "Passionate about creating amazing web experiences",
        "Specializing in MERN Stack"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Initialize Typed.js only if the DOM element (el.current) exists
    // el.current will be the <span> element
    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    // Cleanup function: This runs when the component unmounts
    // It's crucial to destroy the Typed.js instance to prevent memory leaks
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] text-center px-4 py-16">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
        Hi, I'm <span className="text-blue-400">Sk Samim Ali</span>
      </h1>
      <div className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8">
        {/* This is the empty <span> element that Typed.js will type into.
            The ref={el} connects this DOM element to our 'el' ref. */}
        <span ref={el} />
      </div>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10">
        Welcome to my digital space! I build robust and scalable web applications from front to back.
        Explore my work and learn more about my journey in web development.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
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
      </div>
    </section>
  );
}

export default Home;
