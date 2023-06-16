import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        position: 'sticky',
        top: 0
      }}
    >
      <div>
        <img
          src="logo.png"
          alt="Logo"
          style={{
            width: '100px',
            height: 'auto',
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          style={{
            padding: '5px',
            borderRadius: '5px',
            border: 'none',
          }}
        />
      </div>
      <div>
        <Link to={"/products"} style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}>
        Products
        </Link>
        <Link to={"/wishlist"} style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}>
        Wishlist
        </Link>
        <Link to={"/cart"} style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}>
        Cart
        </Link>
        <Link to={"/profile"} style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}>
        Profile
        </Link>
        <button
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            padding: '5px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
          }}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
