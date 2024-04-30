import React from "react";
import UsersList from "../Components/Admin/UsersList";
import MetaData from "../Components/layout/MetaData";
function UsersListPage() {
  return (
    <>
      <MetaData title={"All Users | ECOMMERCE"} />
      <UsersList />
    </>
  );
}

export default UsersListPage;
