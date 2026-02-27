import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const handleHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        setActive(id);
      }
    };

    handleHash();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return (
    <header
      className={`${styles.paddingX} fixed top-0 z-30 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 sm:px-6 ${
          scrolled
            ? "border-white/15 bg-black/60 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/10 bg-black/25 backdrop-blur-md"
        }`}
      >
        <a
          href="#about"
          onClick={() => {
            setActive("about");
            setToggle(false);
          }}
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/60 bg-cyan-400/15 text-sm font-extrabold text-cyan-100">
            QN
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Qasem Najm</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-200/90">Full Stack Dev</p>
          </div>
        </a>

        <ul className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 lg:flex">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.id)}
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === nav.id
                    ? "bg-cyan-400/20 text-cyan-100"
                    : "text-[#cfc9e7] hover:bg-white/10 hover:text-white"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className="inline-flex rounded-xl border border-cyan-300 bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/30"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          className="inline-flex rounded-xl border border-white/20 bg-white/5 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <img src={toggle ? close : menu} alt="menu" className="h-6 w-6 object-contain" />
        </button>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/15 bg-black/85 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setActive(nav.id);
                      setToggle(false);
                    }}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active === nav.id
                        ? "bg-cyan-400/20 text-cyan-100"
                        : "text-[#cfc9e7] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
