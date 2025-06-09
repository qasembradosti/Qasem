import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc/index";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d788d",
        color: "white",
        fontSize:15,  
        fontWeight:'bold',
        borderRadius: 15,
        borderWidth:3,
        borderColor:'#1d788d'
      }}
      date={experience.date}
      iconStyle={{ background: "#1d788d"}}
    >
      <div>
        <h3 className="text-white max-[480px]:text-[16px] text-[24px] font-bold">{experience.title}</h3>
        <div
          style={{
            margin: 10,
          }}
          className="mt-4"
        />
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0, color: "white", fontWeight: 600 }}
        >
          [ {experience.company_name} ]
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 max-[480px]:text-[10px] text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl">Experience</h1>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
