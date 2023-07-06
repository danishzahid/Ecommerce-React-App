import React, { useContext } from "react";
import styles from "./CartProductComponent.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";

const CartProductComponent = ({ product }) => {
  const { image, name, price, qty, _id } = product;
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
    //add to wishlist wala logic lagega yaha pe check ke sath
    // delete from cart bhi karna hoga
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
    handleRemoveFromCart(_id);
  };

  const handleRemoveFromCart = () => {
    // Handle remove from cart functionality here
    const removeProductFromCart = async () => {
      try {
        const response = await fetch(`/api/user/cart/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: user.token,
          },
        });
        if (response.status === 200) {
          const responseData = await response.json();
          console.log(responseData);
          dispatch({ type: "SET_CART", payload: responseData.cart });
        }
      } catch (e) {
        console.log(e);
      }
    };
    removeProductFromCart();
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
              handleCartQuantity("decrement", _id);
            }}
          >
            -
          </button>
          <span className={styles.quantity}>{qty}</span>
          <button
            className={styles.quantityButton}
            onClick={() => {
              handleCartQuantity("increment", _id);
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
