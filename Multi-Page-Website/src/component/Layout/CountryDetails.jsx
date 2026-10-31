import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import "../../pages/CSS/CountryDetails.css"


export const CountryDetails = () => {
    const { name } = useParams();
    // const params = useParams();

    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountry = async () => {
            try {
                const response = await getCountryIndData(name);//getCountryIndData(params.name)

                setCountry(response.data.data.objects[0]);
            } catch (error) {
                console.error("Error fetching country:", error);
            } finally {
                setLoading(false);
            }
        };

        getCountry();
    }, [name]); //params.name

    if (loading) {
        return <h2>Loading country details...</h2>;
    }

    if (!country) {
        return <h2>Country not found!</h2>;
    }

    return (
        <div>
            <div className="country-details-container">
                <div className="country-details-card">

                    <h1 className="country-details-title">
                        {country.names?.common}
                    </h1>

                    <img
                        className="country-details-flag"
                        src={country.flag?.url_svg}
                        alt={`${country.names?.common} flag`}
                    />

                    <div className="country-details-info">

                        <h3>
                            <span>Capital:</span>
                            {country.capitals?.[0]?.name}
                        </h3>
                        <h3>
                            <span>Region:</span>
                            {country.region}
                        </h3>
                        <h3>
                            <span>Population:</span>
                            {country.population?.toLocaleString()}
                        </h3>
                        <h3>
                            <span>Country Code:</span>
                            {country.codes?.alpha_2}
                        </h3>
                        <h3>
                            <span>Official Name:</span>
                            {country.names?.official}
                        </h3>
                    </div>

                </div>

            </div>
            <div className="backbtn-container">
                <NavLink to={"/country"} className="backbtn">
                    <button>← Go Back</button>
                </NavLink>
            </div>
        </div>
    );
};
