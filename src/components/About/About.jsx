import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-card bg-white/10 backdrop-blur-lg p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>I am a passionate developer with expertise in modern web technologies...</p>
      </div>
    </section>
  );
};

export default About;
