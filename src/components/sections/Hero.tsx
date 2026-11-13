import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, CheckCircle2, RotateCcw, Scale, CornerDownRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/content';

export const HeroScreen: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[720px] flex flex-col justify-end overflow-hidden bg-black text-white select-none"
    >
      {/* Full-Bleed 100% Viewport Image — Native 4K Studio Master */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/images/bcs-4k-921.jpg"
          alt="Mohan Mahajan x Saul Goodman Special Counsel in 4K law chambers"
          className="w-full h-full object-cover object-[58%_center] sm:object-[80%_center] transform scale-105 animate-subtle-zoom"
        />
        {/* Top subtle vignette under navbar */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
        {/* Left subtle shadow scrim so monumental typography pops with crisp contrast */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-black/90 via-black/45 to-transparent pointer-events-none" />
        {/* Bottom deep gradient fade into pure black void */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
        {/* Subtle warm amber radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-court-gold/[0.04] rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* Monumental Hero Typography — Pure Cinematic Name & Background */}
      <div className="relative z-20 w-[90%] mx-auto pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-docket uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[145px] font-normal tracking-tight text-white leading-[0.9] drop-shadow-[0_20px_50px_rgba(0,0,0,0.98)]">
            MOHAN<br className="sm:hidden" /> MAHAJAN
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export const ProblemVoidSection: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [problemCategory, setProblemCategory] = useState<'everyday' | 'code'>('everyday');
  const [typedProblem, setTypedProblem] = useState('');
  const [selectedPillText, setSelectedPillText] = useState<string | null>(null);
  const [cycle, setCycle] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pillTilts = [-0.8, 0.7, -1.4, 1.1, -0.5, 0.8, -0.6];

  // Scroll-linked continuous transforms (Shreeharsh inspired sticky runway)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Left Column: Eyebrow, Monumental Text Lines & Attribution
  const eyebrowOpacity = useTransform(scrollYProgress, [0.00, 0.12], [0.25, 1]);
  const eyebrowY = useTransform(scrollYProgress, [0.00, 0.12], [14, 0]);

  const line1Opacity = useTransform(scrollYProgress, [0.05, 0.22], [0.18, 1]);
  const line1Y = useTransform(scrollYProgress, [0.05, 0.22], [22, 0]);

  const line2Opacity = useTransform(scrollYProgress, [0.18, 0.36], [0.18, 0.95]);
  const line2Y = useTransform(scrollYProgress, [0.18, 0.36], [22, 0]);

  const line3Opacity = useTransform(scrollYProgress, [0.32, 0.50], [0.18, 1]);
  const line3Y = useTransform(scrollYProgress, [0.32, 0.50], [22, 0]);
  const line3Scale = useTransform(scrollYProgress, [0.32, 0.50], [0.96, 1]);

  const narrativeOpacity = useTransform(scrollYProgress, [0.46, 0.62], [0, 1]);
  const narrativeY = useTransform(scrollYProgress, [0.46, 0.62], [18, 0]);

  const footerOpacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const footerY = useTransform(scrollYProgress, [0.58, 0.74], [14, 0]);

  // Right Column: Switcher, Staggered Sequential Pills & Dispatch Terminal
  const switcherOpacity = useTransform(scrollYProgress, [0.14, 0.26], [0, 1]);
  const switcherY = useTransform(scrollYProgress, [0.14, 0.26], [16, 0]);

  const pill0Opacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);
  const pill0Y = useTransform(scrollYProgress, [0.22, 0.32], [-28, 0]);
  const pill0Scale = useTransform(scrollYProgress, [0.22, 0.32], [0.92, 1]);

  const pill1Opacity = useTransform(scrollYProgress, [0.29, 0.39], [0, 1]);
  const pill1Y = useTransform(scrollYProgress, [0.29, 0.39], [-28, 0]);
  const pill1Scale = useTransform(scrollYProgress, [0.29, 0.39], [0.92, 1]);

  const pill2Opacity = useTransform(scrollYProgress, [0.36, 0.46], [0, 1]);
  const pill2Y = useTransform(scrollYProgress, [0.36, 0.46], [-28, 0]);
  const pill2Scale = useTransform(scrollYProgress, [0.36, 0.46], [0.92, 1]);

  const pill3Opacity = useTransform(scrollYProgress, [0.43, 0.53], [0, 1]);
  const pill3Y = useTransform(scrollYProgress, [0.43, 0.53], [-28, 0]);
  const pill3Scale = useTransform(scrollYProgress, [0.43, 0.53], [0.92, 1]);

  const pill4Opacity = useTransform(scrollYProgress, [0.50, 0.60], [0, 1]);
  const pill4Y = useTransform(scrollYProgress, [0.50, 0.60], [-28, 0]);
  const pill4Scale = useTransform(scrollYProgress, [0.50, 0.60], [0.92, 1]);

  const pill5Opacity = useTransform(scrollYProgress, [0.57, 0.67], [0, 1]);
  const pill5Y = useTransform(scrollYProgress, [0.57, 0.67], [-28, 0]);
  const pill5Scale = useTransform(scrollYProgress, [0.57, 0.67], [0.92, 1]);

  const pill6Opacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);
  const pill6Y = useTransform(scrollYProgress, [0.64, 0.74], [-28, 0]);
  const pill6Scale = useTransform(scrollYProgress, [0.64, 0.74], [0.92, 1]);

  const pillTransforms = [
    { opacity: pill0Opacity, y: pill0Y, scale: pill0Scale },
    { opacity: pill1Opacity, y: pill1Y, scale: pill1Scale },
    { opacity: pill2Opacity, y: pill2Y, scale: pill2Scale },
    { opacity: pill3Opacity, y: pill3Y, scale: pill3Scale },
    { opacity: pill4Opacity, y: pill4Y, scale: pill4Scale },
    { opacity: pill5Opacity, y: pill5Y, scale: pill5Scale },
    { opacity: pill6Opacity, y: pill6Y, scale: pill6Scale },
  ];

  const dispatchOpacity = useTransform(scrollYProgress, [0.72, 0.86], [0, 1]);
  const dispatchY = useTransform(scrollYProgress, [0.72, 0.86], [24, 0]);

  const currentPills =
    problemCategory === 'everyday'
      ? PORTFOLIO_DATA.whsp.everydayProblems
      : PORTFOLIO_DATA.whsp.codeProblems;

  const handlePillClick = (text: string) => {
    setSelectedPillText(text);
    setTypedProblem(text);
    const contactMessage = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;
    if (contactMessage) {
      contactMessage.value = text;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="problem-void"
      className="relative w-full lg:h-[230vh] bg-black text-white select-none border-t border-zinc-900"
    >
      <div className="lg:sticky lg:top-0 min-h-screen w-full flex flex-col justify-center py-16 lg:py-0 overflow-hidden">
        {/* Ambient warm gold atmospheric radial glow */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-court-gold/[0.06] via-amber-500/[0.02] to-transparent rounded-full blur-[180px] pointer-events-none" />
        
        {/* Subtle Architectural Legal Watermark */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 font-docket text-[160px] font-black uppercase text-white/[0.015] pointer-events-none select-none tracking-tighter hidden md:block">
          CONCIERGE
        </div>

        <div className="relative z-10 w-[94%] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
            {/* LEFT COLUMN: Free Style Monumental Headline & Narrative (No enclosing card/box) */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left pr-0 lg:pr-4">
              {/* Eyebrow Tag */}
              <motion.div
                style={isDesktop ? { opacity: eyebrowOpacity, y: eyebrowY } : undefined}
                initial={!isDesktop ? { opacity: 0, y: 15 } : undefined}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-court-gold mb-8 sm:mb-10"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-court-gold animate-pulse" />
                  <span>THE CONCIERGE DOCTRINE</span>
                </div>
                <span className="text-zinc-700">|</span>
                <div className="flex items-center gap-2 text-[#A69880] bg-zinc-900/60 border border-court-gold/30 px-2.5 py-0.5 rounded-[3px]">
                  <Scale className="h-3.5 w-3.5 text-court-gold/80" />
                  <span>CHAMBERS #01</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-court-gold font-semibold">PRIVILEGED</span>
                </div>
              </motion.div>

              {/* Monumental Headline — Free Style Editorial Typography */}
              <h2 className="font-docket uppercase tracking-tight select-none flex flex-col gap-3.5 sm:gap-4.5">
                {/* Line 1 */}
                <motion.div
                  style={isDesktop ? { opacity: line1Opacity, y: line1Y } : undefined}
                  initial={!isDesktop ? { opacity: 0, y: 20 } : undefined}
                  whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-white leading-[1.12] drop-shadow-[0_4px_30px_rgba(0,0,0,0.98)] tracking-[-0.01em]"
                >
                  TELL US THE PROBLEM.
                </motion.div>

                {/* Line 2 */}
                <motion.div
                  style={isDesktop ? { opacity: line2Opacity, y: line2Y } : undefined}
                  initial={!isDesktop ? { opacity: 0, y: 20 } : undefined}
                  whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[43px] font-normal text-[#C8C2B5] leading-[1.15] tracking-[0.02em] whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
                >
                  NO QUESTIONS. NO JUDGMENT.
                </motion.div>

                {/* Line 3 */}
                <motion.div
                  style={isDesktop ? { opacity: line3Opacity, y: line3Y, scale: line3Scale } : undefined}
                  initial={!isDesktop ? { opacity: 0, y: 20 } : undefined}
                  whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-bold leading-[1.15] flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
                >
                  <span className="bg-gradient-to-r from-[#FFF5DC] via-[#E5A93C] to-[#C59B27] bg-clip-text text-transparent drop-shadow-[0_2px_28px_rgba(229,169,60,0.4)]">
                    JUST PUT IT IN
                  </span>
                  {/* Rich Gilded Intake Capsule */}
                  <span className="inline-flex items-center justify-center px-4 sm:px-5 py-1 sm:py-1.5 rounded-2xl border border-court-gold/70 bg-gradient-to-b from-[#241C10] via-[#14120D] to-[#0A0A0A] shadow-[0_0_28px_rgba(229,169,60,0.32),inset_0_1px_2px_rgba(255,255,255,0.12)]">
                    <span className="font-mono text-base sm:text-lg text-court-gold font-bold">&#123;</span>
                    <span className="mx-2 sm:mx-2.5 w-2 sm:w-2.5 h-0.5 bg-court-gold/80 rounded-full animate-pulse inline-block" />
                    <span className="font-mono text-base sm:text-lg text-court-gold font-bold">&#125;</span>
                  </span>
                </motion.div>
              </h2>

              {/* Narrative Pull-Quote */}
              <motion.div
                style={isDesktop ? { opacity: narrativeOpacity, y: narrativeY } : undefined}
                initial={!isDesktop ? { opacity: 0, y: 15 } : undefined}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 sm:mt-12 border-l-2 border-court-gold/70 pl-5 sm:pl-6 py-2 max-w-xl"
              >
                <div className="flex items-start gap-3">
                  <CornerDownRight className="h-4 w-4 text-court-gold shrink-0 mt-1.5" />
                  <div>
                    <p className="font-cormorant text-lg sm:text-xl lg:text-[22px] text-[#DDD4C5] italic font-normal leading-relaxed">
                      Small problems consume disproportionate cognitive bandwidth. Click a friction sample on the right or drop your problem directly into the concierge terminal.
                    </p>
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-court-gold/70">
                      Privileged Chambers // 24/7 Defense Protocol
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Legal Credentials Footer */}
              <motion.div
                style={isDesktop ? { opacity: footerOpacity, y: footerY } : undefined}
                initial={!isDesktop ? { opacity: 0, y: 15 } : undefined}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-9 sm:mt-11 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-400 max-w-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-court-gold/70 bg-court-gold/20 flex items-center justify-center shadow-[0_0_12px_rgba(229,169,60,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-court-gold" />
                  </div>
                  <span className="font-bold text-zinc-100 tracking-wide text-xs sm:text-[13px]">
                    Saul opens the case · Mike closes the codebase
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-zinc-400 uppercase tracking-wider">
                  <span>Albuquerque, NM</span>
                  <span className="text-zinc-600">|</span>
                  <span className="text-court-gold font-semibold">24/7 Defense</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: Category Switcher, Sequential Pills, Dispatch Bar */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end w-full lg:pl-4 xl:pl-6">
              {/* Category Switcher */}
              <motion.div
                style={isDesktop ? { opacity: switcherOpacity, y: switcherY } : undefined}
                initial={!isDesktop ? { opacity: 0, y: 15 } : undefined}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 rounded-full border border-zinc-850 bg-zinc-950/80 p-1 font-mono text-xs shadow-lg backdrop-blur-sm lg:mr-2"
              >
                <button
                  onClick={() => {
                    setProblemCategory('everyday');
                    setSelectedPillText(null);
                    setCycle((prev) => prev + 1);
                  }}
                  className={`rounded-full px-4 py-1.5 transition-all text-xs font-mono cursor-pointer ${
                    problemCategory === 'everyday'
                      ? 'bg-court-gold text-black font-bold shadow-md shadow-amber-500/10'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Everyday Friction
                </button>

                <button
                  onClick={() => {
                    setProblemCategory('code');
                    setSelectedPillText(null);
                    setCycle((prev) => prev + 1);
                  }}
                  className={`rounded-full px-4 py-1.5 transition-all text-xs font-mono cursor-pointer ${
                    problemCategory === 'code'
                      ? 'bg-court-gold text-black font-bold shadow-md shadow-amber-500/10'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Code &amp; Architecture
                </button>

                <button
                  onClick={() => setCycle((prev) => prev + 1)}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-[11px] cursor-pointer"
                  title="Replay falling animation"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>replay</span>
                </button>
              </motion.div>

              {/* Sequential Problem Pills — One by one scroll appearance */}
              <div className="relative w-full max-w-xl lg:max-w-none min-h-[170px] sm:min-h-[190px] flex items-center justify-center lg:justify-end py-2 select-none">
                <div className="relative z-10 flex flex-wrap justify-center lg:justify-end items-center gap-2.5 sm:gap-3 w-full">
                  {currentPills.map((pill, idx) => {
                    const isSelected = selectedPillText === pill.text;
                    const restingTilt = pillTilts[idx % pillTilts.length];
                    const transform = pillTransforms[idx];

                    return (
                      <motion.div
                        key={`${problemCategory}-${cycle}-${pill.text}-${idx}`}
                        style={
                          isDesktop && transform
                            ? {
                                opacity: transform.opacity,
                                y: transform.y,
                                scale: transform.scale,
                              }
                            : undefined
                        }
                        initial={
                          !isDesktop
                            ? { opacity: 0, y: -30, scale: 0.94 }
                            : undefined
                        }
                        whileInView={
                          !isDesktop
                            ? { opacity: 1, y: 0, scale: 1 }
                            : undefined
                        }
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 270,
                          damping: 18,
                          delay: !isDesktop ? idx * 0.06 : 0,
                        }}
                      >
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            y: -2,
                            transition: { duration: 0.18 },
                          }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handlePillClick(pill.text)}
                          style={{
                            backgroundColor: pill.bg,
                            transform: `rotate(${restingTilt}deg)`,
                          }}
                          className={`group relative rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-sans text-xs sm:text-[13px] font-semibold text-[#121214] tracking-tight antialiased shadow-[0_8px_20px_-4px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-200 text-center ${
                            isSelected
                              ? 'ring-2 ring-court-gold shadow-[0_0_20px_rgba(217,119,6,0.6)] scale-[1.03] z-30'
                              : 'hover:z-20 hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.6)]'
                          }`}
                        >
                          <span className="relative z-10 leading-snug">{pill.text}</span>
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Unified Sleek Dispatch Bar */}
              <motion.div
                style={isDesktop ? { opacity: dispatchOpacity, y: dispatchY } : undefined}
                initial={!isDesktop ? { opacity: 0, y: 20 } : undefined}
                whileInView={!isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 sm:mt-6 w-full max-w-xl lg:max-w-none mx-auto lg:ml-auto"
              >
                <div className="relative flex items-center bg-zinc-950/90 rounded-full border border-zinc-800 p-2 sm:p-2.5 pl-4 sm:pl-5 focus-within:border-court-gold shadow-2xl backdrop-blur-md transition-colors">
                  <span className="font-mono text-xl sm:text-2xl text-court-gold mr-3 select-none font-bold">&#123;</span>
                  <input
                    type="text"
                    value={typedProblem}
                    onChange={(e) => {
                      setTypedProblem(e.target.value);
                      const contactMessage = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;
                      if (contactMessage) contactMessage.value = e.target.value;
                    }}
                    placeholder="Click a pill above or describe your problem..."
                    className="w-full bg-transparent font-sans text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
                  />
                  <span className="font-mono text-xl sm:text-2xl text-court-gold ml-2 mr-3 sm:mr-4 select-none font-bold">&#125;</span>
                  
                  <button
                    onClick={() => {
                      const query = typedProblem ? `?problem=${encodeURIComponent(typedProblem)}` : '';
                      navigate(`/contact${query}`);
                    }}
                    className="shrink-0 inline-flex items-center gap-2 rounded-full bg-court-gold px-5 py-2.5 sm:px-6 sm:py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-md shadow-amber-500/10 cursor-pointer"
                  >
                    <span>Dispatch</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>

                {typedProblem && (
                  <p className="mt-2.5 font-mono text-[11px] text-emerald-400 flex items-center justify-center lg:justify-end gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Ready for dispatch to Mohan</span>
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero: React.FC = () => {
  return (
    <>
      <HeroScreen />
      <ProblemVoidSection />
    </>
  );
};
