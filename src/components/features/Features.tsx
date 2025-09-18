import React from "react";
import "../../assets/styles/Features.scss";

const Features: React.FC = () => {
    return (
        <section className="features-section">
            <div className="features-top">
                <div className="features-left">
                    <h1>What We Do</h1>
                    <h4>Arkah revitalizes fields through targeted redevelopment and advanced recovery, boosting production responsibly while reducing decline. In parallel, we scale renewable natural gas to decarbonize systems and create circular value for communities. This dual strategy ensures predictable cash flow, lowers emissions, and drives resilient growth — balancing performance with purpose.</h4>
                </div>

                <div className="features-right">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, animi! Repudiandae deserunt nostrum id enim porro possimus quas modi, quaerat doloribus quidem vitae corrupti? Architecto veritatis ullam tempore perspiciatis labore exercitationem, magnam fugiat dignissimos dolorem reprehenderit rerum sed autem commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo optio laboriosam totam expedita natus amet aliquid sint harum provident.</h4>
                </div>
            </div>

            <div className="features-bottom">
                <div className="feature-box">
                    <h4>Operating Philosophy</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                    <img src="/reservoir-icon-1.png" alt="" />
                </div>
                <div className="feature-box">
                    <h4>Exploration & Production</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                    <img src="/esg-icon-1.png" alt="" />
                </div>
                <div className="feature-box">
                    <h4>Renewable Natural Gas</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                    <img src="/rng-cbg-icon-1.png" alt="" />
                </div>
                <div className="feature-box">
                    <h4>Sustainability</h4>
                    <span className="plus-icon" aria-label="expand">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </span>
                    <img src="/eor-icon-1.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Features;
