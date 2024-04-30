import React from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import "./NotFound.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ReportProblemIcon />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
