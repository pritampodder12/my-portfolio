import React from 'react';

const Hero = () => {
  return (
    <section className="hero text-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHdcFb-AmCIji1yYxkjRnuCTqXvwWo3hbhw&s" alt="Profile" className="hero__image" />
      <h1 className="text-4xl font-bold mt-4 text-white">Hi, I'm Pritam Podder</h1>
      <p className="text-lg mt-2 text-gray-300">Web Developer | React Enthusiast</p>
      <div className="social-icons mt-4">
        <a href="https://github.com/pritampodder12" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-2xl text-white hover:text-blue-400"></i>
        </a>
        <a href="https://linkedin.com/in/pritam-podder" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-2xl text-white hover:text-blue-400"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
