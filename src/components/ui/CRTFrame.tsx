import React from 'react';
import type { TestimonialItem } from '../../data/content';

interface CRTFrameProps {
  testimonial: TestimonialItem;
  isActive?: boolean;
}

export const CRTFrame: React.FC<CRTFrameProps> = ({ testimonial, isActive = true }) => {
  return (
    <div
      className={`relative flex aspect-[16/10] sm:aspect-[16/9] w-full max-w-xl flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-30'
      }`}
    >
      {/* Top watermark */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-3 font-mono text-[11px] text-zinc-400">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          &#123; Solved Case Testimonial &#125;
        </span>
        <span className="text-zinc-500">{testimonial.caseRef}</span>
      </div>

      {/* Center quote */}
      <div className="my-auto py-4">
        <div className="mb-3 font-mono text-xs text-zinc-400">
          {testimonial.rating}
        </div>
        <p className="font-sans text-base sm:text-lg font-light italic leading-relaxed text-zinc-200">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Bottom client credit */}
      <div className="flex items-end justify-between border-t border-zinc-900 pt-3">
        <div>
          <div className="font-sans text-sm sm:text-base font-bold tracking-tight text-white">
            {testimonial.client}
          </div>
          <div className="font-mono text-xs text-zinc-400">
            {testimonial.title}, {testimonial.company}
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase text-zinc-600">
          Verified Client
        </div>
      </div>
    </div>
  );
};
