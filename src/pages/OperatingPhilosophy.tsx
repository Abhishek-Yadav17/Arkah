import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import OperationPhilosophy from "../components/operations/OperationPhilosophy";

const OperatingPhilosophy = () => {
    return (
        <>
            <Helmet>
                <title>Operating Philosophy - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/bulb.png" />
                <OperationPhilosophy />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default OperatingPhilosophy;
