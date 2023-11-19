import React,  { createContext, useState , useContext } from "react";

const UserNameContext = createContext("");

export const useText = () =>{
    return useContext(UserNameContext)
}

export function UserNameProvider ({children}){
    const [text, setText] = useState("");

    return <UserNameContext.Provider value={{ text, setText }}>
            {children}
        </UserNameContext.Provider>
    
}
