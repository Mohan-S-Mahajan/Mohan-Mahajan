import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, CornerDownRight } from 'lucide-react';
import type { ProjectItem } from '../../data/content';

interface ManilaCaseDocketCardProps {
  project: ProjectItem;
  index: number;
}

export const ManilaCaseDocketCard: React.FC<ManilaCaseDocketCardProps> = ({ project, index }) => {
  const tiltDegrees = index % 2 === 0 ? -0.8 : 0.8;
  const stampAngle = index % 2 === 0 ? '-rotate-6' : 'rotate-4';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, rotate: 0, transition: { duration: 0.25 } }}
      style={{ rotate: `${tiltDegrees}deg` }}
      className="group relative flex flex-col justify-between rounded-2xl border-2 border-[#D8C7A5] bg-[#F7EFE1] text-[#1A1815] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 select-none overflow-hidden"
    >
      {/* Background Subtle Paper Texture & Watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 font-docket text-8xl font-black text-black/[0.04] select-none">
        &#123; whsp &#125;
      </div>

      <div>
        {/* Top Header: Folder Tab & Red Rubber Evidence Stamp */}
        <div className="flex items-start justify-between gap-4 border-b-2 border-[#D8C7A5] pb-4 mb-4">
          <div className="flex items-center gap-2">
            {/* Brass Eyelet & Red String Tie Marker */}
            <div className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#8C6D37] bg-[#C59B27] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D2E14]" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7C6A48]">
                {project.caseNo}
              </span>
              <div className="font-mono text-[9px] text-[#A69370]">
                ALBUQUERQUE LEGAL DOCKET · {project.year}
              </div>
            </div>
          </div>

          {/* Forensic Red Rubber Stamp */}
          <div
            className={`transform ${stampAngle} border-2 border-dashed border-[#C92A2A] px-2.5 py-0.5 rounded text-center shadow-xs`}
          >
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#C92A2A] block leading-tight">
              {project.status === 'WON' ? '★ ADMISSIBLE' : '✔ VERIFIED'}
            </span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#C92A2A]/80 block">
              99.1% PURE CODE
            </span>
          </div>
        </div>

        {/* Blueprint & Schematic Preview Frame */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#D0BF9C] bg-[#ECE0CB] mb-5 shadow-inner group/img">
          {/* Blueprint graph background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#8C6D37_1px,transparent_1px),linear-gradient(to_bottom,#8C6D37_1px,transparent_1px)] [background-size:14px_14px]" />
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover/img:scale-105 opacity-90"
          />

          {/* Corner blueprint registration marks */}
          <div className="absolute top-2 left-2 font-mono text-[8px] text-white/90 bg-black/80 px-1.5 py-0.5 rounded">
            SYS // ARCHITECTURE
          </div>
          <div className="absolute bottom-2 right-2 font-mono text-[8px] text-[#1A1815] bg-[#F7EFE1]/90 px-1.5 py-0.5 rounded border border-[#D0BF9C]">
            FIG. {index + 1}
          </div>
        </div>

        {/* Project Title in Bodoni/Didot Serif */}
        <h3 className="font-docket text-xl sm:text-2xl font-bold tracking-tight text-[#1A1815] mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Verdict & Impact Summary */}
        <div className="mb-3 rounded-lg bg-[#EFE3CF]/90 border border-[#D8C7A5] p-2.5">
          <div className="flex items-start gap-1.5 font-sans text-xs text-[#4A3F2C] leading-relaxed">
            <CornerDownRight className="h-3.5 w-3.5 shrink-0 text-[#8C6D37] mt-0.5" />
            <span><strong className="text-[#1A1815]">Verdict:</strong> {project.verdict}</span>
          </div>
        </div>

        {/* Technical Description */}
        <p className="font-sans text-xs sm:text-sm font-normal text-[#5A4F3C] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Stack Tags styled as Evidence Inventory Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-[#D0BF9C] bg-[#EAE0CA] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#4A3F2C]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: Antique Dark Bronze / Gold Buttons */}
      <div className="mt-2 pt-4 border-t-2 border-[#D8C7A5] flex items-center justify-between gap-3">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#3A3225] bg-[#231F17] px-3.5 py-2 font-mono text-xs font-bold text-[#F5EAD4] transition-all hover:bg-[#3A3225] hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            <Terminal className="h-3.5 w-3.5 text-[#E5A93C]" />
            <span>EXAMINE CODE</span>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#8C6D37] bg-[#8C6D37] px-3.5 py-2 font-mono text-xs font-bold text-white transition-all hover:bg-[#A38042] hover:scale-[1.02] active:scale-95 shadow-sm"
          >
            <span>LIVE EXHIBIT</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
};
