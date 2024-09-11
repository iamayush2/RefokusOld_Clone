import React from "react";
import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";
import Work from "./Components/Work";
import "./index.css";
import StripeCont from "./Components/StripeCont";
import AnimateButton from "./Components/AnimateButton";
import ProductsCont from "./Components/ProductsCont";
import MarqueeCont from "./Components/MarqueeCont";
import CardCont from "./Components/CardCont";
import Fotter from "./Components/Fotter";
const App = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-900 select-none "
      style={{ fontFamily: "satoshi" }}
    >
      <Navbar />
      <Work />
      <StripeCont />
      <ProductsCont />
      <MarqueeCont />
      <CardCont />
      <Fotter />
    </div>
  );
};

export default App;
