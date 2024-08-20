import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZdrIwfTmMxmLTCgaweCPK4-PYVIln17yYg&s',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZdrIwfTmMxmLTCgaweCPK4-PYVIln17yYg&s',
    },
  ];

  return (
    <section className="projects">
      <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4 text-white">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
