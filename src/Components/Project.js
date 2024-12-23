import React from 'react';

const projects = [
  {
    name: 'Seminar Synergy',
    description: 'A cross-platform app for seminar tracking using Flutter and Firebase.',
    link: 'https://github.com/nandin14/Seminar_Synergy'
  },
  {
    name: 'Load Balancing System',
    description: 'Efficient client request handling using advanced socket programming in C.',
    link: 'https://github.com/nandin14/Server-Client-Communication'
  }
];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
