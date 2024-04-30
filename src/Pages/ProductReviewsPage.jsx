import React from "react";
import ProductReviews from "../Components/Admin/ProductReviews";
import MetaData from "../Components/layout/MetaData";
function ProductReviewsPage() {
  return (
    <>
      <MetaData title={"Product Reviews | ECOMMERCE"} />
      <ProductReviews />
    </>
  );
}

export default ProductReviewsPage;
