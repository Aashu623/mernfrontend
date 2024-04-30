import React, { useEffect } from "react";
import Dashboard from "../Components/Admin/Dashboard";
import MetaData from "../Components/layout/MetaData";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../actions/orderAction";
import { getAdminProducts } from "../actions/productAction";
import { getAllUsers } from "../actions/userAction";

function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  });
  
  return (
    <>
      <MetaData title={"Admin Dashboard | ECOMMERCE"} />
      <Dashboard />
    </>
  );
}

export default DashboardPage;
