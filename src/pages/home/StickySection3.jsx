import React from "react";
import { FaHeadset, FaFileAlt, FaCog, FaTools } from "react-icons/fa";

const StickySection3 = () => (
  <div className="min-h-screen sticky top-0 bg-cover bg-center flex items-center justify-center overflow-y-scroll">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100"></div>
    <div className="overflow-y-scroll">
      <div className="relative z-10 flex flex-col items-center justify-center text-center  text-gray-800 px-4">
        <h1 className="text-5xl font-bold mb-5">Custom Package</h1>
        <p className="text-base lg:text-lg mb-16 text-black">
          We're here to offer guidance and assistance, supporting you throughout
          your journey towards success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white w-full overflow-y-scroll  max-w-6xl mx-auto">
          {/* Customer Support */}
          <div className="bg-gray-700 px-8 py-10  shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <FaHeadset className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-lg font-bold mb-2">Customer support</h2>
            <p className="text-md mb-4">
              Need assistance? Connect directly with us for
              support.
            </p>
            <button className="bg-white text-gray-500 px-4 py-2 rounded hover:bg-gray-100">
              Contact Now
            </button>
          </div>
          {/* Documentation */}
          {/* <div className="bg-gray-700 p-6 shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <FaFileAlt className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-lg font-bold mb-2">Documentation</h2>
          <p className="text-md mb-4">
            A complete step-by-step documentation for developers to set up eSchool SaaS.
          </p>
          <button className="bg-white text-gray-500 px-4 py-2 rounded hover:bg-gray-100">
            Read Now
          </button>
        </div> */}
          {/* Installation */}
          <div className="bg-gray-700 p-6 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <FaCog className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-lg font-bold mb-2">Installation</h2>
            <p className="text-md mb-4">
              Don't have coding knowledge? No problem, we will handle
              installation for you.
            </p>
            <button className="bg-white text-gray-500 px-4 py-2 rounded hover:bg-gray-100">
              Get Installation
            </button>
          </div>
          {/* Customization */}
          <div className="bg-gray-700 p-6 shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <FaTools className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-lg font-bold mb-2">Customization</h2>
            <p className="text-md mb-4">
              Need customization in our products? Send us your requirements with
              an explanation.
            </p>
            <button className="bg-white text-gray-500 px-4 py-2 rounded hover:bg-gray-100">
              Get Customization
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StickySection3;
