import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";

function Account() {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated && (
            <div className="profileContainer">
              <div>
                <h1>My Account</h1>
                <img
                  src={user.avatar ? user.avatar.url : "/profile.png"}
                  alt="user"
                />
                <Link to="/me/update">Edit Profile</Link>
              </div>
              <div>
                <div>
                  <h4>Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h4>Joined On</h4>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
                <div>
                  <Link to="/orders/me">My Orders</Link>
                  <Link to="/password/update">Change Password</Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Account;
