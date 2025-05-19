import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const navData = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Deals', path: '/deals' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };



  return (
    <div
      className={`${scrolling ? 'bg-white' : 'bg-slate-100'} ${scrolling ? 'shadow-md' : ''
        }max-w-[1300px] mx-auto backdrop-blur-[10px] bg-opacity-90 fixed w-[100%] top-0 z-[2000] transition-all ease-in-out duration-300`}
    >
      <nav className="flex justify-between items-center py-4 px-6 w-[85%] mx-auto">
        <Link to="/">
          <div className="cursor-pointer">
          <h1 className='font-extrabold text-2xl'><span className='text-[#00bce2]'>BUMPER</span>CHECK</h1>
          </div>
        </Link>
        <div
          className="lg:hidden cursor-pointer text-xl"
          onClick={toggleMenu}
        >
          <div>
            <button className="relative group border-none">
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  duration-200 ">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                  <div className="bg-gray-800 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                  <div className="bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          {navData.map((link, index) => (
            <div
              key={index}
              onClick={() => toggleMenu()}
              className={`${link.path === location.pathname ? 'font-bold text-black' : "text-[#666]"
                } group  relative cursor-pointer ml-4 text-md  hover:text-black`}
            >
              <Link to={link.path}>{link.name}</Link>
              <div className="opacity-0 absolute w-[15px] right-[50%] translate-x-[50%] -bottom-1 group-hover:opacity-[1] bg-[#00bce2] h-[2px] transition-all ease-in"></div>
            </div>
          ))}
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 h-[100vh] bg-black bg-opacity-50 z-50 ${menuOpen ? 'visible' : 'hidden'
          }`}
        onClick={toggleMenu}
      ></div>

      <motion.div
        className={`lg:hidden bg-white fixed z-50 h-[100vh] top-0 w-[60%] max-w-[200px] backdrop-blur-sm left-0 transform transition-transform ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-[-400px]'
          }`}
      >
        <div className="cursor-pointer text-xl mt-4 ml-3">
          <Link to="/">
            <h1 className='font-extrabold text-2xl'><span className='text-[#00bce2]'>BUMPER</span>CHECK</h1>

          </Link>
        </div>
        <div className="flex flex-col text-sm font-medium mt-6">

          {navData.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              onClick={() => {
                toggleMenu();
              }}
              className="cursor-pointer p-3 font-semibold border-t border-b text-gray-600 hover:text-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Nav;
