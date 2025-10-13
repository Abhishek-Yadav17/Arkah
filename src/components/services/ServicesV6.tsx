import ServicesV6Data from '../../assets/ServicesV6Data.json';
import SingleServiceV6 from './SingleServiceV6.js';
import useItemMoveTopEffect from '../../hooks/useItemMoveTopEffect.js';

const ServicesV6 = () => {

    useItemMoveTopEffect();

    return (
        <>
            <div className="services-style-six-area default-padding blurry-shape-left">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="service-style-six-info">
                                <h2 className="title split-text" style={{color: '#1A5F32'}}>
                                    Why Partner With Arkah?
                                </h2>
                                <h4 style={{color: '#1A5F32'}}>Powering Progress through Expertise, Innovation and Purpose</h4>
                            </div>
                        </div>

                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="service-style-six-items item-move-top-items">
                                <ul>
                                    {ServicesV6Data.map(service =>
                                        <SingleServiceV6 service={service} key={service.id} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV6;