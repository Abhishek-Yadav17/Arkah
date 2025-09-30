interface DataType {
    title?: string;
}

interface ServiceDetailsProps {
    serviceInfo?: DataType;
    sectionClass?: string;
}

const ServiceDetailsContent = ({ sectionClass }: ServiceDetailsProps) => {

    return (
        <>
            <div className={`services-details-area ${sectionClass ? sectionClass : ""}`} style={{marginTop: '2vw'}}>
                <div className="container">
                    <div className="services-details-items">
                        <h4 style={{fontSize: '3vw'}}>Growth Path</h4>
                        <div className="mt-xs-20">
                            <div className="process-style-two" style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div className="process-style-two-item">
                                    <span>1</span>
                                    <h4>Years 1-2</h4>
                                    <p style={{width: '80%'}}>
                                        Low-Capex field entries, first RNG/CBG projects, establish disciplined operating baseline.
                                    </p>
                                </div>
                                <div className="process-style-two-item">
                                    <span>2</span>
                                    <h4>Years 3-4</h4>
                                    <p style={{width: '80%'}}>
                                        Portfolio aggregation in O&G, RNG feedstock clusters and long-term offtake expansion.
                                    </p>
                                </div>
                                <div className="process-style-two-item">
                                    <span>3</span>
                                    <h4>Years 5-6</h4>
                                    <p style={{width: '80%'}}>
                                        Scale production; broaden RNG/CBG footprint and circular economy linkages; progress toward $125M revenue target.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;