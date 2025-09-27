import { useEffect, useRef } from "react";
import ServicesV4Data from "../../assets/ServicesV4Data.json";
import SingleServiceV4 from "./SingleServiceV4";

const ServicesV4 = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !horizontalRef.current) return;

            const container = containerRef.current;
            const horizontal = horizontalRef.current;

            const start = container.offsetTop;
            const scrollY = window.scrollY;
            const end = start + container.offsetHeight - window.innerHeight;

            const delayOffset = 100;

            if (scrollY < start + delayOffset) {
                horizontal.style.transform = "translateX(0)";
                return;
            }
            if (scrollY > end) {
                horizontal.style.transform = `translateX(-${horizontal.scrollWidth - window.innerWidth}px)`;
                return;
            }

            const progress = (scrollY - start - delayOffset) / (end - start - delayOffset);

            const easedProgress = Math.pow(progress, 3);

            const maxTranslate = horizontal.scrollWidth - window.innerWidth;
            horizontal.style.transform = `translateX(-${easedProgress * maxTranslate}px)`;
        };


        const setContainerHeight = () => {
            if (!containerRef.current || !horizontalRef.current) return;

            const horizontal = horizontalRef.current;
            const scrollWidth = horizontal.scrollWidth;
            const extraScroll = scrollWidth - window.innerWidth;

            containerRef.current.style.height = `${window.innerHeight + extraScroll}px`;
        };

        setContainerHeight();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", setContainerHeight);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", setContainerHeight);
        };
    }, []);

    return (
        <div
            className="services-style-four-area default-padding-bottom blurry-shape-left"
            style={{ position: "relative", height: "250vh" }}
            ref={containerRef}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="site-heading">
                            <h4 className="sub-title">Exploration & Production</h4>
                            <h2 className="title split-text" style={{ width: '120%' }}>
                                Unlocking Value in India's Upstream Oil & Gas
                            </h2>
                            <h5 style={{ fontWeight: '400', marginTop: '2vw', lineHeight: '1.5' }}>At Arkah Energies, we are committed to driving growth in India's upstream oil & gas sector, with a sharp focus on marginal and discovered small fields. These assets are often overlooked, yet they represent some of the most promising opportunities for agile energy companies looking to combine efficiency, innovation and responsible operations</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    ref={horizontalRef}
                    style={{
                        display: "flex",
                        gap: "3vw",
                        padding: "0 5vw",
                        transition: "transform 0.05s ease-out",
                        willChange: "transform",
                    }}
                >
                    {ServicesV4Data.map((service) => (
                        <SingleServiceV4 key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesV4;