'use client';

import { useEffect, useState } from 'react';

interface ConfettiPiece {
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    size: number;
    shape: 'circle' | 'square' | 'heart';
    duration: number;
}

export default function Confetti() {
    const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

    useEffect(() => {
        const colors = ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF6B9D', '#C471ED', '#8B5CF6'];
        const shapes: Array<'circle' | 'square' | 'heart'> = ['circle', 'square', 'heart'];

        const confettiArray = Array.from({ length: 100 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            size: Math.random() * 8 + 4, // 4-12px
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            duration: Math.random() * 2 + 2, // 2-4s
        }));
        setConfetti(confettiArray);
    }, []);

    return (
        <>
            {confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="absolute animate-confettiFall pointer-events-none z-0"
                    style={{
                        left: `${piece.x}%`,
                        top: `${piece.y}%`,
                        width: piece.shape === 'heart' ? 'auto' : `${piece.size}px`,
                        height: piece.shape === 'heart' ? 'auto' : `${piece.size}px`,
                        backgroundColor: piece.shape !== 'heart' ? piece.color : 'transparent',
                        transform: `rotate(${piece.rotation}deg)`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${piece.duration}s`,
                        borderRadius: piece.shape === 'circle' ? '50%' : '0',
                        fontSize: piece.shape === 'heart' ? `${piece.size * 2}px` : undefined,
                        filter: 'drop-shadow(0 0 3px rgba(255, 107, 157, 0.5))',
                    }}
                >
                    {piece.shape === 'heart' ? '💖' : ''}
                </div>
            ))}

            {/* Sparkle Particles */}
            {Array.from({ length: 30 }, (_, i) => (
                <div
                    key={`sparkle-${i}`}
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 20 + 10}px`,
                        animation: `sparkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                >
                    ✨
                </div>
            ))}
        </>
    );
}
