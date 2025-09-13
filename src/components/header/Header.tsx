import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/HeaderV2.scss';

gsap.registerPlugin(ScrollTrigger);

const HeaderV2: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!headerRef.current) return;

        gsap.to(headerRef.current, {
            backgroundColor: '#000',
            duration: 0.3,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top top+=1',
                toggleActions: 'play reverse play reverse',
                scrub: true,
            }
        });
    }, []);

    return (
        <header ref={headerRef} className="header-v2">
            <div className="container">
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <Link to="/about">
                                Who We Are <span className="arrow">▼</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/about">Our Story</Link></li>
                                <li><Link to="/team">Leadership</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/services">
                                Operations <span className="arrow">▼</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/services/power">Power</Link></li>
                                <li><Link to="/services/grid">Grid</Link></li>
                                <li><Link to="/services/solar">Solar</Link></li>
                            </ul>
                        </li>

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
