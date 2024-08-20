import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* <div className="hero-content"> */}
        <h1 className="text-5xl font-bold animate-slide-in">Hi, I'm Pritam</h1>
        <p className="mt-4 text-xl">Full-Stack Developer & Designer</p>
        <img src={require('../../assets/images/myPic.jpg')} alt="Pritam Podder" className="avatar-image" />
      {/* </div> */}
    </section>
  );
};

export default Hero;
