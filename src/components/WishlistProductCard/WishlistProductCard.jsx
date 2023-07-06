import React, { useContext } from "react";
import styles from "./WishlistProductCard.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const Product = ({ product }) => {
  const { image, name, id, price, discountedPrice, rating } = product;
  const { user } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);

  const handleMoveToCart = () => {
    // Handle move to cart functionality here
    //add to cart wala logic lagega yaha pe check ke sath
    // delete from wishlist bhi karna hoga
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
    addItemToCartHandler(product);
    handleRemoveFromWishlist(product._id);
  };

  const handleRemoveFromWishlist = () => {
    // Handle remove from wishlist functionality here
    console.log("remove from wishlist");
    const removeProductFromWishlist = async () => {
      try {
        const response = await fetch(`/api/user/wishlist/${product._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: user.token,
          },
        });
        if (response.status === 200) {
          const responseData = await response.json();
          console.log("wishlist", responseData);
          dispatch({ type: "SET_WISHLIST", payload: responseData.wishlist });
        }
      } catch (e) {
        console.log(e);
      }
    };
    removeProductFromWishlist();
  };

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <button
          className={styles.removeButton}
          onClick={() => {
            handleRemoveFromWishlist(id);
          }}
        >
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
