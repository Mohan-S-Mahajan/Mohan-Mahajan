import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Database, Flame } from 'lucide-react';

export const ForensicTelemetry: React.FC = () => {
  return (
    <section
      id="telemetry"
      aria-label="Forensic Engineering Telemetry"
      className="relative w-full min-h-screen flex flex-col justify-center py-20 sm:py-24 bg-black text-white select-none overflow-hidden"
    >
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Outer Industrial Chassis */}
        <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950/90 via-[#0c0c0e] to-zinc-950 p-6 sm:p-10 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Hardware Corner Screws */}
        <div className="absolute top-3.5 left-3.5 h-2.5 w-2.5 rounded-full border border-zinc-700 bg-zinc-850 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-zinc-600 rotate-45" />
        </div>
        <div className="absolute top-3.5 right-3.5 h-2.5 w-2.5 rounded-full border border-zinc-700 bg-zinc-850 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-zinc-600 -rotate-45" />
        </div>
        <div className="absolute bottom-3.5 left-3.5 h-2.5 w-2.5 rounded-full border border-zinc-700 bg-zinc-850 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-zinc-600 -rotate-45" />
        </div>
        <div className="absolute bottom-3.5 right-3.5 h-2.5 w-2.5 rounded-full border border-zinc-700 bg-zinc-850 shadow-inner flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-zinc-600 rotate-45" />
        </div>

        {/* Ambient Amber Glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[250px] bg-court-gold/[0.04] rounded-full blur-[140px] pointer-events-none" />

        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-850 pb-5 mb-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-court-gold animate-ping" />
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-court-gold font-bold">
                // FORENSIC ENGINEERING TELEMETRY
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 ml-3">
                LABORATORY INSTRUMENTATION · 24/7 PRODUCTION DEFENSE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-black/80 border border-zinc-800 text-court-gold font-bold">
              TERMINAL #ABQ-042
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>STOICHIOMETRIC OPTIMAL</span>
            </span>
          </div>
        </div>

        {/* 4 Rich Visual Metric Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tile 1: Heisenberg Purity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-2xl border border-court-gold/30 bg-gradient-to-b from-zinc-900/60 via-black to-zinc-950/80 p-5 shadow-lg relative overflow-hidden group hover:border-court-gold/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-court-gold/[0.05] rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  HEISENBERG CODE PURITY
                </span>
                <Flame className="h-4 w-4 text-court-gold" />
              </div>
              <div className="font-docket text-4xl sm:text-5xl font-bold tracking-tight text-court-gold">
                99.1%
              </div>
              <div className="font-sans text-xs text-zinc-400 mt-2 font-light leading-snug">
                Zero runtime exceptions · Strict stoichiometric types &amp; zero implicit any.
              </div>
            </div>

            {/* Animated SVG Chemical Chromatogram Spectrum */}
            <div className="mt-5 pt-4 border-t border-zinc-850">
              <div className="relative h-12 w-full overflow-hidden rounded bg-black/60 border border-zinc-900 p-1 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="goldSpec" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 38 Q 20 38 35 32 Q 50 5 60 2 Q 70 5 80 34 Q 90 38 100 38 Z"
                    fill="url(#goldSpec)"
                  />
                  <path
                    d="M 0 38 Q 20 38 35 32 Q 50 5 60 2 Q 70 5 80 34 Q 90 38 100 38"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="1.8"
                  />
                  <circle cx="60" cy="2" r="2.5" fill="#fef08a" className="animate-ping" />
                  <circle cx="60" cy="2" r="1.5" fill="#fef08a" />
                </svg>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                <span>CHROMATOGRAPHY PEAK</span>
                <span className="text-court-gold font-bold">SPEC: 99.10%</span>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Enterprise CRM Throughput */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/60 via-black to-zinc-950/80 p-5 shadow-lg relative overflow-hidden group hover:border-emerald-500/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.05] rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  CONCURRENT THROUGHPUT
                </span>
                <Activity className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="font-docket text-4xl sm:text-5xl font-bold tracking-tight text-emerald-400">
                100+
              </div>
              <div className="font-sans text-xs text-zinc-400 mt-2 font-light leading-snug">
                Active concurrent enterprise users across live production instances.
              </div>
            </div>

            {/* Animated SVG Cluster Node Telemetry */}
            <div className="mt-5 pt-4 border-t border-zinc-850">
              <div className="relative h-12 w-full overflow-hidden rounded bg-black/60 border border-zinc-900 p-1 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <line x1="20" y1="20" x2="50" y2="20" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="20" x2="80" y2="12" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="20" x2="80" y2="28" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Central Node */}
                  <circle cx="50" cy="20" r="5" fill="#10b981" opacity="0.3" className="animate-ping" />
                  <circle cx="50" cy="20" r="3.5" fill="#34d399" />
                  
                  {/* Satellite Nodes */}
                  <circle cx="20" cy="20" r="2.5" fill="#10b981" />
                  <circle cx="80" cy="12" r="2.5" fill="#10b981" />
                  <circle cx="80" cy="28" r="2.5" fill="#10b981" />
                </svg>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                <span>WEBSOCKET CLUSTER</span>
                <span className="text-emerald-400 font-bold">ZERO PACKET LOSS</span>
              </div>
            </div>
          </motion.div>

          {/* Tile 3: Dispatch Integrity Record */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-2xl border border-blue-500/30 bg-gradient-to-b from-zinc-900/60 via-black to-zinc-950/80 p-5 shadow-lg relative overflow-hidden group hover:border-blue-500/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/[0.05] rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  DISPATCH INTEGRITY
                </span>
                <ShieldCheck className="h-4 w-4 text-blue-400" />
              </div>
              <div className="font-docket text-4xl sm:text-5xl font-bold tracking-tight text-blue-400">
                00 FAULTS
              </div>
              <div className="font-sans text-xs text-zinc-400 mt-2 font-light leading-snug">
                Atomic state verification, clean disposal, &amp; zero memory leak benchmark.
              </div>
            </div>

            {/* Animated SVG Circular Radar Target */}
            <div className="mt-5 pt-4 border-t border-zinc-850">
              <div className="relative h-12 w-full overflow-hidden rounded bg-black/60 border border-zinc-900 p-1 flex items-center justify-center">
                <svg className="h-full w-24" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#1e3a8a" strokeWidth="1" />
                  <circle cx="20" cy="20" r="10" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="4" y1="20" x2="36" y2="20" stroke="#1d4ed8" strokeWidth="0.6" />
                  <line x1="20" y1="4" x2="20" y2="36" stroke="#1d4ed8" strokeWidth="0.6" />
                  <circle cx="20" cy="20" r="3" fill="#60a5fa" />
                  <line x1="20" y1="20" x2="34" y2="8" stroke="#93c5fd" strokeWidth="1.2" className="origin-center animate-[spin_3s_linear_infinite]" />
                </svg>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                <span>DEFENSE BOUNDARY</span>
                <span className="text-blue-400 font-bold">ADMISSIBLE CLEAN</span>
              </div>
            </div>
          </motion.div>

          {/* Tile 4: Query Latency */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between rounded-2xl border border-amber-400/30 bg-gradient-to-b from-zinc-900/60 via-black to-zinc-950/80 p-5 shadow-lg relative overflow-hidden group hover:border-amber-400/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/[0.05] rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                  DATABASE &amp; SOCKET LATENCY
                </span>
                <Database className="h-4 w-4 text-amber-300" />
              </div>
              <div className="font-docket text-4xl sm:text-5xl font-bold tracking-tight text-amber-300">
                &lt; 40ms
              </div>
              <div className="font-sans text-xs text-zinc-400 mt-2 font-light leading-snug">
                Optimized indexed queries &amp; 60fps high-speed socket telemetry.
              </div>
            </div>

            {/* Animated SVG Audio / Frequency Equalizer Bars */}
            <div className="mt-5 pt-4 border-t border-zinc-850">
              <div className="relative h-12 w-full overflow-hidden rounded bg-black/60 border border-zinc-900 p-2 flex items-end justify-between gap-1">
                {[18, 32, 14, 28, 38, 22, 34, 16, 26, 36, 19, 30].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-full bg-gradient-to-t from-amber-600 to-amber-300 rounded-t-sm opacity-85 hover:opacity-100 transition-all"
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-500">
                <span>EDGE QUERY SPEED</span>
                <span className="text-amber-300 font-bold">CACHE HIT 99.8%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hardware Gauge Footer */}
        <div className="mt-8 pt-5 border-t border-zinc-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 font-bold">[ SPECIFICATION AUDIT ]</span>
            <span>All production metrics verified against live enterprise deployments</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>CLOCK: 60.0 FPS</span>
            <span>|</span>
            <span>JITTER: 0.12ms</span>
            <span>|</span>
            <span className="text-emerald-400 font-bold">● ONLINE</span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
