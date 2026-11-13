import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Clock, Award } from 'lucide-react';
import { Process } from '../components/sections/Process';
import { AlbuquerqueHudTracker } from '../components/ui/AlbuquerqueHudTracker';

export const FlowPage: React.FC = () => {
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
          <span className="text-zinc-300">Service Flow</span>
        </div>

        <div className="border-b border-zinc-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Protocol & Operations · Step 02
          </span>
          <h1 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            The Service Flow
          </h1>
          <p className="font-sans text-base sm:text-lg font-light text-zinc-400 max-w-2xl mt-3">
            How a problem travels through the concierge system. From the first handshake to airtight execution and Cinnabon reward.
          </p>
        </div>
      </div>

      {/* Main Process Component */}
      <Process />

      {/* Deep Operational Standards */}
      <section className="mt-16 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-900 pt-12">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6">
            <div className="p-2 w-fit rounded-lg bg-zinc-900 text-zinc-300 mb-4">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-white mb-2">
              Absolute Discretion
            </h3>
            <p className="font-sans text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              No questions. No judgment. Technical problems are analyzed and resolved without leaving unnecessary digital footprint or organizational drama.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6">
            <div className="p-2 w-fit rounded-lg bg-zinc-900 text-zinc-300 mb-4">
              <Clock className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-white mb-2">
              High-Velocity Turnaround
            </h3>
            <p className="font-sans text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              Fast initial audit. We eliminate endless meetings and scope bloat, going straight from diagnosis to working TypeScript / React code.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/60 p-6">
            <div className="p-2 w-fit rounded-lg bg-zinc-900 text-zinc-300 mb-4">
              <Award className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="font-sans text-lg font-semibold text-white mb-2">
              Production Grade Handover
            </h3>
            <p className="font-sans text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
              Fully type-safe, tested, documented, and ready for deployment. Every case is permanently stamped closed with zero lingering technical debt.
            </p>
          </div>
        </div>

        {/* Next Page Navigation Bar */}
        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-court-gold">
              NEXT UP · STEP 03
            </span>
            <span className="font-sans text-lg font-medium text-white">
              Verified Case Files &amp; Production Deployments
            </span>
          </div>
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <span>Inspect Case Files</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};
