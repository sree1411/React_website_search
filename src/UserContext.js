import { createContext, useContext, useState } from "react";


const UserContext = createContext()

export const UserProvider = ({children})=>{

   const [query, setQuery] = useState('')


    return(
        <UserContext.Provider value={{query, setQuery}}>
            {children}
        </UserContext.Provider>
    )
}



export const UserData = ()=> useContext(UserContext)