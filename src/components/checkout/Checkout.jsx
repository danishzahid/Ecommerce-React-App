import React from "react";
import styles from "./Checkout.module.css";

const Checkout = ({ totalItems, totalPrice, discountedPrice, discount }) => {
  return (
    <div className={styles.checkout}>
      <h2 className={styles.title}>Price Details</h2>
      <div className={styles.row}>
        <span className={styles.column}>Total Items:</span>
        <span className={styles.column}>{totalItems}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.column}>Price:</span>
        <span className={styles.column}>${totalPrice}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.column}>Discounts:</span>
        <span className={styles.column}>${discountedPrice}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.column}>Delivery Charge:</span>
        <span className={styles.column}>Free</span>
      </div>
      <div className={styles.totalRow}>
        <span className={styles.totalColumn}>Total Price:</span>
        <span className={styles.totalColumn}>
          ${totalPrice - discountedPrice}
        </span>
      </div>
      <p className={styles.savedText}>You saved ${discount} on your order.</p>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
};

export default Checkout;
