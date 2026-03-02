import React from "react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 top-12 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        Three core projects that represent my work across security systems, ecommerce, and
        education management platforms.
      </motion.p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            variants={fadeIn("up", "spring", index * 0.12, 0.7)}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0f1324]/80 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                {project.category}
              </span>
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#d4cee8]">
                Project
              </span>
            </div>

            <h3 className="text-xl font-bold leading-8 text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-[#d0cae7]">{project.summary}</p>

            <ul className="mt-5 space-y-2">
              {project.highlights.map((point, pointIndex) => (
                <li key={`${project.name}-point-${pointIndex}`} className="relative pl-5 text-sm text-[#d5d0ea]">
                  <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-blue-300" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={`${project.name}-${item}`}
                  className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-medium text-[#d9d2ee]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
