import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import TeamV3 from "../components/team/TeamV3";
import BannerV3 from "../components/banner/BannerV3";

const Team = () => {
    return (
        <>
            <Helmet>
                <title>Our Team - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV3 />
                <TeamV3 sectionClass="bg-dark" hasTitle={true} />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default Team;
