import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/HeaderV2.scss';

gsap.registerPlugin(ScrollTrigger);

const HeaderV2: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    const location = useLocation();

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        ScrollTrigger.getAll().forEach(t => t.kill());

        if (location.pathname === "/") {
            ScrollTrigger.create({
                trigger: ".banner-v2",
                start: "bottom top",
                onEnter: () => gsap.to(header, { backgroundColor: "#000", duration: 0.3 }),
                onLeaveBack: () => gsap.to(header, { backgroundColor: "transparent", color: "#fff", duration: 0.3 }),
            });
        } else if (location.pathname === "/about") {
            gsap.to(header, { backgroundColor: "#000", color: "#fff", duration: 0.3 });
        } else {
            gsap.to(header, { backgroundColor: "#fff", color: "#000", duration: 0.3 });
        }
    }, [location]);


    return (
        <header className="header-v2" ref={headerRef}>
            <div className="container">
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Operations</Link></li>
                        <li><Link to="/portfolio">ESG</Link></li>
                        <li><Link to="/team">Investors</Link></li>
                        <li><Link to="/about">Work With Us</Link></li>
                    </ul>
                </nav>
                <button>Contact Us</button>
            </div>
        </header>
    );
};

export default HeaderV2;
