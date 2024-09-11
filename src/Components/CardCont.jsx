import React from "react";
import Card from "./Card";

const CardCont = () => {
  return (
    <div className=" mx-auto p-20  bg-inherit">
      <div className="max-w-screen-xl mx-auto flex gap-2  ">
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
