'use client';

import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';
import Button from '@/components/Button';

export default function IntroPage() {
  const router = useRouter();

  return (
    <PageContainer>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="text-center w-full max-w-2xl mx-auto px-4 py-20 flex flex-col items-center">

          {/* Standalone Avatar */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white mb-8 animate-scaleIn animate-float">
            <img
              src="/intro-avatar.png"
              alt="Moin & Ayesha"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight animate-textReveal delay-100">
            Hey... I have a surprise for you!
            <span className="inline-block animate-bounce ml-2">🎁</span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-lg md:text-xl text-gray-600 mb-10 animate-textReveal delay-300 leading-relaxed max-w-sm mx-auto">
            Before we start, just promise me you'll smile?
            <span className="inline-block animate-float delay-200 ml-1">😊</span>
          </p>

          {/* CTA Button */}
          <div className="animate-textReveal delay-500 mb-4">
            <Button
              onClick={() => router.push('/buildup')}
              variant="primary"
              size="medium"
              glow
              icon={<span className="text-xl">→</span>}
            >
              Let&apos;s Go!
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
