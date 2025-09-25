import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, FreeMode } from 'swiper/modules';
import shape10 from "/assets/img/shape/10.png";
import ServicesV5Data from "../../assets/ServicesV5Data.json";
import SingleServiceV5 from './SingleServiceV5';

const ServicesV5 = () => {
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
                                <h4 className="sub-title">Renewable Natural Gas</h4>
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
                                        {ServicesV5Data.map(service =>
                                            <SwiperSlide key={service.id} >
                                                <SingleServiceV5 service={service} />
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

export default ServicesV5;