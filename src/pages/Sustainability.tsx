import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import Sustainable from "../components/sustainability/Sustainable";

const Sustainability = () => {

    return (
        <>
            <Helmet>
                <title>What We Do - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/operating.jpg" />
                <Sustainable />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default Sustainability;
