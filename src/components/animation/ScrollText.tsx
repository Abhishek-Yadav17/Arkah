import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/styles/ScrollText.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollText: React.FC = () => {
    const text1Ref = useRef<HTMLHeadingElement | null>(null);
    const text2Ref = useRef<HTMLHeadingElement | null>(null);
    const text3Ref = useRef<HTMLHeadingElement | null>(null);
    const rotatingRef = useRef<SVGSVGElement>(null);

    useEffect(() => {

        gsap.to(rotatingRef.current, {
            rotate: 360,
            repeat: -1,
            ease: "none",
            duration: 20,
            transformOrigin: "50% 50%"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-text-section",
                start: "top top",
                end: "+=100%",
                scrub: 1,
                pin: true,
                pinSpacing: true,
            },
        });

        tl.fromTo(text1Ref.current, { x: '-100%' }, { x: '200%' })
            .fromTo(text2Ref.current, { x: '100%' }, { x: '-200%' }, "<")
            .fromTo(text3Ref.current, { x: '-100%' }, { x: '200%' }, "<");

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);



    return (
        <>
            <div className="scroll-text">
                <svg className="rotating-text" viewBox="0 0 100 100" ref={rotatingRef}>
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
                    <h1 ref={text1Ref}>REVIVE</h1>
                    <h1 ref={text2Ref}>RECOVER</h1>
                    <h1 ref={text3Ref}>RENEW</h1>
                </section>
            </div>
        </>

    );
};

export default ScrollText;
