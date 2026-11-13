import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SectionShell } from '../layout/SectionShell';
import { PORTFOLIO_DATA } from '../../data/content';

const GithubIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web-apps' | 'ui-ux' | 'experiments'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Case Files' },
    { id: 'web-apps', label: 'Web Applications' },
    { id: 'ui-ux', label: 'UI / UX Systems' },
    { id: 'experiments', label: 'Lab Experiments' },
  ] as const;

  const filteredProjects =
    filter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  const featured = filteredProjects.filter((p) => p.featured);
  const regular = filteredProjects.filter((p) => !p.featured);

  return (
    <SectionShell
      id="work"
      docketNo="EXHIBIT // VERIFIED CASE FILES"
      title="Case Files & Solved Problems"
      subtitle="High-impact web systems and production architectures engineered with precision and zero drama."
    >
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
              filter === tab.id
                ? 'bg-white text-black font-bold shadow-md'
                : 'border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Featured Projects (Split Cards) */}
      <div className="mb-12 space-y-10">
        {featured.map((project, idx) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 shadow-2xl"
          >
            {/* Top Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 font-mono text-xs">
              <span className="text-zinc-400 font-medium">
                &#123; {project.caseNo} &#125; · {project.year}
              </span>
              <span className="rounded-full bg-zinc-900 px-3 py-1 font-mono text-[10px] uppercase text-emerald-400 border border-zinc-800">
                ● {project.status}
              </span>
            </div>

            <div
              className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame */}
              <div className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {project.dossierQuote && (
                  <div className="mb-3 font-mono text-xs text-zinc-400">
                    "{project.dossierQuote}"
                  </div>
                )}

                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h3>

                <p className="font-sans text-sm font-medium text-zinc-300 italic mb-4">
                  "{project.verdict}"
                </p>

                <p className="font-sans text-sm font-light leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live / Code Links */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 transition-all hover:border-white hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Regular Case Files Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {regular.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-zinc-600 hover:-translate-y-1 shadow-xl"
          >
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-zinc-900 pb-3 font-mono text-xs text-zinc-400">
                <span>&#123; {project.caseNo} &#125;</span>
                <span className="text-zinc-500">{project.year}</span>
              </div>

              {/* Preview */}
              <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="font-sans text-xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h3>

              <p className="font-sans text-xs font-medium text-zinc-300 italic mb-3">
                "{project.verdict}"
              </p>

              <p className="font-sans text-xs font-light leading-relaxed text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-mono text-xs font-bold uppercase text-black transition-all hover:bg-zinc-200"
                >
                  <span>Live</span>
                  <ExternalLink className="h-3 w-3" />
                </a>

                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 font-mono text-xs font-bold uppercase text-zinc-300 transition-all hover:border-white hover:text-white"
                >
                  <GithubIcon className="h-3 w-3" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};
