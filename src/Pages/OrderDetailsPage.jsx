import React from "react";
import OrderDetails from "../Components/Order/OrderDetails";
import MetaData from "../Components/layout/MetaData";
import Footer from "../Components/layout/Footer/Footer";

function OrderDetailsPage() {
  return (
    <>
      <MetaData title={"Order Details | ECOMMERCE"} />
      <OrderDetails />
      <Footer />
    </>
  );
}

export default OrderDetailsPage;
