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
        text: "Dual energy portfolio for a balanced future - From onshore oil rigs to renewable solutions, we deliver energy responsibly."
    },
    {
        heading: "Empowering Communities Sustaining",
        bg: "/biogas1.jpg",
        img: "/hero-bottom2.webp",
        text: "Energy that drives growth, supports communities, and protects our planet."
    },
    {
        heading: "Powering The Future Responsibly",
        bg: "/hero3.jpg",
        img: "/hero-bottom.webp",
        text: "Revolutionizing the global energy landscape with innovation, sustainability, and operational excellence — blending traditional expertise with next-generation solutions."
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

    const { heading, text } = slides[index];

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
                <h1>{heading}</h1>
                <h4>{text}</h4>
                <button>
                    Explore More <i className="ri-arrow-right-fill"></i>
                </button>
            </div>

        </div>
    );
};

export default BannerV2;
