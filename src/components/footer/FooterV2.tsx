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
            <footer className={`style-two ${sectionClass ? sectionClass : ""}`} style={{marginTop: '6vw', backgroundColor: '#6ddd95'}}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-6 footer-item about pr-120 pr-md-15 pr-xs-15">
                                <div className="top">
                                    <img className='regular-img' src={logoLight} alt="Image Not Found" />
                                    <img className='light-img' src='/logo.png' alt="Image Not Found" />
                                </div>
                                <ul className="address-list">
                                    <li>
                                        <h4>Gurugram</h4>
                                        <p>
                                            Travel World House, Level 7, 17 Jones St, NSW, 2060
                                        </p>
                                    </li>
                                </ul>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <a href="mailto:someone@example.com">info@arkah.in</a>
                                        </li>
                                        <li>
                                            <a href="tel:+4733378901">+47 333 78 901</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1 footer-item">
                                <h4 className="widget-title">Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link to="/about-us">Home</Link></li>
                                    <li><Link to="/contact-us">About Us</Link></li>
                                    <li><Link to="/faq">Our Vision</Link></li>
                                    <li><Link to="/services">Our Team</Link></li>
                                    <li><Link to="/about-2">Renewal Natural Gas</Link></li>
                                    <li><Link to="/about-us">Operating Philosophy</Link></li>
                                    <li><Link to="/about-2">Privacy Policy</Link></li>
                                    <li><Link to="/contact-us">Exploration and Production</Link></li>
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
                                <p>
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