import React, { useState } from 'react';
import { SectionShell } from '../layout/SectionShell';
import { PeriodicTile } from '../ui/PeriodicTile';
import { PORTFOLIO_DATA } from '../../data/content';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'design', label: 'Design & A11y' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === activeCategory);

  return (
    <SectionShell
      id="skills"
      docketNo="EXHIBIT // TECHNICAL TOOLKIT"
      title="The Concierge Arsenal"
      subtitle="Modern web technologies, robust frameworks, and forensic performance tools deployed daily."
    >
      <div className="relative z-10">
        {/* Category Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Periodic Grid: 8-col desktop / 4-col tablet / 3-col mobile */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 sm:gap-4">
          {filteredSkills.map((skill) => (
            <div key={skill.number} className="flex justify-center">
              <PeriodicTile skill={skill} />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>High-velocity modern stack</span>
            <span className="text-zinc-600">·</span>
            <span>Industry & Production Verified</span>
          </div>
          <div className="font-mono text-xs font-semibold text-white">
            100% Type-Safe & Production Ready
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
