import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../../data/profile";

export default function () {
  return (
    <footer className="mx-36 my-20">
      <div className="bg-gray-800 rounded-full py-5 px-14 text-sm font-medium flex items-center justify-between">
        <div className="text-2xl text-gray-400">Follow Me</div>
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
      </div>
      <div className="py-5 px-14 text-base">
        ppodder © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
