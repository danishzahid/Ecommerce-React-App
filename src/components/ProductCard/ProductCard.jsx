import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { addItemToCartHandler } from "../../backend/controllers/CartController";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  const addItemToCartHandler = async (item) => {
    console.log(item);
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify({
          product: item,
        }),
      });

      if (response.status === 201 || response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addItemToWishlistHandler = async (item) => {
    console.log(item);
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify({
          product: item,
        }),
      });

      if (response.status === 201 || response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className={styles.star}>
          &#9733;
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.halfStar}>
          &#9733;
        </span>
      );
    }

    // Add remaining empty stars
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.emptyStar}>
          &#9733;
        </span>
      );
    }

    return stars;
  };
  return (
    <div className={styles.card}>
      <Link to={`/product/${product._id}`}>
        <img
          className={styles.cardImage}
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className={styles.cardInfo}>
        <h3 className={styles.cardTitle}>{product.name}</h3>
        <div className={styles.rating}>
          {renderRatingStars(product.rating)}
          <span className={styles.ratingValue}>{product.rating}/5</span>
        </div>
        <p className={styles.cardPrice}>${product.originalPrice}</p>
        <p className={styles.cardDiscountedPrice}>${product.price}</p>
        <p className={styles.cardMaterial}>Material: {product.material}</p>
        <div className={styles.cardButtons}>
          <button
            onClick={() => {
              addItemToCartHandler(product);
            }}
            className={styles.addButton}
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addItemToWishlistHandler(product);
            }}
            className={styles.wishlistButton}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
