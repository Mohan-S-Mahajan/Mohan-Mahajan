import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FastForward } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/content';

interface EntryGateProps {
  currentMode: 'whsp' | 'saul' | 'jimmy' | 'heisenberg';
  onSelectMode: (mode: 'whsp' | 'saul' | 'jimmy' | 'heisenberg') => void;
  onEnter: () => void;
}

export const EntryGate: React.FC<EntryGateProps> = ({
  currentMode,
  onSelectMode,
  onEnter,
}) => {
  const [isDismissing, setIsDismissing] = useState(false);

  // Check returning visitor
  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('has_entered_gate');
      if (seen === 'true') {
        onEnter();
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [onEnter]);

  const handleEnterClick = () => {
    try {
      sessionStorage.setItem('has_entered_gate', 'true');
    } catch {
      // safe fallback
    }
    setIsDismissing(true);
    setTimeout(() => {
      onEnter();
    }, 1100);
  };

  const handleSkip = () => {
    try {
      sessionStorage.setItem('has_entered_gate', 'true');
    } catch {
      // safe fallback
    }
    onEnter();
  };

  const modes = [
    {
      id: 'whsp',
      title: '{ whsp } CONCIERGE',
      role: 'Problem Concierge Service · Ultra-Dark Editorial',
      accent: 'We Handle Small Problems',
    },
    {
      id: 'saul',
      title: 'SAUL GOODMAN',
      role: 'Attorney of Code (Primary Corporate)',
      accent: 'The Fixer',
    },
    {
      id: 'jimmy',
      title: 'JIMMY MCGILL',
      role: 'Scrappy Craftsman (Warm & Human)',
      accent: 'The Underdog',
    },
    {
      id: 'heisenberg',
      title: 'HEISENBERG',
      role: 'Empirical Precision (Deep Amber Noir)',
      accent: '99.1% Pure',
    },
  ] as const;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex overflow-hidden bg-ink select-none"
        role="region"
        aria-label="Welcome Gate"
      >
        {/* Skip button at top right */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-30 flex items-center gap-1.5 border border-saul-gold/40 bg-ink/80 px-3.5 py-1.5 font-mono text-xs font-bold tracking-wider text-saul-gold transition-colors hover:border-saul-gold hover:bg-saul-gold hover:text-ink focus-visible:outline-blue-sky"
        >
          <span>SKIP INTRO</span>
          <FastForward className="h-3.5 w-3.5" />
        </button>

        {/* Left Split Door */}
        <motion.div
          animate={isDismissing ? { x: '-100%' } : { x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-full w-full flex-col justify-center border-r border-hazmat/40 bg-ink px-6 sm:px-12 md:w-1/2 lg:px-20"
        >
          {/* Giant Ghost Initial behind */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 font-bebas text-[45vw] leading-none text-hazmat/5 md:text-[25vw]"
          >
            {PORTFOLIO_DATA.lawyer.ghostLetter}
          </div>

          <div className="relative z-10 max-w-md">
            {/* Docket top line */}
            <div className="mb-3 font-mono text-xs font-bold tracking-widest text-saul-gold">
              CASE NO. 0001 · ALBUQUERQUE, NM
            </div>

            {/* Huge Headline */}
            <h1 className="mb-2 font-bebas text-6xl tracking-tight text-cream sm:text-7xl lg:text-8xl">
              SAY MY NAME
            </h1>

            <p className="mb-6 font-serif text-base italic text-cream/80 sm:text-lg">
              Who is representing your engineering department today? Select your counsel:
            </p>

            {/* Three mode buttons */}
            <div className="mb-8 flex flex-col gap-3">
              {modes.map((m) => {
                const isSelected = currentMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMode(m.id)}
                    className={`group relative flex w-full flex-col items-start border-2 p-3.5 text-left transition-all duration-200 sm:w-[320px] ${
                      isSelected
                        ? 'border-saul-gold bg-saul-gold text-ink shadow-amber-glow'
                        : 'border-hazmat/70 bg-ink-2 text-cream hover:border-saul-gold hover:bg-saul-gold/10'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-bebas text-2xl tracking-wide">
                        {m.title}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                          isSelected ? 'text-ink/80' : 'text-saul-gold'
                        }`}
                      >
                        [{m.accent}]
                      </span>
                    </div>
                    <span
                      className={`font-mono text-xs ${
                        isSelected ? 'text-ink/90 font-medium' : 'text-cream/70'
                      }`}
                    >
                      {m.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action footer */}
            <div className="flex flex-col gap-3">
              <div className="font-mono text-xs font-bold text-cream/70">
                YOU ARE HIRING THE BEST, RIGHT?
              </div>
              <button
                onClick={handleEnterClick}
                className={`flex items-center justify-center gap-3 border-2 border-saul-gold bg-saul-gold py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-all hover:bg-cream hover:border-cream sm:w-[320px] ${
                  currentMode === 'heisenberg'
                    ? 'rounded-full shadow-[0_0_25px_rgba(255,148,0,0.6)] hover:shadow-[0_0_35px_rgba(255,148,0,0.9)]'
                    : 'hover:shadow-gold-glow'
                }`}
              >
                <span>ENTER WEBSITE</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Split Door with Hero Portrait */}
        <motion.div
          animate={isDismissing ? { x: '100%' } : { x: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden h-full w-1/2 items-center justify-center bg-courtroom-navy/60 md:flex"
        >
          {/* Portrait duotone image */}
          <div className="duotone relative h-full w-full">
            <img
              src="/assets/images/gate-portrait.webp"
              alt="Counsel seated at the throne of Albuquerque"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Glowing amber frame & tagline */}
          <div className="pointer-events-none absolute bottom-12 right-12 border-2 border-hazmat bg-ink/90 p-4 font-mono text-xs text-saul-gold shadow-amber-glow">
            <div>COUNSEL AT THE READY</div>
            <div className="text-[10px] text-cream/60">ALBUQUERQUE DIVISION // DOCKET 2026</div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
