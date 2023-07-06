import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo/logo.jpg";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00539C",
        padding: "10px",
        position: "sticky",
        top: 0,
      }}
    >
      <div>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "150px",
              height: "40px",
            }}
          />
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            width: "200px",
            backgroundColor: "#eea47f",
          }}
        />
      </div>
      <div>
        <Link
          to={"/products"}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "none",
            color: "#eea47f",
          }}
        >
          Products
        </Link>
        <Link
          to={"/wishlist"}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "none",
            color: "#eea47f",
          }}
        >
          Wishlist
        </Link>
        <Link
          to={"/cart"}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "none",
            color: "#eea47f",
          }}
        >
          Cart
        </Link>
        <Link
          to={"/profile"}
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "none",
            color: "#eea47f",
          }}
        >
          Profile
        </Link>
        {/* <button
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#333",
            color: "#fff",
          }}
        >
          Dark Mode
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
