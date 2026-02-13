import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
    glow?: boolean;
    image?: string;
}

export default function Card({ children, className = '', animate = true, glow = false, image }: CardProps) {
    return (
        <div
            className={`
        glass-strong rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl w-full relative
        ${animate ? 'animate-scaleIn animate-float' : ''}
        ${glow ? 'animate-glowPulse' : ''}
        ${className}
      `}
            style={{
                boxShadow: glow
                    ? '0 0 40px rgba(255, 107, 157, 0.3), 0 20px 60px rgba(0, 0, 0, 0.3)'
                    : '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
        >
            {image && (
                <div className="flex justify-center -mt-20 mb-6">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                        <img
                            src={image}
                            alt="Cute avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
            {children}
        </div>
    );
}
