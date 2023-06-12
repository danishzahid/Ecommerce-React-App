import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { DataReducer, initialState } from "../reducers/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [state, dispatch] = useReducer(DataReducer, initialState)
    const [loader, setLoader] = useState(false)

    const getProducts = async () =>{
        try{
            const response = await fetch("/api/products")
            if(response.status===200){
                const responseData = await response.json();
                console.log(responseData)
                dispatch({
                    type:"INITIALIZE_PRODUCTS",
                    payload:responseData.products,
                })
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const getCategories = async () =>{
        try{
            const response = await fetch("/api/categories")
            if(response.status ===200){
                const responseData = await response.json();
                dispatch({
                    type:"INITIALIZE_CATEGORIES",
                    payload:responseData.categories
                })
            }
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        getCategories();
        getProducts();
    },[])
    return(
        <DataContext.Provider value={{state, dispatch, loader, setLoader}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);
