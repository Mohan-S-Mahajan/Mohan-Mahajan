import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  FolderOpen,
  ArrowRight,
  ExternalLink,
  Code,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CornerDownRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../../data/content';
import './DocketCarousel.css';

interface DocketCarouselProps {
  projects: ProjectItem[];
}

export const DocketCarousel: React.FC<DocketCarouselProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const isManualNavRef = useRef(false);

  // Measure container width for responsive track physics
  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    } else if (typeof window !== 'undefined') {
      setContainerWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  // Framer Motion continuous scroll runway tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isManualNavRef.current) return;
    const count = projects.length;
    // Map scroll progress (0.0 to 1.0) to activeIndex (0 to count - 1)
    const newIndex = Math.min(
      Math.max(0, Math.floor(latest * count)),
      count - 1
    );
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const goToIndex = useCallback((targetIndex: number) => {
    setActiveIndex(targetIndex);
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const scrollableDistance = sectionRef.current.offsetHeight - window.innerHeight;

    if (scrollableDistance > 0) {
      const targetProgress = (targetIndex + 0.5) / projects.length;
      const targetScrollY = sectionTop + targetProgress * scrollableDistance;

      isManualNavRef.current = true;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      setTimeout(() => {
        isManualNavRef.current = false;
      }, 700);
    }
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    goToIndex(prevIndex);
  }, [activeIndex, projects.length, goToIndex]);

  const handleNext = useCallback(() => {
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    goToIndex(nextIndex);
  }, [activeIndex, projects.length, goToIndex]);

  // Keyboard arrow controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // 3D Coverflow Track Calculations
  const isDesktop = containerWidth >= 900;
  
  const activeCardWidth = Math.min(Math.max(620, containerWidth * 0.49), 780);
  const inactiveCardWidth = Math.min(Math.max(250, containerWidth * 0.20), 310);
  const trackGap = Math.min(Math.max(12, containerWidth * 0.012), 18);

  // Center active card in container
  const centerOffset = (containerWidth / 2) - (activeCardWidth / 2);
  const trackTranslateX = isDesktop
    ? centerOffset - (activeIndex * (inactiveCardWidth + trackGap))
    : 0;

  const activeProj = projects[activeIndex] || projects[0];

  return (
    <section
      ref={sectionRef}
      id="dockets"
      className="relative w-full h-[320vh] bg-black text-white select-none border-t border-zinc-900"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-5 sm:py-6 md:py-8 bg-black text-white select-none overflow-hidden">
        {/* Background Ambient Warm Gold Scrim */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-amber-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-court-gold/[0.02] rounded-full blur-[130px] pointer-events-none" />

        <div className="w-[94%] max-w-[1440px] mx-auto relative z-10 flex flex-col justify-between flex-1">
          {/* Top Editorial Meta Header */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-2 sm:mb-3 border-b border-zinc-900 pb-3 sm:pb-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-court-gold font-bold mb-1">
                  <FolderOpen className="h-3.5 w-3.5" />
                  <span>CLASSIFIED ARCHIVE // EXHIBIT DOSSIERS · STEP 04</span>
                  <span className="text-zinc-600 hidden sm:inline">|</span>
                  <span className="text-zinc-400 hidden sm:inline">6 AUDITED PRODUCTION VERDICTS</span>
                </div>
                
                {/* Monumental Non-Wrapping Title */}
                <h2 className="font-docket text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#EDE6DD] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] whitespace-nowrap">
                  C A S E &nbsp; D O C K E T S
                </h2>
                
                <p className="font-cormorant text-sm sm:text-base text-zinc-300 italic font-normal mt-0.5 max-w-2xl leading-snug">
                  Tangible forensic evidence of solved enterprise problems. Audited and liquidated with zero runtime residue.
                </p>
              </div>

              {/* Archive Link */}
              <div className="flex items-center gap-3 self-start md:self-end">
                <Link
                  to="/cases"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1.5 font-mono text-xs text-zinc-300 hover:text-white hover:border-court-gold transition-all duration-200 shadow-sm"
                >
                  <span>Full 6-docket archive</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Tab Selector Pills for Direct Docket Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {projects.map((proj, idx) => {
                  const isActive = idx === activeIndex;
                  const shortTitle = proj.title
                    .replace(' ENTERPRISE CRM', '')
                    .replace(' FINANCIAL PORTAL', '')
                    .replace(' CLIENT HUB', '')
                    .replace(' METRICS VAULT', '')
                    .replace(' DESIGN SYSTEM', '')
                    .replace(' SIMULATOR', '');

                  return (
                    <button
                      key={proj.id}
                      onClick={() => goToIndex(idx)}
                      className={`rounded-full px-3 py-1 font-mono text-[10.5px] sm:text-[11.5px] transition-all duration-250 cursor-pointer ${
                        isActive
                          ? 'bg-court-gold text-black font-bold shadow-[0_0_18px_rgba(229,169,60,0.45)] scale-105'
                          : 'border border-zinc-850 bg-zinc-950/90 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      }`}
                    >
                      <span className="font-bold opacity-80">{`0${idx + 1}`}</span>
                      <span className="ml-1.5 uppercase tracking-wide">{shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Chevrons, Scroll Indicator & Docket Index Counter */}
              <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs">
                <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-500 mr-2">
                  <span>SCROLL EXHIBITS</span>
                  <div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-court-gold transition-all duration-300"
                      style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={handlePrev}
                  className="p-1 sm:p-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-court-gold transition-colors cursor-pointer active:scale-95"
                  aria-label="Previous Docket"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>

                <span className="px-2 text-zinc-400 font-mono text-[11px]">
                  <strong className="text-court-gold">{`0${activeIndex + 1}`}</strong> / {`0${projects.length}`}
                </span>

                <button
                  onClick={handleNext}
                  className="p-1 sm:p-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-court-gold transition-colors cursor-pointer active:scale-95"
                  aria-label="Next Docket"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 3D Coverflow Horizontal Track */}
          <div ref={containerRef} className="docket-track-outer">
            <div
              className="docket-cards-track"
              style={{
                transform: isDesktop
                  ? `translate3d(${trackTranslateX}px, 0px, 0px)`
                  : 'none',
              }}
            >
              {projects.map((proj, idx) => {
                const isActive = idx === activeIndex;
                const isSmall = !isActive;

                return (
                  <div
                    key={proj.id}
                    className={`docket-card-slot ${isActive ? 'is-active-slot' : 'is-inactive-slot'}`}
                    onClick={() => {
                      if (isSmall) goToIndex(idx);
                    }}
                  >
                  <article
                    className={`manila-docket-card ${
                      isActive ? 'is-active-card' : 'is-small-card'
                    }`}
                  >
                    {/* Manila Case Folder Shell Styled to our Albuquerque Legal Docket Theme */}
                    <div className="docket-folder-shell">
                      {/* Top Manila Folder Tab & Eyelet Bar */}
                      <div className="docket-top-tab-bar">
                        <div className="docket-eyelet-group">
                          {/* Brass Eyelet Grommet */}
                          <div className="docket-brass-grommet">
                            <div className="docket-brass-grommet-hole" />
                          </div>
                          <div>
                            <div className="docket-case-number">
                              {proj.caseNo}
                            </div>
                            <div className="docket-jurisdiction-label">
                              ALBUQUERQUE FORENSIC ARCHIVE · {proj.year}
                            </div>
                          </div>
                        </div>

                        {/* Forensic Red Rubber Stamp */}
                        <div className="docket-rubber-stamp">
                          {proj.status === 'WON' ? '★ ADMISSIBLE IN COURT' : '✔ AUDITED & VERIFIED'}
                        </div>
                      </div>

                      {/* Main Docket Content: 2-Column Split */}
                      <div className="docket-main-content">
                        {/* LEFT COLUMN: Media / Blueprint Schematic Viewport */}
                        <div className="docket-left-media">
                          <div className="docket-img-container">
                            {/* Blueprint Coordinate Grid */}
                            <div className="docket-blueprint-grid" />

                            {/* Project Exhibit Photograph */}
                            <img
                              src={proj.image}
                              alt={proj.title}
                              className="docket-project-img"
                              loading="lazy"
                            />

                            {/* Vignette Grayscale Shadow */}
                            <div className="docket-img-vignette" />

                            {/* Corner Blueprint Registration Badges */}
                            <div className="docket-badge-fig">
                              <span className="flex items-center gap-1">
                                <Sparkles className="h-2.5 w-2.5 text-court-gold" />
                                <span>{`FIG. 0${idx + 1} // ARCHITECTURE`}</span>
                              </span>
                            </div>

                            <div className="docket-badge-purity">
                              99.1% PURE CODE
                            </div>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Docket Details, Verdict, Tags & Actions */}
                        <div className="docket-right-text">
                          <div className="docket-title-block">
                            <h3 className="docket-card-title">
                              {proj.title}
                            </h3>

                            <p className="docket-card-classification">
                              {proj.category.toUpperCase()} // LEGAL EXHIBIT DOSSIER #{idx + 1}
                            </p>

                            {/* Verdict Callout Box */}
                            <div className="docket-verdict-box">
                              <div className="flex items-start gap-1 font-sans">
                                <CornerDownRight className="h-3 w-3 shrink-0 text-[#8C6D37] mt-0.5" />
                                <span>
                                  <strong className="text-[#1A1815] font-bold">Verdict: </strong>
                                  {proj.verdict}
                                </span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="docket-card-desc">
                              {proj.description}
                            </p>

                            {/* Evidence Inventory Tags */}
                            <div className="docket-tags-row">
                              {proj.tags.map((tag) => (
                                <span key={tag} className="docket-tag-pill">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons (Rendered only on Active Card) */}
                          <div className="docket-card-actions">
                            {proj.codeUrl && (
                              <a
                                href={proj.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="docket-action-btn docket-btn-code"
                              >
                                <Code className="h-3 w-3" />
                                <span>Examine Code</span>
                              </a>
                            )}

                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="docket-action-btn docket-btn-demo"
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span>Live Exhibit</span>
                              </a>
                            )}

                            <Link
                              to="/cases"
                              className="docket-action-btn docket-btn-dossier"
                            >
                              <span>Examine Docket</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Status Bar */}
        <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10.5px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-court-gold animate-pulse" />
              <span>DOCKET ACTIVE:</span>
            </span>
            <span className="text-court-gold font-bold">{activeProj.title}</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="hidden md:inline text-zinc-500">
              SCROLL DOWN TO ADVANCE EXHIBITS · OR USE ← → KEYS
            </span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-court-gold" />
              <span>99.1% CODE PURITY BENCHMARK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
