import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.scrollTo({
        top: 0,
      });
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  });
  return (
    <nav>
      <div className="toggle-icon" onClick={(e) => setOpen(!open)}>
        {open ? (
          <CloseIcon style={{ fontSize: 50 }} />
        ) : (
          <MenuIcon style={{ fontSize: 50 }} />
        )}
      </div>
      <div className={open ? "show nav-container" : "nav-container"}>
        <ul>
          <li>
            <Link to="/" onClick={(e) => setOpen(false)}>
              <HomeIcon style={{ fontSize: 35 }} className="material-icons" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={(e) => setOpen(false)}>
              <ShoppingCartIcon
                style={{ fontSize: 35 }}
                className="material-icons"
              />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={(e) => setOpen(false)}>
              <InfoIcon style={{ fontSize: 35 }} className="material-icons" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={(e) => setOpen(false)}>
              <CallIcon style={{ fontSize: 35 }} className="material-icons" />
              <span>Contact</span>
            </Link>
          </li>

          {isAuthenticated ? (
            <li>
              <Link to="/account" onClick={(e) => setOpen(false)}>
                <AccountBoxIcon
                  style={{ fontSize: 35 }}
                  className="material-icons"
                />
                <span>Profile</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={(e) => setOpen(false)}>
                <LoginIcon
                  style={{ fontSize: 35 }}
                  className="material-icons"
                />
                <span>Login</span>
              </Link>
            </li>
          )}

          <li>
            <Link to="/search" onClick={(e) => setOpen(false)}>
              <SearchIcon style={{ fontSize: 35 }} className="material-icons" />
              <span>Search</span>
            </Link>
          </li>
        </ul>
      </div>
      {!loading && isAuthenticated && <Profile user={user} />}
    </nav>
  );
}

export default Header;
