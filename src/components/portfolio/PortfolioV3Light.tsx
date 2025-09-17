import PortfolioV3Data from '../../assets/PortfolioV3Data.json';
import SinglePortfolioV3Light from './SinglePortfolioV3Light.js';

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const PortfolioV3Light = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`portfolio-style-three-area ${sectionClass ? sectionClass : ""}`} style={{paddingTop: '5vw'}}>
                <div className="container" style={{paddingBottom: '5vw'}}>
                    <div className="portfolio-style-three-items">
                        {PortfolioV3Data.map(portfolio =>
                            <SinglePortfolioV3Light portfolio={portfolio} key={portfolio.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV3Light;