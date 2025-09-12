import React, { useEffect, useRef, useState } from 'react';
import '../../assets/styles/BannerV2.scss';
import gsap from 'gsap';

type Slide = {
    heading: string;
    bg: string;
    img: string;
    text: string;
};

const slides: Slide[] = [
    {
        heading: "Balancing Reliability & Sustainability",
        bg: "/hero.webp",
        img: "/hero-bottom.webp",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor?"
    },
    {
        heading: "Empowering Communities Sustaining",
        bg: "/hero2.png",
        img: "/hero-bottom2.webp",
        text: "Sustainability drives our mission to reshape the energy future."
    },
    {
        heading: "Powering The Future Responsibly",
        bg: "/hero3.jpg",
        img: "/hero-bottom.webp",
        text: "Empowering communities through renewable solutions."
    }
];

const BannerV2: React.FC = () => {
    const [index, setIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (index + 1) % slides.length;

            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 1, y: 0 },
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.4,
                        ease: 'power2.out',
                        onComplete: () => {
                            setIndex(nextIndex);
                            gsap.fromTo(
                                contentRef.current,
                                { opacity: 0, y: -20 },
                                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                            );
                        }
                    }
                );
            } else {
                setIndex(nextIndex);
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [index]);

    const { heading, img, text } = slides[index];

    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-bg-container">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`hero-bg ${i === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.bg})` }}
                    />
                ))}
            </div>

            <div className="hero-content" ref={contentRef}>
                <div className="hero-left">
                    <h1>{heading}</h1>
                    <button>
                        Explore More <i className="ri-arrow-right-fill"></i>
                    </button>
                </div>
                <div className="hero-right">
                    <div className="hero-right-img">
                        <img src={img} alt="hero" />
                    </div>
                    <div className="hero-right-content">
                        <h4>{text}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerV2;
