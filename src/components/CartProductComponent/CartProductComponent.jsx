import React from 'react';
import styles from './CartProductComponent.module.css';

const CartProductComponent = ({ image, name, price, quantity }) => {
  const handleIncreaseQuantity = () => {
    // Handle increase quantity functionality here
  };

  const handleDecreaseQuantity = () => {
    // Handle decrease quantity functionality here
  };

  const handleMoveToWishlist = () => {
    // Handle move to wishlist functionality here
  };

  const handleRemoveFromCart = () => {
    // Handle remove from cart functionality here
  };

  return (
    <div className={styles.cartProduct}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>Price: ${price}</p>
        <div className={styles.quantityContainer}>
          <button className={styles.quantityButton} onClick={handleDecreaseQuantity}>-</button>
          <span className={styles.quantity}>{quantity}</span>
          <button className={styles.quantityButton} onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.moveButton} onClick={handleMoveToWishlist}>Move to Wishlist</button>
        <button className={styles.removeButton} onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartProductComponent;
