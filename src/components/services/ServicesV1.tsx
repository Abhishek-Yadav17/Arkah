import ServicesV1Data from "../../assets/ServicesV1Data.json"
import { Link } from "react-router-dom";

interface DataType {
    sectionClass?: string;
}

const ServicesV1 = ({ sectionClass }: DataType) => {

    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`} style={{ padding: '5vw 0' }}>
                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {ServicesV1Data.slice(0, 4).map((service) => (
                                <div
                                    className="col-xl-3 col-lg-6 col-md-6 single-item"
                                    key={service.id}
                                >
                                    <div className={`services-style-one-item`} 
                                    style={{height: '25vw'}}>
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