import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/HomeAbout.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
    const textRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const el = textRef.current;
        const chars = el.textContent?.split("") || [];
        el.innerHTML = chars.map(c => `<span class="char">${c}</span>`).join("");

        gsap.fromTo(
            el.querySelectorAll(".char"),
            { color: "#b9b2b2ff" },
            {
                color: "#fff",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div className="page1">
            <h2 ref={textRef}>
                Reviving discovered fields, advancing recovery technologies and fueling the future with renewable natural gas.
            </h2>
            <Link to="/about">
                <button>
                    Who We Are <i className="ri-arrow-right-fill"></i>
                </button>
            </Link>
        </div>
    );
};

export default HomeAbout;
