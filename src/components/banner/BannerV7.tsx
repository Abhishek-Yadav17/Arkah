import shape1 from "/assets/img/shape/1.png";

const BannerV7 = () => {
    return (
        <>
            <div className="banner-style-two-area" style={{paddingTop: '-10vw'}}>
                <div className="container">
                    <div className="row align-center">
                        <h4 className="sub-title" style={{position: 'absolute', top: '10%', border: '2px solid #6DDD95', fontSize: '1.5vw'}}>Operating Philosophy</h4>
                        <div className="col-lg-7">
                            <div className="banner-two-content">
                                <h2 className="item-title" style={{ fontSize: '5vw', lineHeight: '1' }}>Tapping India's Agricultural Power for a Greener Future</h2>
                                <div className="d-flex">
                                    <img src='/recycle.jpg' alt="Image Not Found"/>

                                    <p className="split-text">
                                        Powering Progress with Purpose — balancing tradition and transformation to deliver energy that empowers today and safeguards tomorrow.
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

export default BannerV7;