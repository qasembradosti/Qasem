import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h1  className="text-center font-bold text-3xl mb-10">
        Computer Skill
      </h1>
      <div className="grid place-items-center grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  p-5 ">
        {technologies.map((technology) => (
          <div
            className="hover:scale-105 gird place-content-center border-[2px] border-[#9c9999] rounded-lg m-[2px] p-[7px]  bg-[#e2e2e2] shadow-lg transition-all"
          >
            <div
              className="w-[70px] grid place-items-center place-content-center h-12"
              key={technology.name}
            >
              <img
                src={technology.icon}
                style={{ height: 35, width: 39 }}
                alt="!"
              />
              <p
              className="text-center font-bold text-black text-[10px]"
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
        <div  id="languages" />
      </div>
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
