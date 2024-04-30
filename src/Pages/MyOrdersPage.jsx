import React from "react";
import MyOrders from "../Components/Order/MyOrders";
import MetaData from "../Components/layout/MetaData";

function MyOrdersPage() {

  return (
    <>
      <MetaData title={`My Orders | ECOMMERCE`} />
      <MyOrders />
    </>
  );
}

export default MyOrdersPage;
