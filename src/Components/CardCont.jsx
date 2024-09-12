import React from "react";
import Card from "./Card";

const CardCont = () => {
  return (
    <div className=" mx-auto p-10 sm:p-20  bg-inherit">
      <div className=" w-[110%] -mx-4  mt-10 sm:mt-0 sm:max-w-screen-xl sm:mx-auto flex gap-2 overflow-hidden  ">
        <Card
          width={"w-1/3"}
          btmup={false}
          btmdown={true}
          head={"Up Next: News"}
          box={"Insights and behind the scenes"}
        />
        <Card
          width={"w-2/3"}
          btmup={true}
          btmdown={false}
          head={"Get In Touch"}
          box={"Let's get to it, together."}
        />
      </div>
    </div>
  );
};

export default CardCont;
