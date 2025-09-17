import logoLight from '/assets/img/logo-light.png';
import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
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
                                            Travel World House, Level 7, 17 Jones St, NSW, 2060
                                        </p>
                                    </li>
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:someone@example.com" style={{color: '#FFF'}}>info@arkah.in</a>
                                        </li>
                                        <li>
                                            <a href="tel:+4733378901" style={{color: '#FFF'}}>+47 333 78 901</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                                <h4 className="widget-title" style={{color: '#FFF'}}>Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link to="/about-us" style={{color: '#FFF'}}>Home</Link></li>
                                    <li><Link to="/contact-us" style={{color: '#FFF'}}>About Us</Link></li>
                                    <li><Link to="/faq" style={{color: '#FFF'}}>Our Vision</Link></li>
                                    <li><Link to="/services" style={{color: '#FFF'}}>Our Team</Link></li>
                                    <li><Link to="/about-2" style={{color: '#FFF'}}>Renewal Natural Gas</Link></li>
                                    <li><Link to="/about-us" style={{color: '#FFF'}}>Operating Philosophy</Link></li>
                                    <li><Link to="/about-2" style={{color: '#FFF'}}>Privacy Policy</Link></li>
                                    <li><Link to="/contact-us" style={{color: '#FFF'}}>Exploration and Production</Link></li>
                                </ul>
                                <NewsletterV2 />
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
                                    Privacy | Integrity ©2019 Arkah Industry. All Rights Reserved
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