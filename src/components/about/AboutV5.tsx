import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';

interface DataType {
    sectionClass?: string
}

const AboutV5 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <>
            <div className={`about-style-three-area default-padding-bottom ${sectionClass ? sectionClass : ""}`} style={{ paddingTop: '5vw' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="thumb-style-three">
                                <img src='/transperancy.jpg' alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div className="about-style-three-info text-scroll-animation" ref={containerRef}>
                                <h2 className="title text">Governance & Transparency</h2>
                                <div className="d-flex mt-40">
                                    <div className="right">
                                        {[
                                            "Board-level oversight, independent audits, and clear delegation of authority",
                                            "Structured risk committees and HSE governance across projects",
                                            "Regular investor communications and performance reporting",
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

export default AboutV5;