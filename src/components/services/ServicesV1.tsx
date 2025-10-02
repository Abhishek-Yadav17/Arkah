import ServicesV1Data from "../../assets/ServicesV1Data.json"
import { Link } from "react-router-dom";
import { useState } from "react";

interface DataType {
    sectionClass?: string;
}

const ServicesV1 = ({ sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
    };

    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`} style={{ padding: '5vw 0' }}>
                <div className="container">
                    <h1 style={{fontSize: '4vw'}}>Powering Profitable & Responsible Growth</h1>
                    <h4 style={{fontSize: '1.5vw', fontWeight: '400', marginBottom: '6vw', width: '80%', lineHeight: '1.5'}}>At Arkah Energies Private Limited, we're building a next-generation energy enterprise—agile, technology-driven, and anchored in sustainability. With a focused strategy across marginal oil & gas (O&G) development and Renewable Natural Gas/Compressed Bio-Gas (RNG/CBG), Arkah sits at the intersection of conventional performance and the clean energy transition.</h4>
                    <div className="services-style-one-items">
                        <div className="row">
                            {ServicesV1Data.slice(0, 4).map((service) => (
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 single-item"
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`services-style-one-item ${activeServiceId === service.id ? 'active' : ''}`} 
                                    style={{height: '40vw'}}>
                                        <div className="icon">
                                            <img className="regular-img" src={`/assets/img/icon/${service.icon}`} alt="Image Not Found" width={75} height={60} />

                                            <img className="light-img" src={`/assets/img/icon/${service.iconLight}`} alt="Image Not Found" width={75} height={60} />
                                        </div>
                                        <h4>
                                            <Link to={`/service-details/${service.id}`}>{service.title}</Link>
                                        </h4>
                                        {Array.isArray(service.text) && (
                                            <div style={{ marginBottom: "1rem" }}>
                                                {service.text.map((item, idx) => (
                                                    <p
                                                        key={idx}
                                                        style={{
                                                            marginBottom: "0.5rem",
                                                            paddingLeft: "1rem",
                                                            textIndent: "-1rem",
                                                        }}
                                                    >
                                                        • {item}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;