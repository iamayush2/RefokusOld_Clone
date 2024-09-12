import React from "react";
import Button from "./Button";

const Product = ({ pro, handleHoverEnter, handleHoverLeave, i }) => {
  return (
    <div
      onMouseEnter={() => handleHoverEnter(i)}
      onMouseLeave={() => handleHoverLeave(i)}
      className="w-full   h-[22vh]  sm:p-0 sm:h-[33vh] hover:bg-sky-900  "
    >
      <div className="  relative  p-4 sm:p-0 max-w-screen-xl mt-7 sm:mt-20 h-full mx-auto flex justify-between items-center  text-white">
        {pro.isHover && (
          <video
            src={pro.src}
            className="z-20 w-[45%] sm:w-[36%] absolute left-2 top-[50%] sm:left-[43%] sm:-translate-x-[50%] -translate-y-[50%] shadow rounded-lg transform delay-75"
            autoPlay
            muted
            loop
          ></video>
        )}

        <h1 className="text-2xl sm:text-6xl font-semibold uppercase">
          {pro.title}
        </h1>

        <div className="w-[45%] text-xs font-light  sm:text-base sm:w-[35%]">
          <p>{pro.desc}</p>
          {pro.isHover && (
            <div className="btncon mt-3 text-black">
              <Button />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
