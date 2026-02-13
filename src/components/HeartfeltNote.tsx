'use client';

import React from 'react';

export default function HeartfeltNote() {
    return (
        <div className="max-w-xl mx-auto px-6 py-8 glass-strong rounded-3xl text-center shadow-xl animate-fadeIn delay-700 relative z-20">
            <h3 className="font-heading text-lg md:text-xl font-semibold text-pink-600 mb-3">
                A Little Note for You... ❤️
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                "Every photo here tells a story of a moment I'll never forget.
                Thank you for being the most beautiful part of my life.
                I can't wait to create thousands more memories together."
            </p>
            <div className="mt-4 flex justify-center gap-2">
                <span className="text-pink-400 animate-pulse">✨</span>
                <span className="text-pink-400 animate-pulse delay-75">✨</span>
                <span className="text-pink-400 animate-pulse delay-150">✨</span>
            </div>
        </div>
    );
}
