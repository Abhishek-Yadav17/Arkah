import React from 'react';
import '../../assets/styles/Banner3.scss';

const BannerV3: React.FC = () => {
    return (
        <div className="about-hero-section">
            <video src="/Arkah.mp4" autoPlay loop muted></video>
        </div>
    );
};

export default BannerV3;
