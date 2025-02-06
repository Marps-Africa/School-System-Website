import React from "react";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-slate-100">
      {/* SVG Image */}
      <img src="/404error.svg" alt="Page Not Found" className="w-96 h-auto" />
      <NavLink
        to="/"
        className="px-12 py-3 mt-5 hover:bg-blue-500 hover:text-white  text-xl  font-semibold border border-gray-800 "
      >
        Back to home
      </NavLink>
    </div>
  );
};

export default NoPage;
