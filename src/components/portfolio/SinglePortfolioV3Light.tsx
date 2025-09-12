interface DataType {
    thumbLight?: string;
    titleFirst?: string;
    titleLast?: string;
    text?: string;
}

const SinglePortfolioV3Light = ({ portfolio }: { portfolio: DataType }) => {
    const {thumbLight, titleFirst, titleLast, text } = portfolio

    return (
        <>
            <div className="portfolio-style-three-item">
                <div className="row align-center">
                    <div className="col-lg-7">
                        <img src={`/${thumbLight}`} alt="Image Not Found" width={800} height={600} />
                    </div>
                    <div className="col-lg-5" >
                        <h2 style={{ width: '50vw', fontWeight: '400'}}>{titleFirst} {titleLast}</h2>
                        <h4 style={{fontWeight: '500', lineHeight: '1.5'}}>{text}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV3Light;