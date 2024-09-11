import React from "react";
import Button from "./Button";

const Product = ({ pro, handleHoverEnter, handleHoverLeave, i }) => {
  return (
    <div
      onMouseEnter={() => handleHoverEnter(i)}
      onMouseLeave={() => handleHoverLeave(i)}
      className="w-full h-[33vh]  hover:bg-sky-900  "
    >
      <div className=" relative max-w-screen-xl mt-20 h-full mx-auto flex justify-between items-center  text-white">
        {pro.isHover && (
          <video
            src={pro.src}
            className=" w-[36%] absolute top-[50%] left-[43%] -translate-x-[50%] -translate-y-[50%] shadow rounded-lg transform delay-75"
            autoPlay
            muted
            loop
          ></video>
        )}

        <h1 className="text-6xl font-semibold uppercase">{pro.title}</h1>

        <div className="w-[35%]">
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
