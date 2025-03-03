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
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 text-gray-800  p-2 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50 border-b`}
    >
      <div className=" lg:max-w-[80vw] mx-auto cursor-pointer flex justify-end items-center">
        {/* Logo */}
        {/* <img src="/flavicon.png" alt="logo" className="w-10 h-10" /> */}

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <NavLink
            to="/"
            className="text-black font-roboto font-semibold hover:text-orange-400 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-black  font-roboto font-semibold hover:text-orange-400 transition duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to="/about"
            className="text-black  font-roboto font-semibold hover:text-orange-400 transition duration-300 ease-in-out"
          >
            About Us
          </NavLink> */}
          <NavLink
            to="https://login.marps.co.ke/"
            className="px-12 py-3 border transition-all duration-700   text-white  rounded-md text-xl font-semibold bg-blue-500 hover:bg-yellow-500  hover:text-white"
          >
            LOGIN
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
