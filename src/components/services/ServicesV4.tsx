import { useEffect, useRef } from "react";
import ServicesV4Data from "../../assets/ServicesV4Data.json";
import SingleServiceV4 from "./SingleServiceV4";

const ServicesV4 = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const container = containerRef.current;
        const horizontal = horizontalRef.current;

        if (!container || !horizontal) return;

        if (window.innerWidth <= 768) return;

        const delayOffset = 100;
        const extraScroll = 200;

        const setContainerHeight = () => {
            const scrollWidth = horizontal.scrollWidth;
            const totalScroll =
                scrollWidth - window.innerWidth + 2 * delayOffset + extraScroll;
            container.style.height = `${window.innerHeight + totalScroll}px`;
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const start = container.offsetTop;
            const end = start + container.offsetHeight - window.innerHeight;

            const totalScrollable = end - start;

            if (scrollY < start + delayOffset) {
                horizontal.style.transform = "translateX(0)";
                return;
            }

            if (scrollY > end - delayOffset) {
                const maxTranslate =
                    horizontal.scrollWidth - window.innerWidth + extraScroll;
                horizontal.style.transform = `translateX(-${maxTranslate}px)`;
                return;
            }

            const progress =
                (scrollY - start - delayOffset) /
                (totalScrollable - 2 * delayOffset);
            const easedProgress = Math.pow(progress, 3);

            const maxTranslate =
                horizontal.scrollWidth - window.innerWidth + extraScroll;
            horizontal.style.transform = `translateX(-${easedProgress * maxTranslate}px)`;
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
            className="services-style-four-area blurry-shape-left"
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
                        marginTop: "5vw",
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