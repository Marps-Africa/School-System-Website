import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('School-image.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/60 lg:from-black lg:via-black/70 lg:to-black/40"></div>

      <div className="relative z-10  px-4 lg:px-[5vw] 3xl:px-[10vw] py-16 lg:py-32 3xl:py-64 flex flex-col items-start lg:w-1/2 justify-center text-center h-full text-white">
        <h1 className="text-5xl font-bold ">Educator</h1>
        <div className="w-[10vw] mb-6 border-2 border-primary-900"></div>
        <p className="text-xl mb-8 text-start">
          Manage your school easily with our all-in-one system for records,
          grading, and communication.
        </p>
        <NavLink
          to="/auth/login"
          className="px-12 py-3 border  border-primary-900  text-white text-xl font-semibold hover:bg-primary-900  hover:text-white transition-all"
        >
          LOG IN
        </NavLink>
      </div>
    </div>
  );
};

export default Section1;
