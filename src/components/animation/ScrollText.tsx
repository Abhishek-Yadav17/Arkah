import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/styles/ScrollText.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollText: React.FC = () => {
    useEffect(() => {
        gsap.to(".rotating-text", {
            rotate: 360,
            repeat: -1,
            ease: "none",
            duration: 20,
            transformOrigin: "50% 50%"
        });

        gsap.utils.toArray<HTMLElement>(".scroll-h1").forEach((el, i) => {
    gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -500 : 500 },
        {
            x: i % 2 === 0 ? 500 : -500,
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        }
    );
});

    }, []);

    return (
        <div className="scroll-text">
            <svg className="rotating-text" viewBox="0 0 100 100">
                <defs>
                    <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                </defs>
                <text textLength="220">
                    <textPath href="#circlePath" startOffset="0">
                        • Arkah's Focus • Arkah's Focus
                    </textPath>
                </text>
            </svg>

            <section className="scroll-text-section">
                <h1 className="scroll-h1">REVIVE</h1>
                <h1 className="scroll-h1">RECOVER</h1>
                <h1 className="scroll-h1">RENEW</h1>
            </section>
        </div>
    );
};

export default ScrollText;
