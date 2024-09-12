import React, { useEffect, useState } from "react";
import Stripe from "./Stripe";
import { div } from "framer-motion/client";

const StripeCont = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="w-full  mt-[5vh] flex items-center justify-center ">
      <Stripe
        src={
          "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg"
        }
        no={52}
        imgwidth={"90%"}
      />
      <Stripe
        src={
          "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg"
        }
        no={2}
        imgwidth={"80%"}
      />
      <Stripe
        src={
          "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg"
        }
        no={15}
        imgwidth={"80%"}
      />
      {screenWidth > 550 ? (
        <>
          {" "}
          <Stripe
            src={
              "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg"
            }
            no={52}
            imgwidth={"90%"}
          />
          <Stripe
            src={
              "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg"
            }
            no={2}
            imgwidth={"60%"}
          />
          <Stripe
            src={
              "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg"
            }
            no={15}
            imgwidth={"80%"}
          />
        </>
      ) : null}
    </div>
  );
};

export default StripeCont;
