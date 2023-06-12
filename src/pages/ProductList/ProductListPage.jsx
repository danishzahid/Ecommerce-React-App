import Filter from "../../components/Filter/FilterComponent";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import { useData } from "../../contexts/DataContext"

import styles from './ProductList.module.css';


export const ProductListPage =() =>{

    const {state} = useData()
    const renderProducts =(products)=>{
      if(state.priceFilter){
        if(state.priceFilter=="priceHighToLow"){
           products.sort((a, b) => b.price - a.price)
        }
        if(state.priceFilter=="priceLowToHigh"){
           products.sort((a, b) => a.price - b.price)
        }
      }
      if(state.ratingFilter){
         products = products.filter(product =>{
          return product.rating==state.ratingFilter
        })
  
      }
      if(state.categoryFilter.length >0){
        const result = [];
          for(let i = 0; i<state.categoryFilter.length;i++){
            for(let j=0; j<products.length;j++){
              if(state.categoryFilter[i]==products[j].categoryName){
                result.push(products[j])
              }
            }
          }
          console.log(result)
          products=result;
          
      }
      
        return products;
      
    }

    console.log(state)
    return (

        <div className={styles.container}>
      <div className={styles.sidebar}><Filter
        // handleFilterChange={handleFilterChange}
        // handleClearFilter={handleClearFilter}
      /></div>
      <div className={styles.contentArea}>
      <ProductCardList products={renderProducts(state.productList)} />
      </div>
    </div>
    )
}