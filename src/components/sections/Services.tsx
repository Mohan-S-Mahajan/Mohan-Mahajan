import React from 'react';
import { SectionShell } from '../layout/SectionShell';
import { BillboardCard } from '../ui/BillboardCard';
import { PORTFOLIO_DATA } from '../../data/content';

export const Services: React.FC = () => {
  return (
    <SectionShell
      id="services"
      docketNo="EXHIBIT // CONCIERGE CAPABILITIES"
      title="What We Handle"
      subtitle="From rapid frontend prototypes to full-scale web application refactoring. Put it in { } and let us solve it."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PORTFOLIO_DATA.services.map((service) => (
          <BillboardCard
            key={service.id}
            service={service}
            phone={PORTFOLIO_DATA.lawyer.phone}
          />
        ))}
      </div>
    </SectionShell>
  );
};
