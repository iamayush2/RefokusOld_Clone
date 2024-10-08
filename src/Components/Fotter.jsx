import React from "react";

const Fotter = () => {
  return (
    <div className="w-full p-4 pb-10 sm:pb-0 bg-inherit select-none overflow-hidden gap-2 sm:gap-0">
      <div className="container mx-auto  flex items-start sm:items-center justify-between ">
        <div className=" translate-y-4 sm:translate-y-0 w-[40%] sm:w-[55%] ">
          <h1 className=" text-[12vw] sm:text-[13vw]  font-bold text-white ">
            refokus.
          </h1>
        </div>

        <div className="content  w-[53%]  sm:w-[40%]  sm:translate-y-7  flex  items-start  justify-end">
          {/* socials  */}
          <div className="socials flex flex-col text-xs sm:text-base text-zinc-500 w-[30%]">
            <h1>Socials</h1>
            <div className="links mt-5 sm:mt-10 flex flex-col gap-3 capitalize">
              <p>instagram</p>
              <p>facebook</p>
              <p>linkedin</p>
            </div>
          </div>

          {/* sitemaps  */}
          <div className="socials flex flex-col text-xs sm:text-base text-zinc-500 w-[30%]">
            <h1>Socials</h1>
            <div className="links mt-5 sm:mt-10 flex flex-col gap-1 sm:gap-3 capitalize text-white">
              <p>instagram</p>
              <p>facebook</p>
              <p>linkedin</p>
              <p>linkedin</p>
            </div>
          </div>

          {/* last  */}

          <div className="socials flex flex-col sm:items-end text-xs sm:text-base text-white w-[40%] sm:w-[30%]">
            <h1 className="text-right  w-[100%] sm:w-[80%] ">
              Refokus is pioneering digital agency driven by design and
              empowered by technology
            </h1>
            <div className=" mt-5 sm:mt-7 bg-blue-900 refokus-old-clone.vercel.app sm:px-2 sm:py-1 flex items-center justify-center">
              <img
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
                className="w-[70%]  sm:w-[90%]"
              />
            </div>
          </div>

          {/* finish  */}
        </div>
      </div>
    </div>
  );
};

export default Fotter;
