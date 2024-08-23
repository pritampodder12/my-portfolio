import React from "react";
import XpCard from "./XpCard";
import skills from "../../data/skills";
import skillDetails from "../../data/skillDetails";

const Skills = () => {
  return (
    <section id="skills" className="py-40">
      <div className="flex gap-x-10 pl-40 items-center">
        <div className="text-gray-400 text-2xl leading-loose min-w-[400px]">
          <div>4 years of</div>
          <div className="text-7xl font-bold text-white">XP</div>
          <div>with the most popular ecosystem</div>
          <div>frontend</div>
        </div>
        <div className="flex gap-y-5 gap-x-10 overflow-x-auto pl-10  h-[300px] items-center scrollbar">
          {skills.map((skill) => (
            <XpCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </div>
      <div className="">
        <div className="text-6xl mt-60 ml-24 mb-40">
          <div>These are the</div>
          <div>technologies I’ve been using</div>
        </div>
        <div className="flex gap-x-10 gap-y-5 items-start px-10 flex-wrap">
          {skillDetails.map((sdetail) => (
            <div
              key={sdetail.category}
              className="text-base border min-w-[305px] rounded-xl py-5 pl-8 border-gray-700"
            >
              <div className="mb-6">{sdetail.category}</div>
              {sdetail.list.map((item) => (
                <div key={item.name} className="flex gap-x-5 items-center mb-3">
                  <div className="bg-gray-700 rounded-full p-2">
                    <img src={item.logo} height={20} width={20} />
                  </div>
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
