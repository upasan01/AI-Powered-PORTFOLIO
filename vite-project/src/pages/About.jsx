import React from 'react';

import profilePicture from '../assets/ProfilePicture.png'; // Adjust the path if needed

function About() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={profilePicture} 
            alt="My Profile"
            className="rounded-full w-64 h-64 object-cover shadow-xl border-4 border-blue-500"
          />
        </div>
        <div className="md:w-2/3 text-lg leading-relaxed">
          <p className="mb-6">
            Hello! I'm <span className="font-semibold text-white">Your Name</span>, a passionate Full Stack Developer with a strong focus on the MERN (MongoDB, Express.js, React, Node.js) stack. My journey in web development began with a fascination for how digital experiences are crafted, leading me to dive deep into both frontend aesthetics and backend logic.
          </p>
          <p className="mb-6">
            I thrive on building robust, scalable, and user-friendly applications that solve real-world problems. From designing intuitive user interfaces with React to developing powerful and efficient APIs with Node.js and Express, and managing data with MongoDB, I enjoy every step of the development process.
          </p>
          <p className="mb-6">
            Beyond coding, I am a continuous learner, always exploring new technologies and best practices to enhance my skills and deliver cutting-edge solutions. I believe in clean code, collaborative environments, and the power of technology to make a positive impact.
          </p>
          <p>
            When I'm not coding, you can find me [mention a hobby, e.g., exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes]. I'm always open to new challenges and opportunities to create something impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;