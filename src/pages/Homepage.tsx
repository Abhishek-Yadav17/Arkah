import { Helmet } from "react-helmet-async";
import BannerV1 from "../components/banner/BannerV1";
import FooterV2 from "../components/footer/FooterV2";
import ServicesV6 from "../components/services/ServicesV6";
import HeaderV2 from "../components/header/Header";
import HomeAbout from "../components/about/HomeAbout";
import ScrollText from "../components/animation/ScrollText";
import Features2 from "../components/features/Features2";
import BrandV1 from "../components/brand/BrandV1";

const Home2Light = () => {
    return (
        <>
            <Helmet>
                <title>Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV1 />
                <ScrollText />
                <HomeAbout />
                <BrandV1 />
                <Features2 />
                <ServicesV6 />
                <FooterV2 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default Home2Light;