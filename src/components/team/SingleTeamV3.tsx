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
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <span style={{ display: 'block' }}>{designation}</span>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        style={{ marginTop: '1vw', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', border: '1px solid #6ddd95', background: '#6ddd95', color: '#FFF' }}
                    >
                        Read More
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%',
                    height: '100%', background: 'rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 9999
                }}>
                    <div style={{
                        background: '#fff', padding: '2rem', maxWidth: '600px',
                        borderRadius: '8px', position: 'relative'
                    }}>
                        <h3 style={{color: '#000'}}>{name}</h3>
                        <p style={{color: '#000'}}>{text}</p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: 'absolute', top: '10px', right: '10px', color: '#FFF'
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleTeamV3;