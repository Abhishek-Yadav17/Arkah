import { useEffect, useRef } from "react";
import ServicesV5Data from "../../assets/ServicesV5Data.json";
import SingleServiceV5 from './SingleServiceV5';

const ServicesV5 = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleScroll = () => {
            if (containerRef.current && horizontalRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const scrollPos = window.scrollY;
                const delayStart = 100;

                let relativeScroll = scrollPos - containerTop - delayStart;

                if (relativeScroll < 0) relativeScroll = 0;

                const maxScroll = containerRef.current.offsetHeight - window.innerHeight - delayStart;

                const percentage = Math.min(Math.max(relativeScroll / maxScroll, 0), 1);

                const maxTranslateX = horizontalRef.current.scrollWidth - window.innerWidth;

                const translateX = percentage * maxTranslateX;

                horizontalRef.current.style.transform = `translateX(-${translateX}px)`;
            }
        };


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="services-style-four-area default-padding-bottom blurry-shape-left"
            style={{ paddingTop: "5vw", position: "relative", height: "250vh" }}
            ref={containerRef}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="site-heading">
                            <h4 className="sub-title">Renewable Natural Gas</h4>
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
                    {ServicesV5Data.map((service) => (
                        <SingleServiceV5 key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesV5;