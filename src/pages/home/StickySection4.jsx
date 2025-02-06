import React from "react";
import ToAbout from "./ToAbout";

const StickySection4 = () => (
  // <div className="h-[100vh] overflow-scroll no-scrollbar sticky top-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 bg-center">
  <div className="h-[100vh] border-t overflow-scroll no-scrollbar sticky top-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 bg-center">
    <div className="absolute inset-0 bg-opacity-40"></div>
    <div className="relative flex flex-col items-center justify-center text-center h-full px-4">
      <ToAbout />
    </div>
    {/* <hr className="border border-background-400"/> */}
  </div>
);

export default StickySection4;
