import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, FreeMode } from 'swiper/modules';
import shape10 from "/assets/img/shape/10.png";
import ServicesV4Data from "../../assets/ServicesV4Data.json";
import SingleServiceV4 from "./SingleServiceV4";

const ServicesV4 = () => {
    return (
        <>
            <div className="services-style-four-area default-padding-bottom overflow-hidden blurry-shape-left" style={{ paddingTop: '5vw' }}>
                <div className="shape-left-top">
                    <img src={shape10} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="site-heading">
                                <h4 className="sub-title">Exploration & Production</h4>
                                <h2 className="title split-text" style={{width: '120%'}}>
                                    Unlocking Value in India's Upstream Oil & Gas
                                </h2>
                                <h5 style={{fontWeight: '400', marginTop: '2vw', lineHeight: '1.5'}}>At Arkah Energies, we are committed to driving growth in India's upstream oil & gas sector, with a sharp focus on marginal and discovered small fields. These assets are often overlooked, yet they represent some of the most promising opportunities for agile energy companies looking to combine efficiency, innovation and responsible operations</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-item-one-items">
                                <div className="services-nav">
                                    <div className="nav-items">
                                        <div className="services-button-prev">
                                            <i className="ri-arrow-left-s-line"></i>
                                        </div>
                                        <div className="services-button-next">
                                            <i className="ri-arrow-right-s-line"></i>
                                        </div>
                                    </div>
                                </div>
                                <Swiper className="services-carousel swiper"
                                    loop={true}
                                    autoplay={false}
                                    freeMode={true}
                                    grabCursor={true}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    navigation={{
                                        nextEl: ".services-button-next",
                                        prevEl: ".services-button-prev",
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 50
                                        },
                                        1400: {
                                            slidesPerView: 2.8,
                                            spaceBetween: 50
                                        },
                                        1800: {
                                            slidesPerView: 2.8,
                                            spaceBetween: 70
                                        },
                                    }}
                                    modules={[Navigation, FreeMode, Keyboard]}
                                >
                                    <div className="swiper-wrapper">
                                        {ServicesV4Data.map(service =>
                                            <SwiperSlide key={service.id} >
                                                <SingleServiceV4 service={service} />
                                            </SwiperSlide>
                                        )}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV4;