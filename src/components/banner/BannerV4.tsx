import React from 'react';
import '../../assets/styles/BannerV4.scss';

interface BannerV4Props {
    imageSrc: string;
}

const BannerV4: React.FC<BannerV4Props> = ({ imageSrc }) => {
    return (
        <div className="team-section">
            <img src={imageSrc} alt="op" />
        </div>
    );
};

export default BannerV4;
