'use client';

import { useEffect, useState } from 'react';

interface Heart {
    id: number;
    x: number;
    delay: number;
    size: number;
    duration: number;
}

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        // Detect mobile vs desktop to adjust particle count
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 40; // Reduced from 40 for mobile

        const newHearts: Heart[] = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // Random horizontal position
            delay: Math.random() * 5, // Random delay
            duration: Math.random() * 3 + 4, // Random duration (4-7s)
            size: Math.random() * 40 + 30, // Random size (30-70px)
        }));
        setHearts(newHearts);
    }, []);

    return (
        <>
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute animate-floatDown pointer-events-none z-0"
                    style={{
                        left: `${heart.x}%`,
                        top: '-10%',
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                        fontSize: `${heart.size}px`,
                        filter: heart.size < 40 ? 'blur(1px)' : 'blur(0px)', // Depth effect
                        textShadow: '0 0 20px rgba(255, 107, 157, 0.8)',
                    }}
                >
                    💖
                </div>
            ))}
        </>
    );
}
