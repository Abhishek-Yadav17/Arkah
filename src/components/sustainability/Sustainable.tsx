import React from "react";
import "../../assets/styles/Sustainable.scss";

const Sustainable: React.FC = () => {
    return (
        <section className="sustainable-section">
            <h1>Sustainability</h1>

            <div className="sustainable-box">
                <div className="box-inner">
                    <div className="box-inner-left">
                        <h2>Our Sustainability Approach</h2>
                        <ul>
                            <li>Sustainability First: Foundation of how we operate and grow</li>
                            <li>Future-Focused: Meet today's demands, safeguard tomorrow's resources</li>
                            <li>ESG as Core: Not obligation but our business enabler</li>
                            <li>Strong & Responsible: Technically sound, financially resilient, ethically governed</li>
                            <li>Holistic Agenda: Economic growth, environmental stewardship, community empowerment</li>
                            <li>Performance with Purpose: Every project guided by responsible development</li>
                        </ul>
                    </div>
                    <div className="box-inner-right">
                        <img src="/energy1.png" alt="Sustainability Approach" />
                    </div>
                </div>

                <div className="box-inner">
                    <div className="box-inner-left">
                        <h2>Environmental Stewardship</h2>
                        <ul>
                            <li>Reducing emissions and carbon intensity across operations</li>
                            <li>Investing in renewable solutions like biogas and waste-to-energy</li>
                            <li>Conserving natural resources and promoting circular economy practices</li>
                            <li>Protecting biodiversity and local ecosystems</li>
                        </ul>
                    </div>
                    <div className="box-inner-right">
                        <img src="/energy1.png" alt="Environmental Stewardship" />
                    </div>
                </div>

                <div className="box-inner">
                    <div className="box-inner-left">
                        <h2>Social Responsibility</h2>
                        <ul>
                            <li>Empowering local communities through education, training and skill development</li>
                            <li>Creating jobs and inclusive growth opportunities in rural and semi-urban areas</li>
                            <li>Prioritizing health, safety and well-being of employees and partners</li>
                            <li>Supporting social initiatives that build resilience and improve livelihoods</li>
                        </ul>
                    </div>
                    <div className="box-inner-right">
                        <img src="/energy1.png" alt="Social Responsibility" />
                    </div>
                </div>

                <div className="box-inner">
                    <div className="box-inner-left">
                        <h2>Governance & Integrity</h2>
                        <ul>
                            <li>Operating with transparency, ethics and accountability at every level</li>
                            <li>Ensuring compliance with global and national regulations</li>
                            <li>Building trust with stakeholders through responsible reporting</li>
                            <li>Embedding a culture of integrity, fairness and continuous improvement</li>
                        </ul>
                    </div>
                    <div className="box-inner-right">
                        <img src="/energy1.png" alt="Governance and Integrity" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainable;
