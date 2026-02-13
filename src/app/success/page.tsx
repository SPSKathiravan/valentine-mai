'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PageContainer from '@/components/PageContainer';
import Confetti from '@/components/Confetti';

export default function SuccessPage() {
    const router = useRouter();

    useEffect(() => {
        // Optional: Redirect or show something else after delay
        const timer = setTimeout(() => {
            // router.push('/'); // Example redirect
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <PageContainer>
            <div className="flex items-center justify-center w-full min-h-screen relative overflow-hidden">

                {/* Firework Burst Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-firework opacity-50"></div>
                </div>

                <div className="text-center w-full max-w-2xl mx-auto px-4 py-20 relative z-10 flex flex-col items-center">

                    {/* Standalone Avatar */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white mb-8 animate-scaleIn animate-float">
                        <img
                            src="/success-avatar.png"
                            alt="Moin & Ayesha"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Celebration Heading */}
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight animate-scaleIn delay-200">
                        <span className="text-pink-500 inline-block animate-heartBeat">
                            Yaaay!
                        </span>
                        <br />
                        <span className="text-gray-700 inline-block animate-textReveal delay-400 text-3xl md:text-5xl mt-2">
                            I knew it! 😍
                        </span>
                    </h1>

                    {/* Sweet Message */}
                    <p className="font-body text-xl md:text-2xl text-gray-600 mb-10 animate-textReveal delay-600 leading-relaxed max-w-lg mx-auto">
                        This is going to be the best Valentine's Day ever! <br />
                        <span className="font-bold text-pink-500">I promise.</span> 🤞
                    </p>

                    {/* Memories Button */}
                    <div className="mt-4 animate-fadeIn delay-1000 relative z-20">
                        <button
                            onClick={() => router.push('/memories')}
                            className="px-10 py-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
                        >
                            <span>See Our Memories 📸</span>
                            <span className="animate-bounce">👉</span>
                        </button>
                    </div>

                    {/* Final sweet note */}
                    <div className="animate-textReveal delay-800 text-sm text-gray-400 mt-12">
                        (Screenshot this and send it to me! 📸)
                    </div>

                    {/* Celebration Effects - Local Confetti */}
                    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                        <Confetti />
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
