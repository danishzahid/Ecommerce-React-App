import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext";
import Wishlist from "../../components/WishlistCardList/WishlistCardList";

export const WishlistPage = () =>{

    const [wishlist, setWishlist] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        const getWishlist = async () =>{
            try{
                const response = await fetch("/api/user/wishlist",
                {method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    authorization: user.token
                }})
                if(response.status===200){
                    const responseData = await response.json();
                    console.log(responseData)
                    setWishlist(responseData.wishlist)
                }
            }
            catch(e){
                console.log(e)
            }
        }
        getWishlist();
    },[])

    return(
        <>
        <h1>Wishlist</h1>
        <Wishlist wishlist={wishlist}/>
        </>
    )
}