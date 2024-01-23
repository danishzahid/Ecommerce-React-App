import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.brandSection}>
        <h2>Tirhut Khadi Bhandar</h2>
        <p>Fabric of freedom</p>
        <div className={styles.socialIcons}>
          <a href="https://example.com">
            <FaFacebook />
          </a>
          <a href="https://example.com">
            <FaTwitter />
          </a>
          <a href="https://example.com">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.quickLinks}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/wishlist">Wishlist</a>
          </li>
        </ul>
      </div>
      <div className={styles.contactUs}>
        <h4>Contact Us</h4>
        <p>123 Main Street Patna, India</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@tirhutKhadi.com</p>
      </div>
      <div className={styles.copyRight}>
        <p>
          &copy; {new Date().getFullYear()} Tirhut Khadi. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
