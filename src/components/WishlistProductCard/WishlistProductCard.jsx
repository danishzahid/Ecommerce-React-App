import React from 'react';
import styles from './WishlistProductCard.module.css';

const Product = ({ image, name, price, discountedPrice, rating }) => {
  const handleMoveToCart = () => {
    // Handle move to cart functionality here
  };

  const handleRemoveFromWishlist = () => {
    // Handle remove from wishlist functionality here
  };

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <button className={styles.removeButton} onClick={handleRemoveFromWishlist}>
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.price}>${price}</span>
        <span className={styles.discountedPrice}>{discountedPrice}</span>
      </div>
      <div className={styles.rating}>
        <i className="fas fa-star"></i>
        <span>{rating}</span>
      </div>
      <button className={styles.moveToCartButton} onClick={handleMoveToCart}>
        Move to Cart
      </button>
    </div>
  );
};

export default Product;
