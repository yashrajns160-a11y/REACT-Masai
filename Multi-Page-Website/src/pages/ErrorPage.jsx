import { NavLink } from "react-router-dom";
import "./CSS/ErrorPage.css";

export const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <div className="error-page-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-message">
                    Oops! The page you are looking for does not exist or might have been moved.
                </p>
                <NavLink to="/" end className="error-home-btn">
                    ← Return Home
                </NavLink>
            </div>
        </div>
    );
};
