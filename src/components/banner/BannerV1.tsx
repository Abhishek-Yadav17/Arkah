import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/BannerV2.scss';
import gsap from 'gsap';

type Slide = {
    heading: string;
    bg: string;
    text: string;
    btn: string;
};

const slides: Slide[] = [
    {
        heading: "Powering the Future Responsibly",
        bg: "/hero2.png",
        text: "Revolutionizing the global energy landscape with innovation, sustainability and operational excellence — blending traditional expertise with next-generation solutions.",
        btn: "Who We Are"
    },
    {
        heading: "Balancing Reliability & Sustainability",
        bg: "/biogas1.jpg",
        text: "Dual energy portfolio for a balanced future -  From onshore oil rigs to renewable solutions, we deliver energy responsibly with zero-carbon footprint at the core of its strategy.",
        btn: "What We Do"
    },
    {
        heading: "Empowering Communities, Sustaining Tomorrow",
        bg: "/esg.png",
        text: "Delivering energy that fuels economic growth, strengthens communities and safeguards our planet — while advancing a circular economy model that creates long-term and sustainable value.",
        btn: "Sustainability Commitment"
    }
];

const BannerV1: React.FC = () => {
    const [index, setIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const bgSlides = document.querySelectorAll('.hero-bg');

        gsap.fromTo(
            bgSlides[index],
            { scale: 1 },
            { scale: 1.2, duration: 4, ease: 'power2.out' }
        );

        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: 1, ease: 'power2.out' }
            );
        }

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [index]);

    const { heading, text, btn } = slides[index];

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
                <Link to='/about2'>
                    <button>
                        {btn} <i className="ri-arrow-right-fill"></i>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default BannerV1;
