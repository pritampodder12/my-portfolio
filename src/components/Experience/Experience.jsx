import React from "react";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-36 py-20 flex flex-col items-center gap-y-20"
    >
      <div className="text-2xl text-gray-300 leading-loose text-center">
        <div>&lsaquo; Here&sbquo; you can know me a little more and see my</div>
        <div>
          whole experience as a&nbsp;
          <span className="text-white font-medium">
            Front-End Software Engineer
          </span>
          . /&rsaquo;
        </div>
      </div>
      <button className="bg-gray-300 rounded-full text-base font-bold text-gray-900 px-10 py-3">
        Download CV
      </button>

      {experience.map((exp) => (
        <div
          className="bg-gray-700 rounded-extra p-10 px-20"
          key={exp.employer}
        >
          <div className="grid grid-cols-2 gap-4 text-gray-400 text-xl">
            <div>
              <div className="text-2xl text-white font-semibold leading-loose">
                {exp.role}
              </div>
              <div className="text-purple-300 text-xl leading-loose">
                {exp.employmentType}
              </div>
              <div className="text-base flex items-center gap-x-2">
                <div>{exp.from}</div>
                <div className="h-[6px] w-[6px] rounded bg-green-500" />
                <div>{exp.to}</div>
              </div>
              <div className="text-base">{exp.location}</div>
            </div>
            <div className="text-xl leading-loose space-y-5">
              <div className="font-semibold text-purple-300">
                {exp.employer}
              </div>
              {exp.responsibilities.map((resp) => (
                <div key={resp}>{resp}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
