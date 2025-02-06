import React from "react";

const StickySection1 = () => (
  <div
    className="h-auto sticky top-0 bg-cover bg-center"
    style={{ backgroundImage: `url('boyStudent.webp')` }}
  >
    <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 text-gray-300 flex flex-col justify-center gap-y-8 lg:gap-y-10 px-4 lg:px-[5vw] 3xl:px-[10vw] py-16 lg:py-32 3xl:py-64">
      {/* Heading */}
      <h2 className="uppercase text-[10vw] leading-tight break-words lg:text-[4rem] font-extrabold text-gray-900">
        Revolutionizing Education
      </h2>

      {/* Content Wrapper */}
      <div className="lg:max-w-[70%]">
        <p className="lg:text-lg 3xl:text-xl text-gray-800 font-medium">
          Our School Management System improves efficiency and enhances
          education by integrating modern solutions tailored to meet
          institutional needs.
          <br />
          <br />
          Manage schedules and track performance seamlessly to streamline
          operations, ensuring smooth and productive school management.
          <br />
          <br />
          Real-time data keeps teachers, students, and parents connected,
          fostering collaboration and driving academic success for everyone
          involved.
          <br />
          <br />
          Empower your institution with robust tools designed for better
          organization, efficient communication, and long-term growth in
          education.
        </p>
      </div>
    </div>
  </div>
);

export default StickySection1;
