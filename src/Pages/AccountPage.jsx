import React from "react";
import Account from "../Components/User/Account";
import MetaData from "../Components/layout/MetaData";
import { useSelector } from "react-redux";
function AccountPage() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <MetaData title={`${user.name} | ECOMMERCE`} />
      <Account />
    </>
  );
}

export default AccountPage;
