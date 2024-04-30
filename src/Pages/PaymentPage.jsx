import React from "react";
import MetaData from "../Components/layout/MetaData";
import Payment from "../Components/Cart/Payment";

function PaymentPage() {
  return (
    <>
      <MetaData title={"Payment | ECOMMERCE"} />
      <Payment />
    </>
  );
}

export default PaymentPage;
