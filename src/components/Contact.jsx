import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
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
      )
      .then(
        (response) => {
          alert("Email Have Sent...");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          alert("Failed...");
        }
      );
  };

  return (
    <div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 2)}
        className="flex-[0.75] bg-black border-2 p-10 rounded-3xl"
      >
        <h3 className={styles.sectionHeadText}>Contact </h3>
        <h1 style={{ fontSize: 16, fontWeight: "bold" }} className="mt-6">
          <a href="tel:+9647507265615">Phone : 07507265615</a>
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email ?"
              className="bg-white py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              required
              onResize={false}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-white  py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-white hover:text-blue-800 py-3 px-8 rounded-xl outline-none  focus:text-black w-fit text-black font-bold shadow-md shadow-primary"
          >
            {loading ? "Send" : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
