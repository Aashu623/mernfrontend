import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_USER_RESET } from "../../constants/userConstants";
import {
  updateUser,
  clearErrors,
  getUserDetails,
} from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";
function UpdateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user._id !== id) {
      dispatch(getUserDetails(id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("User Updated Successfully");
      navigate("/admin/users");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, navigate, error, updateError, isUpdated, id, user]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    dispatch(updateUser(id, myForm));
  };

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        {updateLoading || loading ? (
          <Loader />
        ) : (
          <div className="newProductContainer">
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updateUserSubmitHandler}
            >
              <h1>Update User</h1>

              <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="User Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <EmailIcon />
                <input
                  type="text"
                  placeholder="User Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <VerifiedUserIcon />
                <select
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  placeholder="Choose Role"
                >
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <Button
                id="createProductbtn"
                type="submit"
                disabled={
                  updateLoading ? true : false || role === "" ? true : false
                }
              >
                Create
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default UpdateUser;
