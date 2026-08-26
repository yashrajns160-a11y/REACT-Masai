
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SingleUser from "./SingleUserPage";
import AllUsers from "./AllUserPage";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./login";
function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/users"
                element={
                    <PrivateRoute>
                        <AllUsers />
                    </PrivateRoute>
                }
            />
            <Route
                path="/users/:user_id"
                element={
                    <PrivateRoute>
                        <SingleUser />
                    </PrivateRoute>
                }
            />
            {/* <Route path="/users/:user_id" element={<SingleUser />} /> */}
            {/* :user_id means dynamic parameter. */}
        </Routes>
    )
}

export default AllRoutes;