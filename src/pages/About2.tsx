import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV3 from "../components/banner/BannerV3";
import AboutUs from "../components/about/AboutUs";

const About2 = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV3 />
                <AboutUs />
                <FooterV2 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default About2;
