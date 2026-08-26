import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";


function Login (){
    const {isAuth , login} =useContext(AppContext);
    if(isAuth) {
        return <Navigate to="/users" />
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login;