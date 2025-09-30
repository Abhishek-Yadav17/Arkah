import { useEffect, useRef } from "react";
import ServicesV5Data from "../../assets/ServicesV5Data.json";
import SingleServiceV5 from './SingleServiceV5';

const ServicesV5 = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const horizontal = horizontalRef.current;

        if (!container || !horizontal) return;

        const delayOffset = 100;

        const setContainerHeight = () => {
            const scrollWidth = horizontal.scrollWidth;
            const extraScroll = scrollWidth - window.innerWidth + 2 * delayOffset + 50;
            container.style.height = `${window.innerHeight + extraScroll}px`;
        };

        const handleScroll = () => {
            const containerTop = container.offsetTop;
            const scrollY = window.scrollY;

            const start = containerTop + delayOffset;
            const end = containerTop + container.offsetHeight - window.innerHeight - delayOffset;

            if (scrollY < start) {
                horizontal.style.transform = "translateX(0)";
                return;
            }

            if (scrollY > end) {
                const maxTranslateX = horizontal.scrollWidth - window.innerWidth;
                horizontal.style.transform = `translateX(-${maxTranslateX}px)`;
                return;
            }

            const progress = (scrollY - start) / (end - start);
            const easedProgress = Math.pow(progress, 3);

            const maxTranslateX = horizontal.scrollWidth - window.innerWidth;
            const translateX = easedProgress * maxTranslateX;

            horizontal.style.transform = `translateX(-${translateX}px)`;
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