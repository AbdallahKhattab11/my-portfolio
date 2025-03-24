import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700  min-h-[50px] md:h-[50px] ">
      <div className="container flex flex-col gap-5 py-5  md:py-0 md:flex-row md:justify-between items-center">
        <div className="">
          <p className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium text-center md:text-left">
            © 2025 Abdallah Khattab. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-[16px] md:text-[18px] text-secondary cursor-pointer">
            <a
              href="https://github.com/AbdallahKhattab11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="inline-block mr-1 text-[20px] -mt-1" />{" "}
              GitHub{" "}
            </a>
          </div>
          <div className="text-[16px] md:text-[18px] text-secondary cursor-pointer">
            <a
              href="https://www.linkedin.com/in/abdallah-khattab-653729247/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="inline-block mr-1 text-[20px] -mt-1" />{" "}
              LinkedIn{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
