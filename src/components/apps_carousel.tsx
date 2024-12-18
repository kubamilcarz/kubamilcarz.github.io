"use client";

import { useState, useEffect } from 'react';
import Card from './card';

const AppsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const apps = [
        { name: 'Bookie', link: "/bookie", imageUrl: 'bookieShowcase.png' },
        { name: 'Coffee Note', link: "/coffeenote", imageUrl: 'coffeeNoteShowcase.png' },
        { name: 'Memorize', link: "/memorize", imageUrl: 'memorizeShowcase.png' },
    ];

    // Handle Prev Button
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? apps.length - 1 : prevIndex - 1));
    };

    // Handle Next Button
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === apps.length - 1 ? 0 : prevIndex + 1));
    };

    // Auto-looping carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === apps.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* Carousel Images */}
            <div className="flex overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {apps.map((app, index) => (
                        <a href={app.link} key={index} className="w-full flex-shrink-0 hover:cursor-pointer">
                            <div className="flex flex-col items-center justify-center space-y-2">
                                <img src={app.imageUrl} alt={app.name} className="w-full h-auto rounded-xl" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Circle Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {apps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full`}
                        style={{
                            backgroundColor: index === currentIndex ? 'var(--secondary)' : 'var(--secondaryLight)',
                        }}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default AppsCarousel;
