import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./component/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./component/Layout/CountryDetails";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<AppLayout />}
            // errorElement={<ErrorPage />}
            >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="country" element={<Country />} />
                <Route path="/country/:name" element={<CountryDetails />} />
                {/* dynamic routing /:id */}
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;