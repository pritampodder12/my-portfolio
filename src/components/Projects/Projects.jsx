import React from "react";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-36 py-20 flex flex-col gap-y-20">
      <div className="text-2xl text-gray-300 leading-loose text-center">
        My Projects
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          className="text-base text-gray-300 border min-w-[305px] rounded-xl p-10 px-20 border-gray-700 grid grid-cols-2 gap-4"
        >
          <div>
            <div className="text-2xl font-medium leading-loose">
              {project.title}
            </div>
            <div className="text-purple-300 text-xl leading-loose">
              {project.description}
            </div>
            <div className="text-base flex items-center gap-x-2">
              <div>{project.from}</div>
              <div className="h-[6px] w-[6px] rounded bg-green-500" />
              <div>{project.to}</div>
            </div>
          </div>
          <div className="text-xl space-y-5">
            <div className="font-semibold text-purple-300 leading-loose">
              Responsibilities
            </div>
            <ul className="list-disc marker:text-green-500">
              {project.responsibilities.map((resp) => (
                <li key={resp} className="mb-4">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
