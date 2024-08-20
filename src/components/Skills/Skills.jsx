import React from 'react';
import './Skills.scss';

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
