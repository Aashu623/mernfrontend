import React from "react";
import MetaData from "../Components/layout/MetaData";
import UpdateProfile from "../Components/User/UpdateProfile";
import { useSelector } from "react-redux";
function UpdateProfilePage() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <MetaData title={`${user.name} | ECOMMERCE`} />
      <UpdateProfile />
    </>
  );
}

export default UpdateProfilePage;
