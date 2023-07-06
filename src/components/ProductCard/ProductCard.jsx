import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { addItemToCartHandler } from "../../backend/controllers/CartController";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);

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
        dispatch({ type: "SET_CART", payload: responseData.cart });
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
        dispatch({ type: "SET_WISHLIST", payload: responseData.wishlist });
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
              console.log(state.cart);
              console.log(
                state.cart.filter((item) => item.id == product.id).length
              );
              if (
                state.cart.filter((item) => item.id == product.id).length == 0
              ) {
                console.log("not in cart");
                addItemToCartHandler(product);
              } else {
                console.log("already in cart");
              }
            }}
            className={styles.addButton}
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              console.log("wishlist");
              console.log(state.wishlist);
              console.log(
                state.wishlist.filter((item) => item.id == product.id).length
              );
              if (
                state.wishlist.filter((item) => item.id == product.id).length ==
                0
              ) {
                addItemToWishlistHandler(product);
              } else {
                console.log("already in wishlist");
                toast.error("Already in wishlist", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

                // toast.error("Already in wishlist");
              }
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
