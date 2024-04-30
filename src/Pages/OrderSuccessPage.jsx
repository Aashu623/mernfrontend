import React from "react";
import OrderSuccess from "../Components/Cart/OrderSuccess";
import MetaData from "../Components/layout/MetaData";

function OrderSuccessPage() {
  
  return (
    <>
      <MetaData title={"Order Success | ECOMMERCE"} />
      <OrderSuccess />
    </>
  );
}

export default OrderSuccessPage;
