
'use client';

import PageContainer from '@/components/PageContainer';
import PhotoScroll from '@/components/PhotoScroll';
import MemoriesHeader from '@/components/MemoriesHeader';
import Link from 'next/link';

export default function MemoriesPage() {
    return (
        <PageContainer centerContent={false}>
            <div className="flex flex-col items-center w-full min-h-screen px-4 pb-20 relative overflow-hidden">

                {/* Header at the Top */}
                <MemoriesHeader />

                {/* Main Content Area - Vertically Centered Carousel */}
                <div className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-12">
                    <div className="relative z-10 w-full">
                        <PhotoScroll />
                    </div>
                </div>

                {/* Footer Content */}
                <div className="flex flex-col items-center gap-8 animate-fadeIn delay-500 relative z-20">
                    <p className="text-pink-600 font-medium animate-pulse text-sm">
                        ✨ Rounding your memories... ✨
                    </p>

                    <Link
                        href="/success"
                        className="inline-block px-8 py-3 bg-white/90 backdrop-blur-md border-2 border-pink-200 text-pink-600 font-bold rounded-full hover:bg-pink-50 transition-all shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                        <span>← Back to Celebration</span>
                    </Link>
                </div>

            </div>
        </PageContainer>
    );
}

