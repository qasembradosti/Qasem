import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const focusAreas = [
  {
    title: "Full-Stack Delivery",
    description:
      "I build complete products from frontend UI to backend APIs, with clean architecture and maintainable code.",
  },
  {
    title: "Performance Mindset",
    description:
      "I optimize rendering, API responses, and data access so applications stay fast and reliable as they scale.",
  },
  {
    title: "Business Impact",
    description:
      "I focus on features that improve workflows and solve real user problems, not only technical outputs.",
  },
];

const ServiceCard = ({ title, icon, index }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    className="group relative overflow-hidden rounded-3xl border border-white/15 bg-[#0f1324]/80 p-6 backdrop-blur"
  >
    <div className="pointer-events-none absolute -right-12 -top-10 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl transition group-hover:bg-cyan-400/30" />
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-2">
        <img src={icon} alt={title} className="h-9 w-9 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  </motion.article>
);

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-10 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-blue-500/15 blur-3xl" />

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.12, 1)}
        className="mt-4 max-w-4xl text-[16px] leading-[30px] text-[#c7c3dc]"
      >
        I am a full-stack developer focused on the MERN ecosystem, with hands-on experience in
        building responsive interfaces, secure APIs, and scalable data-driven applications. My
        work combines clean engineering with practical product thinking to deliver software that is
        easy to maintain and useful for real users.
      </motion.p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {focusAreas.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.12, 0.7)}
            className="rounded-2xl border border-white/15 bg-black/35 p-5 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#d0cbe6]">{item.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
