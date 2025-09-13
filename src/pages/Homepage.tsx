import { Helmet } from "react-helmet-async";
import CursorEffect from "../components/animation/CursorEffect";
import BannerV2 from "../components/banner/BannerV2";
import FooterV2 from "../components/footer/FooterV2";
import PortfolioV2 from "../components/portfolio/PortfolioV2";
import ServicesV6 from "../components/services/ServicesV6";
import TeamV3 from "../components/team/TeamV3";
import ThemeLight from "../components/switcher/ThemeLight";
import HeaderV2 from "../components/header/Header";
import HomeAbout from "../components/about/HomeAbout";

const Home2Light = () => {
    return (
        <>
            <Helmet>
                <title>Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV2 />
                <HomeAbout />
                <ServicesV6 />
                <PortfolioV2 sectionClass='default-padding bg-gray' hasTitle={true} />
                <TeamV3 sectionClass='bg-dark' hasTitle={true} />
                <CursorEffect />
                <FooterV2 sectionClass='bg-gray' />
                <ThemeLight />
            </div>
        </>
    );
};

export default Home2Light;