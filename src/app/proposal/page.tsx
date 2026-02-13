'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import Button from '@/components/Button';
import LoveLetterPage from '../love-letter/page'; 
import UnlockLetterPage from '../unlock-letter/page';  


export default function ProposalPage() {
    const router = useRouter();
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [noButtonAttempts, setNoButtonAttempts] = useState(0);
    const [noButtonSize, setNoButtonSize] = useState(1);
    const [shake, setShake] = useState(false);
    const [yesButtonScale, setYesButtonScale] = useState(1);

    // YES button grows as NO attempts increase
    useEffect(() => {
        setYesButtonScale(1 + noButtonAttempts * 0.1);
    }, [noButtonAttempts]);

    const moveNoButton = () => {
        const maxX = window.innerWidth - 150;
        const maxY = window.innerHeight - 60;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setNoButtonPosition({ x: newX, y: newY });
        setNoButtonAttempts(prev => prev + 1);

        // Shrink NO button with each attempt
        setNoButtonSize(Math.max(0.5, 1 - noButtonAttempts * 0.1));

        // Trigger shake animation
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const handleYesClick = () => {
        router.push('/unlock-letter');
    };

    // Get NO button text based on attempts
    const getNoButtonText = () => {
        if (noButtonAttempts === 0) return 'No';
        if (noButtonAttempts === 1) return 'Are you sure?';
        if (noButtonAttempts === 2) return 'Really?';
        if (noButtonAttempts === 3) return 'Think again...';
        return 'Nice try 😂';
    };

    return (
        <PageContainer>
            <div className="flex items-center justify-center w-full min-h-screen">
                <div className="text-center w-full max-w-2xl mx-auto px-4 py-20 relative flex flex-col items-center">

                    {/* Standalone Avatar */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white mb-8 animate-scaleIn animate-float">
                        <img
                            src="/proposal-avatar.png"
                            alt="Moin & Ayesha"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Pulsing Hearts Decoration (Minimal) */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-20 pointer-events-none">
                        <div className="absolute top-0 left-1/4 text-6xl animate-heartBeat">💖</div>
                        <div className="absolute top-1/4 right-1/4 text-6xl animate-heartBeat delay-200">💕</div>
                        <div className="absolute bottom-0 left-1/3 text-7xl animate-heartBeat delay-400">💗</div>
                        <div className="absolute bottom-1/4 right-1/3 text-6xl animate-heartBeat delay-300">💝</div>
                    </div>

                    {/* Main Question */}
                    <h1 className="font-heading text-3xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight animate-scaleIn relative z-10">
                        <span className="inline-block animate-bounce">
                            Will you be my
                        </span>
                        <br />
                        <span className="text-pink-500 inline-block animate-heartBeat">
                            Valentine? 💖
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="font-body text-xl text-gray-500 mb-12 animate-textReveal delay-300 relative z-10">
                        (Don't think about saying no... 😜)
                    </p>

                    {/* Buttons Container */}
                    <div className="flex gap-6 justify-center items-center flex-wrap relative z-10 min-h-[100px]">
                        {/* YES BUTTON - Grows with attempts */}
                        <div
                            className="transition-transform duration-500"
                            style={{ transform: `scale(${yesButtonScale})` }}
                        >
                            <Button
                                onClick={handleYesClick}
                                variant="primary"
                                size="large"
                                glow
                                className="relative"
                            >
                                <span className="text-2xl">YES! 💕</span>
                            </Button>
                        </div>

                        {/* NO BUTTON - Moves and shrinks */}
                        <div
                            style={{
                                position: noButtonAttempts > 0 ? 'fixed' : 'relative',
                                left: noButtonAttempts > 0 ? `${noButtonPosition.x}px` : 'auto',
                                top: noButtonAttempts > 0 ? `${noButtonPosition.y}px` : 'auto',
                                transform: `scale(${noButtonSize})`,
                                transition: 'transform 0.3s ease',
                                zIndex: 50,
                            }}
                        >
                            <Button
                                onMouseEnter={moveNoButton}
                                onClick={moveNoButton}
                                variant="danger"
                                size="small"
                                className={shake ? 'animate-shake' : ''}
                            >
                                {getNoButtonText()}
                            </Button>
                        </div>
                    </div>

                    {/* Hint Text */}
                    {noButtonAttempts > 2 && (
                        <p className="mt-8 text-pink-400 font-medium animate-fadeIn relative z-10">
                            The YES button is getting bigger... just saying 😏
                        </p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}
