"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import Button from "@/components/Button";

export default function UnlockLetterPage() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const correctPhrase = "i love you pondatti";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.toLowerCase().trim() === correctPhrase) {
      router.push("/love-letter");
    } else {
      setError("That's not correct ❤️ Try again");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-screen px-4">
        
        {/* MAIN CARD */}
        <div className="shadow-xl p-12 w-full max-w-2xl text-center rounded-2xl">
          
          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
            Hey handsome<span className="text-red-500">❤️</span>
          </h1>
          
          {/* SUBTEXT */}
          <p className="text-lg text-gray-700 mb-8">
            Type{" "}
            <span className="font-semibold text-pink-500">
              I love you pondatti
            </span>{" "}
            to unlock my surprise Love letter
          </p>
          
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* INPUT */}
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="i love you pon..."
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>
            
            {/* ERROR */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full px-6 py-4 text-lg rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition mt-8"
            >
              Submit ✨
            </button>
            
          </form>
        </div>
      </div>
    </PageContainer>
  );
}

