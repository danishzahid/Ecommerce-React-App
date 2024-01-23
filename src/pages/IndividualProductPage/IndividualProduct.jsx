import React, { useContext, useEffect, useState } from "react";
import styles from "./IndividualProduct.module.css";
import { useParams } from "react-router";
import { DataContext } from "../../contexts/DataContext";
import { AuthContext } from "../../contexts/AuthContext";

const IndividualProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  const { state, dispatch } = useContext(DataContext);
  const [product, setProduct] = useState({});
  const { user } = useContext(AuthContext);

  // const product = state.productList.find((product) => product.id == productId);
  // console.log(product)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const responseData = await response.json();
        console.log(responseData);
        setProduct(responseData.product);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    // Add to cart logic here
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
  };

  const handleAddToWishlist = () => {
    // Add to wishlist logic here
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
    addItemToWishlistHandler(product);
  };
  const renderStars = () => {
    const ratingArray = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
      <div className={styles.rating}>
        {ratingArray.map((star) => (
          <i
            key={star}
            className={`fas fa-star ${
              star <= product.rating ? styles.filledStar : styles.emptyStar
            }`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product?.image}
          alt={product?.name}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{product?.name}</h3>
        <p className={styles.material}>{product?.material}</p>
        <p className={styles.category}>{product?.category}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product?.price}</span>
          <span className={styles.originalPrice}>
            ${product?.originalPrice}
          </span>
        </div>
        {/* <div className={styles.rating}>
          {Array.from({ length: product?.rating }, (_, index) => (
            <span key={index} className={styles.star}></span>
          ))}
        </div> */}
        <div className={styles.rating}>{renderStars()}</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button
          className={styles.addToWishlistButton}
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default IndividualProduct;
