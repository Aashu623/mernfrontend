import React, { useState, useEffect } from "react";
import "./ResetPassword.css";
import { resetPassword, clearErrors } from "../../actions/userAction.js";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();
  const { error, success } = useSelector((state) => state.forgotPassword);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert("Password Changed Successfully");
      navigate("/account");
    }
  }, [dispatch, error, navigate, success]);
  return (
    <>
      <div className="resetPasswordContainer">
        <div className="resetPasswordBox">
          <h2 className="resetPasswordHeading">Change Password</h2>
          <form
            className="resetPasswordForm"
            encType="multipart/form-data"
            onSubmit={resetPasswordSubmit}
          >
            <div>
              <LockOpenIcon />
              <input
                type="password"
                placeholder="New Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <LockIcon />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="resetPasswordBtn" />
          </form>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
