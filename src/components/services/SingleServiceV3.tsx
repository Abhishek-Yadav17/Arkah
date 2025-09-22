import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    titleFirst?: string;
    titleLast?: string;
    text?: string;
    number?: string;
}

const SingleServiceV3 = ({ service }: { service: DataType }) => {
    const { id, titleFirst, titleLast, text, number } = service

    return (
        <>
            <div className="service-three-content">
                <div className="info">
                    <h4><Link to={`/service-details/${id}`}>{titleFirst} <br /> {titleLast}</Link></h4>
                    <p>{text}</p>
                </div>
                <div className="bottom">
                    {number}
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;