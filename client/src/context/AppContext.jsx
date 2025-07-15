import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isloggedin,setisloggedin]=useState(false)
    const [userdata,setuserdata]=useState(false)
    const value = {
        backendUrl,
        isloggedin,
        setisloggedin,
        userdata,
        setisloggedin,

        
    }
    return (
        < AppContext.Provider value={value} >
            {props.children}
            </AppContext.Provider>
    )
}