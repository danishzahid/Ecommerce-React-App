import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <h2 style={{ fontSize: '24px' }}>Company Name</h2>
        <p>Company Moto</p>
        <div>
          <a href="https://example.com" style={{ color: '#fff', marginRight: '10px' }}>
            <FaFacebook />
          </a>
          <a href="https://example.com" style={{ color: '#fff', marginRight: '10px' }}>
            <FaTwitter />
          </a>
          <a href="https://example.com" style={{ color: '#fff', marginRight: '10px' }}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h4 style={{ fontSize: '18px' }}>Quick Links</h4>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>
            <a href="/products" style={{ color: '#fff', textDecoration: 'none' }}>
              Products
            </a>
          </li>
          <li>
            <a href="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
              Cart
            </a>
          </li>
          <li>
            <a href="/wishlist" style={{ color: '#fff', textDecoration: 'none' }}>
              Wishlist
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 style={{ fontSize: '18px' }}>Contact Us</h4>
        <p>123 Main Street, City, Country</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <p>
          &copy; {new Date().getFullYear()} CompanyName. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
