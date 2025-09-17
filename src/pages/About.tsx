import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import PortfolioV3Light from "../components/portfolio/PortfolioV3Light";
import BannerV3 from "../components/banner/BannerV3";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV3 />
                <PortfolioV3Light />
                <FooterV2 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default About;
