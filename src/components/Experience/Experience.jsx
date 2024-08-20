import React from 'react';
import './Experience.scss';

const experiences = [
  {
    year: "2023",
    title: "Software Engineer",
    description: "Worked on various web projects..."
  },
  {
    year: "2022",
    title: "Frontend Developer",
    description: "Specialized in React and UI/UX design..."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <h3>{exp.year}</h3>
            <h4>{exp.title}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
