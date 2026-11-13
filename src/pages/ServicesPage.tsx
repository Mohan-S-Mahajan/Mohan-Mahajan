import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { AlbuquerqueHudTracker } from '../components/ui/AlbuquerqueHudTracker';

export const ServicesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-24 sm:pt-28 pb-20">
      {/* Right-Side Albuquerque Legal Docket HUD */}
      <AlbuquerqueHudTracker />
      {/* Page Header */}
      <div className="w-[90%] mx-auto mb-10">
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 mb-4">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" />
            <span>Problem</span>
          </Link>
          <span>/</span>
          <Link to="/experience" className="hover:text-white transition-colors">
            <span>Track Record</span>
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Services & Reviews</span>
        </div>

        <div className="border-b border-zinc-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-pink-400">
            Offerings & Endorsements · Step 07
          </span>
          <h1 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            Capabilities & Endorsements
          </h1>
          <p className="font-sans text-base sm:text-lg font-light text-zinc-400 max-w-2xl mt-3">
            What we solve: emergency bug liquidation, greenfield modern web engineering, 60fps performance, and client reviews.
          </p>
        </div>
      </div>

      {/* Iconic Better Call Saul Pointing Billboard Banner */}
      <div className="w-[90%] max-w-5xl mx-auto xl:ml-16 xl:mr-auto mb-16">
        <div className="relative overflow-hidden rounded-3xl border-2 border-court-gold/50 bg-gradient-to-br from-[#0B0A08] via-[#0E0D0B] to-[#14120D] text-white shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(229,169,60,0.08)]">
          <div className="grid md:grid-cols-12 items-center">
            {/* Left Billboard Copy */}
            <div className="md:col-span-7 p-8 sm:p-12 z-10 text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-court-gold/40 bg-court-gold/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-court-gold mb-4">
                <span>★ 24/7 EMERGENCY CODE INTAKE ★</span>
              </div>
              <h2 className="font-docket text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none mb-4">
                Better Call Mohan!
              </h2>
              <p className="font-sans text-base sm:text-lg font-light text-zinc-300 max-w-lg mb-6 leading-relaxed">
                Production crashes? Legacy architecture collapsing? Slow Web Vitals? You have rights—and you have lead engineering counsel.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-court-gold px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-105 shadow-xl"
                >
                  <span>Retain Counsel Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="font-mono text-xs font-bold text-zinc-400">
                  DIAL: (505) 503-4455 // TOLL-FREE
                </span>
              </div>
            </div>

            {/* Right Photo: Original Saul Goodman Pointing Forward */}
            <div className="md:col-span-5 relative h-72 sm:h-96 overflow-hidden flex items-center justify-center md:justify-end">
              <img
                src="/assets/images/saul-original-pointing.jpg"
                alt="Original Saul Goodman pointing forward"
                className="w-full h-full object-cover object-[center_15%] transform transition-transform duration-700 hover:scale-105 filter contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-transparent to-transparent md:bg-gradient-to-r md:from-[#0E0D0B] md:via-[#0E0D0B]/30 md:to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Component */}
      <Services />

      {/* Testimonials */}
      <div className="mt-20">
        <Testimonials />
      </div>

      {/* Next Page Navigation Bar */}
      <div className="mt-16 w-[90%] mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              FINAL STEP · DISPATCH
            </span>
            <span className="font-sans text-lg font-medium text-white">
              Ready to submit your problem? Open Concierge Terminal
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <span>Dispatch Concierge</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
