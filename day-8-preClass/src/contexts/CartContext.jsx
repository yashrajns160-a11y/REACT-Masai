
import { createContext, useState } from "react";

export const CartContext = createContext();

// export const CartContextProvider = ({children}) => {

    //children is special type of props.
    //given by react if we use --
    //CartContextProvider to surround <App /> in main.jsx
    //i will be able to use or (receive) <App /> or any other component element in main
    //as a special prop {children} inside this CartContextProvider

//     return <CartContext.Provider>
//         {children}  
//     </CartContext.Provider>;
// }

export const CartContextProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);

    const handleCartUpdate = (value) =>{
        setCartCount(cartCount + value);
    }
    return (
    <CartContext.Provider value={{cartCount,handleCartUpdate}}>
        {children}
    </CartContext.Provider>
    );
    // "Jo bhi component mere Provider ke andar hai, usko cartCount aur handleCartUpdate mil sakta hai."
}

