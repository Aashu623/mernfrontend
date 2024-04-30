import React, { useEffect } from "react";
import "./MyOrders.css";
import { DataGrid } from "@mui/x-data-grid";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useDispatch, useSelector } from "react-redux";
function MyOrders() {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 300,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemQty",
      headerName: "Items Qty",
      type: "Number",
      minWidth: 250,
    },
    {
      field: "amount",
      headerName: "Amount",
      type: "Number",
      minWidth: 300,
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item) => {
      rows.push({
        itemQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
          <Typography>{user.name}</Typography>
        </div>
      )}
    </>
  );
}

export default MyOrders;
