// import { Children } from "react";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = React.createContext();

AppContext.displayName = "CONTEXT";

const initialState = {
    isAuth: false,
    username: null,
    token: null
};
function AppContextProvider({children}) {
    const [authState, setAuthState] = useState(initialState);

    function handleLogin() {
        setAuthState({
            ...authState,
            isAuth: true,
            username: "Albert",
            token: "acd"
        });
    }
    function handleLogout() {
        setAuthState(initialState);
    }
    const value = {
        authState,
        handleLogin,
        handleLogout
        //this is the data you are sharing with all components.
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

//AppContext.Provider → Context ka provider hai. Ye apne andar wale components ko data provide karta hai.
//value={value} → Jo data tumne value variable mein rakha hai, woh context ke through share hoga.
export default AppContextProvider;