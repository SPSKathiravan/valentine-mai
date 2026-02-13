'use client';

import React from 'react';

export default function MemoriesHeader() {
    return (
        <div
            style={{
                textAlign: 'center',
                width: '100%',
                position: 'relative',
                zIndex: 20,
            }}
        >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm animate-textReveal"
                style={{ textAlign: 'center' }}
            >
                Our <span className="gradient-text">Beautiful</span> Memories 📸
            </h1>
            <p
                className="text-gray-600 text-sm md:text-lg font-medium animate-textReveal delay-300"
                style={{
                    textAlign: 'center',
                    maxWidth: '32rem',
                    margin: '0 auto',
                    padding: '0 1rem',
                }}
            >
                Every moment with you is a treasure. Here are some of my favorites...
            </p>
        </div>
    );
}
