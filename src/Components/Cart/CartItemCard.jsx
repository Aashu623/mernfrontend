import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { removeItemsFromCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";

function CartItemCard({ item }) {
  const dispatch = useDispatch();
  const deleteFromCart = (id) => {
    dispatch(removeItemsFromCart(item.product));
  };
  return (
    <>
      <div className="CartItemCard">
        <img src={item.image} alt="item" />
        <div>
          <Link to={`/product/${item.product}`}>{item.name}</Link>
          <span>{`Price :${item.price}`}</span>
          <p onClick={() => deleteFromCart(item.product)}>Remove</p>
        </div>
      </div>
    </>
  );
}

export default CartItemCard;
