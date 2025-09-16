import { Link } from "react-router-dom";

interface DataType {
    id?: number;
    thumbLight?: string;
    titleFirst?: string;
    titleLast?: string;
    text?: string;
    reverse?: boolean;
}

const SinglePortfolioV3Light = ({ portfolio }: { portfolio: DataType }) => {
    const { thumbLight, titleFirst, titleLast, text, id } = portfolio
    const isReversed = portfolio.reverse;

    return (
        <>
            <div className="portfolio-style-three-item" style={{ border: '5px solid #6ddd95' }}>
                <div className={`row align-center ${isReversed ? 'flex-row-reverse' : ''}`} style={{ gap: '40px', flexWrap: 'nowrap' }}>
                    <div className="col-lg-7">
                        <img src={`/${thumbLight}`} alt="Image Not Found" width={800} height={600} />
                    </div>
                    <div className="col-lg-5" >
                        <h2 style={{ width: '50vw', fontWeight: '400', marginLeft: '8vw', letterSpacing: '-3px', fontSize: '6vw' }}>{titleFirst} {titleLast}</h2>
                        <h4 style={{ fontWeight: '500', lineHeight: '1.5', marginLeft: '1vw' }}>{text}</h4>
                        {id === 3 && (
                             <Link to="/team">
                            <button style={{ marginLeft: '1vw', padding: '10px 20px', fontSize: '1.2rem', cursor: 'pointer' }}>
                                Meet Our Team
                            </button>
                        </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV3Light;