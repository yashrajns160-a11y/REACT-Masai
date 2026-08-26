import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to : "/about",
        title : "About"
    },
    {
        to: "/users",
        title: "Users"
    },
    {
        to: "/login",
        title: "Login"
    }
]
function Navbar() {

    // return (
    //     <div style={{display:"flex", gap:"1rem", justifyContent:"center"}}>
    //         <Link to="/">Home</Link>
    //         <Link to="/about">About</Link>
    //         <Link to={"/users"}>Users</Link>
    //     </div>
    // )
    let activeStyle = {
        textDecoration: "none",
        color: "red"
    };
    let normalStyle = {
        textDecoration: "none",
        color: "black"
    };
    const {isAuth , logout} =useContext(AppContext);

    return (
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            {
                links.map((link) => (
                    <NavLink
                        key={link.to}
                        style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
                        to={link.to}
                        end
                    >
                        {link.title}
                    </NavLink>
                ))
            }
            {isAuth && <button onClick={logout}>Logout</button>}

        </div>
    )
}
export default Navbar;