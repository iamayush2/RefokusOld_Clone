import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = () => {
  return (
    <button className="relative z-10 overflow-hidden px-[5vw] py-4 bg-white text-sm rounded-full  font-medium  hover:bg-sky-100 group">
      <div className="absolute inset-0 flex items-center justify-center gap-8 transform transition-transform duration-300 group-hover:-translate-y-full">
        Get Started
        <BsArrowReturnRight className="mt-[1.5px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center gap-8 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        Get Started
        <BsArrowReturnRight className="mt-[1.5px]" />
      </div>
    </button>
  );
};

export default Button;
