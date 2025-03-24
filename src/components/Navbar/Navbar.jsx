import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="h-[70px] w-full border-b-1 border-white/10 ">
      <div className="container relative flex items-center justify-between">
        <div className="logo">
          <h1 className="logoFont text-blue-500 text-2xl tracking-wider hover:text-blue-600 transition-all duration-300 cursor-pointer">Dev.Abdallah</h1>
        </div>
        <div className={`menu absolute ${isOpen ? 'h-[220px]' : 'h-0'} z-10 md:z-auto overflow-hidden transition-all duration-300 rounded-2xl top-[70px] left-0 w-full flex flex-col justify-center gap-4 px-5 bg-gray15 md:static md:h-auto md:bg-transparent md:rounded-none md:flex-row md:justify-end lg:gap-7`}>
          {pages.map((page) => (
            <NavLink
              key={page.name}
              to={page.href}
              className={({ isActive }) => ` text-lg hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : 'text-white'}`}
            >
              {page.name}
            </NavLink>
          ))}
        </div>
        <div className="menu-icon cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HiMiniBars3BottomRight className="text-white text-[28px]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
