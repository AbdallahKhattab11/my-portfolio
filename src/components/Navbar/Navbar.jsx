/* eslint-disable react-hooks/exhaustive-deps */
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const pages = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    pages.forEach(({ href }) => {
      const section = document.getElementById(href);
      if (section) observer.observe(section);
    });

    return () => {
      pages.forEach(({ href }) => {
        const section = document.getElementById(href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav  className="h-[70px] w-full border-b-1 border-white/10 ">
      <div className="container relative flex items-center justify-between">
        <div className="logo">
          <h1 className="logoFont text-blue-500 text-2xl tracking-wider hover:text-blue-600 transition-all duration-300 cursor-pointer">
            Dev.Abdallah
          </h1>
        </div>

        <div
          className={`menu absolute ${
            isOpen ? "h-[220px]" : "h-0"
          } z-10 md:z-auto overflow-hidden transition-all duration-300 rounded-2xl top-[70px] left-0 w-full flex flex-col justify-center gap-4 px-5 bg-gray15 md:static md:h-auto md:bg-transparent md:rounded-none md:flex-row md:justify-end lg:gap-7`}
        >
          {pages.map(({ name, href }) => (
            <button
              type="button"
              onClick={() => scrollToSection(href)}
              key={href}
              className={`text-lg transition-all duration-300 cursor-pointer ${
                activeSection === href ? "text-blue-500 font-bold" : "hover:text-blue-500"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div
          className="menu-icon cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMiniBars3BottomRight className="text-white text-[28px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
