
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SingleUser from "./SingleUserPage";
import AllUsers from "./AllUserPage";
function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<AllUsers />}/>
            <Route path="/users/:user_id" element={<SingleUser />}/>
            {/* :user_id means dynamic parameter. */}
        </Routes>
    )
}

export default AllRoutes;