import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';
import thumb11 from '/assets/img/thumb/11.jpg';

interface DataType {
    sectionClass?: string
}

const AboutV3 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <>
            <div className={`about-style-three-area default-padding-bottom ${sectionClass ? sectionClass : ""}`} style={{ paddingTop: '10vw' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="thumb-style-three">
                                <img src={thumb11} alt="Image Not Found" />
                                <div className="upDownScrol scroll-shape" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-three-info text-scroll-animation" ref={containerRef}>
                                <h2 className="title text">ESG & Impact</h2>
                                <div className="d-flex mt-40">
                                    <div className="left">
                                        <h4 className="sub-title-border"><strong>About</strong></h4>
                                    </div>
                                    <div className="right">
                                        {[
                                            "Environmental: Emissions reduction, methane avoidance via RNG, waste-to-value pathways",
                                            "Social: Rural engagement, job creation, farmer income diversification, capacity building",
                                            "Governance: Ethical conduct, transparent reporting and stakeholder alignment",
                                        ].map((item, idx) => (
                                            <p key={idx} className="text" style={{ textIndent: '-1rem', paddingLeft: '1rem' }}>
                                                • {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;