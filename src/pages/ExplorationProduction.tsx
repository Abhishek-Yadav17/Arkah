import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV4 from "../components/banner/BannerV4";
import ExplorationProductions from "../components/operations/ExplorationProductions";

const ExplorationProduction = () => {
    return (
        <>
            <Helmet>
                <title>Exploration & Production - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 />
                <ExplorationProductions />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default ExplorationProduction;
