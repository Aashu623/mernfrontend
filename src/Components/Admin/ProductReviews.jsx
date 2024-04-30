import React, { useEffect, useState } from "react";
import "./ProductReviews.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "./Sidebar";
import {
  clearErrors,
  deleteReviews,
  getAllReviews,
} from "../../actions/productAction";
import { DELETE_REVIEW_RESET } from "../../constants/productConstants";

function ProductReviews() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [productId, setProductId] = useState("");
  const {
    error: deleteError,
    isDeleted,
    loading,
  } = useSelector((state) => state.review);

  const { error, reviews } = useSelector((state) => state.productReviews);

  const deleteReviewHandler = (reviewid) => {
    dispatch(deleteReviews(reviewid, productId));
  };

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews(productId));
  };

  const columns = [
    { field: "id", headerName: "Review ID", minWidth: 250, flex: 0.5 },
    { field: "user", headerName: "User Name", minWidth: 200, flex: 0.3 },
    {
      field: "comment",
      headerName: "Comment",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "number",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => deleteReviewHandler(params.id)}>
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  reviews &&
    reviews.forEach((item) => {
      rows.push({
        id: item._id,
        rating: item.rating,
        comment: item.comment,
        user: item.name,
      });
    });

  useEffect(() => {
    if (productId.length === 24) {
      dispatch(getAllReviews(productId));
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors);
    }
    if (isDeleted) {
      alert("Review Deleted Successfully");
      navigate("/admin/reviews");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, error, isDeleted, deleteError, navigate, productId]);

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="productReviewsContainer">
          <form
            className="productReviewsForm"
            encType="multipart/form-data"
            onSubmit={productReviewsSubmitHandler}
          >
            <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>

            <div>
              <StarIcon />
              <input
                type="text"
                placeholder="Product ID"
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>

            <Button
              id="createProductbtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Search
            </Button>
          </form>
          {reviews && reviews.length > 0 ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableRowSelectionOnClick
              className="productListTable"
              autoHeight
            />
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductReviews;
