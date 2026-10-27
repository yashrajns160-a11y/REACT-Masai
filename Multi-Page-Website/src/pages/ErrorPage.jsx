import { NavLink } from "react-router-dom"

export const ErrorPage = () => {

    // const error = useRouteError();

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <NavLink to="/" end>
                <button>Go Home</button>
            </NavLink>
        </div>
    )
}