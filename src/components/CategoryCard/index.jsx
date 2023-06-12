import React from 'react';
import styles from "./index.module.css"

const CategoryCard = ({ imageSrc, categoryName }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageSrc} alt={categoryName} />
      <h3 className={styles.cardCategory}>{categoryName}</h3>
    </div>
  );
};

export default CategoryCard;
