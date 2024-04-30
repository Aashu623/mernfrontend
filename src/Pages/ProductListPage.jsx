import React from "react";
import ProductList from "../Components/Admin/ProductList";
import MetaData from "../Components/layout/MetaData";
function ProductListPage() {
  return (
    <>
      <MetaData title={"All Products | ECOMMERCE"} />
      <ProductList />
    </>
  );
}

export default ProductListPage;
