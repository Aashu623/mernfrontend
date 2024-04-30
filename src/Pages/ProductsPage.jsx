import React from "react";
import Header from "../Components/layout/Header/Header";
import Footer from "../Components/layout/Footer/Footer";
import Products from "../Components/Product/Products";
import MetaData from "../Components/layout/MetaData";

function ProductsPage() {
  return (
    <>
      <MetaData title="Products | ECOMMERCE" />
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default ProductsPage;
