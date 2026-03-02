import { motion } from "framer-motion";
import { styles } from "../styles";
import ProfileImage from '../assets/Qasem.jpg'
const stack = ["React", "Node.js", "Tailwind v4", "MongoDB"];
const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-screen w-full items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -left-40 top-28 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-14 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div
        className={`${styles.paddingX} mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]`}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          <p className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
            Full Stack Developer
          </p>

          <h1 className="text-white font-black leading-tight text-[2rem] xs:text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem]">
            Building fast, scalable products for real users.
          </h1>

          <p className="max-w-2xl text-base text-[#c8c5da] sm:text-lg">
            I&apos;m <span className="font-semibold text-white">Qasem Najm</span>, a developer
            focused on clean interfaces, reliable APIs, and production-ready full-stack systems.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl border border-blue-400 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-500"
            >
              Let&apos;s Work
            </a>
            <a
              href="#work"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-white/10"
            >
              View Experience
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 text-xs font-medium text-[#dfd9ff] backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-600/40 via-cyan-500/20 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/20 bg-black/55 p-5 backdrop-blur-sm">
            <img
              src={ProfileImage}
              alt="Qasem Najm"
              className="h-[420px] w-full rounded-2xl object-cover object-top"
            />
            <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Current Role</p>
              <p className="mt-1 text-lg font-semibold text-white">Full Stack Developer</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex w-full items-center justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
me="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
