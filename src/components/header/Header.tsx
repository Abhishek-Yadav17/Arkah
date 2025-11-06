import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/HeaderV2.scss';

const HeaderV2: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <header className="header-v2">
            <div className="container">
                <Link to="/"><img src="/logo.png" alt="logo" /></Link>

                <nav className="nav desktop-nav">
                    <ul>
                        <li className="dropdown">
                            <Link to="/about">Who We Are</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/about">Our Story</Link></li>
                                <li><Link to="/about#our-purpose">Our Purpose</Link></li>
                                <li><Link to="/team">Our Team</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/what-we-do">What We Do</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/what-we-do#operating-philosophy">Operating Philosophy</Link></li>
                                <li><Link to="/what-we-do#exploration-production">Responsible Hydrocarbons</Link></li>
                                <li><Link to="/what-we-do#renewable-natural-gas">Renewable Natural Gas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        {/* <li><Link to="/newsroom">News Room</Link></li> */}
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <nav className={`nav mobile-nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>Who We Are</Link>
                            <ul>
                                <li><Link to="/about" onClick={() => setMenuOpen(false)}>Our Story</Link></li>
                                <li><Link to="/about#our-purpose" onClick={() => setMenuOpen(false)}>Our Purpose</Link></li>
                                <li><Link to="/team" onClick={() => setMenuOpen(false)}>Our Team</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</Link>
                            <ul>
                                <li><Link to="/what-we-do#operating-philosophy" onClick={() => setMenuOpen(false)}>Operating Philosophy</Link></li>
                                <li><Link to="/what-we-do#exploration-production" onClick={() => setMenuOpen(false)}>Responsible Hydrocarbons</Link></li>
                                <li><Link to="/what-we-do#renewable-natural-gas" onClick={() => setMenuOpen(false)}>Renewable Natural Gas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/sustainability" onClick={() => setMenuOpen(false)}>Sustainability</Link></li>
                        <li><Link to="/investors" onClick={() => setMenuOpen(false)}>Investors</Link></li>
                        {/* <li><Link to="/newsroom" onClick={() => setMenuOpen(false)}>News Room</Link></li> */}
                        <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderV2;
