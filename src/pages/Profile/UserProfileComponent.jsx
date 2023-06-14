import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const UserProfile = () =>{
    const {user,setUser} = useContext(AuthContext);
    return(
        <><h1>Hello {user.user.name}</h1>
        <h2>Email: {user.user.email}</h2>
        <button onClick={()=>{
            setUser({user:null, token:null})
        }} >Logout</button>
        </>
    )
}