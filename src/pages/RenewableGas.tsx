import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV2 from "../components/banner/BannerV2";
import ServicesV2 from "../components/services/ServicesV2";

const RenewableGas = () => {
    return (
        <>
            <Helmet>
                <title>Renewable Natural Gas - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV2 />
                <ServicesV2 />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default RenewableGas;
