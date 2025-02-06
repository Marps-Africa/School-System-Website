import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll Down - hide navbar
        setShowNavbar(false);
      } else {
        // Scroll Up - show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white text-gray-800 p-2 transition-transform duration-300 min-h-[12vh] flex items-center${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50 border-b `}
    >
      <div className="max-w-7xl mx-auto cursor-pointer flex lg:justify-end">
        {/* Logo */}
        {/* <img src="/flavicon.png" alt="logo" className="w-10 h-10" /> */}

        {/* Navigation Links */}
        <div className=" gap-6 flex justify-end items-center ">
          <NavLink
            to="/"
            className="text-black font-roboto font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-black font-roboto font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to="/about"
            className="text-black font-roboto font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
          >
            About Us
          </NavLink> */}
          <NavLink
            to="/auth/login"
            className="px-12 py-2 border border-gray-900 text-gray-900 rounded-md text-xl font-semibold hover:bg-blue-500 hover:text-white"
          >
            LOGIN
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
