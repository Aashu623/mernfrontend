import React from "react";
import Header from "../Components/layout/Header/Header";
import Footer from "../Components/layout/Footer/Footer";
import Home from "../Components/Home/Home";
import MetaData from "../Components/layout/MetaData";

function Homepage() {
  return (
    <>
      <MetaData title={"Home | ECOMMERCE"} />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default Homepage;
