import { useEffect, useRef } from "react";
import shape10 from "/assets/img/shape/10.png";
import ServicesV7Data from "../../assets/ServicesV7Data.json";
import SingleServiceV7 from "./SingleServiceV7";

const ServicesV7 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && horizontalRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const scrollPos = window.scrollY;
                const relativeScroll = scrollPos - containerTop - window.innerHeight / 2;

                const maxScroll =
                    (containerRef.current.offsetHeight -
                        window.innerHeight +
                        window.innerWidth -
                        horizontalRef.current.scrollWidth) * 5;

                const percentage = Math.min(Math.max(relativeScroll / maxScroll, 0), 1);
                const translateX =
                    percentage *
                    (horizontalRef.current.scrollWidth - window.innerWidth);

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
            <div className="shape-left-top">
                <img src={shape10} alt="Shape" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="site-heading">
                            <h4 className="sub-title">Operating Philosophy</h4>
                            <h5
                                style={{
                                    fontWeight: "400",
                                    marginTop: "2vw",
                                    lineHeight: "1.5",
                                }}
                            >
                                At Arkah Energies, our philosophy is rooted in balance,
                                responsibility and innovation. We believe the energy industry must
                                evolve in a way that honours tradition while embracing
                                transformation. Our operating philosophy reflects a dual
                                commitment: to responsibly advance hydrocarbon recovery while
                                accelerating the renewable energy transition—ensuring that we fuel
                                progress today while protecting tomorrow.
                            </h5>
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
                    {ServicesV7Data.map((service) => (
                        <SingleServiceV7 key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesV7;
