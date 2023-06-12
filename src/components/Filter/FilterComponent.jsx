import React from 'react';
import { useData } from "../../contexts/DataContext"


import styles from './Filter.module.css';

const Filter = () => {
    const {state,dispatch} = useData()

    const handleFilterByRate = (event)=>{
        dispatch({type: "SET_RATING", payload:(event.target.value)})
    }

    const handleFilterByCategory = (event)=>{
        if(event.target.checked){
          dispatch({
            type:"SET_CATEGORYFILTER",
            payload: [...state.categoryFilter,event.target.value]
          })
        }
        else{
          // ["men","women"]
          // event.target.value = "women"
          const updatedArr = state.categoryFilter.filter(item=> item!=event.target.value)
          dispatch({type: "SET_CATEGORYFILTER",
          payload: updatedArr
          })
        }
    }

    const handleFilterbyPrice = (event) =>{
        dispatch({type: "SET_PRICEFILTER", payload:(event.target.value)})
    }
  return (
    <div className={styles.filterContainer}>
      <h2>Filter</h2>
      <div className={styles.sortBy}>
        <h3>Sort By:</h3>
        <label>
          <input
            type="radio"
            name="sort"
            value="priceHighToLow"
            onChange={(event)=>{
                handleFilterbyPrice(event)
            }}
          />
          Price (High to Low)
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="priceLowToHigh"
            onChange={(event)=>{
                handleFilterbyPrice(event)
            }}
          />
          Price (Low to High)
        </label>
      </div>
      <div className={styles.filterBy}>
        <h3>Filter By:</h3>
        {state.categories.map(category=>{
            return (
                <>
                <label>
                <input
                    type="checkbox"
                    name="category"
                    value={category.categoryName}
                    checked={state.categoryFilter.includes(category.categoryName)}
                    onChange={(event)=>{
                      handleFilterByCategory(event)
                    }}
                /> 
                {category.categoryName}
                </label>
            </>
            )
        })}
        
      </div>
      <div className={styles.filterBy}>
        <h3>Filter By Rating:</h3>
        <p>Rating:{state.ratingFilter}</p>
        <input
          type="range"
          min="1"
          max="5"
          name="rating"
          value={state.ratingFilter}
          onChange={handleFilterByRate}
        />
      </div>
      <button className={styles.clearButton} onClick={()=>{}}>
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
