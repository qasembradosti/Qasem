import React, { useState } from "react";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc/index";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const PREVIEW_POINTS = 4;

const ExperienceCard = ({ experience, index }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = experience.points.length > PREVIEW_POINTS;
  const visiblePoints = expanded
    ? experience.points
    : experience.points.slice(0, PREVIEW_POINTS);

  return (
    <div
      className={`relative pl-12 md:pl-0 ${
        index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
      }`}
    >
      <span className="absolute left-[9px] top-8 h-4 w-4 rounded-full border-2 border-cyan-300 bg-blue-500 shadow-[0_0_0_8px_rgba(59,130,246,0.16)] md:left-1/2 md:-translate-x-1/2" />

      <motion.article
        variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.18, 0.75)}
        className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0f1324]/80 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl transition duration-300 group-hover:bg-blue-500/30" />

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            {experience.date}
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#d7d4e7]">
            {experience.company_name}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white sm:text-2xl">{experience.title}</h3>

        <ul className="mt-5 space-y-2">
          {visiblePoints.map((point, pointIndex) => (
            <li
              key={`experience-point-${index}-${pointIndex}`}
              className="relative pl-5 text-sm leading-7 text-[#d3cfea] sm:text-[15px]"
            >
              <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-blue-300" />
              {point}
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-4 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            {expanded ? "Show Less" : `Show More (${experience.points.length - PREVIEW_POINTS})`}
          </button>
        )}
      </motion.article>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I Worked</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        A timeline of roles where I built products, improved workflows, and delivered reliable
        full-stack solutions.
      </motion.p>

      <div className="relative mt-12 space-y-8">
        <div className="pointer-events-none absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-blue-500/10 via-cyan-300/80 to-blue-500/10 md:left-1/2 md:-translate-x-1/2" />

        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
