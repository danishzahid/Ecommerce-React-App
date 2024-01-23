import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router";

const CategoryCard = ({ imageSrc, categoryName }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        console.log("category card clicked");
        navigate(`/products`, { state: { categoryName } });
      }}
    >
      <img className={styles.cardImage} src={imageSrc} alt={categoryName} />
      <h3 className={styles.cardCategory}>{categoryName}</h3>
    </div>
  );
};

export default CategoryCard;
