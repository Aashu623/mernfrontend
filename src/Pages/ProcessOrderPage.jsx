import React from "react";
import MetaData from "../Components/layout/MetaData";
import { useParams } from "react-router-dom";
import ProcessOrder from "../Components/Admin/ProcessOrder";

function ProcessOrderPage() {
  const { id } = useParams();
  return (
    <>
      <MetaData title={`${id} | ECOMMERCE`} />
      <ProcessOrder />
    </>
  );
}

export default ProcessOrderPage;
