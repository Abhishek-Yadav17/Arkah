import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import ServicesV7 from "../components/services/ServicesV7";

const OperatingPhilosophy = () => {
    return (
        <>
            <Helmet>
                <title>Operating Philosophy - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/bulb.png" />
                <ServicesV7 />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default OperatingPhilosophy;
