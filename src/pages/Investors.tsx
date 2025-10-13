import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import ServicesV1 from "../components/services/ServicesV1";

const Investors = () => {
    return (
        <>
            <Helmet>
                <title>Investors - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/investor.jpg" />
                <ServicesV1 />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default Investors;
