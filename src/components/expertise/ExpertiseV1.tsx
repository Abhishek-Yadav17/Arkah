import ProcessV1 from '../process/ProcessV1';

const ExpertiseV1 = () => {
    return (
        <>
            <div className="container" style={{paddingTop: '10vw'}}>
                <h2 style={{fontSize: '3vw'}}>Careers at Arkah</h2>
                <h4 style={{fontSize: '2vw', fontWeight: '400', width: '70%'}}>Build energy that empowers today and safeguards tomorrow. Come work with us. Grow with us. Shape the future of energy.</h4>
                <h5 style={{fontWeight: '400', fontSize: '1.2vw'}}>Arkah Energies is an equal opportunity employer. We celebrate diversity and are committed to a safe, respectful and inclusive workplace.</h5>
                <div className="expertise-area text-center" style={{marginTop: '5vw'}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading">
                                <h4 className="sub-title">Why Arkah</h4>
                            </div>
                        </div>
                    </div>
                    <ProcessV1 />
                </div>
                <h2 style={{fontSize: '3vw', marginTop: '5vw'}}>Where You Can Make an Impact</h2>
                <h5 style={{fontSize: '1.4vw', fontWeight: '400'}}>Subsurface & Reservoir • Operations & Production • RNG/CBG Plant Management • Project Execution • ESG & Community • Digital & Data </h5>
            </div>
        </>
    );
};

export default ExpertiseV1;