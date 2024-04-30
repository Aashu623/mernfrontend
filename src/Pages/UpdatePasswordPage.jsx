import React from "react";
import MetaData from "../Components/layout/MetaData";
import UpdatePassword from "../Components/User/UpdatePassword";


function UpdatePasswordPage() {
  return (
    <>
      <MetaData title={`Reset Password | ECOMMERCE`} />
      <UpdatePassword />
    </>
  );
}

export default UpdatePasswordPage;
