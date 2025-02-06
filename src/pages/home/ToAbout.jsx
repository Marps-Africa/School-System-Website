import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const words = ["curious", "bold", "excited", "ready"];

const ToAbout = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        To all who are{" "}
        <span>
          <motion.div
            className="relative inline-block text-blue-600 font-extrabold h-14 overflow-hidden sm:text-5xl text-3xl"
            style={{ display: "inline-block" }}
          >
            <motion.div
              animate={{
                y: ["0%", "-100%"], // Moves from 0% to -100%
              }}
              transition={{
                duration: 10,
                ease: "linear", // Smooth transition
                repeat: Infinity, // Loop indefinitely
                repeatType: "loop", // Ensures continuous loop without any break
                delay: 2, // Pause for 2 seconds before starting next word
              }}
            >
              {words.map((word, index) => (
                <div
                  key={index}
                  className="h-14 mb-8 flex items-center"
                  style={{ fontSize: "1.35em" }}
                >
                  {word}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </span>
      </h1>
      <NavLink
        to="/contact-us"
        className="mt-8 px-6 py-3 border font-bold text-xl border-black text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300"
      >
        CONTACT US
      </NavLink>
      <hr className="" />
    </div>
  );
};

export default ToAbout;
