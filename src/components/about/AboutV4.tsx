import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';
import thumb11 from '/assets/img/thumb/11.jpg';

interface DataType {
    sectionClass?: string
}

const AboutV4 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <>
            <div className={`about-style-three-area default-padding-bottom ${sectionClass ? sectionClass : ""}`} style={{ paddingTop: '5vw' }}>
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
                                <h2 className="title text">Risk & Mitigation</h2>
                                <div className="d-flex mt-40">
                                    <div className="left">
                                        <h4 className="sub-title-border"><strong>About</strong></h4>
                                    </div>
                                    <div className="right">
                                        {[
                                            "Commodity price volatility: Hedging frameworks, cost discipline, and diversified cash flows",
                                            "Feedstock variability (RNG): Multi-source feedstock clusters, farmer contracts, and logistics planning",
                                            "Regulatory timelines: Early permitting, policy alignment, and experienced compliance partners",
                                            "Execution risk: Stage-gated capex, robust EPC partners, and digital monitoring of performance KPIs"
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

export default AboutV4;