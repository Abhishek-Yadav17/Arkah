interface DataType {
    id: number;
    titleFirst?: string;
    titleLast?: string;
    icon?: string;
    text?: string[];
    number?: string;
}

const SingleServiceV7 = ({ service }: { service: DataType }) => {
    const { titleFirst, titleLast, icon, text, number } = service;

    return (
        <div
            className="cteative-service-item"
            style={{
                minWidth: "36vw",
                maxWidth: "36vw",
                height: "28vw",
                border: "5px solid #6ddd95",
                padding: "2vw",
                backgroundColor: "#fff",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: '4vw',
                textAlign: "left",
            }}
        >
            <div
                className="top"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1vw",
                }}
            >
                <h4 style={{ margin: 0 }}>
                    {titleFirst} {titleLast}
                </h4>
                <img
                    src={`/assets/img/icon/${icon}`}
                    alt="Icon"
                    width={80}
                    height={80}
                />
            </div>

            {text && (
                <ul
                    style={{
                        paddingLeft: 0,
                        listStyle: "none",
                        margin: "1vw 0 0 0",
                    }}
                >
                    {text.map((item, index) => (
                        <li key={index} style={{ marginBottom: "1vw" }}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            <span style={{ marginTop: "0.5vw" }}>{number}</span>
        </div>
    );
};

export default SingleServiceV7;
