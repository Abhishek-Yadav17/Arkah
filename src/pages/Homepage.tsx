import { Helmet } from "react-helmet-async";
import BannerV2 from "../components/banner/BannerV2";
import FooterV2 from "../components/footer/FooterV2";
import ServicesV6 from "../components/services/ServicesV6";
import HeaderV2 from "../components/header/Header";
import HomeAbout from "../components/about/HomeAbout";
import ScrollText from "../components/animation/ScrollText";
import Features from "../components/features/Features";
import Features2 from "../components/features/Features2";

const Home2Light = () => {
    return (
        <>
            <Helmet>
                <title>Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV2 />
                <ScrollText />
                <HomeAbout />
                <Features />
                <Features2 />
                <ServicesV6 />
                <FooterV2 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default Home2Light;