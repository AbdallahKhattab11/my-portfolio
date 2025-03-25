const About = () => {
  return (
    <div id="about" className="about py-10 ">
      <div className="container flex flex-col items-center gap-10">
        <div className="title flex justify-center">
          <h2 className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-[clamp(26px,3vw,32px)] font-semibold nameFont">
            About Me
          </h2>
        </div>
        <div className="content flex flex-col gap-6 text-[16px] md:text-[18px] text-secondary">
          <div className="oneP min-h-[50px] ">
            <p className="leading-8 tracking-wide text-center md:text-left">
              Hey! I'm Abdallah, a passionate <span className="text-blue-400 font-medium">frontend developer</span> with a love
              for crafting dynamic and interactive web experiences. I thrive on
              problem-solving and turning ideas into reality through code.
            </p>
          </div>
          <div className="twoP min-h-[50px]">
            <p className="leading-8 tracking-wide text-center md:text-left">
              I specialize in <span className="text-blue-400 font-medium">React.js</span>, <span className="text-blue-400 font-medium">Tailwind CSS</span>, and <span className="text-blue-400 font-medium">JavaScript</span>, with
              experience in building responsive and user-friendly web
              applications. I also enjoy optimizing performance and enhancing
              UI/UX.
            </p>
          </div>
          <div className="threeP min-h-[50px]">
            <p className="leading-8 tracking-wide text-center md:text-left">
              I’ve built several projects, including a portfolio website,
              interactive web applications, and custom UI components using React
              and Tailwind CSS. I love working on open-source projects and
              contributing to the community.
            </p>
          </div>
          <div className="fourP min-h-[50px]">
            <p className="leading-8 tracking-wide text-center md:text-left">
              I’m always looking to improve my skills and explore new
              technologies. Lately, I’ve been diving into <span className="text-blue-400 font-medium">Next.js</span> and <span className="text-blue-400 font-medium">backend</span> development to expand my expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
