import shape1 from "/assets/img/shape/1.png";

const BannerV5 = () => {
    return (
        <>
            <div className="banner-style-two-area" style={{paddingTop: '-10vw'}}>
                <div className="container">
                    <div className="row align-center">
                        <h4 className="sub-title" style={{position: 'absolute', top: '8%', border: '2px solid #6DDD95', fontSize: '23px'}}>Exploration & Production</h4>
                        <div className="col-lg-7">
                            <div className="banner-two-content">
                                <h2 className="item-title" style={{ fontSize: '5vw', lineHeight: '1' }}>Unlocking Value in India's Upstream Oil & Gas</h2>
                                <div className="d-flex">
                                    <img src='/oil.jpg' alt="Image Not Found"/>

                                    <p className="split-text">
                                        At Arkah Energies, we are committed to driving growth in India's upstream oil & gas sector, with a sharp focus on marginal and discovered small fields. These assets are often overlooked, yet they represent some of the most promising opportunities for agile energy companies looking to combine efficiency, innovation and responsible operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="banner-two-thumb">
                                <img src='/expro2.jpg' className="responsive-thumb" alt="Image Not Found" style={{height: '30vw', objectFit: 'cover'}} />
                                <img src={shape1} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV5;