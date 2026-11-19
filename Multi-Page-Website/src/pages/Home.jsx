import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./CSS/Home.css";
import { About } from "./About";

export const Home = () => {
    return (
        <main className="hero-section main container">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World, One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you want.
                    </p>
                    <NavLink to="/country" className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </NavLink>
                </div>
                <div className="hero-image">
                    <img
                        src="/images/World-Map.png"
                        alt="Illustration of the World Map"
                        className="banner-image"
                    />
                </div>
            </div>
            {/* About section included on the home page */}
            <About />
        </main>
    );
};
