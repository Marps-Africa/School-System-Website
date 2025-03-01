import React from "react";

const Module3 = () => (
  <div className="min-h-screen sticky top-0 bg-cover border-t bg-center  py-10">
    <div className="absolute inset-0 bg-blue-50"></div>
    <div className="relative z-10 flex flex-col  justify-center text-center h-full px-4 lg:px-[5vw] 3xl:px-[10vw]">
      <div className="text-center relative pb-10 lg:pb-15">
        <h3 className="text-xl font-bold text-primary-900 sm:text-3xl lg:text-2xl pb-3">
          Parents/Students App
        </h3>
        <h3 className="text-xl text-gray-800 font-semibold md:max-w-[60vw] mx-auto ">
          Bridge the gap between home and school, creating a collaborative
          learning environment that supports growth and success
        </h3>
        <div className="flex  justify-center pt-3">
          <hr className=" border-b-2 border-gray-800 w-[50vw] " />
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto flex flex-col  lg:flex-row gap-6 overflow-y-scroll lg:overflow-y-hidden">
        <div className="flex-1 space-y-6 text-start text-gray-800">
          <div className="">
            <h4 className="font-semibold text-gray-800">
              Multiple School Management
            </h4>
            <p className="text-gray-700">
              Create, delegate, and manage schools with ease. Simplify your
              administrative tasks with our intuitive platform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              Add-Ons - Enhanced Functionality
            </h4>
            <p className="text-gray-700">
              Unlock additional features for your school with our customizable
              add-ons.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              Streamlined Staff Management
            </h4>
            <p className="text-gray-700">
              Effortlessly assign permissions with role-based staff management.
              Organize and allocate responsibilities with ease.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              Customize Website Settings
            </h4>
            <p className="text-gray-700">
              Take control of the website’s appearance and functionality with
              all-in-one settings management for the web.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 self-start sm:block">
          <img
            src="boyStudent.webp"
            alt="student image"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Module3;
