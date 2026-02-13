'use client';

import React, { useState } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    onMouseEnter?: () => void;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    glow?: boolean;
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    className = '',
    onMouseEnter,
    style,
    icon,
    glow = false,
}: ButtonProps) {
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

    const baseStyles = 'font-heading font-bold rounded-full shadow-2xl transform transition-spring relative overflow-hidden';

    const variantStyles = {
        primary: `
      bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 
      hover:from-pink-600 hover:via-rose-600 hover:to-pink-700
      text-white hover:scale-110 
      ${glow ? 'animate-glowPulse' : ''}
    `,
        secondary: `
      bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600
      hover:from-purple-600 hover:via-pink-600 hover:to-purple-700
      text-white hover:scale-105
    `,
        danger: `
      bg-gray-400 hover:bg-gray-500 text-white
      hover:scale-95
    `,
    };

    const sizeStyles = {
        small: 'py-2 px-6 text-base md:py-3 md:px-8 md:text-lg',
        medium: 'py-3 px-8 text-lg md:py-4 md:px-10 md:text-xl',
        large: 'py-4 px-12 text-2xl md:py-6 md:px-20 md:text-3xl',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Create ripple effect
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        onClick?.();
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            style={style}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} group`}
        >
            {/* Ripple Effects */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 20,
                        height: 20,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}

            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
                {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
            </span>

            {/* Shimmer Effect */}
            {variant === 'primary' && (
                <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                    style={{ backgroundSize: '200% 100%' }}
                />
            )}
        </button>
    );
}
