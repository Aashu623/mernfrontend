import React from "react";
import Cart from "../Components/Cart/Cart";
import Footer from "../Components/layout/Footer/Footer";
import MetaData from "../Components/layout/MetaData";

function Cartpage() {
  return (
    <>
      <MetaData title={"Cart | ECOMMERCE"} />
      <Cart />
      <Footer />
    </>
  );
}

export default Cartpage;
