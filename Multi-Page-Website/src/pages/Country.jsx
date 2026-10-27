import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";

export const Country = () => {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await getCountryData("Canada");
                setCountry(response.data);
            } catch (err) {
                setError(
                    err.response?.data?.message || err.message
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, []);

    if (loading) return <h2>Loading...</h2>;

    if (error) return <h2>Error: {error}</h2>;

    const data = Array.isArray(country) ? country[0] : country;

    return (
        <div>
            <h1>Country Details</h1>
            <h2>{data?.name?.common || data?.name || "Country name not found"}</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    );
};