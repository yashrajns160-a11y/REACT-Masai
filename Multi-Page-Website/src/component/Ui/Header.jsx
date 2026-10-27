import {  NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/">
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav>
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/country">Country</NavLink>
                    </nav>
                </div>
            </div>

        </header>
    );
};