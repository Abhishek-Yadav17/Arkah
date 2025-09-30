import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import ServicesV1 from "../components/services/ServicesV1";
import ServiceDetailsContent from "../components/services/ServiceDetailsContent";
import AboutV3 from "../components/about/AboutV3";
import AboutV4 from "../components/about/AboutV4";
import AboutV5 from "../components/about/AboutV5";
import ServiceDetailsContent2 from "../components/services/ServicesDetailsContent2";

const Investors = () => {
    return (
        <>
            <Helmet>
                <title>Investors - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/Team.jpg" />
                <ServicesV1 />
                <ServiceDetailsContent />
                <AboutV3 />
                <AboutV4 />
                <AboutV5 />
                <ServiceDetailsContent2 />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default Investors;
