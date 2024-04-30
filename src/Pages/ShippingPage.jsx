import React from "react";
import MetaData from "../Components/layout/MetaData";
import Shipping from "../Components/Cart/Shipping";

function AccountPage() {
  return (
    <>
      <MetaData title={`Shipping Details | ECOMMERCE`} />
      <Shipping />
    </>
  );
}

export default AccountPage;
