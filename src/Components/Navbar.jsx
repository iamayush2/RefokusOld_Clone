import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import AnimateButton from "./AnimateButton";

const Navbar = () => {
  const navitems = ["Home", "Work", "Culture", "", "News"];
  let arrLink = [];

  return (
    <div className="max-w-screen-xl p-6   mx-auto flex justify-between  items-center border-b-[1px] border-white  ">
      <div className="n-right flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="navitems ml-20 flex gap-16 items-center">
          {navitems.map((e, i) => {
            if (e === "") {
              return <div className="w-[1px] h-[33px] bg-white "></div>;
            } else {
              return (
                <a href="#" className="text-white">
                  {i === 1 && (
                    <span className="inline-block w-[8px] h-[8px] mr-2 rounded-full bg-amber-200 align-top mt-2"></span>
                  )}
                  {e}
                </a>
              );
            }
          })}
        </div>
      </div>

      <div>
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
