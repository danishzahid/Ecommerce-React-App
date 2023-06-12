import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useLocalStorage("user",{hello:null, bello:null})
    return(
        <AuthContext.Provider value={{setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}