import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    link: "#",
    from: "Jan 2022",
    to: "Apr 2024",
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    link: "#",
    from: "July 2020",
    to: "Apr 2022",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-36 py-20 flex flex-col gap-y-20"
    >
      <div className="text-2xl text-gray-300 leading-loose text-center">
        My Projects
      </div>
      {projects.map((project) => (
        <div
          key={project.title}
          className="text-base border min-w-[305px] rounded-xl py-5 pl-8 border-gray-700 grid grid-cols-2 gap-4"
        >
          <div>
            <div className="text-2xl text-white font-medium leading-loose">{project.title}</div>
            <div className="text-purple-300 text-xl leading-loose">{project.description}</div>
            <div className="text-base flex items-center gap-x-2">
              <div>{project.from}</div>
              <div className="h-[6px] w-[6px] rounded bg-green-500" />
              <div>{project.to}</div>
            </div>
          </div>
          <a href={project.link}>Link</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
