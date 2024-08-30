import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useReactPath from "../../hooks/useReactPath";
import profile from "../../data/profile";

const Header = () => {
  const hash = useReactPath();

  return (
    <header className="bg-gray-800 fixed w-1/3 rounded-full py-4 top-6 left-0 right-0 mx-auto px-4 text-sm font-medium flex items-center justify-between">
      <div className="space-x-10 text-purple-300">
        <a
          href="#home"
          className={hash === "home" || hash === "" ? "text-white" : ""}
        >
          Home
        </a>
        <a href="#skills" className={hash === "skills" ? "text-white" : ""}>
          Skills
        </a>
        <a
          href="#experience"
          className={hash === "experience" ? "text-white" : ""}
        >
          Experience
        </a>
        <a href="#projects" className={hash === "projects" ? "text-white" : ""}>
          Projects
        </a>
      </div>
      <div className="flex gap-x-5">
        <a
          className="cursor-pointer"
          href={profile.links.github}
          target="_blank"
        >
          <FaGithub className="text-purple-300" size={22} />
        </a>
        <a
          className="cursor-pointer"
          href={profile.links.linkedin}
          target="_blank"
        >
          <FaLinkedin className="text-purple-300" size={22} />
        </a>
        <a
          className="cursor-pointer"
          href={`mailto:${profile.links.email}`}
          target="_blank"
        >
          <FaEnvelope className="text-purple-300" size={22} />
        </a>
      </div>
    </header>
  );
};

export default Header;
