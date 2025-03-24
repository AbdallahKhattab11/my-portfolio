import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import computerAnimation from "../../assets/animation/computer-animation3.json";

const Hero = () => {
  return (
    <div className="hero h-[800px] lg:h-[600px] ">
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
          <div className="btns flex gap-5 mt-8">
            <div className="w-[120px] text-[14px] md:text-[16px] md:w-[150px] h-[50px] bg-blue-500 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <Link to="/projects" className="w-full h-full flex justify-center items-center">
                View Projects
              </Link>
            </div>
            <div className="w-[120px] text-[14px] md:text-[16px] md:w-[150px] h-[50px] border-1 border-blue-500 text-blue-500 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <Link to="/contact" className="w-full h-full flex justify-center items-center">
                Contact Me
              </Link>
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
