  import React from "react";
  import Module1 from "./Module1";
  import Module2 from "./Module2";
  import Module3 from "./Module3";

  const StickySection2 = () => (
    <div className="min-h-screen bg-cover bg-center">
      <div className="sticky top-0 bg-black bg-opacity-100 text-white border-b py-4 z-20 text-center">
        <h2 className="text-2xl font-semibold">Explore Our Top Features</h2>
      </div>
      <div className="relative z-10 flex flex-col   text-center h-full">
        <Module1 />
        <Module2 />
        <Module3 />
      </div>
    </div>
  );

  export default StickySection2;
