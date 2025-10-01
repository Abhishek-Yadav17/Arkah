import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';

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
                                <img src='/impact.jpg' alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-three-info text-scroll-animation" ref={containerRef}>
                                <h2 className="title text">ESG & Impact</h2>
                                <div className="d-flex mt-40">
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