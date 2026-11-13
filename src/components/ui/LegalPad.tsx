import React from 'react';

interface LegalPadProps {
  title?: string;
  notes: string[];
}

export const LegalPad: React.FC<LegalPadProps> = ({
  title = "MEMORANDUM · RE: JIMMY'S NOTES",
  notes,
}) => {
  return (
    <div className="relative overflow-hidden border border-amber-900/40 bg-paper p-6 text-stone-900 shadow-2xl transition-transform hover:-rotate-1 sm:p-8">
      {/* Top binding header */}
      <div className="-mx-6 -mt-6 mb-6 border-b-2 border-stone-800 bg-[#7B6D55] px-6 py-2.5 sm:-mx-8 sm:-mt-8 sm:px-8">
        <div className="flex items-center justify-between font-mono text-[11px] font-bold tracking-widest text-[#F3E9D2]">
          <span>{title}</span>
          <span className="text-saul-gold">EXHIBIT #4A</span>
        </div>
      </div>

      {/* Red vertical margin rule (positioned at 48px from left) */}
      <div className="pointer-events-none absolute bottom-0 left-12 top-10 w-[2px] bg-red-600/70 sm:left-14" />
      <div className="pointer-events-none absolute bottom-0 left-[51px] top-10 w-[1px] bg-red-600/30 sm:left-[59px]" />

      {/* Blue ruled lines container */}
      <div className="space-y-4 pl-10 sm:pl-12">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex items-start gap-3 border-b border-blue-400/30 pb-2"
          >
            <span className="font-mono text-xs font-bold text-red-700/80">
              0{index + 1}.
            </span>
            <p className="font-marker text-sm leading-relaxed tracking-wide text-stone-900 sm:text-base">
              {note}
            </p>
          </div>
        ))}
      </div>

      {/* Handwritten footer note */}
      <div className="mt-6 flex justify-end font-marker text-xs text-red-700 sm:text-sm">
        <span>— J.M. ("S'all good, man!")</span>
      </div>
    </div>
  );
};
