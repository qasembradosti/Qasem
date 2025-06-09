import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={` flex items-center flex-col w-full h-screen mx-auto`}>
      <div>
        <img
          src={require("../assets/Qasem.jpg")}
          alt="!"
          className="w-[200px] h-200px] hover:scale-110 rounded-[35%] border-4 mt-[120px]  border-blue-700"
        />
      </div>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className=" flex flex-col justify-center items-center mt-20">
          <div className="w-4 h-4 rounded-full bg-white" />
          <div className="w-1 sm:h-60 h-40 bg-white" />
        </div>

        <div className="mt-20">
          <h1 className={`${styles.heroHeadText} max-[600px]:text-[16px] text-white`}>
            Hi , I'm <span className="text-blue-600">Qasem Najm</span>
          </h1>
          <p className={`text-2xl mt-2 max-[600px]:text-[15px] text-white-100 font-medium`}>
            Im Full Stack Developer <br className="sm:block hidden" />
          </p>

          <p className={` mt-4 max-[600px]:text-[14px] text-white-100`}>
            And im using  <br className="sm:block hidden" />
          </p>
          <ul style={{ listStyleType: "revert", margin: 20, marginLeft: 60 }} className="max-[600px]:text-[12px]">
            <li>React + React Native + Vue</li>
            <li>Node js + Express js + Laravel</li>
          </ul>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
