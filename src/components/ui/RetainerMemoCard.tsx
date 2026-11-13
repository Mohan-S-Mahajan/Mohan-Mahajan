import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, ArrowRight, ShieldAlert } from 'lucide-react';

export const RetainerMemoCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const options = [
    {
      label: 'Urgent Codebase Emergency / Bug Liquidation',
      sub: 'Mike handles: memory leaks, silent race conditions & deploy failures.',
      query: 'Production emergency: urgent bug liquidation & crash audit',
    },
    {
      label: 'Retain Lead Engineering Counsel for Greenfield Build',
      sub: 'Saul opens: fast modern React/Next.js architectures engineered from scratch.',
      query: 'Greenfield project: retain counsel for modern full-stack web build',
    },
    {
      label: 'Forensic Architecture Audit & 60fps Optimization',
      sub: 'Full codebase inspection, Web Vitals tuning & stoichiometric refactor.',
      query: 'Forensic audit: performance optimization & system architecture review',
    },
  ];

  const handleSelectOption = (query: string) => {
    navigate(`/contact?problem=${encodeURIComponent(query)}`);
  };

  // Keep hero 100% clean and unobstructed when at top of page
  if (!hasScrolled) return null;

  if (!isOpen) {
    return (
      <aside aria-label="Retainer Memo Re-open Pill" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-court-gold/50 bg-black/90 px-4 py-2 font-mono text-xs text-court-gold shadow-2xl backdrop-blur-md transition-all hover:border-court-gold hover:scale-105 active:scale-95"
          title="Open Confidential Client Retainer Memo"
        >
          <ShieldAlert className="h-3.5 w-3.5 text-court-gold" />
          <span>CONFIDENTIAL MEMO</span>
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Confidential Client Retainer Intake Memo" className="fixed bottom-6 right-6 z-40 w-[calc(100vw-32px)] sm:w-[420px] max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0F0F12]/95 p-5 text-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl"
      >
        {/* Top gold/red legal tape line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-court-gold via-stamp-red to-court-gold opacity-80" />

        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-stamp-red/20 border border-stamp-red/40 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-red-300">
              PRIVILEGED & CONFIDENTIAL
            </span>
            <span className="font-mono text-[10px] text-zinc-500">· MEMO #042</span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-zinc-500 hover:text-white transition-colors"
            title="Dismiss memo"
            aria-label="Dismiss memo"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Headline */}
        <div className="mb-3">
          <h3 className="font-docket text-xl font-bold tracking-tight text-cream leading-tight">
            Did you know you have options?
          </h3>
          <p className="font-sans text-xs text-zinc-400 mt-1 font-light">
            State your technical situation to route directly to counsel:
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-2">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelectOption(opt.query)}
              className="group w-full text-left rounded-xl border border-zinc-800/80 bg-zinc-950/70 p-3 transition-all duration-200 hover:border-court-gold/70 hover:bg-zinc-900/90 active:scale-[0.98] cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-sans text-xs font-semibold text-zinc-200 group-hover:text-court-gold transition-colors flex items-center gap-1.5">
                    <span className="text-court-gold text-[10px]">•</span>
                    <span>{opt.label}</span>
                  </div>
                  <div className="font-sans text-[11px] text-zinc-500 mt-0.5 font-light leading-snug">
                    {opt.sub}
                  </div>
                </div>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-court-gold mt-0.5" />
              </div>
            </button>
          ))}
        </div>

        {/* Footer microcopy */}
        <div className="mt-3 pt-2.5 border-t border-zinc-900 flex items-center justify-between font-mono text-[9px] text-zinc-500">
          <span>Saul opens · Mike closes</span>
          <span className="text-court-gold/90 font-semibold">&#123; whsp system &#125;</span>
        </div>
      </motion.div>
    </aside>
  );
};
