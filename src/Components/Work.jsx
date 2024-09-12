import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const imagesData = [
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "52%",
      left: "48%",
      isActive: false,
    },
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "46%",
      left: "60%",
      isActive: false,
    },
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "50%",
      left: "52%",
      isActive: false,
    },
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      src: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "51%",
      isActive: false,
    },
  ];

  const [images, setImages] = useState(imagesData);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (l) => {
    const showImage = (arr) => {
      setImages((prev) =>
        prev.map((e, i) =>
          arr.indexOf(i) === -1
            ? { ...e, isActive: false }
            : { ...e, isActive: true }
        )
      );
    };

    switch (Math.floor(l * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 2:
        showImage([0, 1]);
        break;
      case 3:
        showImage([0, 1, 2]);
        break;
      case 4:
        showImage([0, 1, 2, 3]);
        break;
      case 6:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full overflow-hidden">
      <div className=" relative max-w-screen-xl mx-auto  pt-3 text-white">
        <h1 className="text-[44vw] sm:text-[35vw] select-none leading-none text-center font-bold font-['Satoshi'] ">
          work
        </h1>
        <div className="images w-full absolute h-full overflow-hidden top-0">
          {images.map(
            (e, i) =>
              e.isActive && (
                <img
                  style={{ top: e.top, left: e.left }}
                  className=" absolute w-20 sm:w-60 -translate-x-[50%] -translate-y-[50%]"
                  src={e.src}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
