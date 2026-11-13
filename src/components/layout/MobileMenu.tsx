import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const location = useLocation();
  const { isPlayerOpen, togglePlayer } = useAudio();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { path: '/', label: 'Problem & Concierge', num: '01' },
    { path: '/cases', label: 'Case Files & Deployments', num: '02' },
    { path: '/toolkit', label: 'Technical Toolkit', num: '03' },
    { path: '/experience', label: 'Track Record & Honors', num: '04' },
    { path: '/flow', label: 'Service Flow', num: '05' },
    { path: '/services', label: 'Capabilities & Reviews', num: '06' },
    { path: '/contact', label: 'Dispatch Concierge', num: '07' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/98 px-6 py-8 text-white backdrop-blur-2xl lg:hidden overflow-y-auto"
    >
      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-zinc-800 pb-4">
        <Link
          to="/"
          onClick={onClose}
          className="font-mono text-xl font-light tracking-widest text-white"
        >
          &#123; <span className="font-semibold">whsp</span> &#125;
        </Link>
        <button
          onClick={onClose}
          className="p-2 text-zinc-400 hover:text-white"
          aria-label="Close Navigation Menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Nav list */}
      <nav className="relative z-10 my-auto flex flex-col gap-3 py-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`group flex items-center justify-between py-2 text-left transition-colors border-b border-zinc-900 ${
                isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span className="font-sans text-lg font-light tracking-wide">
                {link.label}
              </span>
              <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                {link.num}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="relative z-10 space-y-3 pt-4 border-t border-zinc-900">
        <button
          onClick={() => {
            togglePlayer();
            onClose();
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-full border py-3 font-mono text-xs font-semibold ${
            isPlayerOpen
              ? 'border-emerald-500 bg-emerald-950/80 text-emerald-300'
              : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-600'
          }`}
        >
          <svg className="h-4 w-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.307c-.218.358-.684.471-1.042.253-2.855-1.745-6.449-2.14-10.682-1.172-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.636-1.059 8.604-.613 11.813 1.343.358.218.471.684.253 1.062zm1.472-3.272c-.274.446-.86.588-1.306.314-3.268-2.008-8.25-2.59-12.115-1.416-.503.153-1.036-.135-1.189-.638-.153-.503.135-1.036.638-1.189 4.412-1.339 9.897-.691 13.658 1.623.446.274.588.86.314 1.306zm.126-3.411c-3.918-2.327-10.375-2.541-14.123-1.402-.6.182-1.238-.163-1.42-.763-.182-.6.163-1.238.763-1.42 4.309-1.308 11.432-1.058 15.932 1.613.54.321.716 1.023.395 1.563-.321.54-1.023.716-1.563.395z" />
          </svg>
          <span>BETTER CALL SAUL SOUNDTRACK</span>
        </button>

        <Link
          to="/contact"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-lg"
        >
          <Phone className="h-4 w-4" />
          <span>Dispatch Concierge</span>
        </Link>
      </div>
    </div>
  );
};
