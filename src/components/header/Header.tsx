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
                            <Link to="/about">
                                Who We Are
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/about">Our Story</Link></li>
                                <li><Link to="/team">Our Purpose</Link></li>
                                <li><Link to="/careers">Our Team</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/services">
                                Operations
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/operations/philosophy">Operational Philosophy</Link></li>
                                <li><Link to="/services/grid">Exploration & Production</Link></li>
                                <li><Link to="/services/solar">Renewal Natural Gas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/portfolio">ESG</Link></li>
                        <li><Link to="/team">Investors</Link></li>
                        <li><Link to="/newsroom">News Room</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderV2;
