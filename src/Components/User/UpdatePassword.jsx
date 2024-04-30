import React, { useState, useEffect } from "react";
import "./UpdatePassword.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { updatePassword, clearErrors } from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function UpdatePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isUpdated } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Password Changed Successfully");

      navigate("/account");
      dispatch({ type: UPDATE_PASSWORD_RESET });
    }
  }, [dispatch, error, navigate, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="updatePasswordContainer">
          <div className="updatePasswordBox">
            <h2 className="updatePasswordHeading">Update Profile</h2>

            <form
              className="updatePasswordForm"
              encType="multipart/form-data"
              onSubmit={updatePasswordSubmit}
            >
              <div className="loginPassword">
                <VpnKeyIcon />
                <input
                  type="password"
                  placeholder="Old Password"
                  required
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                <LockOpenIcon />
                <input
                  type="password"
                  placeholder="New Password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="loginPassword">
                <LockIcon />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Change"
                className="updatePasswordBtn"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdatePassword;
