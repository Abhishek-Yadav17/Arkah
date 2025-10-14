import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderV2 from "../components/header/Header";
import FooterV2 from "../components/footer/FooterV2";
import BannerV2 from "../components/banner/BannerV2";
import BannerV4 from "../components/banner/BannerV4";
import ServicesV4 from "../components/services/ServicesV4";
import ServicesV5 from "../components/services/ServicesV5";
import BannerV7 from "../components/banner/BannerV7";
import BannerV5 from "../components/banner/BannerV5";
import ServicesV8 from "../components/services/ServiceV8";

const WhatWeDo = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>What We Do - Arkah</title>
            </Helmet>

            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV4 imageSrc="/operating.jpg" />

                <div id="operating-philosophy">
                    <BannerV7 />
                    <ServicesV8 />
                </div>

                <div id="exploration-production">
                    <BannerV5 />
                    <ServicesV4 />
                </div>

                <div id="renewable-natural-gas">
                    <BannerV2 />
                    <ServicesV5 />
                </div>

                <FooterV2 sectionClass="bg-gray" />
            </div>
        </>
    );
};

export default WhatWeDo;
