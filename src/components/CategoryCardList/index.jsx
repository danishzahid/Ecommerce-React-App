import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import CategoryCard from "../CategoryCard";
import { useData } from "../../contexts/DataContext";

const CategoryCardList = () => {
  const { state } = useData();

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#eea47f",
          margin: "0",
          paddingTop: "5rem",
          color: "#820000",
        }}
      >
        Shop by Categories
      </h1>
      <div className={styles.categoriesContainer}>
        {state.categories.map((category) => (
          <CategoryCard
            key={category.id}
            imageSrc={category.imageSrc}
            categoryName={category.categoryName}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryCardList;
