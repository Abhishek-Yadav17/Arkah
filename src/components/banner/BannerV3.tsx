import React from 'react';
import '../../assets/styles/BannerV3.scss';

const BannerV3: React.FC = () => {
    return (
        <div className="about-hero-section">
            <video src="/arkah1.mp4" autoPlay loop muted></video>
        </div>
    );
};

export default BannerV3;
