import React from "react";
import { motion } from "framer-motion";

import { languages } from "../constants";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Language = () => {
  return (
    <motion.section
      id="languages"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <div className="pointer-events-none absolute -left-20 top-12 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Communication</p>
        <h2 className={styles.sectionHeadText}>Language Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        I communicate across multicultural teams and client environments with clear technical and
        business-focused communication.
      </motion.p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {languages.map((language, index) => (
          <motion.article
            key={language.name}
            variants={fadeIn("up", "spring", index * 0.12, 0.6)}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f1324]/80 p-5 backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition group-hover:bg-cyan-400/30" />

            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-sm font-semibold text-cyan-100">
                {String(index + 1).padStart(2, "0")}
              </div>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100">
                Active
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">{language.name}</h3>
            <p className="mt-2 text-sm text-[#d3cdea]">Professional communication and teamwork.</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Language;
