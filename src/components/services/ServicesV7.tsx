import { useEffect, useRef } from "react";
import shape10 from "/assets/img/shape/10.png";
import ServicesV7Data from "../../assets/ServicesV7Data.json";
import SingleServiceV7 from "./SingleServiceV7";

const ServicesV7 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {

            if (window.innerWidth <= 768) return;

            if (containerRef.current && horizontalRef.current) {
                const containerTop = containerRef.current.offsetTop;
                const scrollPos = window.scrollY;
                const relativeScroll = scrollPos - containerTop - window.innerHeight / 2;

                const extraScroll = 200;
                const maxScroll =
                    (containerRef.current.offsetHeight -
                        window.innerHeight +
                        window.innerWidth -
                        horizontalRef.current.scrollWidth) * 5;

                const percentage = Math.min(Math.max(relativeScroll / maxScroll, 0), 1);

                const maxTranslate =
                    horizontalRef.current.scrollWidth - window.innerWidth + extraScroll;
                const translateX = percentage * maxTranslate;

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
