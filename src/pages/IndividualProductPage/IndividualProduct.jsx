import React, { useContext } from 'react';
import styles from './IndividualProduct.module.css';
import { useParams } from 'react-router';
import { DataContext } from '../../contexts/DataContext';

const IndividualProduct = () => {

  const { productId } = useParams();
  console.log(productId)
  const {state, dispatch} = useContext(DataContext);

    const product = state.productList.find((product) => product.id == productId);
    console.log(product)

  const handleAddToCart = () => {
    // Add to cart logic here
  };

  const handleAddToWishlist = () => {
    // Add to wishlist logic here
  };

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={product?.image} alt={product?.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{product?.name}</h3>
        <p className={styles.material}>{product?.material}</p>
        <p className={styles.category}>{product?.category}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product?.price}</span>
          <span className={styles.originalPrice}>${product?.originalPrice}</span>
        </div>
        <div className={styles.rating}>
          {Array.from({ length: product?.rating }, (_, index) => (
            <span key={index} className={styles.star}></span>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className={styles.addToWishlistButton} onClick={handleAddToWishlist}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default IndividualProduct;
