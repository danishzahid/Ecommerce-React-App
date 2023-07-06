import React from "react";
import Product from "../WishlistProductCard/WishlistProductCard";
import styles from "./Wishlist.module.css";

const Wishlist = ({ wishlist }) => {
  //console.log("haila")
  return (
    <div className={styles.wishlist}>
      <h2 className={styles.title}>Wishlist</h2>
      <div className={styles.productGrid}>
        {wishlist.map((product) => {
          return (
            <Product
              key={product.id}
              // image={product.image}
              // name={product.name}
              // id={product._id}
              // price={product.originalPrice}
              // discountedPrice={product.price}
              // rating={product.rating}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
