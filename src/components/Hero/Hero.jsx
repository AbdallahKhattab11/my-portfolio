
import Lottie from "lottie-react";
import computerAnimation from "../../assets/animation/computer-animation3.json";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div id="home" className="hero h-[800px] lg:h-[700px] ">
      <div className="container flex flex-col w-full justify-center lg:flex-row lg:items-center">
        <div className="left w-full h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <div className="img"></div>
          <div className="content text-center lg:text-left text-secondary">
            <h1 className="text-[20px] md:text-[24px] mb-4 nameFont ">
              Hello, I'm{" "}
              <span className="text-[clamp(26px,3vw,45px)] font-semibold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent leading-right ">
                Abdallah Khattab
              </span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-secondary leading-7">
              Frontend developer skilled in React, Tailwind, and modern web
              technologies, crafting smooth and dynamic user experiences.
            </p>
          </div>
          <div className="links flex justify-center gap-4 mt-8">
          <div className="cursor-pointer text-[16px] md:text-[18px] text-secondary leading-7 font-medium ">
              <a
                href="https://github.com/AbdallahKhattab11"
                target="_blank"
                className="text-blue-400 font-medium"
              >
                <FaGithub className="inline-block mr-1 text-[20px] " /> GitHub{" "}
              </a>
            </div>
            <div className="cursor-pointer text-[16px] md:text-[18px] text-secondary leading-7 font-medium ">
              <a
                href="https://www.linkedin.com/in/abdallah-khattab-653729247/"
                target="_blank"
                className="text-blue-400 font-medium"
              >
                <FaLinkedin className="inline-block mr-1 text-[20px] " /> LinkedIn{" "}
              </a>
            </div>
            <div className="cursor-pointer text-[16px] md:text-[18px] text-secondary leading-7 font-medium ">
              <a
                href="https://x.com/Abdallah_kh_1"
                target="_blank"
                className="text-blue-400 font-medium"
              >
                <FaXTwitter className="inline-block mr-1 text-[20px] " /> Twitter{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="right h-1/2 w-full lg:w-1/2 lg:h-full flex justify-end items-center">
          <Lottie animationData={computerAnimation} className="w-full lg:max-w-[500px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
