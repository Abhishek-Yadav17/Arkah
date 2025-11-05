import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shape10 from "/assets/img/shape/10.png";
import ServicesV7Data from "../../assets/ServicesV7Data.json";
import SingleServiceV7 from "./SingleServiceV7";

gsap.registerPlugin(ScrollTrigger);

const ServicesV8: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const cards = scrollRef.current;

        if (!container || !cards) return;

        if (window.innerWidth <= 768) return;

        const totalScrollWidth = cards.scrollWidth;
        const containerWidth = container.offsetWidth;
        const scrollAmount = totalScrollWidth - containerWidth;

        if (scrollAmount > 0) {
            gsap.to(cards, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: `+=${totalScrollWidth}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            className="services-style-four-area blurry-shape-left"
            style={{ position: "relative" }}
        >
            <div className="shape-left-top">
                <img src={shape10} alt="Shape" />
            </div>

            <div
                ref={containerRef}
                style={{
                    height: '100vh',
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        gap: "3vw",
                        padding: "0 5vw",
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

export default ServicesV8;
