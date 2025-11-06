import logoLight from '/assets/img/logo-light.png';
import { Link } from "react-router-dom";
import FooterSocial from '../social/FooterSocial';

interface DataType {
    sectionClass?: string;
}

const FooterV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <footer className={`style-two ${sectionClass ? sectionClass : ""}`} style={{marginTop: '6vw', backgroundImage: 'url(/bg-12.jpg)'}}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15">
                                <div className="top">
                                    <img className='regular-img' src={logoLight} alt="Image Not Found" />
                                    <img className='light-img' src='/logo-footer.png' alt="Image Not Found" />
                                </div>
                                <ul className="address-list">
                                    <li>
                                        <h4 style={{color: '#FFF'}}>Gurugram</h4>
                                        <p style={{color: '#FFF'}}>
                                            D2-002, Ireo Victory Valley, Sector 67, Gurgaon 
                                        </p>
                                    </li>
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:info@arkah.in" style={{color: '#FFF'}}>info@arkah.in</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91-9910094267" style={{color: '#FFF'}}>+91-9910094267</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                                <h4 className="widget-title" style={{color: '#FFF'}}>Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link to="/" style={{color: '#FFF'}}>Home</Link></li>
                                    <li><Link to="/about" style={{color: '#FFF'}}>Our Story</Link></li>
                                    <li><Link to="/team" style={{color: '#FFF'}}>Our Team</Link></li>
                                    <li><Link to="/what-we-do#operating-philosophy" style={{color: '#FFF'}}>Operating Philosophy</Link></li>
                                    <li><Link to="/what-we-do#exploration-production" style={{color: '#FFF'}}>Responsible Hydrocarbons</Link></li>
                                    <li><Link to="/what-we-do#renewable-natural-gas" style={{color: '#FFF'}}>Renewable Natural Gas</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-social">
                                    <FooterSocial />
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end">
                                <p style={{color: '#FFF'}}>
                                    &copy; 2025 Arkah. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;