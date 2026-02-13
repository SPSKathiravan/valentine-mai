'use client';

import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import Button from '@/components/Button';

export default function BuildupPage() {
    const router = useRouter();

    return (
        <PageContainer>
            <div className="flex items-center justify-center w-full min-h-screen">
                <div className="text-center w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center">

                    {/* Standalone Avatar */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white mb-8 animate-scaleIn animate-float">
                        <img
                            src="/buildup-avatar.png"
                            alt="Moin & Ayesha"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-heading text-2xl md:text-4xl font-bold text-gray-800 mb-8 animate-textReveal delay-100">
                        I've been meaning to ask you...
                    </h1>

                    {/* Emotional Message with Staggered Reveals */}
                    <div className="space-y-6 mb-10 text-center">
                        <p className="font-body text-lg md:text-xl text-gray-600 animate-textReveal delay-200 leading-relaxed">
                            You make every single day feel like a
                            <span className="font-bold text-pink-500 ml-1">celebration</span> 🎉
                        </p>

                        <p className="font-body text-lg md:text-xl text-gray-600 animate-textReveal delay-400 leading-relaxed">
                            And I can&apos;t imagine my life without your
                            <span className="font-bold text-pink-500 ml-1">smile</span> 😊
                        </p>

                        <div className="pt-2 animate-textReveal delay-600">
                            <span className="text-7xl inline-block animate-heartBeat text-pink-500">💗</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="animate-textReveal delay-800 mb-4">
                        <Button
                            onClick={() => router.push('/proposal')}
                            variant="secondary"
                            size="medium"
                            icon={<span className="text-xl">👉</span>}
                        >
                            Ask me already!
                        </Button>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
