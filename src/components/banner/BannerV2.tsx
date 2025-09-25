import shape1 from "/assets/img/shape/1.png";

const BannerV2 = () => {
    return (
        <>
            <div className="banner-style-two-area">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <div className="banner-two-content">
                                <h2 className="item-title" style={{ fontSize: '5vw', lineHeight: '1' }}>Tapping India's Agricultural Power for a Greener Future</h2>
                                <div className="d-flex">
                                    <img src='/recycle.jpg' alt="Image Not Found"/>

                                    <p className="split-text">
                                        At Arkah Energies, Renewable Natural Gas (RNG/CBG) is the cornerstone of our dual-energy strategy—powering growth today while accelerating India's transition to low-carbon fuel systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="banner-two-thumb">
                                <img src='/banner4.jpg' alt="Image Not Found" style={{height: '30vw', objectFit: 'cover'}} />
                                <img src={shape1} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV2;