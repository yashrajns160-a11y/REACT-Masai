import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();
function AppContextProvider ({children}) {

    const [isAuth , setAuth] = useState(false);
    const login = () => {
        setAuth(true)
    }
    const logout = () => {
        setAuth(false)
    }

    const value = {isAuth , login ,logout};
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;