import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      className={`fixed inset-x-0 top-0 z-30 w-full overflow-x-clip px-2 transition-all duration-300 sm:px-6 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between overflow-hidden rounded-2xl border px-2.5 py-2.5 sm:px-5 sm:py-3 ${
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
          className="group flex min-w-0 items-center gap-2 pr-1.5 sm:pr-2"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-300/60 bg-cyan-400/15 text-xs font-extrabold text-cyan-100 sm:h-10 sm:w-10 sm:text-sm">
            QN
          </span>
          <div className="min-w-0 leading-tight max-[370px]:hidden">
            <p className="truncate text-sm font-semibold text-white">
              Qasem Najm
            </p>
            <p className="hidden text-[11px] uppercase tracking-[0.14em] text-cyan-200/90 min-[430px]:block">
              Full Stack Dev
            </p>
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
          className="inline-flex shrink-0 rounded-xl border border-white/20 bg-white/5 p-1.5 sm:p-2 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <img src={toggle ? close : menu} alt="menu" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-2xl border border-white/15 bg-black/85 p-3.5 backdrop-blur-xl lg:hidden"
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
