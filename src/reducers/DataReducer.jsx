import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

export const initialState = {
  categories: [],
  productList: [],
  ratingFilter: null,
  categoryFilter: [],
  priceFilter: null,
  cart: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES":
      return { ...state, categories: action.payload };
      break;
    case "INITIALIZE_PRODUCTS":
      return { ...state, productList: action.payload };
      break;
    case "SET_RATING":
      return { ...state, ratingFilter: action.payload };
      break;
    case "SET_CATEGORYFILTER":
      return { ...state, categoryFilter: action.payload };
      break;
    case "SET_PRICEFILTER":
      return { ...state, priceFilter: action.payload };
      break;
    case "SET_CART":
      return { ...state, cart: action.payload };
    default:
      break;
  }
};
