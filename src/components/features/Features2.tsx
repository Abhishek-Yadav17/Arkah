import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Features2.scss";

const Features2: React.FC = () => {
    return (
        <section className="features2-section">
            <div className="features-top">
                <div className="features-left">
                    <h1>What We Do</h1>
                    <h4>Arkah Energies revitalizes discovered fields through targeted redevelopment and advanced recovery, boosting production responsibly while minimizing decline. In parallel, we scale Renewable Natural Gas (RNG/CBG) to decarbonize systems and create circular value for communities. This dual-energy strategy supports India's vision of a Viksit Bharat ensuring predictable cash flows, lower emissions and resilient growth that balance performance with purpose and progress with responsibility.</h4>
                </div>

                <div className="features-right">
                    <Link to="/what-we-do#operating-philosophy">
                        <div className="feature-box">
                            <h4>Operating Philosophy</h4>
                            <img src="/philosophy.png" alt="philosophy" />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="features-bottom">
                <Link to="/what-we-do#exploration-production">
                    <div className="feature-box">
                        <h4>Exploration & Production</h4>
                        <img src="/marginal-field-icon-1.png" alt="" />
                    </div>
                </Link>
                <Link to="/what-we-do#renewable-natural-gas">
                    <div className="feature-box">
                        <h4>Renewable Natural Gas</h4>
                        <img src="/rng-cbg-icon-1.png" alt="" />
                    </div>
                </Link>
                <Link to="/sustainability">
                    <div className="feature-box">
                        <h4>Sustainability</h4>
                        <img src="/esg-icon-1.png" alt="" />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Features2;
