import { Helmet } from "react-helmet-async";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import TeamV3 from "../components/team/TeamV3";
import BannerV4 from "../components/banner/BannerV4";

const Team = () => {
    return (
        <>
            <Helmet>
                <title>Our Team - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 />
                <TeamV3 sectionClass="bg-dark" hasTitle={true} />
                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default Team;
