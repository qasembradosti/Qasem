import React from "react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/9647507265615";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 448 512"
    aria-hidden="true"
    className="h-7 w-7"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M380.9 97.1C339 55.1 283.2 32 223.9 32C101.5 32 2.2 131.3 2.2 253.7c0 39.1 10.2 77.3 29.6 111L0 480l118.7-31.1c32.6 17.8 69.3 27.2 106.1 27.2h.1c122.3 0 223.9-99.3 223.9-221.7c0-59.3-23.1-115-67.9-157.3zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-70.4 18.5l18.8-68.6l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 54 81.2 54 130.5c0 101.8-82.8 184.5-184.1 184.9zm101.7-138.2c-5.5-2.8-32.8-16.1-37.9-17.9c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 17.9-17.6 21.6c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.6-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30-17.1-41.1c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.8 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.4-5-3.8-10.5-6.6z"
    />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp chat"
      title="WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] ring-4 ring-white/10 transition hover:bg-[#20c55f] md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <WhatsAppIcon />
    </motion.a>
  );
};

export default WhatsAppButton;
