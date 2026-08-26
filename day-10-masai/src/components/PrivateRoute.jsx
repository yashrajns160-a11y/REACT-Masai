import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {
    const {isAuth} = useContext(AppContext);

    if(!isAuth) {
        return <Navigate to= "/login" />;
    }
    return children
}
export default PrivateRoute;