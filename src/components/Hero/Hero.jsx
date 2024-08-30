import React from "react";
import { calculateExperience, downloadFile } from "../../util/helper";
import profile from "../../data/profile";

const Hero = () => {
  function handleDownload(e) {
    e.preventDefault();
    downloadFile(profile.links.resume, "PritamPodder.pdf");
  }

  return (
    <section id="home" className="h-screen flex justify-between items-center px-40 py-40">
      <div className="max-w-[650px] space-y-10">
        <div className="text-7xl font-medium leading-loose">Hi, I'm Pritam</div>
        <div className="text-gray-400 text-2xl leading-loose">
          During these <span className="text-white font-bold">{calculateExperience()} years</span> as{" "}
          <span className="text-white font-bold">
            Full-Stack Software Engineer
          </span>
          . My role has extended beyond coding to effective communication with
          various departments, to define new features and spearheading the
          development of new apps.
        </div>
        <div className="flex space-x-16 items-center">
          <button
            className="bg-gray-300 rounded-full text-base font-bold text-gray-900 px-10 py-3"
            onClick={handleDownload}
          >
            Download CV
          </button>
          <a className="text-purple-300 text-base font-bold" href="#experience">
            See Experience
          </a>
        </div>
      </div>
      <div>
        <img src={require("../../assets/images/profilePic.png")} className="h-[330px] w-[250px] rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
