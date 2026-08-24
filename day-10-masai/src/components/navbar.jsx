import { NavLink } from "react-router-dom";


const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to : "/about",
        title : "Title"
    },
    {
        to: "/users",
        title: "Users"
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

        </div>
    )
}
export default Navbar;