import ProcessV1 from '../process/ProcessV1';

const ExpertiseV1 = () => {
    return (
        <>
            <div className="container expertise">
                
                <div className="expertise-area text-center" style={{marginTop: '2vw'}}>
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