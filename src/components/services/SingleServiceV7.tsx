
interface DataType {
    id?: number;
    titleFirst?: string;
    titleLast?: string;
    icon?: string;
    text?: string[];
    number?: string;
}

const SingleServiceV7 = ({ service }: { service: DataType }) => {
    const { titleFirst, titleLast, icon, text, number } = service;

    return (
        <>
            <div className="cteative-service-item" style={{height: '40vw', border: '5px solid #6ddd95'}}>
                <div className="top">
                    <h4>{titleFirst} <strong>{titleLast}</strong></h4>
                    <img src={`/assets/img/icon/${icon}`} alt="Icon" width={200} height={200} />
                </div>
                {text && (
                    <ul>
                        {text.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                <span>{number}</span>
            </div>
        </>
    );
};

export default SingleServiceV7;