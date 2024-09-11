import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={<Navbar />} />
    </Routes>
  );
};

export default Routing;
