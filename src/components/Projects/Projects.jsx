/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

import finexo from "../../assets/images/finexo.jpg";
import SingleProject from "../SingleProject/SingleProject";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const [isExpanded, setIsExpanded] = useState(false);

  const [screenSize, setScreenSize] = useState("sm");

  const projects = [
    {
      id: "p1",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
    {
      id: "p2",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
    {
      id: "p3",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
    {
      id: "p4",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
    {
      id: "p5",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
    {
      id: "p6",
      name: "Finexo",
      img: finexo,
      description:
        "Finexo is a platform for tracking real-time prices, market trends, and analytics of digital currencies like Bitcoin and Ethereum",
      link: "https://finexo-react-tailwind.netlify.app/",
      github: "https://github.com/AbdallahKhattab11/Finexo_template",
      category: "react",
    },
  ];

  const [filterButtons, setFilterButtons] = useState([
    { name: "All Projects", active: true, category: "all" },
    { name: "Html & Css", active: false, category: "html-css" },
    { name: "JavaScript", active: false, category: "js" },
    { name: "React", active: false, category: "react" },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--screen")
          .trim()
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    if (screenSize === "sm") {
      setVisibleProjects(2);
      setIsExpanded(false);
    } else if (screenSize === "md") {
      setVisibleProjects(4);
      setIsExpanded(false);
    } else if (screenSize === "lg") {
      setVisibleProjects(projects.length);
      setIsExpanded(false); // display none
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);


  const handleFilter = (name) => {
    setFilterButtons((prev) =>
      prev.map((b) => ({
        ...b,
        active: b.name === name,
      }))
    );
  };

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleProjects(
        screenSize === "sm" ? 2 : screenSize === "md" ? 4 : projects.length
      );
      setIsExpanded(false);
    } else {
      setVisibleProjects(projects.length);
      setIsExpanded(true);
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (filterButtons[0].active) return true;
    return filterButtons.find((b) => b.category === project.category)?.active;
  });


  return (
    <div id="projects" className="projects py-10 mb-10 lg:mb-0">
      <div className="container flex flex-col gap-10">
        <div className="title flex flex-col gap-10 items-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-[clamp(26px,3vw,32px)] font-semibold nameFont">
            My Projects
          </h1>
          <p className="text-[16px] md:text-[18px] text-secondary leading-7 text-center">
            {" "}
            Here are some of the projects I’ve worked on, using technologies
            like HTML, CSS, JavaScript, and React. Each project represents a
            challenge that helped me grow as a developer!
          </p>
        </div>
        <div className="content text-secondary">
          <div className="filter flex flex-wrap gap-4 justify-center mb-6 text-[16px] md:text-[18px]">
            {filterButtons.map((button) => (
              <button
                key={button.name}
                className={button.active ? "filterBtn active" : "filterBtn"}
                onClick={() => handleFilter(button.name)}
              >
                {button.name}
              </button>
            ))}
          </div>
          <div className="projectsContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
            
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
            
            {screenSize === "sm" || screenSize === "md" ? (
              <div className="absolute -bottom-16 left-0 w-full h-[60px] bg-primary/70 flex items-center justify-center">
                <button
                  type="button"
                  aria-label={isExpanded ? "Show less projects" : "Show more projects"}
                  onClick={handleShowMore}
                  className="cursor-pointer text-secondary flex gap-2 items-center bg-gray-700 px-4 py-2 rounded-lg font-medium text-[16px] hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
