import React, { useContext } from "react";
import styles from "./CartProductComponent.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const CartProductComponent = ({ image, name, price, qty, id }) => {
  const { user } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);
  const handleCartQuantity = async (action, productId) => {
    console.log(action, productId);
    const fetchedProductAndQuantity = await fetch(
      `/api/user/cart/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify({
          action: { type: action },
        }),
      }
    );
    const fetchedProductAndQuantityData =
      await fetchedProductAndQuantity.json();
    console.log(fetchedProductAndQuantityData);
    dispatch({ type: "SET_CART", payload: fetchedProductAndQuantityData.cart });
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
          <button
            className={styles.quantityButton}
            onClick={() => {
              handleCartQuantity("decrement", id);
            }}
          >
            -
          </button>
          <span className={styles.quantity}>{qty}</span>
          <button
            className={styles.quantityButton}
            onClick={() => {
              handleCartQuantity("increment", id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.moveButton} onClick={handleMoveToWishlist}>
          Move to Wishlist
        </button>
        <button className={styles.removeButton} onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartProductComponent;
