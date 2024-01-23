import { useLocation } from "react-router";
import Filter from "../../components/Filter/FilterComponent";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import { useData } from "../../contexts/DataContext";

import styles from "./ProductList.module.css";
import { useEffect } from "react";

export const ProductListPage = () => {
  const { state } = useData();
  const loction = useLocation();
  const { dispatch } = useData();

  useEffect(() => {
    if (loction.state) {
      dispatch({
        type: "SET_CATEGORYFILTER",
        payload: [...state.categoryFilter, loction.state.categoryName],
      });
    }
  }, []);

  console.log(loction.state);
  const renderProducts = (products) => {
    if (state.priceFilter) {
      if (state.priceFilter == "priceHighToLow") {
        products.sort((a, b) => b.price - a.price);
      }
      if (state.priceFilter == "priceLowToHigh") {
        products.sort((a, b) => a.price - b.price);
      }
    }
    if (state.ratingFilter) {
      products = products.filter((product) => {
        return product.rating == state.ratingFilter;
      });
    }
    if (state.categoryFilter.length > 0) {
      const result = [];
      for (let i = 0; i < state.categoryFilter.length; i++) {
        for (let j = 0; j < products.length; j++) {
          console.log(state.categoryFilter[i], products[j].categoryName);
          if (
            state.categoryFilter[i].toLowerCase() ==
            products[j].categoryName.toLowerCase()
          ) {
            result.push(products[j]);
          }
        }
      }
      console.log(result, "result");
      products = result;
    }
    if (state.searchFilter) {
      products = products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(state.searchFilter.toLowerCase());
      });
    }

    return products;
  };

  console.log(state);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Filter
        // handleFilterChange={handleFilterChange}
        // handleClearFilter={handleClearFilter}
        />
      </div>
      <div className={styles.contentArea}>
        <ProductCardList products={renderProducts(state.productList)} />
      </div>
    </div>
  );
};
