import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/content';

export const About: React.FC = () => {
  const [badgeView, setBadgeView] = useState<'saul' | 'engineer'>('saul');
  const [saulScene, setSaulScene] = useState<'desk' | 'suit' | 'badge'>('desk');

  return (
    <section id="about" className="relative bg-black py-24 sm:py-32 text-white overflow-hidden">
      <div className="w-[90%] mx-auto">
        {/* Micro text & downward brace */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="font-sans text-xs sm:text-sm font-light text-zinc-400 max-w-sm mx-auto leading-relaxed whitespace-pre-line">
            So... who handle it?
            <br />
            We have two teams.
          </p>

          <div className="my-3 font-mono text-2xl text-zinc-600 font-extralight select-none">&#125;</div>

          <div className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
            Team
          </div>

          <div className="mt-2 font-sans text-sm font-medium text-zinc-300">
            ( Saul opens. Mike closes. )
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Team Saul & Engineering description */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Team Saul block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Team</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Saul
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base font-light leading-relaxed text-zinc-400">
                {PORTFOLIO_DATA.whsp.teamSaul.description}
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-zinc-500">
                <span>Role: {PORTFOLIO_DATA.whsp.teamSaul.role}</span>
                <span>·</span>
                <span>The Opener</span>
              </div>
            </motion.div>

            {/* Team Mike & Engineering block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Team</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Mike & Engineering
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base font-light leading-relaxed text-zinc-400 mb-5">
                {PORTFOLIO_DATA.whsp.teamMikeMohan.description}
              </p>

              {/* Verified academic & industry credentials */}
              <div className="space-y-2 border-t border-zinc-900 pt-4 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">DEGREE:</span>
                  <span className="font-bold text-white">B.E. Computer Engineering</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">SPECIALIZATION:</span>
                  <span className="font-bold text-white">Full Stack & Systems Architecture</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">SCALE:</span>
                  <span className="text-zinc-300">Enterprise Applications & Scaled Pipelines</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.lawyer.resumeUrl}
                  download="Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Résumé</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 transition-all hover:border-white hover:text-white"
                >
                  <span>Direct Contact</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skeuomorphic Realistic ID Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Badge Switcher */}
            <div className="mb-6 inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 p-1 shadow-md">
              <button
                onClick={() => setBadgeView('saul')}
                className={`rounded-full px-5 py-1.5 font-mono text-xs font-medium transition-all ${
                  badgeView === 'saul'
                    ? 'bg-zinc-200 text-black shadow-sm font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                &#123; Saul Goodman &#125;
              </button>
              <button
                onClick={() => setBadgeView('engineer')}
                className={`rounded-full px-5 py-1.5 font-mono text-xs font-medium transition-all ${
                  badgeView === 'engineer'
                    ? 'bg-zinc-200 text-black shadow-sm font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                &#123; Lead Engineer &#125;
              </button>
            </div>

            {badgeView === 'saul' ? (
              /* Saul Goodman Realistic Portfolio Exhibit */
              <motion.div
                key={saulScene}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-full max-w-md transform rotate-1 sm:rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]"
              >
                {/* Saul Sub-View Switcher */}
                <div className="mb-3 flex items-center justify-center gap-1.5 font-mono text-[10px]">
                  <button
                    onClick={() => setSaulScene('desk')}
                    className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      saulScene === 'desk'
                        ? 'border-court-gold bg-court-gold/20 text-court-gold font-bold'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white'
                    }`}
                  >
                    01 DESK &amp; MUG
                  </button>
                  <button
                    onClick={() => setSaulScene('suit')}
                    className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      saulScene === 'suit'
                        ? 'border-court-gold bg-court-gold/20 text-court-gold font-bold'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white'
                    }`}
                  >
                    02 SUIT &amp; COLUMNS
                  </button>
                  <button
                    onClick={() => setSaulScene('badge')}
                    className={`px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                      saulScene === 'badge'
                        ? 'border-court-gold bg-court-gold/20 text-court-gold font-bold'
                        : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white'
                    }`}
                  >
                    03 BADGE
                  </button>
                </div>

                <div className="overflow-hidden rounded-2xl border-2 border-zinc-700/80 bg-zinc-950 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                  {saulScene === 'desk' && (
                    <img
                      src="/assets/images/bcs-desk-mug-hd.jpg"
                      alt="Saul Goodman at legal desk with Constitution and World's Greatest Lawyer mug"
                      className="w-full h-80 object-cover object-top rounded-xl"
                    />
                  )}
                  {saulScene === 'suit' && (
                    <img
                      src="/assets/images/bcs-purple-suit-hd.jpg"
                      alt="Saul Goodman in lavender suit in classical law chambers"
                      className="w-full h-80 object-cover object-top rounded-xl"
                    />
                  )}
                  {saulScene === 'badge' && (
                    <img
                      src="/assets/images/whsp-saul-badge.png"
                      alt="Saul Goodman Team Leader Badge"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  )}
                </div>
                <div className="mt-3 text-center font-mono text-[11px] text-zinc-400 flex items-center justify-center gap-2">
                  <span className="text-court-gold font-bold">J.M. MCGILL // SPECIAL COUNSEL</span>
                  <span>·</span>
                  <span className="text-zinc-500">Albuquerque, NM</span>
                </div>
              </motion.div>
            ) : (
              /* Creative Engineer Badge */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md transform -rotate-1 sm:-rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-105"
              >
                <div className="rounded-2xl border-2 border-zinc-300 bg-[#E8E8EC] p-6 text-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] select-none">
                  {/* Header with curly braces */}
                  <div className="flex items-center justify-between border-b border-zinc-400 pb-3 mb-4">
                    <span className="font-mono text-xl sm:text-2xl font-light text-zinc-800">
                      &#123; <span className="font-serif italic font-bold">Creative Engineer</span> &#125;
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-zinc-600">
                      TEAM CLOSER
                    </span>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Portrait with stamp */}
                    <div className="col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-400 bg-zinc-800">
                      <img
                        src="/assets/images/hero-portrait.webp"
                        alt="Creative Engineer Portrait"
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                      <div className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-white">
                        &#123; :) &#125;
                      </div>
                    </div>

                    {/* Details */}
                    <div className="col-span-7 space-y-2 text-left font-sans">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-600">Name</div>
                        <div className="font-bold text-sm text-zinc-950">Your Name Here</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-600">Role</div>
                        <div className="font-bold text-xs text-zinc-900 leading-tight">
                          Frontend Architect / Engineer
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-600">Department</div>
                        <div className="text-xs text-zinc-800 font-medium">
                          Execution & Engineering
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-600">Score</div>
                        <div className="font-mono text-xs font-bold text-zinc-900">
                          99.1% Code Execution
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Barcode & Serial */}
                  <div className="mt-5 pt-3 border-t border-zinc-400 flex items-center justify-between">
                    <div className="font-mono text-[10px] tracking-widest text-zinc-700">
                      ||||| |||| || ||||||| ||| ||||
                      <div className="text-[9px] text-zinc-500">WHSP-ENG-2025-01</div>
                    </div>
                    <div className="font-mono text-xs font-bold text-zinc-800">
                      &#123; whsp &#125;
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center font-mono text-[11px] text-zinc-500">
                  WHSP-ENG-2025-01 · Verified Engineer Badge
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
