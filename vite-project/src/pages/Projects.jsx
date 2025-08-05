import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/samim29/repos');
      const data = await response.json();
      setProjects(Array.isArray(data) ? data : []);
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project =>
        Array.isArray(project.topics) && project.topics.includes(filter.toLowerCase())
      );

  return (
    <div>
      <h2>Projects</h2>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Web')}>Web</button>
        <button onClick={() => setFilter('AI')}>AI</button>
        <button onClick={() => setFilter('College')}>College</button>
      </div>
      <div className="project-cards">
        {Array.isArray(filteredProjects) && filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;