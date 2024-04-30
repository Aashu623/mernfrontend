import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./layout/Header/Header";

function ProtectedRoute({ component }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  });

  return (
    <>
      <Header />
      {component}
    </>
  );
}

export default ProtectedRoute;
