import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_lcxrmot",
        "template_1ha9vip",
        {
          from_name: form.name,
          to_name: "Qasem Bradosti",
          from_email: form.email,
          to_email: "qasem.najim@gmail.com",
          message: form.message,
        },
        "VkT--E-oHvOLp0xqK"
      );

      alert("Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Message failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative grid w-full min-w-0 gap-6 overflow-hidden lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-6 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl" />

      <motion.aside
        variants={fadeIn("right", "spring", 0.1, 0.8)}
        className="w-full min-w-0 rounded-3xl border border-white/15 bg-[#0f1324]/80 p-5 backdrop-blur sm:p-7"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
        <p className="mt-4 break-words text-[15px] leading-7 text-[#c8c4de]">
          Have a project idea or a collaboration in mind? Send me a message and I will get back to
          you soon.
        </p>

        <div className="mt-7 space-y-4">
          <a
            href="tel:+9647508935988"
            className="block min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-cyan-300/60"
          >
            <span className="block text-xs uppercase tracking-[0.14em] text-cyan-200">Phone</span>
            <span className="mt-1 block break-words font-semibold">+964 750 893 5988</span>
          </a>
          <a
            href="mailto:qasem.najim@gmail.com"
            className="block min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-cyan-300/60"
          >
            <span className="block text-xs uppercase tracking-[0.14em] text-cyan-200">Email</span>
            <span className="mt-1 block break-all font-semibold">qasem.najim@gmail.com</span>
          </a>
        </div>
      </motion.aside>

      <motion.div
        variants={fadeIn("left", "spring", 0.15, 0.8)}
        className="w-full min-w-0 rounded-3xl border border-white/15 bg-[#0f1324]/80 p-5 backdrop-blur sm:p-7"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="flex w-full min-w-0 flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d6d2e9]">
              Your Name
            </span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full min-w-0 rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-[#8f88b3] outline-none transition focus:border-cyan-300"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d6d2e9]">
              Email
            </span>
            <input
              type="email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-[#8f88b3] outline-none transition focus:border-cyan-300"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#d6d2e9]">
              Message
            </span>
            <textarea
              rows={7}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full min-w-0 rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-[#8f88b3] outline-none transition focus:border-cyan-300"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl border border-cyan-300 bg-cyan-500/20 px-8 py-3 font-semibold text-cyan-100 transition hover:bg-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
