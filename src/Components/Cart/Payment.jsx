import React, { useEffect, useRef } from "react";
import "./Payment.css";
import "./Cart.css";
import CheckoutSteps from "./CheckoutSteps";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createOrder, clearErrors } from "../../actions/orderAction";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `https://mern-87y8.onrender.com/api/v1/payment/process`,
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert(result.error.message || "Payment failed");
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          localStorage.removeItem("cartItems");
          dispatch(createOrder(order));
          navigate("/success");
        } else {
          alert("There's some issue while proccessing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert(error);
    }
  };

  useEffect(() => {
    if (error) {
      alert(error.error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>

          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>

          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  );
}

export default Payment;
