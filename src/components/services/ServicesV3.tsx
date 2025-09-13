import ServicesV3Data from "../../assets/ServicesV3Data.json";
import SingleServiceV3 from './SingleServiceV3';
import useActiveIndex from '../../hooks/useActiveIndex';

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
}

const ServicesV3 = ({ sectionClass, hasTitle }: DataType) => {
    const { activeIndex, handleMouseEnter, handleTouchStart } = useActiveIndex()

    return (
        <>
            <div className={`services-style-three-area ${sectionClass ? sectionClass : ""}`}>

                {/* Section Title */}
                {hasTitle &&
                    <div className="container">
                        <div className="site-heading">
                            <div className="row align-center">
                                <div className="col-lg-8">
                                    <h4 className="sub-title">What's Our Play</h4>
                                    <h2 className="title">
                                            Operations Philosophy
                                    </h2>
                                    <h4 style={{marginTop: '2vw', lineHeight: 1.5}}>At Arkah Energies, our focus is on maximizing the recovery of hydrocarbon resources through technically sound, economically viable, and environmentally responsible strategies. We are committed to delivering results across three core dimensions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="service-style-three-items" id="accordion">
                                {ServicesV3Data.map((service, index) =>
                                    <li
                                        className={activeIndex === index ? 'out' : ''}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onClick={() => handleTouchStart(index)}
                                        onTouchStart={() => handleTouchStart(index)}
                                        key={service.id}
                                    >
                                        <SingleServiceV3 service={service} />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV3;