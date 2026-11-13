import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export const StickyCallButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 lg:hidden">
      <Link
        to="/contact"
        className="flex items-center gap-2 rounded-full border border-zinc-700 bg-white px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-2xl backdrop-blur-md transition-all active:scale-95"
        aria-label="Dispatch Concierge"
      >
        <Phone className="h-4 w-4" />
        <span>Concierge Line</span>
      </Link>
    </div>
  );
};
