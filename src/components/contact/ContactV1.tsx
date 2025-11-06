import ContactForm from "../form/ContactForm";
import SocialShareV3 from "../social/SocialShareV3";

interface DataType {
    sectionClass?: string
}

const ContactV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`contact-area overflow-hidden relative ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="contact-style-one-items">
                        <div className="row">
                            <div className="col-tact-stye-one col-lg-4">
                                <div className="contact-style-one-info">
                                    <ul className="contact-address">
                                        <li>
                                            <a className="phone-link" href="tel:+91-9910094267"><i className="ri-customer-service-2-line" /> +91-9910094267</a>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Location</h4>
                                                <p>
                                                    D2-002, Ireo Victory Valley, Sector 67, Gurgaon 
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <h4>Official Email</h4>
                                                <a href="mailto:info@arkah.in">info@arkah.in</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info">
                                                <ul className="social-link">
                                                    <SocialShareV3 />
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-tact-stye-one col-lg-7 offset-lg-1">
                                <div className="contact-form-style-one">
                                    <h4 className="sub-title">Have Questions?</h4>
                                    <h2 className="title">Send us a Message</h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;