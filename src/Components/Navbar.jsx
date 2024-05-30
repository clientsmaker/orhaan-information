import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
// import logo from '../assets/logoupscale.png'
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-700">
      <header className="py-2 absolute z-10 w-full bg-black overflow--hidden">
        <nav className="flex justify-between items-center max-container">
          <div className="flex items-center">
          {/* <img src={logo} className='p-2 w-128 h-32 ' alt="Skep Interiors Logo" /> */}
          <h3 className="ml-10 block font-extrabold text-white text-xl">
              <h1 className="text-2xl font-extrabold sm:text-5xl" style={{ fontFamily: 'Signika, serif', lineHeight: '1.2',color: "#c6b069" }}>
              Orhaan<span className="text-red-700"></span>
              </h1>
              <p className="text-sm font-medium text-white text-center" style={{ fontSize: '15px', marginTop: '-8px' }}>
              Information Technology
              </p>
            </h3>
          </div>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden p-2">
            <li className="font-bold leading-normal hover:scale-110 transition-all ease-in-out text-lg text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/about">About</Link>
            </li>
            <li className="font-bold leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/services">Services</Link>
            </li>
            <li className="font-bold leading-normal text-lg text-white hover:scale-110 transition-all ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="lg:hidden relative">
            <motion.button
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center mr-8"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
            <motion.ul
              className={`absolute z-50 top-full left-0 right-0 rounded-xl bg-white ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              style={{ left: isOpen ? '-40px' : 0 }} // Adjust left position here
            >
              <li className="font-montserrat leading-normal text-lg p-2">
                <Link to="/">Home</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2">
                <Link to="/about">About</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2">
                <Link to="/service">Services</Link>
              </li>
              <li className="font-montserrat leading-normal text-lg p-2">
                <Link to="/contact">Contact</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
