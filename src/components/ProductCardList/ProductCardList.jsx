import React from 'react';
import styles from './ProductCardList.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductCardList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
