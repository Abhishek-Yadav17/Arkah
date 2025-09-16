import { useEffect, useRef } from "react";
import "../../assets/styles/HomeAbout.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
    
    const rotatingRef = useRef<SVGSVGElement>(null);

    useEffect(() => {

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
        <div className="page1">
            <h2>
                Reviving <span>discovered fields</span>, deploying advanced recovery, and investing in <span>renewable natural gas.</span>
            </h2>
            <button>
                Who We Are <i className="ri-arrow-right-fill"></i>
            </button>
        </div>
    );
};

export default HomeAbout;
