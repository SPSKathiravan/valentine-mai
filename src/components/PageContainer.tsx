import React from 'react';
import ParticleBackground from './ParticleBackground';

import FloatingHearts from './FloatingHearts';

interface PageContainerProps {
    children: React.ReactNode;
    showParticles?: boolean;
    centerContent?: boolean;
    showHearts?: boolean;
}

export default function PageContainer({
    children,
    showParticles = true,
    centerContent = true,
    showHearts = true
}: PageContainerProps) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden relative">
            {/* Light Pink Gradient Background */}
            <div
                className="absolute inset-0 animate-gradientShift"
                style={{
                    background: 'linear-gradient(135deg, #FFF0F5 0%, #FFB6C1 50%, #FFC0CB 100%)',
                    backgroundSize: '200% 200%',
                }}
            />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-pink-100/30" />

            {/* Particle Background */}
            {showParticles && <ParticleBackground density={15} speed={0.3} />}

            {/* Global Floating Hearts */}
            {showHearts && (
                <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                    <FloatingHearts />
                </div>
            )}

            {/* Content */}
            <div className={`relative z-10 min-h-screen p-4 ${centerContent ? 'flex items-center justify-center' : ''}`}>
                {children}
            </div>
        </div>
    );
}
