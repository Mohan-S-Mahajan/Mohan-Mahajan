import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Tv } from 'lucide-react';
import { SectionShell } from '../layout/SectionShell';
import { CRTFrame } from '../ui/CRTFrame';
import { PORTFOLIO_DATA } from '../../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = PORTFOLIO_DATA.testimonials;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <SectionShell
      id="testimonials"
      docketNo="EXHIBIT // CLIENT STATEMENTS"
      title="Client Endorsements"
      subtitle="What teams and founders say about our quiet execution and high-performance frontend architecture."
    >
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Retro TV monitor housing */}
        <div className="relative w-full max-w-xl">
          <CRTFrame testimonial={testimonials[currentIndex]} />

          {/* Controls panel */}
          <div className="mt-6 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
              <Tv className="h-4 w-4" />
              <span>Statement 0{currentIndex + 1} of 0{testimonials.length}</span>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 w-5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white shadow-sm' : 'bg-zinc-800 hover:bg-zinc-600'
                  }`}
                  aria-label={`View statement ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:border-zinc-500 hover:text-white"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="rounded-full border border-zinc-800 p-2 text-zinc-400 hover:border-zinc-500 hover:text-white"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
