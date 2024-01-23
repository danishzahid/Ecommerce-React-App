import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/logo/logo.jpg";
import { useData } from "../../contexts/DataContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.target.length === 0
      ? dispatch({ type: "CLEAR_FILTER" })
      : dispatch({ type: "SET_INPUT", payload: event.target.value });
    navigate("/products");
  };

  return (
    <div className={styles.navbarContainer}>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          onChange={searchHandler}
        />
      </div>
      <div className={styles.navLinks}>
        <Link to={"/products"} className={styles.link}>
          Products
        </Link>
        <Link to={"/wishlist"} className={styles.link}>
          Wishlist
        </Link>
        <Link to={"/cart"} className={styles.link}>
          Cart
        </Link>
        <Link to={"/profile"} className={styles.link}>
          Profile
        </Link>
        {/* <button className={styles.darkModeButton}>
          Dark Mode
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
