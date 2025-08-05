import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Education</h3>
          <p>Bachelor of Science in Computer Science, XYZ University (2020 - Present)</p>
        </div>
        <div className="timeline-item">
          <h3>Experience</h3>
          <p>Intern at ABC Company (Summer 2022)</p>
          <p>Freelance Developer (2021 - Present)</p>
        </div>
      </div>
      <a href="/path/to/resume.pdf" download className="download-resume">
        Download Resume
      </a>
    </section>
  );
};

export default Portfolio;