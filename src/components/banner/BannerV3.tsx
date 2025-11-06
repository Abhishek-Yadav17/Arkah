import React, { useRef, useState } from 'react';
import '../../assets/styles/BannerV3.scss';

const BannerV3: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="about-hero-section">
      <video ref={videoRef} src="/arkah1.mp4" autoPlay loop muted></video>
      <button className="mute-btn" onClick={toggleMute}>
        <i className={isMuted ? 'ri-volume-mute-fill' : 'ri-volume-up-fill'}></i>
      </button>
    </div>
  );
};

export default BannerV3;
