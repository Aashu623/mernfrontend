import "./ForgotPassword.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdMailOutline } from "react-icons/md";
import Loader from "../layout/Loader/Loader";
import { clearErrors, forgotPassword } from "../../actions/userAction";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert(message);
      navigate("/login");
    }
  }, [dispatch, error, message, navigate]);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="forgotPasswordContainer">
          <div className="forgotPasswordBox">
            <h2 className="forgotPasswordHeading">Forgot Profile</h2>
            <form
              className="forgotPasswordForm"
              onSubmit={forgotPasswordSubmit}
            >
              <div className="forgotPasswordEmail">
                <MdMailOutline />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input type="submit" value="Send" className="forgotPasswordBtn" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
