import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck } from 'lucide-react';
import { LuminousType } from '../ui/LuminousType';

export const OperatingPhilosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full min-h-screen flex flex-col justify-center py-16 sm:py-24 bg-black text-white select-none overflow-hidden"
    >
      {/* Background Cinematic Masterpiece — Mike & Saul Positioned in the Unobstructed Right Blank Space */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none overflow-hidden">
        <img
          src="/assets/images/bcs-mike-bench.jpg"
          alt="Mike Ehrmantraut & Saul Goodman Special Counsel Albuquerque"
          className="w-full h-full object-cover object-[52%_center] sm:object-[50%_center] opacity-85 filter contrast-110 brightness-95"
        />
        {/* Left directional blend into obsidian void so text on the left has 100% black backdrop */}
        <div className="absolute inset-y-0 left-0 w-40 sm:w-64 lg:w-80 bg-gradient-to-r from-black via-black/90 to-transparent" />
        {/* Mobile scrim overlay so text is crisp on small screens */}
        <div className="lg:hidden absolute inset-0 bg-black/65" />
        {/* Top & bottom atmospheric fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-court-gold/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-[90%] max-w-7xl mx-auto z-10">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-court-gold">
            <span className="h-2 w-2 rounded-full bg-court-gold animate-pulse" />
            <span>The Operating Philosophy // Concierge Doctrine</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <Scale className="h-3.5 w-3.5 text-zinc-500" />
            <span>Albuquerque Bar No. 042-NM</span>
          </div>
        </motion.div>

        {/* 2-Column Responsive Layout: Text on Left, Mike & Saul completely clear on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <LuminousType
              as="blockquote"
              baseOpacity={0.25}
              radius="5em"
              tint="#fbbf24"
              idle="drift"
              driftSpeed={0.85}
              className="font-docket text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[42px] font-bold uppercase tracking-tight text-white leading-[1.22]"
            >
              <span className="text-zinc-600 mr-2 select-none">“</span>
              Software should feel uncompromised:
              <br className="hidden sm:inline" />
              {' '}rigorously engineered to endure,
              <br className="hidden sm:inline" />
              {' '}meticulously defended in production,
              <br className="hidden sm:inline" />
              {' '}<span className="text-court-gold">and executed with zero residue.</span>
              <span className="text-zinc-600 ml-2 select-none">”</span>
            </LuminousType>
          </motion.div>

          {/* Right spacer column so Mike & Saul are visible in clear space */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6 min-h-[360px]" aria-hidden="true" />
        </div>

        {/* Bottom Attribution & Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 sm:mt-14 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl border border-court-gold/40 bg-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-court-gold shadow-md">
              &#123; &#125;
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white uppercase">
                The Problem Concierge Doctrine
              </div>
              <div className="font-mono text-[11px] text-zinc-500 mt-0.5">
                Saul opens the case · Mike closes the codebase · Albuquerque, NM
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>99.1% Stoichiometric Purity</span>
            </div>
            <div className="hidden md:block text-zinc-600">|</div>
            <div className="hidden md:block text-zinc-500">
              LAT 35.0844° N · LONG 106.6504° W
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
