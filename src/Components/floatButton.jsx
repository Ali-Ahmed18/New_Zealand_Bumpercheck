import React, { useEffect, useState } from "react";
import { MdOutlineMessage } from "react-icons/md";
import { Link } from "react-router-dom";

function FloatButton() {
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
    <>
      <Link to="/contact">
        <div
          className={`${
            !isVisible ? "bottom-[-40px]" : "bottom-10"
          } bg-white z-50 text-2xl text-gray-600 hover:text-white hover:bg-yellow-400 rounded-full shadow-slate-400 shadow-md w-10 grid place-content-center h-10 fixed right-10 transition-all ease-in-out duration-200`}
        >
          <MdOutlineMessage />
        </div>
      </Link>
    </>
  );
}

export default FloatButton;
