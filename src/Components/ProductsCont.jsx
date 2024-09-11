import React, { useState } from "react";
import Product from "./Product";

const ProductsCont = () => {
  const productdata = [
    {
      title: "Arqitel",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere consequatur deserunt eum illum? Doloribus, molestias? Ad soluta dolores fugiat, aspernatur esse error libero beatae officiis veniam numquam saepe culpa!",
      isHover: false,
      src: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm",
    },
    {
      title: "Ttr",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere consequatur deserunt eum illum? Doloribus, molestias? Ad soluta dolores fugiat, aspernatur esse error libero beatae officiis veniam numquam saepe culpa!",
      isHover: false,
      src: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/brightwave-43.webm",
    },
    {
      title: "yir 2022",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere consequatur deserunt eum illum? Doloribus, molestias? Ad soluta dolores fugiat, aspernatur esse error libero beatae officiis veniam numquam saepe culpa!",
      isHover: false,
      src: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-43.webm",
    },
    {
      title: "yahoo!",
      desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae facere consequatur deserunt eum illum? Doloribus, molestias? Ad soluta dolores fugiat, aspernatur esse error libero beatae officiis veniam numquam saepe culpa!",
      isHover: false,
      src: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm",
    },
  ];

  const [proState, setProState] = useState(productdata);

  const handleHoverEnter = (index) => {
    return setProState(
      proState.map((e, i) => (index === i ? { ...e, isHover: true } : { ...e }))
    );
  };

  const handleHoverLeave = (index) => {
    return setProState(
      proState.map((e, i) =>
        index === i ? { ...e, isHover: false } : { ...e }
      )
    );
  };

  return (
    <div className="bg-inherit pt-10 pb-20">
      {proState.map((e, i) => (
        <Product
          key={i}
          pro={e}
          handleHoverEnter={handleHoverEnter}
          handleHoverLeave={handleHoverLeave}
          i={i}
        />
      ))}
    </div>
  );
};

export default ProductsCont;
