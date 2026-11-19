import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import "../../pages/CSS/CountryDetails.css";

export const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        if (!name) return;

        getCountryIndData(name)
            .then((response) => {
                if (isMounted) {
                    const countryList = response?.data?.data?.objects || [];
                    // Find the exact match by common or official name first, otherwise fallback to the first element
                    const countryObj =
                        countryList.find(
                            (c) =>
                                c.names?.common?.toLowerCase() === name.toLowerCase() ||
                                c.names?.official?.toLowerCase() === name.toLowerCase()
                        ) ||
                        countryList[0] ||
                        null;

                    setCountry(countryObj);
                    if (!countryObj) {
                        setError("Country not found!");
                    }
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    console.error("Error fetching country:", err);
                    setError("Unable to load country details. Please try again.");
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [name]);

    if (loading) {
        return (
            <div className="country-details-container">
                <div className="spinner"></div>
                <h2 className="loading-text">Loading country details...</h2>
            </div>
        );
    }

    if (error || !country) {
        return (
            <div className="country-details-container">
                <div className="country-details-card error-card">
                    <h2>Country Not Found</h2>
                    <p>{error || "The requested country information is not available."}</p>
                    <NavLink to="/country" className="backbtn">
                        ← Back to Countries
                    </NavLink>
                </div>
            </div>
        );
    }

    const commonName = country.names?.common || name;
    const officialName = country.names?.official || "N/A";
    const capital =
        country.capitals?.[0]?.name ||
        (Array.isArray(country.capital) ? country.capital[0] : country.capital) ||
        "N/A";
    const region = country.region || "N/A";
    const subregion = country.subregion || country.region_detail?.subregion || "";
    const population = country.population ? country.population.toLocaleString() : "N/A";
    const countryCode = country.codes?.alpha_2 || "N/A";
    const flagUrl = country.flag?.url_svg || country.flags?.svg || country.flags?.png;

    return (
        <div className="country-details-wrapper">
            <div className="backbtn-container top-back">
                <NavLink to="/country" className="backbtn">
                    ← Back to Countries
                </NavLink>
            </div>

            <div className="country-details-container">
                <div className="country-details-card">
                    <h1 className="country-details-title">{commonName}</h1>

                    {flagUrl && (
                        <img
                            className="country-details-flag"
                            src={flagUrl}
                            alt={`${commonName} flag`}
                        />
                    )}

                    <div className="country-details-info">
                        <div className="info-row">
                            <span className="info-label">Official Name:</span>
                            <span className="info-value">{officialName}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Capital:</span>
                            <span className="info-value">{capital}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Region:</span>
                            <span className="info-value">{region}</span>
                        </div>
                        {subregion && (
                            <div className="info-row">
                                <span className="info-label">Subregion:</span>
                                <span className="info-value">{subregion}</span>
                            </div>
                        )}
                        <div className="info-row">
                            <span className="info-label">Population:</span>
                            <span className="info-value">{population}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Country Code (Alpha-2):</span>
                            <span className="info-value">{countryCode}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
