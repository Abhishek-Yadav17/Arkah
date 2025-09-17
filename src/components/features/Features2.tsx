import React from "react";
import "../../assets/styles/Features2.scss";

const Features2: React.FC = () => {
    return (
        <section className="features2-section">
            <div className="features-top">
                <div className="features-left">
                    <h1>What We Do</h1>
                    <h4>Arkah revitalizes fields through targeted redevelopment and advanced recovery, boosting production responsibly while reducing decline. In parallel, we scale renewable natural gas to decarbonize systems and create circular value for communities. This dual strategy ensures predictable cash flow, lowers emissions, and drives resilient growth — balancing performance with purpose.</h4>
                </div>

                <div className="features-right">
                    <div className="feature-box">
                        <h4>Oil & Gas Exploration & Production</h4>
                        <span className="plus-icon" aria-label="expand">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                        </span>
                    </div>
                    <div className="feature-box">
                        <h4>Renewable Natural Gas (RNG/CBG)</h4>
                        <span className="plus-icon" aria-label="expand">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            <div className="features-bottom">
                <div className="feature-box">
                    <h4>Reservoir Management & Optimization</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                </div>
                <div className="feature-box">
                    <h4>ESG Integration & Sustainability</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                </div>
                <div className="feature-box">
                    <h4>Marginal Field Development</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                </div>
                <div className="feature-box">
                    <h4>Advanced Recovery Technologies (EOR)</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Features2;
