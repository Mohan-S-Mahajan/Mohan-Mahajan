import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Experience } from '../components/sections/Experience';
import { AlbuquerqueHudTracker } from '../components/ui/AlbuquerqueHudTracker';

export const ExperiencePage: React.FC = () => {
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
          <Link to="/toolkit" className="hover:text-white transition-colors">
            <span>Toolkit</span>
          </Link>
          <span>/</span>
          <span className="text-zinc-300">Track Record</span>
        </div>

        <div className="border-b border-zinc-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400">
            History & Admissions · Step 06
          </span>
          <h1 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            Track Record & Experience
          </h1>
          <p className="font-sans text-base sm:text-lg font-light text-zinc-400 max-w-2xl mt-3">
            Chronological engineering track record, 24-hr hackathon coordination, state tactical chess honors, and formal education.
          </p>
        </div>
      </div>

      {/* Main Experience Component */}
      <Experience />

      {/* Next Page Navigation Bar */}
      <div className="mt-16 w-[90%] mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              NEXT UP · STEP 07
            </span>
            <span className="font-sans text-lg font-medium text-white">
              Capabilities, Services & Client Reviews
            </span>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <span>Inspect Capabilities</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
