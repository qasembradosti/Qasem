import React from "react";
import { motion } from "framer-motion";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        My university studies built the technical foundation behind my work in software
        development, systems thinking, and practical problem solving.
      </motion.p>

      <div className="mt-10 grid gap-6">
        {education.map((item, index) => (
          <motion.article
            key={`${item.school}-${item.degree}`}
            variants={fadeIn("up", "spring", index * 0.12, 0.7)}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0f1324]/80 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/15 blur-3xl transition duration-300 group-hover:bg-cyan-500/25" />

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                {item.date}
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#d7d4e7]">
                Graduated
              </span>
            </div>

            <h3 className="text-xl font-bold text-white sm:text-2xl">{item.degree}</h3>
            <p className="mt-2 text-[15px] font-medium text-cyan-100">{item.school}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d3cfea] sm:text-[15px]">
              {item.summary}
            </p>

            <ul className="mt-5 space-y-2">
              {item.details.map((point, pointIndex) => (
                <li
                  key={`${item.school}-detail-${pointIndex}`}
                  className="relative pl-5 text-sm leading-7 text-[#d3cfea] sm:text-[15px]"
                >
                  <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-blue-300" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
