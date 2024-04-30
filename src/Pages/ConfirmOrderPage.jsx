import React from "react";
import ConfirmOrder from "../Components/Cart/ConfirmOrder";
import MetaData from "../Components/layout/MetaData";

function ConfirmOrderPage() {
  return (
    <>
      <MetaData title={"Confirm Order | ECOMMERCE"} />
      <ConfirmOrder />
    </>
  );
}

export default ConfirmOrderPage;
