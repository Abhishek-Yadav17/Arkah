import "../../assets/styles/AboutUs.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
        const container = sectionRef.current;
        if (!container) return;

        const h4 = container.querySelector("h4");

        if (h4) {
            const letters = h4.textContent?.split("") || [];
            h4.innerHTML = letters
                .map((char) => `<span style="color: #ccc;">${char}</span>`)
                .join("");
        }

        const spans = h4?.querySelectorAll("span");

        if (spans) {
            gsap.to(spans, {
                color: "#000",
                stagger: 0.02,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top 60%",
                    end: "bottom 60%",
                    scrub: true,
                },
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about-us">
            <div className="container" ref={sectionRef}>
                <h2 className="about-us__title">Who We Are?</h2>
                <h4>Our story is still unfolding, but our mission is clear - Powering progress with purpose & fueling future responsibly.</h4>
            </div>
        </section>
    );
};

export default AboutUs;
