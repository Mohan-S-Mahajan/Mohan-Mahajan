import React from 'react';

interface SectionShellProps {
  id: string;
  docketNo?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  docketNo,
  title,
  subtitle,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 lg:py-32 bg-black text-white ${className}`}
    >
      <div className="w-[90%] mx-auto">
        {/* Section Header - WHSP Editorial Noir */}
        <div className="mb-14 sm:mb-20 text-center sm:text-left">
          {docketNo && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              <span>{docketNo}</span>
            </div>
          )}

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 max-w-2xl font-sans text-sm sm:text-base font-light text-zinc-400 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="mt-8 h-[1px] w-full bg-zinc-900" />
        </div>

        {/* Content body */}
        {children}
      </div>
    </section>
  );
};
