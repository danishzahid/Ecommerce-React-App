import React from 'react';

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
        <a
          href="/products"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}
        >
          Products
        </a>
        <a
          href="/wishlist"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}
        >
          Wishlist
        </a>
        <a
          href="/cart"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}
        >
          Cart
        </a>
        <a
          href="/profile"
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: '#333',
          }}
        >
          Profile
        </a>
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
