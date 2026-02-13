'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    emoji: string;
}

interface ParticleBackgroundProps {
    density?: number;
    speed?: number;
}

export default function ParticleBackground({ density = 40, speed = 0.6 }: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle emojis (hearts & sparkles only — removed crackers and pink flowers)
        const emojis = ['❤️', '💖', '✨', '💕', '💗'];

        // Detect mobile vs desktop to adjust particle density
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? Math.max(12, Math.floor(density * 0.6)) : Math.max(20, density);

        // Create simple particles (no crackers/flowers)
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const size = 12 + Math.random() * 26;
            const speedY = 0.15 + Math.random() * speed; // gentle downward motion
            const speedX = (Math.random() - 0.5) * speed * 0.5;
            const opacity = 0.5 + Math.random() * 0.5;

            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size,
                speedX,
                speedY,
                emoji,
                opacity,
            });
        }

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Update position (flowers & crackers fall downward)
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Horizontal wrap
                if (particle.x < -60) particle.x = canvas.width + 60;
                if (particle.x > canvas.width + 60) particle.x = -60;

                // If a particle falls below the bottom, respawn at the top
                if (particle.y > canvas.height + 60) {
                    particle.y = -40 - Math.random() * 80;
                    particle.x = Math.random() * canvas.width;
                }
                // If above top (rare), wrap to bottom
                if (particle.y < -80) particle.y = canvas.height + 40;

                // Draw particle
                ctx.globalAlpha = particle.opacity;
                ctx.font = `${particle.size}px Arial`;
                ctx.fillText(particle.emoji, particle.x, particle.y);
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
}
