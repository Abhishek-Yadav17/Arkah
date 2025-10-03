import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/styles/HeaderV2.scss';

gsap.registerPlugin(ScrollTrigger);

const HeaderV2: React.FC = () => {

    return (
        <header className="header-v2">
            <div className="container">
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>
                <nav className="nav">
                    <ul>
                        <li className="dropdown">
                            <Link to="/about2">
                                Who We Are
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/about2#our-story">Our Story</Link></li>
                                <li><Link to="/about2#our-purpose">Our Purpose</Link></li>
                                <li><Link to="/about2#our-team">Our Team</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/what-we-do">
                                What We Do
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/what-we-do#operating-philosophy">Operating Philosophy</Link></li>
                                <li><Link to="/what-we-do#exploration-production">Exploration & Production</Link></li>
                                <li><Link to="/what-we-do#renewable-natural-gas">Renewable Natural Gas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/newsroom">News Room</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderV2;
