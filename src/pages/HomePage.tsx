import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Workflow,
  FolderGit2,
  Cpu,
  Award,
  Wrench,
  Send,
  Scale,
} from 'lucide-react';
import { HeroScreen, ProblemVoidSection } from '../components/sections/Hero';
import { OperatingPhilosophy } from '../components/sections/OperatingPhilosophy';
import { DocketCarousel } from '../components/cards/DocketCarousel';
import { PORTFOLIO_DATA } from '../data/content';

export const HomePage: React.FC = () => {
  const masterDockets = [
    {
      title: 'Case Files & Blueprints',
      docketRef: 'DOCKET 01 // PRODUCTION ARCHITECTURE',
      tag: 'CLASSIFIED EVIDENCE',
      stamp: '6/6 ADMISSIBLE',
      serial: 'CASE № 842-NM',
      metric: '100/100 WEB VITALS',
      description: '6 verified enterprise deployments, full-stack CRM platforms, analytics suites, and chemical simulation apps. Every architecture defended with zero lingering debt.',
      icon: FolderGit2,
      path: '/cases',
      image: '/assets/images/albuquerque-evidence-desk.jpg',
      specs: ['React 19 / TypeScript', '100/100 Core Web Vitals', 'Zero Residue Handover'],
      actionText: 'EXAMINE PRODUCTION EVIDENCE',
      colSpan: 'lg:col-span-7',
      delay: 0,
    },
    {
      title: 'Technical Toolkit',
      docketRef: 'DOCKET 02 // STACK & PURITY',
      tag: 'SYSTEM ARCHITECTURE',
      stamp: '99.1% CODE PURITY',
      serial: 'STACK // FE-BE-SYS',
      metric: 'SUB-50MS RUNTIME',
      description: 'Interactive periodic table of frontend, backend, and distributed tooling. Engineered with strict TypeScript type soundness and sub-50ms execution runways.',
      icon: Cpu,
      path: '/toolkit',
      image: '/assets/images/albuquerque-toolkit-lab.jpg',
      specs: ['Strict Type Safety', 'Lab-Grade Purity', 'Sub-50ms Runtime'],
      actionText: 'INSPECT PERIODIC BENCHMARKS',
      colSpan: 'lg:col-span-5',
      delay: 0.08,
    },
    {
      title: 'Track Record & Honors',
      docketRef: 'DOCKET 03 // DOSSIER & HONORS',
      tag: 'TACTICAL RECORD',
      stamp: 'PRIVILEGED',
      serial: 'ACC-03 // HONORS',
      metric: '24-HR HACKATHON WINNER',
      description: 'Hands-on engineering timeline, 24-hr hackathon leadership, competitive chess tactical accolades, and computer science engineering foundation.',
      icon: Award,
      path: '/experience',
      image: '/assets/images/albuquerque-legal-library.jpg',
      specs: ['Hackathon Champion', 'Competitive Chess', 'Production Ops'],
      actionText: 'REVIEW DOSSIER',
      colSpan: 'lg:col-span-4',
      delay: 0.16,
    },
    {
      title: 'The Service Flow',
      docketRef: 'DOCKET 04 // PROTOCOL & OPS',
      tag: 'CONCIERGE METHODOLOGY',
      stamp: 'CLOSED-LOOP',
      serial: 'METHOD // 5 STAGES',
      metric: '24-48H TURNAROUND',
      description: 'The 5-step problem concierge workflow: Contact, Consultation, Strategy, Execution, and Case Closed under complete NDA discretion.',
      icon: Workflow,
      path: '/flow',
      image: '/assets/images/albuquerque-flow-protocol.jpg',
      specs: ['100% NDA Discretion', '5-Stage Protocol', 'Zero Residue'],
      actionText: 'TRACE METHODOLOGY',
      colSpan: 'lg:col-span-4',
      delay: 0.22,
    },
    {
      title: 'Capabilities & SLA',
      docketRef: 'DOCKET 05 // TRIAGE & SLA',
      tag: 'EMERGENCY OFFERINGS',
      stamp: '<24H SLA',
      serial: 'SLA // 24/7 HOTLINE',
      metric: 'IMMEDIATE DISPATCH',
      description: 'Emergency production triage, high-velocity frontend bug liquidation, 60fps performance overhauls, and verified client endorsements.',
      icon: Wrench,
      path: '/services',
      image: '/assets/images/albuquerque-emergency-hotline.jpg',
      specs: ['Midnight Bug Triage', '60fps UI Acceleration', 'Clean Code Audits'],
      actionText: 'EXPLORE CAPABILITIES',
      colSpan: 'md:col-span-2 lg:col-span-4',
      delay: 0.28,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Screen 1: Hero — Monumental 4K Law Chambers Banner */}
      <HeroScreen />

      {/* Screen 2: Problem Void — Concierge Intake & Interactive Friction Pills */}
      <ProblemVoidSection />

      {/* Screen 3: Operating Philosophy — Heirloom / Albuquerque Bench Doctrine */}
      <OperatingPhilosophy />

      {/* Screen 4: Classified Case Exhibits — 6 Verified Production Dockets */}
      <DocketCarousel projects={PORTFOLIO_DATA.projects} />

      {/* Screen 5: The Master Dockets Directory & Albuquerque Billboard Finale */}
      <section id="directory" className="relative w-full bg-black text-white select-none py-20 sm:py-28 scroll-mt-20">
        <div className="w-[90%] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-900 pb-10">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-court-gold font-bold mb-3">
                <Scale className="h-4 w-4" />
                <span>CENTRAL ARCHIVES // SINGLE-OPERATOR PRACTICE</span>
              </div>
              <h2 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                THE MASTER DOCKETS
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg font-light text-zinc-400 mt-3 max-w-2xl leading-relaxed">
                Direct architectural accountability. No junior handoffs, no middle management, and no agency bloat. Every system is conceived, designed, and defended in production directly by Mohan Mahajan.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full border border-court-gold/30 bg-zinc-950 px-5 py-2.5 font-mono text-xs text-zinc-300 hover:text-white hover:border-court-gold hover:bg-court-gold/10 transition-all"
            >
              <span>Skip straight to intake terminal</span>
              <ArrowRight className="h-3.5 w-3.5 text-court-gold" />
            </Link>
          </div>

          {/* 5-Docket Matrix: Row 1 (2 Flagships) + Row 2 (3 Tactical Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {masterDockets.map((docket) => {
              const Icon = docket.icon;
              return (
                <motion.div
                  key={docket.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: docket.delay }}
                  className={docket.colSpan}
                >
                  <Link
                    to={docket.path}
                    className="group relative flex flex-col justify-between h-full rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-[#11100C]/90 to-[#0A0907]/95 p-5 sm:p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-court-gold/70 hover:shadow-[0_20px_50px_rgba(229,169,60,0.14)] overflow-hidden"
                  >
                    {/* Top Corner Manila Tab Accent with Serial */}
                    <div className="absolute top-0 right-8 px-3 py-0.5 rounded-b bg-[#1C1810] border-x border-b border-court-gold/30 font-mono text-[9px] text-court-gold/90 flex items-center gap-1.5 z-20">
                      <span className="h-1.5 w-1.5 rounded-full bg-court-gold animate-pulse" />
                      <span>{docket.docketRef}</span>
                    </div>

                    {/* Brass Eyelet Rivet */}
                    <div className="absolute top-4 left-4 h-2.5 w-2.5 rounded-full border border-court-gold/50 bg-gradient-to-br from-amber-200 via-amber-600 to-amber-950 shadow-inner opacity-70 group-hover:opacity-100 transition-opacity z-20" />

                    <div>
                      {/* Visual Photographic Preview Header (High Resolution, Filmic Noir) */}
                      <div className="relative w-full h-44 sm:h-52 mb-5 rounded-xl overflow-hidden border border-zinc-800/80 bg-black group-hover:border-court-gold/40 transition-colors">
                        <img
                          src={docket.image}
                          alt={docket.title}
                          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-105 group-hover:brightness-100"
                          loading="lazy"
                        />
                        {/* Subtle gradient vignette to blend into obsidian card base */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B08] via-transparent to-black/40 pointer-events-none" />

                        {/* Top Tag & Stamp badges */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 border border-court-gold/40 font-mono text-[9px] uppercase tracking-widest text-court-gold font-bold backdrop-blur-md shadow-lg">
                          {docket.tag}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/85 border border-zinc-700/60 font-mono text-[9px] uppercase tracking-wider text-zinc-300 backdrop-blur-md">
                          {docket.stamp}
                        </div>

                        {/* Bottom Micro-Info Strip */}
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-zinc-300 backdrop-blur-md bg-black/70 px-3 py-1.5 rounded-lg border border-zinc-800/70">
                          <span className="text-court-gold font-bold">{docket.serial}</span>
                          <span className="text-zinc-400">{docket.metric}</span>
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/90 text-zinc-300 group-hover:text-court-gold group-hover:border-court-gold/40 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="font-docket text-2xl font-bold tracking-tight text-white group-hover:text-court-gold transition-colors">
                          {docket.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-zinc-400">
                        {docket.description}
                      </p>

                      {/* Spec Pills */}
                      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-400">
                        {docket.specs.map((spec) => (
                          <span key={spec} className="px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-800/80">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer link */}
                    <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 font-mono text-xs text-zinc-500 group-hover:text-white transition-colors">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-court-gold font-bold">
                        {docket.actionText}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-1.5 text-court-gold" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Authentic Albuquerque Highway Billboard Section */}
          <div className="mt-16 relative overflow-hidden rounded-3xl border-2 border-court-gold/50 bg-gradient-to-br from-[#0B0A08] via-[#0E0D0B] to-[#14120D] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(229,169,60,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Billboard Copy */}
              <div className="lg:col-span-7 p-8 sm:p-12 z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-court-gold/40 bg-court-gold/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-court-gold font-bold mb-4">
                  <span className="h-2 w-2 rounded-full bg-court-gold animate-ping" />
                  <span>ROUTE 66 ALBUQUERQUE BILLBOARD // SPECIAL COUNSEL</span>
                </div>
                <h3 className="font-docket text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[0.95]">
                  GOT BUGS? <span className="text-court-gold">BETTER CALL MOHAN!</span>
                </h3>
                <p className="font-sans text-sm sm:text-base font-light text-zinc-300 mt-4 leading-relaxed max-w-lg">
                  When edge cases threaten production and silent memory leaks stall release day, don't plead guilty. Retain Mohan Mahajan for forensic frontend liquidation and architecture defense.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-court-gold px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-105 shadow-xl"
                  >
                    <span>CALL 505-503-4455 NOW</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-zinc-400 text-xs font-mono">● 24/7 Forensic Engineering Emergency Hotline</span>
                </div>
              </div>

              {/* Right Photo: Original Saul Goodman Pointing Forward */}
              <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[380px] overflow-hidden flex items-center justify-center lg:justify-end">
                <img
                  src="/assets/images/saul-original-pointing.jpg"
                  alt="Original Saul Goodman pointing forward"
                  className="w-full h-full object-cover object-[center_15%] transform transition-transform duration-700 hover:scale-105 filter contrast-105 brightness-95"
                />
                {/* Smooth Gradient blend: seamlessly merges dark left side with the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0E0D0B] lg:via-[#0E0D0B]/30 lg:to-transparent pointer-events-none" />
                {/* Subtle warm amber ambient glow in the corner */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-court-gold/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>

              {/* Bottom Direct CTA Card */}
              <div className="mt-10 rounded-2xl border border-court-gold/30 bg-gradient-to-r from-zinc-950 via-zinc-900/70 to-zinc-950 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                <div className="text-center sm:text-left">
                  <span className="font-mono text-xs uppercase tracking-widest text-court-gold font-bold">
                    Instant Concierge Intake
                  </span>
                  <h3 className="font-docket text-2xl sm:text-3xl font-bold text-white mt-1">
                    Have a problem ready? Let's solve it quietly.
                  </h3>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-court-gold px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-105 shrink-0 shadow-lg"
                >
                  <span>Dispatch Terminal</span>
                  <Send className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
    </div>
  );
};
