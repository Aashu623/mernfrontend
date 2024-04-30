import React from "react";
import NewProduct from "../Components/Admin/NewProduct";
import MetaData from "../Components/layout/MetaData";

function NewProductPage() {
  return (
    <>
      <MetaData title={"New Product | ECOMMERCE"} />
      <NewProduct />
    </>
  );
}

export default NewProductPage;
