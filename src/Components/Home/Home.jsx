import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import ProductCard from "./ProductCard";
import Loader from "../layout/Loader/Loader";
import { clearErrors, getProduct } from "../../actions/productAction.js";
import { CgMouse } from "react-icons/cg";

function Home() {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
