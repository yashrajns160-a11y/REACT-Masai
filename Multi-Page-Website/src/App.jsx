import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./component/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./component/Layout/CountryDetails";
import { ScrollToTop } from "./component/Ui/ScrollToTop";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="country" element={<Country />} />
                    <Route path="country/:name" element={<CountryDetails />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
