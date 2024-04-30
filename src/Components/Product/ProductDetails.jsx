import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Carousel from "react-material-ui-carousel";
import ReviewCard from "./ReviewCard";
import { addItemsToCart } from "../../actions/cartAction";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Rating,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));
    setOpen(false);
  };
  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    setQuantity((quantity) => quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  };

  const addToCartHandler = () => {
    if (isAuthenticated) {
      dispatch(addItemsToCart(id, quantity));
      alert("Item added to cart");
    } else {
      const shouldContinue = window.confirm(
        "Please login to access this resource"
      );
      if (shouldContinue) {
        navigate("/login");
      }
    }
  };
  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert("Review submitted succesfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, success, reviewError]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} | ECOMMERCE`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((image, i) => (
                    <img
                      key={i}
                      className="CarouselImage"
                      src={image.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>

            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p>Product #{product._id}</p>
              </div>
              <div className="detailsBlock-2">
                <Rating {...options} />
                <span>{product.numOfReviews} Reviews</span>
              </div>

              <div className="detailsBlock-3">
                <h1>
                  <CurrencyRupeeIcon />
                  {`${product.price}`}
                </h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                  </div>{" "}
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Card
                  </button>
                </div>

                <p>
                  Status:{" "}
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "Out of Stock" : "In Stock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description: <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />
              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              >
                {" "}
              </textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle}>Cancel</Button>
              <Button onClick={reviewSubmitHandler}>Submit</Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
}

export default ProductDetails;
