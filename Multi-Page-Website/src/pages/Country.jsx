import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import "./CSS/Country.css";
import { NavLink } from "react-router-dom";
import { SearchFilter } from "../component/Ui/SearchFilter";

export const Country = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState(null);

    const handleRetry = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getCountryData();
            setCountries(response?.data?.data?.objects || []);
        } catch (err) {
            console.error("Error fetching countries:", err);
            setError("Failed to load countries. Please verify your connection or API key.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        getCountryData()
            .then((response) => {
                if (isMounted) {
                    setCountries(response?.data?.data?.objects || []);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    console.error("Error fetching countries:", err);
                    setError("Failed to load countries. Please verify your connection or API key.");
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="country-status-container">
                <div className="spinner"></div>
                <h2 className="loading">Loading countries...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="country-status-container">
                <div className="error-box">
                    <h2>Oops! Something went wrong</h2>
                    <p>{error}</p>
                    <button onClick={handleRetry} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    const searchCountry = (country) => {
        if (!search) return true;
        const commonName = country.names?.common || "";
        return commonName.toLowerCase().includes(search.toLowerCase());
    };

    const filterRegion = (country) => {
        if (filter === "all") return true;
        const region = country.region || "";
        return region.toLowerCase() === filter.toLowerCase();
    };

    const displayedCountries = countries
        .filter((country) => searchCountry(country) && filterRegion(country))
        .sort((a, b) => {
            if (!sortOrder) return 0;
            const nameA = a.names?.common || "";
            const nameB = b.names?.common || "";
            return sortOrder === "asc"
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
        });

    return (
        <div className="country-container">
            <h1 className="country-heading">Explore Countries</h1>

            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />

            {displayedCountries.length === 0 ? (
                <div className="no-countries-box">
                    <p className="no-countries">No countries found matching your criteria.</p>
                </div>
            ) : (
                <div className="country-grid">
                    {displayedCountries.map((country, index) => {
                        const commonName = country.names?.common || "Unknown";
                        const region = country.region || "N/A";
                        const population = country.population
                            ? country.population.toLocaleString()
                            : "N/A";
                        const flagUrl = country.flag?.url_svg || country.flags?.svg || country.flags?.png;

                        return (
                            <div
                                className="country-card"
                                key={country.codes?.alpha_2 ?? `${commonName}-${index}`}
                            >
                                {flagUrl && (
                                    <img
                                        className="country-flag"
                                        src={flagUrl}
                                        alt={`${commonName} flag`}
                                        loading="lazy"
                                    />
                                )}

                                <h3 className="country-name">{commonName}</h3>
                                <p className="country-details">
                                    <span className="detail-label">Region:</span> {region}
                                </p>
                                <p className="country-details">
                                    <span className="detail-label">Population:</span> {population}
                                </p>

                                <NavLink
                                    to={`/country/${encodeURIComponent(commonName)}`}
                                    className="read-more-btn"
                                >
                                    Read More
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
