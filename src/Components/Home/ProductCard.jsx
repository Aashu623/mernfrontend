import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function Product({ product }) {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <div className="imgDiv">
        <img src={product.images[0].url} alt={product.name} />
      </div>
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>₹ {product.price}</span>
    </Link>
  );
}

export default Product;
