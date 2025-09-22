import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import ServicesV4 from "../components/services/ServicesV4";

const ExplorationProduction = () => {
    return (
        <>
            <Helmet>
                <title>Exploration & Production - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 />
                <ServicesV4 />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default ExplorationProduction;
