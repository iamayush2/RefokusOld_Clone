import React from "react";
import { GoArrowRight } from "react-icons/go";

const Card = ({ width, btmup, btmdown, head, box }) => {
  return (
    <div
      className={` ${width}   h-[50vw] sm:h-[28vw] p-3 sm:p-5 bg-[#27272A] text-white rounded-lg flex flex-col justify-between hover:bg-[#8B5CF6] hover:cursor-pointer`}
    >
      <div className="pad flex flex-col h-full justify-between hover:sm:p-2 hover:p-1 ">
        <div>
          <div className="flex items-center justify-between ">
            <h3 className="text-[8px] sm:text-lg font-medium"> {head} </h3>
            <GoArrowRight />
          </div>
          <h1 className=" text-sm font-medium sm:text-3xl mt-2 sm:mt-5 sm:font-semibold ">
            {box}
          </h1>
        </div>

        <div className="btm">
          {btmup && (
            <div>
              <h2 className=" text-xl sm:text-7xl font-semibold">
                Start a project
              </h2>
              <button className=" text-xs sm:text-base px-3 py-1 sm:px-5 sm:py-3  mt-4 rounded-full border-[1px]  border-white ">
                Contact Us
              </button>
            </div>
          )}

          {btmdown && (
            <p className=" text-xs sm:text-base sm:font-medium">
              Explore what drives our team.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
