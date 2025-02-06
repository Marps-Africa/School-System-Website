import React from 'react';
import { Loader as LucideLoader } from "lucide-react";


const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <LucideLoader className="w-8 h-8 animate-spin text-blue-600"/>
    </div>

    // <div className="flex items-center justify-center h-screen">
    //   <div className="flex items-center justify-center w-14 h-14 border-[3px] border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin">
    //     <div className="w-3 h-3 mx-auto border-[3px] border-blue-500 rounded-full animate-pulse"></div>
    //   </div>
    // </div>
  );
};

export default Loader;
