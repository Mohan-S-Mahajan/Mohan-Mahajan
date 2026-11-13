import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, FolderOpen, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/content';
import { ManilaCaseDocketCard } from '../components/cards/ManilaCaseDocketCard';
import { AlbuquerqueHudTracker } from '../components/ui/AlbuquerqueHudTracker';

export const CasesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL CASE EXHIBITS' },
    { id: 'web-apps', label: 'ENTERPRISE CRM & PORTALS' },
    { id: 'ui-ux', label: 'OPERATIONS & OFFLINE SYSTEMS' },
    { id: 'experiments', label: 'HEISENBERG LAB ENGINES' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

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
          <Link to="/flow" className="hover:text-white transition-colors">
            <span>Flow</span>
          </Link>
          <span>/</span>
          <span className="text-court-gold font-bold">Classified Exhibits</span>
        </div>

        <div className="border-b border-zinc-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-court-gold mb-1">
              <FolderOpen className="h-4 w-4" />
              <span>CLASSIFIED EVIDENCE ARCHIVE · STEP 04</span>
            </div>
            <h1 className="font-docket text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-1">
              Verified Case Files & Dockets
            </h1>
            <p className="font-sans text-base sm:text-lg font-light text-zinc-400 max-w-2xl mt-3">
              Tangible evidence of solved problems. Real enterprise codebases, full-stack CRM platforms, data-rich legal search, and reactive simulation engines.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 border border-zinc-800 bg-zinc-950/80 px-4 py-2.5 rounded-xl">
            <ShieldCheck className="h-4 w-4 text-court-gold" />
            <span>6/6 ADMISSIBLE IN PRODUCTION</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-court-gold text-black shadow-md scale-105'
                  : 'border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cinematic Evidence Desk Still Banner */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden">
            <img
              src="/assets/images/albuquerque-evidence-desk.jpg"
              alt="Albuquerque legal evidence desk with manila folders, blueprints and banker lamp"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-xs text-zinc-300">
              <span className="bg-black/75 px-3 py-1 rounded-full border border-court-gold/40 text-court-gold text-[11px] font-bold">
                EVIDENCE TABLEAU // ALBUQUERQUE BENCH
              </span>
              <span className="hidden sm:inline text-zinc-400 text-[11px]">
                PHYSICAL ARTIFACTS &amp; PRODUCTION ARCHITECTURES VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Manila Case File Docket Grid */}
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <ManilaCaseDocketCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>

      {/* Next Page Navigation Bar */}
      <div className="mt-20 w-[90%] mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-court-gold font-bold">
              NEXT UP · STEP 05
            </span>
            <span className="font-docket text-xl font-bold text-white">
              The Concierge Toolkit & Technical Arsenal
            </span>
          </div>
          <Link
            to="/toolkit"
            className="inline-flex items-center gap-2 rounded-full bg-court-gold px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-105"
          >
            <span>Explore Toolkit</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
