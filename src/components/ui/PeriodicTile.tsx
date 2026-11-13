import React, { useState } from 'react';
import type { SkillItem } from '../../data/content';

interface PeriodicTileProps {
  skill: SkillItem;
}

export const PeriodicTile: React.FC<PeriodicTileProps> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-24 w-24 sm:h-28 sm:w-28 flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/80 p-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-lg"
    >
      {/* Number & years */}
      <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
        <span>#{skill.number.toString().padStart(2, '0')}</span>
        <span className="text-[9px] uppercase tracking-wider text-zinc-500">
          {skill.years}Y
        </span>
      </div>

      {/* Main Symbol */}
      <div className="text-center font-mono text-2xl sm:text-3xl font-bold leading-none tracking-tight text-white transition-colors duration-200">
        {skill.symbol}
      </div>

      {/* Skill Name */}
      <div className="truncate text-center font-sans text-[11px] font-medium tracking-tight text-zinc-300">
        {skill.name}
      </div>

      {/* Tooltip on hover */}
      {hovered && (
        <div className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 font-mono text-[10px] text-zinc-200 shadow-xl">
          <span className="text-emerald-400 mr-1">●</span>
          {skill.purity}% Proficiency
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-zinc-700 bg-zinc-900" />
        </div>
      )}

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden rounded-b-xl bg-zinc-900">
        <div
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${skill.purity}%` }}
        />
      </div>
    </div>
  );
};
