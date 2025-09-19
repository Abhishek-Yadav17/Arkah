import "../../assets/styles/AboutUs.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {

    return (
        <section className="about-us">
            <div className="about-cards">
                <div className="about-cards-inner-top">
                    <img src="/energy1.png" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Story</h1>
                    <h4>Our journey began with a simple yet powerful idea: that energy could be smarter, cleaner and more responsible. Founded by a seasoned team of oil & gas industry veterans, Arkah is a next-generation energy company born from a shared vision to redefine the future of energy. With deep industry expertise, strategic foresight and an innovation-first mindset, we are committed to building a sustainable, reliable, and resilient energy future</h4>

                    <h4>We believe that the energy industry must evolve to meet the demands of a rapidly changing world. To remain relevant and responsible, it must embrace innovation, sustainability and adaptability. At Arkah, we are fueling this evolution - harnessing cutting edge technologies and cost-effective solutions with sustainable practices that serve both people and the planet. From advancing renewable energy and digital innovation to unlocking untapped fossil fuel reserves with integrity, we are redefining what energy means for the modern world.</h4>

                    <h4>Our story is still unfolding, but our mission is clear - Powering progress with purpose & fueling future responsibly.
                    </h4>
                </div>
            </div>
            <div className="about-cards">
                <div className="about-cards-inner-top">
                    <img src="/ESG2.jpg" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Purpose</h1>
                    <h4>At Arkah, our mission is to revolutionize the global energy landscape through responsible innovation, reliable and efficient energy solutions and an unwavering pursuit of operational
                        excellence. Driven by integrity and a long-term vision, we are committed to building a
                        scalable, sustainable and inclusive energy future - one that fuels economic growth, empowers communities, creates enduring value for stakeholders and protects our planet for generations to come.
                    </h4>
                </div>
            </div>
            <div className="about-cards">
                <div className="about-cards-inner-top">
                    <img src="/Team.jpg" alt="team" />
                </div>
                <div className="about-cards-inner-bottom">
                    <h1>Our Team</h1>
                    <h4>Driven by knowledge, inspired by sustainability and united by purpose — Team Arkah shapes energy that empowers today and protects tomorrow.
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
