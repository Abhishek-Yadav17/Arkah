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
                                <li><Link to="/about">Our Story</Link></li>
                                <li><Link to="/team">Our Purpose</Link></li>
                                <li><Link to="/careers">Our Team</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="">
                                What We Do
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/operations/philosophy">Operating Philosophy</Link></li>
                                <li><Link to="/services/grid">Exploration & Production</Link></li>
                                <li><Link to="/services/solar">Renewable Natural Gas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/team">Sustainability</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/newsroom">News Room</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderV2;
