import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionShell } from '../layout/SectionShell';
import { PORTFOLIO_DATA } from '../../data/content';

export const Experience: React.FC = () => {
  return (
    <SectionShell
      id="experience"
      docketNo="EXHIBIT // PROFESSIONAL TRACK RECORD"
      title="Experience & Credentials"
      subtitle="Proven engineering track record in production frontend systems, enterprise CRM tools, and competitive problem solving."
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left 8 Cols: Timeline */}
        <div className="relative lg:col-span-8">
          {/* Vertical subtle line */}
          <div className="absolute left-4 top-2 bottom-4 w-[1px] bg-zinc-800 sm:left-6" />

          <div className="space-y-12 pl-12 sm:pl-16">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Node indicator */}
                <div className="absolute -left-[45px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-white shadow-md sm:-left-[53px]">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>

                {/* Date period badge */}
                <div className="mb-2 inline-block rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-0.5 font-mono text-[11px] text-zinc-400">
                  {exp.period}
                </div>

                {/* Role & Firm */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {exp.role}
                </h3>
                <div className="font-mono text-xs text-zinc-400 mt-0.5">
                  {exp.firm} · {exp.location}
                </div>

                {/* Verdict summary */}
                <p className="mt-2 font-sans text-sm text-zinc-300 italic">
                  "{exp.verdict}"
                </p>

                {/* Bullet wins */}
                <ul className="mt-4 space-y-2 font-sans text-sm font-light text-zinc-400 leading-relaxed">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-zinc-500 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 4 Cols: Education & Verified Qualifications */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="mb-6 flex items-center gap-3 border-b border-zinc-900 pb-4">
              <GraduationCap className="h-5 w-5 text-white" />
              <h3 className="font-sans text-lg font-bold tracking-tight text-white">
                Education & Credentials
              </h3>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.barAdmissions.map((adm, i) => (
                <div key={i} className="border-l border-zinc-700 pl-4 space-y-1">
                  <div className="font-sans text-sm font-bold text-white leading-snug">
                    {adm.degree}
                  </div>
                  <div className="font-mono text-xs text-zinc-300">
                    {adm.institution}
                  </div>
                  <div className="font-mono text-[11px] text-emerald-400">
                    {adm.year}
                  </div>
                </div>
              ))}
            </div>

            {/* Verification badge */}
            <div className="mt-8 border-t border-zinc-900 pt-5 flex items-center gap-2 font-mono text-xs text-zinc-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Academic & Engineering Verified</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
