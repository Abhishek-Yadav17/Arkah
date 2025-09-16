import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/styles/ScrollText.scss";

gsap.registerPlugin(ScrollTrigger);

const ScrollText: React.FC = () => {
    const text1Ref = useRef<HTMLHeadingElement | null>(null);
    const text2Ref = useRef<HTMLHeadingElement | null>(null);
    const text3Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
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
        <section className="scroll-text-section">
            <h1 ref={text1Ref}>REVIVE</h1>
            <h1 ref={text2Ref}>RECOVER</h1>
            <h1 ref={text3Ref}>RENEW</h1>
        </section>
    );
};

export default ScrollText;
