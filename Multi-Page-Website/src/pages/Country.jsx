import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import "./CSS/Country.css";
import { NavLink } from "react-router-dom"

export const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await getCountryData();
                setCountries(response.data.data.objects);
            } catch (error) {
                console.error("Error fetching countries:", error);
            } finally {
                setLoading(false);
            }
        };

        getCountries();
    }, []);

    if (loading) {
        return <h2 className="loading">Loading countries...</h2>;
    }

    return (
        <div className="country-container">
            <h1 className="country-heading">Explore Countries</h1>

            <div className="country-grid">
                {countries.map((country, index) => (
                    <div
                        className="country-card"
                        key={country.codes?.alpha_2 ?? index}
                    >
                        <img
                            className="country-flag"
                            src={country.flag?.url_svg}
                            alt={`${country.names?.common} flag`}
                        />

                        <h3 className="country-name">
                            {country.names?.common}
                        </h3>
                        <h3 className="country-details">
                            Country :{country.region}
                        </h3>
                        <h3 className="country-details">
                            Population :{country.population}
                        </h3>
                        <NavLink to={`/country/${country.names.common}`}>
                            <button className="read-more-btn">Read More</button>
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    );
};