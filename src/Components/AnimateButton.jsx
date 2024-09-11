import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const AnimateButton = () => {
  return (
    <button className="relative z-10 overflow-hidden w-[10vw] py-6 bg-blue-600 text-white font-semibold rounded-lg group">
      <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-full">
        Hover Me
        <BsArrowReturnRight className="mt-[1.5px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        Hover Me
        <BsArrowReturnRight className="mt-[1.5px]" />
      </div>
    </button>
  );
};

export default AnimateButton;
