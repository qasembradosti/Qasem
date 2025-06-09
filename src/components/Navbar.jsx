import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto cursor-default">
        <Tilt>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full h- green-pink-gradient p-[5px] rounded-[5px]"
          >
            <div
              options={{
                max: 45,
                scale: 0,
                speed: 45,
              }}
              className="bg-white rounded-[5px] p-2 h-[30px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-black text-[12px] font-bold text-center overflow-hidden">
                Qasem Najm Bazid
              </h3>
            </div>
          </motion.div>
        </Tilt>

        <ul className="list-none text-center hidden lg:flex  flex-row gap-5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-red-800 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[38px] h-[38px] object-bottom"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-2 green-pink-gradient border-2 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg`}
          >
            <ul className="list-none flex justify-end items-start  flex-1 flex-col gap-2">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[12px] border-2 border-black bg-white p-1 w-full rounded-lg text-center font-mono ${
                    active === nav.title ? "text-black" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
