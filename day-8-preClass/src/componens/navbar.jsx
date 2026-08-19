import { useContext } from "react";
// useContext ka kaam :Context ke andar se data lena.
import { CartContext } from "../contexts/CartContext";
// Ab Navbar ko pata hai ki kis Context se data lena hai.

export const Navbar = () =>{
    const {cartCount} = useContext(CartContext);
    // "CartContext se mujhe cartCount de do."
    
    return <div>Cart : {cartCount}</div>
}