import { useEffect, useRef } from "react";
import "../../assets/styles/HomeAbout.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const rotatingRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const page1 = sectionRef.current;
        if (!page1) return;

        const h2 = page1.querySelector("h2");

        if (h2) {
            const letters = h2.textContent?.split("") || [];
            h2.innerHTML = letters
                .map((char) => `<span style="color: #ccc;">${char}</span>`)
                .join("");
        }

        const spans = h2?.querySelectorAll("span");

        if (spans) {
            gsap.to(spans, {
                color: "#000",
                stagger: 0.02,
                ease: "none",
                scrollTrigger: {
                    trigger: page1,
                    start: "top 60%",
                    end: "bottom 60%",
                    scrub: true,
                },
            });
        }

        gsap.to(rotatingRef.current, {
            rotate: 360,
            repeat: -1,
            ease: "none",
            duration: 20,
            transformOrigin: "50% 50%"
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="page1" ref={sectionRef}>

            <svg className="rotating-text" viewBox="0 0 100 100" ref={rotatingRef}>
                <defs>
                    <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text>
                    <textPath href="#circlePath">
                        • About Us • About Us • About Us
                    </textPath>
                </text>
            </svg>

            <h2>
                Reviving discovered fields, deploying advanced recovery, and investing in renewable natural gas.
            </h2>
            <button>
                Learn More About Us <i className="ri-arrow-right-fill"></i>
            </button>
        </div>
    );
};

export default HomeAbout;
