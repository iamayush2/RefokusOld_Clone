import React from "react";

const Stripe = ({ src, no, imgwidth }) => {
  return (
    <div className="w-[19%]  h-[9vh] gap-2 border-[0.2px] border-zinc-600 flex items-center p-4">
      <div className={`w-[90%] h-full flex items-center  `}>
        <img src={src} alt="" className={`w-[${imgwidth}]`} />
      </div>
      <p className="font-bold text-white">{no}</p>
    </div>
  );
};

export default Stripe;
