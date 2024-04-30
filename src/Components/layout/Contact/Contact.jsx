import React from "react";
import "./Contact.css";
import Button from "@mui/material/Button";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <>
      <MetaData title="Contact | Ecommerce" />
      <div className="contactContainer">
        <a className="mailBtn" href="mailto:aashukushwah53678@gmail.com">
          <Button>Contact: aashukushwah53678@gmail.com</Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
