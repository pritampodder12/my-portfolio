import React from 'react';
import './Projects.scss';

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
