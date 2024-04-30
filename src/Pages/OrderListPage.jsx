import React from "react";
import OrderList from "../Components/Admin/OrderList";
import MetaData from "../Components/layout/MetaData";
function OrderListPage() {
  return (
    <>
      <MetaData title={`All Orders | ECOMMERCE`} />
      <OrderList />
    </>
  );
}

export default OrderListPage;
