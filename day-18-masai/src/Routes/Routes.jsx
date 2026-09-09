// import React from "react";
import { Routes, Route } from "react-router-dom";
import { Lisiting } from "../components/Lisiting";
import { ProductPage } from "../components/ProductPage";


function RouteFunc() {
    return (
        <div>
            <Routes>
                {/* Product Listing */}
                <Route path="/products" element={<Lisiting />} />
                {/* Dynamic Product Details */}
                <Route path="/products/:id" element={<ProductPage />} />
            </Routes>

        </div>
    )
}
export default RouteFunc