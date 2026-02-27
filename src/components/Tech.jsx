import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const categories = ["All", "Frontend", "Backend", "Data", "Cloud/DevOps", "Tools"];

const getCategory = (name) => {
  const label = name.toLowerCase();

  if (
    label.includes("react") ||
    label.includes("next") ||
    label.includes("vue") ||
    label.includes("redux") ||
    label.includes("tailwind") ||
    label.includes("bootstrap") ||
    label.includes("html") ||
    label.includes("css") ||
    label.includes("java script") ||
    label.includes("expo")
  ) {
    return "Frontend";
  }

  if (
    label.includes("node") ||
    label.includes("fast api") ||
    label.includes("python") ||
    label.includes("jwt")
  ) {
    return "Backend";
  }

  if (
    label.includes("mongo") ||
    label.includes("sql") ||
    label.includes("firebase")
  ) {
    return "Data";
  }

  if (
    label.includes("aws") ||
    label.includes("google cloud") ||
    label.includes("docker") ||
    label.includes("npm") ||
    label.includes("git")
  ) {
    return "Cloud/DevOps";
  }

  return "Tools";
};

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categorizedTech = useMemo(
    () =>
      technologies.map((technology) => ({
        ...technology,
        category: getCategory(technology.name),
      })),
    []
  );

  const visibleTech = useMemo(() => {
    if (activeCategory === "All") {
      return categorizedTech;
    }

    return categorizedTech.filter((technology) => technology.category === activeCategory);
  }, [activeCategory, categorizedTech]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stack & Tools</p>
        <h2 className={styles.sectionHeadText}>Tech Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        Technologies I use to design interfaces, build APIs, manage data, and ship reliable
        production systems.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm ${
              activeCategory === category
                ? "border-cyan-300 bg-cyan-400/15 text-cyan-100"
                : "border-white/20 bg-white/5 text-[#d0cae7] hover:border-cyan-300/60 hover:text-cyan-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visibleTech.map((technology, index) => (
          <motion.div
            key={`${activeCategory}-${technology.name}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, delay: index * 0.03, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f1324]/80 px-4 py-5 backdrop-blur"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl transition group-hover:bg-cyan-400/30" />

            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-sm font-semibold text-white">{technology.name}</p>

              <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#c8c3df]">
                {technology.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");
