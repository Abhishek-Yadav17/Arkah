import shape1 from "/assets/img/shape/1.png";

const CareersBanner = () => {
    return (
        <>
            <div className="banner-style-two-area" style={{marginTop: '-5vw'}}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7">
                            <div className="banner-two-content">
                                <h2 className="item-title" style={{ fontSize: '5vw', lineHeight: '1', marginBottom: '4vw' }}>Careers at Arkah</h2>
                                <div className="d-flex">
                                    <h4 style={{ fontSize: '2vw', fontWeight: '400' }} className="careers-h4">
                                        Build energy that empowers today and safeguards tomorrow. Come work with us. Grow with us. Shape the future of energy.
                                    </h4>
                                </div>
                                <p>Arkah Energies is an equal opportunity employer. We celebrate diversity and are committed to a safe, respectful and inclusive workplace.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="banner-two-thumb">
                                <img src='/careers1.jpg' className="responsive-thumb" alt="Image Not Found" style={{ height: '30vw', objectFit: 'cover' }} />
                                <img src={shape1} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersBanner;