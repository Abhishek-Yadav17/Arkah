
interface DataType {
    title?: string;
    breadCrumb?: string;
}

const Breadcrumb = ({ title}: DataType) => {
    return (
        <>
            <div className={`breadcrumb-area text-center`}
                style={{ backgroundImage: `url(/assets/img/shape/10.jpg)` }}>
                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/6.jpg)' }} />

                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>{title ? title : "not found"}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;