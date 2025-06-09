import React from "react";
import { languages } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


function Language() {
  return (
    
    <div>
      <h1 className="text-center font-bold text-3xl mb-10">Language Skill</h1>
      <div className="grid place-content-center place-items-center grid-row-3 gap-5 mx-12 py-5 ">
        {languages.map((language) => (
      <Tilt key={language.name}>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-80 h-12 green-pink-gradient p-[5px] rounded-[10px]"
          >
            <div
              options={{
                max: 45,
                scale: 0,
                speed: 45,
              }}
              className="bg-white rounded-[10px] p-2 h-[37px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-black text-[16px] font-bold text-center" style={{fontFamily:"serif"}}>
                {language.name}
              </h3>
            </div>
          </motion.div>
        </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Language;
