import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    titleFirst?: string;
    titleLast?: string;
    icon?: string;
    text?: string[];
    number?: string;
}

const SingleServiceV8 = ({ service }: { service: DataType }) => {
    const { id, titleFirst, titleLast, icon, text, number } = service;

    return (
        <>
            <div className="cteative-service-item" style={{height: '400px', border: '5px solid #6ddd95'}}>
                <div className="top">
                    <h4><Link to={`/service-details/${id}`}>{titleFirst} <strong>{titleLast}</strong></Link></h4>
                    <img src={`/assets/img/icon/${icon}`} alt="Icon" width={200} height={200} />
                </div>
                {text?.length && (
                    <ul className="service-text-list">
                        {text.map((line, index) => (
                            <li key={index} style={{marginBottom: '1vw'}}>{line}</li>
                        ))}
                    </ul>
                )}
                <span>{number}</span>
            </div>
        </>
    );
};

export default SingleServiceV8;