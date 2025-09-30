interface DataType {
    title?: string;
}

interface ServiceDetailsProps {
    serviceInfo?: DataType;
    sectionClass?: string;
}

const ServiceDetailsContent2 = ({ sectionClass }: ServiceDetailsProps) => {

    return (
        <>
            <div className={`services-details-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="services-details-items">
                        <div className="d-flex justify-content-center mt-50">
                            <div className="item" style={{ width: '60%' }}>
                                <div className="faq-style-one faq-style-two">
                                    <h2 className="mb-30" style={{ fontSize: '4vw', textAlign: 'center',  }}>FAQs</h2>
                                    <div className="accordion" id="faqAccordion" style={{marginLeft: '4vw', marginTop: '4vw'}}>
                                        {[
                                            {
                                                id: "One",
                                                title: "What returns are you targeting?",
                                                body: "Arkah prioritizes capital efficiency and risk-adjusted returns through low-Capex entries, operational optimization and stable offtake structures in RNG/CBG."
                                            },
                                            {
                                                id: "Two",
                                                title: "How do you balance O&G with renewables?",
                                                body: "Near-term O&G cash flows underwrite disciplined growth, while RNG/CBG provides policy-aligned, lower-carbon expansion with circular value creation."
                                            },
                                            {
                                                id: "Three",
                                                title: "What is your approach to offtake in RNG/CBG?",
                                                body: "We seek creditworthy counterparties, blended offtake (CNG, industrial), and policy mechanisms to stabilize pricing and volumes."
                                            }
                                        ].map((item, idx) => (
                                            <div className="accordion-item" key={item.id} style={{ marginBottom: '4vw' }}>
                                                <h2 className="accordion-header" id={`heading${item.id}`}>
                                                    <button
                                                        className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${item.id}`}
                                                        aria-expanded={idx === 0 ? "true" : "false"}
                                                        aria-controls={`collapse${item.id}`}
                                                        style={{ fontSize: '2vw' }}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${item.id}`}
                                                    className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                                                    aria-labelledby={`heading${item.id}`}
                                                    data-bs-parent="#faqAccordion"
                                                >
                                                    <div className="accordion-body" style={{ fontSize: '17px', lineHeight: '1.8' }}>
                                                        <p style={{ fontSize: '1.5vw', lineHeight: '1.5' }}>{item.body}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent2;