 'use client';

import React from 'react';
import PageContainer from '@/components/PageContainer';
const PHOTOS = [
    { id: 1, src: 'abi1.png', alt: '' },
    { id: 2, src: 'abi2.png', alt: '' },
    { id: 3, src: 'abi3.png', alt: '' },
    { id: 4, src: 'abi4.png', alt: '' },
    { id: 5, src: 'abi5.png', alt: '' },
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
        <PageContainer>
        <div className="w-full flex flex-col items-center justify-center overflow-visible">
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
                                {/* caption removed per request */}
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
