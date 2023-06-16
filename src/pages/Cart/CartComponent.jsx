import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import CartPage from "../../components/CartPage/CartPage";

export const CartComponent = () =>{
    const [cart, setCart] = useState([])

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const getCart = async () =>{  
            try{
                const response = await fetch("/api/user/cart",
                 {method:"GET",
                headers:{
                  "Content-Type":"application/json",
                  authorization: user.token
                }})
                if(response.status===200){
                    const responseData = await response.json();
                    console.log(responseData)
                    setCart(responseData.cart)
                }
            }
            catch(e){
                console.log(e)
            }
        }
        getCart();
    },[])
    return (
        <>
        <CartPage cart={cart}/> 
        </>

)
}