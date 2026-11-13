import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  ArrowRight,
  Scale,
  ShieldCheck,
  Check,
  Copy,
  Volume2,
  VolumeX,
  Phone,
  Mail,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const Footer: React.FC = () => {
  const { isPlayerOpen, togglePlayer } = useAudio();

  // Live Albuquerque MST Clock
  const [mstTime, setMstTime] = useState<string>('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setMstTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dispatch Inquiry Box State
  const [inquiry, setInquiry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiry.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setInquiry('');
        setIsSubmitted(false);
      }, 5000);
    }
  };

  // Click to Copy Email
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mohan@whsp.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Smooth Lenis / Window Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0A0908] border-t border-[#261E14] text-white select-none">
      {/* Subtle Warm Amber Noise & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B150D]/40 via-[#0A0908] to-[#050403] pointer-events-none" />

      {/* =========================================================================
          LAYER 1: TOP SECTION (INQUIRIES TERMINAL & 4 EDITORIAL COLUMNS)
          ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Left Column: Dispatch & Retain Special Counsel Inquiry Box */}
          <div className="w-full lg:max-w-md xl:max-w-lg shrink-0">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-court-gold font-bold">
              <Scale className="h-3.5 w-3.5 text-court-gold" />
              <span>DISPATCH TERMINAL // INITIAL INTAKE</span>
            </div>

            <h3 className="font-docket text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#F3EAD8] tracking-tight leading-[1.08] mt-3">
              Retain Special Counsel
            </h3>

            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light mt-3 leading-relaxed">
              Confidential frontend engineering, architectural crisis liquidation, and stoichiometric production retainers. Have a problem you can't talk about? Leave it with counsel.
            </p>

            {/* Underline Interactive Input Form */}
            <form onSubmit={handleInquirySubmit} className="mt-6">
              <div className="relative flex items-center border-b border-[#3D2E1E] focus-within:border-court-gold pb-2 transition-colors">
                <input
                  type="text"
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  placeholder={
                    isSubmitted
                      ? 'Docket logged. Counsel dispatched.'
                      : 'Enter corporate email or emergency brief...'
                  }
                  disabled={isSubmitted}
                  className="w-full bg-transparent font-sans text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none pr-10"
                />
                <button
                  type="submit"
                  aria-label="Submit confidential inquiry"
                  className={`absolute right-0 h-8 w-8 rounded-full border flex items-center justify-center transition-all ${
                    isSubmitted
                      ? 'border-emerald-500 bg-emerald-500 text-black'
                      : 'border-court-gold/60 bg-court-gold/10 text-court-gold hover:bg-court-gold hover:text-black hover:scale-105 active:scale-95'
                  }`}
                >
                  {isSubmitted ? (
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  ) : (
                    <ArrowRight className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>

              {isSubmitted ? (
                <div className="mt-2.5 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>DOCKET #505 LOGGED // MOHAN MAHAJAN RETAINED · CONFIDENTIAL RESPONSE WITHIN 24H</span>
                </div>
              ) : (
                <p className="mt-2.5 font-mono text-[10px] text-zinc-500">
                  Strict attorney-client privilege observed. Available 24/7. Response within 24 hours.
                </p>
              )}
            </form>
          </div>

          {/* Right Grid: 4 Tactical Navigation Columns */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 font-mono text-xs">
            {/* Column 1: Dockets Archive */}
            <div>
              <div className="text-zinc-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                <span className="text-court-gold text-[10px]">01 //</span>
                <span>DOCKETS</span>
              </div>
              <ul className="space-y-2.5 text-zinc-400 text-[11px]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    01 Concierge Home
                  </Link>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-white transition-colors">
                    02 Case Files
                  </Link>
                </li>
                <li>
                  <Link to="/toolkit" className="hover:text-white transition-colors">
                    03 Technical Toolkit
                  </Link>
                </li>
                <li>
                  <Link to="/flow" className="hover:text-white transition-colors">
                    04 Service Flow
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Technical Bench */}
            <div>
              <div className="text-zinc-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                <span className="text-court-gold text-[10px]">02 //</span>
                <span>EXPERTISE</span>
              </div>
              <ul className="space-y-2.5 text-zinc-400 text-[11px]">
                <li>
                  <Link to="/experience" className="hover:text-white transition-colors">
                    05 Track Record
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    06 Capabilities &amp; SLA
                  </Link>
                </li>
                <li className="text-zinc-500">Stoichiometric React 19</li>
                <li className="text-emerald-400/90 font-medium flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  <span>99.1% Code Purity</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Direct Dispatch */}
            <div>
              <div className="text-zinc-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                <span className="text-court-gold text-[10px]">03 //</span>
                <span>DISPATCH</span>
              </div>
              <ul className="space-y-2.5 text-zinc-400 text-[11px]">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-court-gold text-white font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>Intake Terminal</span>
                    <ArrowRight className="h-2.5 w-2.5 text-court-gold" />
                  </Link>
                </li>
                <li>
                  <a
                    href="tel:5055034455"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="h-3 w-3 text-court-gold" />
                    <span>(505) 503-4455</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleCopyEmail}
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <Mail className="h-3 w-3 text-court-gold" />
                    <span>mohan@whsp.dev</span>
                    {copiedEmail ? (
                      <span className="ml-1 text-[9px] bg-emerald-500/20 text-emerald-400 px-1 py-0.5 rounded border border-emerald-500/30">
                        COPIED!
                      </span>
                    ) : (
                      <Copy className="h-2.5 w-2.5 text-zinc-600 group-hover:text-court-gold transition-colors" />
                    )}
                  </button>
                </li>
                <li>
                  <span className="text-zinc-500">24/7 Emergency Line</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Jurisdiction & Airwaves */}
            <div>
              <div className="text-zinc-500 uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                <span className="text-court-gold text-[10px]">04 //</span>
                <span>AIRWAVES</span>
              </div>
              <ul className="space-y-2.5 text-zinc-400 text-[11px]">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohanmahajan/"
                    target="_blank"
                    rel="me author noopener noreferrer"
                    title="Mohan Mahajan on LinkedIn"
                    className="hover:text-court-gold transition-colors flex items-center gap-1 text-zinc-300 font-medium"
                  >
                    <span>Mohan Mahajan (LinkedIn)</span>
                    <ExternalLink className="h-2.5 w-2.5 text-court-gold" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Mohan-S-Mahajan/"
                    target="_blank"
                    rel="me author noopener noreferrer"
                    title="Mohan Mahajan on GitHub"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Mohan Mahajan (GitHub)</span>
                    <ExternalLink className="h-2.5 w-2.5 text-zinc-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mohan_mahajann/"
                    target="_blank"
                    rel="me author noopener noreferrer"
                    title="Mohan Mahajan on Instagram"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Mohan Mahajan (Instagram)</span>
                    <ExternalLink className="h-2.5 w-2.5 text-zinc-600" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={togglePlayer}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left text-zinc-300 font-medium"
                  >
                    {isPlayerOpen ? (
                      <Volume2 className="h-3 w-3 text-emerald-400 animate-pulse" />
                    ) : (
                      <VolumeX className="h-3 w-3 text-zinc-500" />
                    )}
                    <span>BCS Soundtrack {isPlayerOpen ? '(Open)' : '(Closed)'}</span>
                  </button>
                </li>
                <li>
                  <span className="text-zinc-600">Albuquerque Bar NM-842</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LAYER 2: MONUMENTAL NAME & CLASSICAL CUTOUT (SHREEHARSH DEPTH ILLUSION)
          ========================================================================= */}
      <div className="relative w-full min-h-[440px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-end justify-center overflow-hidden border-t border-b border-[#261E14] bg-[#070605]">
        {/* Atmospheric Courtroom Background with Chiaroscuro Vignette */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/assets/images/albuquerque-courtroom-baroque.jpg"
            alt="Albuquerque legal courtroom background"
            className="w-full h-full object-cover object-center opacity-15 filter contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/80 to-[#070605]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,_rgba(229,169,60,0.12),_transparent_70%)]" />
        </div>

        {/* Layer 2A (Behind at z-10): Giant Monumental Editorial Typography */}
        <div className="absolute inset-x-0 top-6 sm:top-8 md:top-10 lg:top-12 px-6 sm:px-12 lg:px-16 pointer-events-none select-none z-10">
          {/* Micro Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-4 font-mono text-[10px] sm:text-xs text-court-gold/90 uppercase tracking-widest font-semibold">
            <div className="flex items-center gap-2">
              <Scale className="h-3.5 w-3.5 text-court-gold" />
              <span>MOHAN MAHAJAN // ATTORNEY AT CODE &amp; PRODUCTION COUNSEL</span>
            </div>
            <span className="hidden sm:inline">ALBUQUERQUE DISPATCH ARCHIVE · NM-842</span>
          </div>

          {/* First Name - Monumental Left Aligned (DM Serif Display for 100% legibility) */}
          <div className="flex items-center justify-start">
            <h2 className="font-serif font-normal uppercase text-[clamp(3.8rem,13vw,12.5rem)] leading-[0.88] tracking-normal text-[#FFFFFF] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)]">
              MOHAN
            </h2>
          </div>

          {/* Last Name - Monumental Right Aligned (Clear & Visible) */}
          <div className="flex items-center justify-end mt-1 sm:mt-2 md:mt-3">
            <h2 className="font-serif font-normal uppercase text-[clamp(3.8rem,13vw,12.5rem)] leading-[0.88] tracking-normal text-[#F5EAD4] drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)]">
              MAHAJAN
            </h2>
          </div>
        </div>

        {/* Layer 2B (Foreground at z-20): Transparent Cutout Overlapping Characters Along Bottom */}
        <div className="relative z-20 w-full flex justify-center pointer-events-none leading-none">
          <img
            src="/assets/images/footer-cutout.png"
            alt="Albuquerque Courtroom Trial Assembly"
            className="w-full max-w-6xl max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[430px] object-contain object-bottom drop-shadow-[0_-20px_45px_rgba(0,0,0,0.98)]"
          />
        </div>
      </div>

      {/* =========================================================================
          LAYER 3: BOTTOM-MOST META BAR (LIVE MST CLOCK, COPYRIGHT & BACK TO TOP)
          ========================================================================= */}
      <div className="relative z-30 bg-[#060504] px-6 sm:px-10 lg:px-14 py-6 pb-20 sm:pb-8 border-t border-[#1C160E] font-mono text-[11px] text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:pr-48">
          {/* Left: Copyright & Bar Admission */}
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span className="text-zinc-300 font-semibold">
              © {new Date().getFullYear()} MOHAN MAHAJAN
            </span>
            <span className="text-zinc-700">·</span>
            <span>ATTORNEY AT CODE &amp; PROBLEM CONCIERGE</span>
            <span className="text-zinc-700">·</span>
            <span className="text-court-gold font-mono">BAR NO. NM-842</span>
          </div>

          {/* Center: Live Albuquerque MST Clock & Status */}
          <div className="flex items-center gap-3 bg-[#110D08] px-4 py-1.5 rounded-full border border-[#2E2013]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="h-3 w-3 text-court-gold" />
              <span className="text-court-gold font-bold">ALBUQUERQUE:</span>
              <span className="text-white">{mstTime || '11:24:00 AM MST'}</span>
            </div>
            <span className="text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>ACCEPTING SELECT CASES</span>
            </div>
          </div>

          {/* Right: Tactile Back To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of docket"
            className="inline-flex items-center gap-2 rounded-full border border-[#2E2013] bg-[#110D08] px-4 py-2 font-mono text-xs text-zinc-300 hover:text-white hover:border-court-gold hover:bg-court-gold hover:text-black transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Top Of Docket</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
