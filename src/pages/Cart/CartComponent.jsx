import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import CartPage from "../../components/CartPage/CartPage";
import { DataContext } from "../../contexts/DataContext";

export const CartComponent = () => {
  const { state, dispatch } = useContext(DataContext);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch("/api/user/cart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: user.token,
          },
        });
        if (response.status === 200) {
          const responseData = await response.json();
          console.log(responseData);
          //setCart(responseData.cart);
          dispatch({ type: "SET_CART", payload: responseData.cart });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getCart();
  }, []);
  console.log(state.cart);
  return (
    <>
      <CartPage cart={state.cart} />
    </>
  );
};
