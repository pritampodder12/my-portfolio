import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex justify-between px-40 py-40"
    >
      <div className="max-w-[650px] space-y-10">
        <div className="text-7xl font-medium leading-loose">Hi, I'm Pritam</div>
        <div className="text-gray-400 text-2xl leading-loose">
          During these <span className="text-white font-bold">4 years</span> as{" "}
          <span className="text-white font-bold">
            Front-End Software Engineer
          </span>
          . My role has extended beyond coding to effective communication with
          various departments, to define new features and spearheading the
          development of new apps.
        </div>
        <div className="flex space-x-16">
          <button className="bg-gray-300 rounded-full text-base font-bold text-gray-900 px-10 py-3">
            Download CV
          </button>
          <button className="text-purple-300 text-base font-bold">
            See Experience
          </button>
        </div>
      </div>
      <div>
        <img src={require("../../assets/images/profilePic.svg")} />
      </div>
    </section>
  );
};

export default Hero;
