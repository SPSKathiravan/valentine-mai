"use client";

// pages/love-letter.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import PageContainer from '@/components/PageContainer';

const LoveLetterPage = () => {
  const [letterVisible, setLetterVisible] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate letter appearing with animation
    const timer = setTimeout(() => {
      setLetterVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleOpenLetter = () => {
    setLetterOpened(true);
  };

  const handleReply = () => {
    // Navigate back to the input page
    router.push('/memoriessection');
  };

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center p-4 relative overflow-hidden w-full">
      <Head>
        <title>My Love Letter</title>
        <meta name="description" content="A special love letter just for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-70 animate-pulse">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <div className="absolute top-20 right-10 text-red-300 opacity-70 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-32 left-16 text-pink-300 opacity-70 animate-pulse">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      {/* Envelope decoration */}
      <div className="absolute top-1/4 right-1/4 transform rotate-12 opacity-80">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ff6b8b" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>

      {/* Rose decoration */}
      <div className="absolute bottom-1/4 right-1/5 transform -rotate-12 opacity-80">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff1744" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
        </svg>
      </div>

      {/* Main content - Envelope/Letter */}
      <div className={`relative max-w-lg w-full z-10 transition-all duration-1000 transform ${letterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Envelope (closed) */}
        {!letterOpened && (
          <div 
            onClick={handleOpenLetter}
            className="bg-gradient-to-br from-pink-100 to-red-100 rounded-lg shadow-2xl p-8 h-80 flex flex-col items-center justify-center cursor-pointer transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-bold text-pink-600 mb-2">A Special Letter For You</h2>
              <p className="text-gray-600">Tap to open</p>
            </div>
            <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-br from-pink-200 to-red-200 rounded-t-lg transform origin-top transition-transform duration-700" 
                 style={{ transform: letterOpened ? 'rotateX(180deg)' : 'rotateX(0deg)' }}>
            </div>
          </div>
        )}

        {/* Letter Content (opened) */}
        {letterOpened && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full transform transition-all duration-1000">
            <div className="text-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-3">My Love Letter</h1>
                <div className="w-28 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto rounded-full"></div>
              </div>
            
              <div className="bg-pink-50 rounded-xl p-8 mb-6 transform transition-all duration-1000 animate-fade-in">
                <p className="text-lg md:text-xl leading-relaxed text-center">From the day you came into my life, everything feels brighter, softer, and more beautiful; you are not just my boyfriend, you are my safe place, my happiness, and my favorite person, and I don't want just moments with you, I want forever with youso will you continue this journey with me and make our love story endless💍</p>
              </div>
            
            <div className="flex justify-center space-x-2 mb-6">
              <span className="text-2xl animate-pulse"></span>
              <span className="text-2xl animate-pulse delay-75"></span>
              <span className="text-2xl animate-pulse delay-150"></span>
              <span className="text-2xl animate-pulse delay-200"></span>
              <span className="text-2xl animate-pulse delay-300"></span>
            </div>
            
            <div className="flex justify-center mt-4">
              <button 
                onClick={handleReply}
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                See Our Beautyful Memories
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Keyboard section */}
      {showKeyboard && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 animate-slide-up">
          <div className="max-w-md mx-auto">
            <div className="flex justify-around mb-3">
              <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
              <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
              <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
              <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
              <button className="text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors"></button>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center text-gray-500 text-sm">
              Reply to yourself
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .delay-75 {
          animation-delay: 75ms;
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
      </div>
    </PageContainer>
  );
};

export default LoveLetterPage;