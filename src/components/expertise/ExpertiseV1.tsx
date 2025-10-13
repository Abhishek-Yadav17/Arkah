import ProcessV1 from '../process/ProcessV1';

const ExpertiseV1 = () => {
    return (
        <>
            <div className="container expertise">

                <div className="expertise-area text-center" style={{ marginTop: '2vw' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading">
                                <h4 className="sub-title" style={{fontSize: '2vw'}}>Why Arkah</h4>
                            </div>
                        </div>
                    </div>
                    <ProcessV1 />
                </div>
                <h2 style={{ fontSize: '3vw', marginTop: '5vw' }}>Where You Can Make an Impact</h2>
                <div className="custom-list-container">
                    <ul className="custom-two-column-list">
                        <li><span className="line" />Subsurface & Reservoir</li>
                        <li><span className="line" />Operations & Production</li>
                        <li><span className="line" />RNG / CBG Plant Management</li>
                        <li><span className="line" />Project Execution</li>
                        <li><span className="line" />ESG & Community</li>
                        <li><span className="line" />Digital & Data</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ExpertiseV1;