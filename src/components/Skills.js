import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Tailwind CSS', 'SCSS', 'Webpack', 'Node.js'];

  return (
    <section className="skills">
      <h2 className="text-3xl font-bold mb-4 text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="card text-center">
            <h3 className="text-xl font-semibold text-white">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
