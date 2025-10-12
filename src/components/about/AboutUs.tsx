import "../../assets/styles/AboutUs.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutUs = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <section className="about-us">
            <h5>Our story is still unfolding, but our mission is clear — powering progress with purpose and fueling the future responsibly.</h5>
            <div className="about-cards" id="our-story">
                <div className="about-cards-inner-top">
                    <img className="img1" src="/energy1.png" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Story</h1>
                    <h4>Our journey began with a simple yet powerful idea — that energy can be smarter, cleaner and more responsible. Founded by seasoned Oil & Gas industry veterans, Arkah is a next-generation company born from a shared vision to redefine the future of energy. With deep expertise, strategic foresight and an innovation-first mindset, we are committed to building a sustainable, reliable and resilient energy future. We believe the energy sector must evolve to meet the needs of a rapidly changing world embracing innovation, sustainability and adaptability. At Arkah, we drive this transformation by integrating advanced technologies, cost-effective solutions and sustainable practices powering the green transition, fostering digital innovation and responsibly unlocking untapped fossil fuel reserves to redefine energy for the modern world.</h4>
                </div>
            </div>
            <div className="about-cards" id="our-purpose">
                <div className="about-cards-inner-top">
                    <img src="/ESG2.jpg" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Purpose</h1>
                    <h4>At Arkah, our mission is to revolutionize the global energy landscape through responsible innovation, reliable and efficient energy solutions and an unwavering pursuit of operational excellence. Driven by integrity and a long-term vision, we are committed to building a scalable, sustainable and inclusive energy future - one that fuels economic growth, empowers communities, creates enduring value for stakeholders and protects our planet for generations to come.
                    </h4>
                </div>
            </div>
            <div className="about-cards" id="our-team">
                <div className="about-cards-inner-top">
                    <img src="/team2.jpg" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Team</h1>
                    <h4>Driven by knowledge, inspired by sustainability and united by purpose, Team Arkah shapes energy that empowers today and protects tomorrow.
                    </h4>
                    <Link to='/team'>
                        <button>Meet Our Team</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
