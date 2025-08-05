import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I am a <ReactTyped strings={['CSE Student', 'AI Enthusiast', 'MERN Stack Developer']} typeSpeed={40} backSpeed={50} loop />
        </p>
      </div>
    </section>
  );
};

export default Hero;