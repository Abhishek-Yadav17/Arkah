
interface DataType {
    id?: number;
    icon?: string;
    subTitle?: string;
    title?: string;
    text?: string;
}

const SingleServiceV6 = ({ service }: { service: DataType }) => {
    const { icon, subTitle, title, text } = service

    return (
        <>
            <li className="item-move-top-item" style={{ backgroundImage: 'url(/assets/img/shape/5.png)', border: '5px solid #6ddd95' }}>
                <div className="icon">
                    <img src={`/assets/img/icon/${icon}`} alt="Icon" width={200} height={200} />
                </div>
                <div className="details">
                    <div className="item-title">
                        <span>{subTitle}</span>
                        <h3>{title}</h3>
                    </div>
                    <p>{text}</p>
                </div>
            </li>
        </>
    );
};

export default SingleServiceV6;