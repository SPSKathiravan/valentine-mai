'use client';

import React from 'react';
const PHOTOS = [
    { id: 1, src: '', alt: '' },
    { id: 2, src: '', alt: '' },
    { id: 3, src: '', alt: '' },
    { id: 4, src: '', alt: '' },
    { id: 5, src: '', alt: '' },
];

export default function PhotoScroll() {
    const count = PHOTOS.length;
    const [dimensions, setDimensions] = React.useState({ radius: 280, cardW: 224, cardH: 256 });

    React.useEffect(() => {
        const update = () => {
            const isMobile = window.innerWidth < 768;
            setDimensions({
                radius: isMobile ? 160 : 280,
                cardW: isMobile ? 160 : 224,
                cardH: isMobile ? 200 : 270,
            });
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const { radius, cardW, cardH } = dimensions;

    return (
        <div className="w-full flex items-center justify-center overflow-visible">
            {/* Perspective wrapper — perspective origin is dead center */}
            <div
                style={{
                    width: `${cardW}px`,
                    height: `${cardH}px`,
                    perspective: '1200px',
                    perspectiveOrigin: '50% 50%',
                    position: 'relative',
                }}
            >
                {/* Rotating hub — same size as one card, centered */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        transformStyle: 'preserve-3d',
                        transformOrigin: '50% 50%',
                        animation: 'rotateCarousel 30s linear infinite',
                    }}
                >
                    {PHOTOS.map((photo, index) => {
                        const angle = (360 / count) * index;
                        return (
                            <div
                                key={photo.id}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: `${cardW}px`,
                                    height: `${cardH}px`,
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '4px solid white',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                                    background: 'white',
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    backfaceVisibility: 'hidden',
                                    WebkitBackfaceVisibility: 'hidden',
                                }}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        padding: '12px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)',
                                    }}
                                >
                                    {photo.alt ? (
                                        <span className="text-white text-[10px] md:text-xs font-semibold drop-shadow-md">
                                            ❤️ {photo.alt}
                                        </span>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
