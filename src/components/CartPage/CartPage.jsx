import React from "react";
import CartProductComponent from "../CartProductComponent/CartProductComponent";
import styles from "./CartPage.module.css";
import Checkout from "../checkout/Checkout";

const CartPage = ({ cart }) => {
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartProductListing}>
        <h2 className={styles.heading}>Cart Items</h2>
        {cart.map((item) => {
          return (
            <CartProductComponent
              key={item.id}
              // image={item.image}
              // name={item.name}
              // price={item.price}
              // qty={item.qty}
              // id={item._id}
              product={item}
            />
          );
        })}
      </div>
      <div className={styles.checkout}>
        <h2 className={styles.heading}>Checkout</h2>
        {/* Placeholder for checkout component */}
        <Checkout />
      </div>
    </div>
  );
};

export default CartPage;
