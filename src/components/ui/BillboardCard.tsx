import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../../data/content';

interface BillboardCardProps {
  service: ServiceItem;
  phone: string;
  onSelect?: () => void;
}

export const BillboardCard: React.FC<BillboardCardProps> = ({
  service,
  phone,
  onSelect,
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:-translate-y-1 shadow-xl">
      <div>
        {/* Top Case Label */}
        <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
          &#123; Problem Service &#125;
        </div>

        {/* Headline */}
        <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
          {service.headline}
        </h3>
        <div className="mb-4 font-sans text-lg font-light text-zinc-300">
          {service.shout}
        </div>

        {/* Description */}
        <p className="mb-6 font-sans text-sm font-light leading-relaxed text-zinc-400">
          {service.description}
        </p>
      </div>

      <div>
        {/* Fine-print disclaimer */}
        <p className="mb-5 border-t border-zinc-900 pt-3 font-mono text-[10px] text-zinc-600">
          *Note: {service.disclaimer}
        </p>

        {/* CTA Button & Phone */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="#contact"
            onClick={onSelect}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 hover:scale-105"
          >
            <span>{service.ctaText}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <a
            href={`tel:${phone}`}
            className="font-mono text-xs text-zinc-400 hover:text-white"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};
