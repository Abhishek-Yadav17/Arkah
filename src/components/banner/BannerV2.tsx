import shape1 from "/assets/img/shape/1.png";

const BannerV2 = () => {
    return (
        <>
            <div className="banner-style-two-area" style={{paddingTop: '-10vw'}}>
                <div className="container">
                    <div className="row align-center">
                        <h4 className="sub-title" style={{position: 'absolute', top: '10%', border: '2px solid #6DDD95', fontSize: '23px'}}>Renewable Natural Gas</h4>
                        <div className="col-lg-7">
                            <div className="banner-two-content">
                                <h2 className="item-title" style={{ fontSize: '5vw', lineHeight: '1' }}>Tapping India's Agricultural Power for a Greener Future</h2>
                                <div className="d-flex">
                                    <img src='/recycle.jpg' alt="Image Not Found"/>

                                    <p className="split-text">
                                        At Arkah Energies, Renewable Natural Gas (RNG/CBG) is the cornerstone of our dual-energy vision harnessing India's agricultural strength to fuel sustainable growth. By transforming agri-waste into clean energy, we drive energy self-reliance, rural prosperity and environmental renewal, powering a Viksit Bharat that is greener and future-ready.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="banner-two-thumb">
                                <img src='/banner4.jpg' className="responsive-thumb" alt="Image Not Found" style={{height: '30vw', objectFit: 'cover'}} />
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