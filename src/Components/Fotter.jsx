import React from "react";

const Fotter = () => {
  return (
    <div className="w-full pb-6 bg-inherit select-none">
      <div className="container mx-auto  flex items-center justify-between">
        <div className="w-[55%] ">
          <h1 className="text-[13vw]  font-bold text-white ">refokus.</h1>
        </div>

        <div className="content w-[40%]  translate-y-7  flex  items-start justify-end">
          {/* socials  */}
          <div className="socials flex flex-col  text-zinc-500 w-[30%]">
            <h1>Socials</h1>
            <div className="links mt-10 flex flex-col gap-3 capitalize">
              <p>instagram</p>
              <p>facebook</p>
              <p>linkedin</p>
            </div>
          </div>

          {/* sitemaps  */}
          <div className="socials flex flex-col  text-zinc-500 w-[30%]">
            <h1>Socials</h1>
            <div className="links mt-10 flex flex-col gap-3 capitalize text-white">
              <p>instagram</p>
              <p>facebook</p>
              <p>linkedin</p>
              <p>linkedin</p>
            </div>
          </div>

          {/* last  */}

          <div className="socials flex flex-col items-end  text-white w-[30%]">
            <h1 className="text-right w-[80%] ">
              Refokus is pioneering digital agency driven by design and
              empowered by technology
            </h1>
            <div className="mt-7 bg-blue-900 px-2 py-1 flex items-center justify-center">
              <img
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
                className="w-[90%]"
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
