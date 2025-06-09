import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[240px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[5px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 20,
          speed: 45,
        }}
        className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="max-[500px]:mt-[500px]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
          I’m a software developer with a strong passion for building scalable,
          user-friendly applications using the MERN stack (MongoDB, Express.js,
          React, Node.js). I focus on delivering clean, efficient code that not
          only meets technical requirements but also improves business
          processes.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
          <b>Full-Stack Development:</b> I specialize in both frontend and backend
          development. On the frontend, I use React to build dynamic,
          interactive user interfaces that are intuitive and responsive. For the
          backend, I use Node.js and Express.js to build robust, secure RESTful
          APIs that power modern web applications.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
        <b>Database Management:</b> I work with MongoDB to design and optimize
          databases, ensuring fast data access, scalability, and smooth
          integration with the backend. I also ensure the data model aligns with
          the app’s needs to improve performance and reliability.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
        <b>Frontend Technologies:</b> I use React to create reusable components,
          along with Redux Toolkit for state management. I also apply Tailwind
          CSS for fast, responsive designs that ensure a seamless user
          experience across all devices.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
        <b>Backend Development:</b> I’m proficient in developing APIs with Node.js
          and Express.js, including handling user authentication, session
          management, and integrating third-party services. I make sure that the
          backend communicates smoothly with the frontend while maintaining
          security and performance.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
        <b>Problem-Solving & Optimization:</b> I love tackling complex challenges and
          optimizing applications for speed and efficiency. Whether it’s
          refactoring code, reducing database queries, or implementing caching
          strategies, I aim to ensure the best performance for users.
        </p>
        <p className="mt-4 text-white max-[600px]:text-[12px] text-[16px] max-w-3xl leading-[30px]">
          By combining technical expertise with a focus on user experience, I
          build applications that are not only functional but also enjoyable to
          use. My goal is always to create solutions that are easy to maintain,
          scalable, and aligned with the needs of the business.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
