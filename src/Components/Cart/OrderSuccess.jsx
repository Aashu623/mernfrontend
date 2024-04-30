import React, { useEffect } from "react";
import "./OrderSuccess.css";
import { clearCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function OrderSuccess() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
  });
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your Order has been Placed successfully</Typography>
      <Link to="/orders/me">View Order</Link>
    </div>
  );
}

export default OrderSuccess;
