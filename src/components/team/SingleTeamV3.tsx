import { Link } from "react-router-dom";
import { useState } from "react";

interface DataType {
    id?: number;
    thumb?: string;
    name?: string;
    designation?: string;
    text?: string;
}

const SingleTeamV3 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, designation, text } = team
    const [showText, setShowText] = useState(false);

    return (
        <>
            <div className="team-style-three-item">
                <div className="thumb">
                    <Link to={`/team-details/${id}`}>
                        <img src={`/${thumb}`} alt="Image Not Found" width={600} height={650} />
                    </Link>
                </div>
                <div className="info">
                    <h4><Link to={`/team-details/${id}`}>{name}</Link></h4>
                    <span style={{display: 'block'}}>{designation}</span>
                    <button
                        onClick={() => setShowText(!showText)}
                        style={{ marginTop: '1vw', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', border: '1px solid #6ddd95', background: '#6ddd95', color: '#FFF'}}
                    >
                        {showText ? 'Hide' : 'Read More'}
                    </button>

                    {showText && (
                        <p className="team-description" style={{ marginTop: '1vw' }}>{text}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default SingleTeamV3;