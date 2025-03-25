import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-5 right-5 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <button 
        className="cursor-pointer text-secondary flex gap-2 items-center bg-gray-800 px-4 py-2 rounded-lg font-medium text-[16px] hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Go to top"
        type="button"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default GoTop;
