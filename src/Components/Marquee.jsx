import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ img, direction }) => {
  return (
    <div className=" -mx-10  w-[130%] sm:w-[100%]  sm:mx-auto  flex  mt-14 sm:mt-20   overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className=" flex flex-shrink-0   "
      >
        {img.map((e, i) => (
          <img className="mr-8 sm:mr-20" key={i} src={e}></img>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className=" flex flex-shrink-0  "
      >
        {img.map((e, i) => (
          <img className=" mr-8 sm:mr-20" key={i} src={e}></img>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
