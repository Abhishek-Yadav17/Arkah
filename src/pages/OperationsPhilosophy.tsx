import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import CursorEffect from "../components/animation/CursorEffect";
import ThemeLight from "../components/switcher/ThemeLight";
import BannerV3 from "../components/banner/BannerV3";
import ServicesV3 from "../components/services/ServicesV3";

const OperationPhilosophy = () => {
    return (
        <>
            <Helmet>
                <title>Operational Philosophy - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV3 />
                <ServicesV3 sectionClass='default-padding' hasTitle={true} />
                <FooterV2 sectionClass="bg-gray" />
                <CursorEffect />
                <ThemeLight />
            </div>
        </>
    );
};

export default OperationPhilosophy;
