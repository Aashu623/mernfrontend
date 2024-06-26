import React, { useEffect, useState } from "react";
import "./UpdateProfile.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, clearErrors, updateProfile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import Loader from "../layout/Loader/Loader";
import { MdFace2, MdMailOutline } from "react-icons/md";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Profile Updated Successfully");
      dispatch(loadUser());

      navigate("/account", { replace: true });

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, navigate, user, isUpdated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="updateProfileContainer">
          <div className="updateProfileBox">
            <h2 className="updateProfileHeading">Update Profile</h2>

            <form
              className="updateProfileForm"
              encType="multipart/form-data"
              onSubmit={updateProfileSubmit}
            >
              <div className="updateProfileName">
                <MdFace2 />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="updateProfileEmail">
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

              <div id="updateProfileImage">
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProfileDataChange}
                />
              </div>
              <input
                type="submit"
                value="Update"
                className="updateProfileBtn"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProfile;
