import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Contact } from '../components/sections/Contact';
import { AlbuquerqueHudTracker } from '../components/ui/AlbuquerqueHudTracker';

export const ContactPage: React.FC = () => {
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
          <span className="text-zinc-300">Dispatch Concierge</span>
        </div>

        <div className="border-b border-zinc-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            Intake Terminal · Step 08
          </span>
          <h1 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-2">
            Dispatch Problem Concierge
          </h1>
          <p className="font-sans text-base sm:text-lg font-light text-zinc-400 max-w-2xl mt-3">
            Tell us the problem. No questions. No judgment. Just put it in &#123; &nbsp;&nbsp;&nbsp;&nbsp; &#125;. Saul opens, Mike closes.
          </p>
        </div>
      </div>

      {/* Main Contact Form Component */}
      <Contact />
    </div>
  );
};
