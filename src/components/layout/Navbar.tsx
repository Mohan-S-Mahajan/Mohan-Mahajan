import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isPlayerOpen, togglePlayer } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isVisible = !isHomePage || scrolled;

  const navLinks = [
    { path: '/cases', label: 'Cases' },
    { path: '/toolkit', label: 'Toolkit' },
    { path: '/experience', label: 'Record' },
    { path: '/flow', label: 'Flow' },
    { path: '/services', label: 'Services' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? 'h-16 bg-black/85 backdrop-blur-md border-b border-zinc-800/60 shadow-lg translate-y-0 opacity-100 pointer-events-auto'
          : 'h-16 bg-transparent -translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-[90%] mx-auto flex h-full items-center justify-between">
        {/* Left: Clean Minimal Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
          aria-label="whsp home"
        >
          <span className="font-mono text-xl sm:text-2xl font-light tracking-widest text-white">
            &#123; <span className="font-bold text-white">whsp</span> &#125;
          </span>
        </Link>

        {/* Center: Clean Spacious Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1 ${
                  isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-court-gold animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Sound button & Single Minimalist Dispatch Pill */}
        <div className="flex items-center gap-2.5">
          {/* Subtle Soundtrack Wave Pill */}
          <button
            onClick={togglePlayer}
            className={`hidden sm:flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-all duration-200 cursor-pointer ${
              isPlayerOpen
                ? 'border-emerald-500/60 bg-emerald-950/80 text-emerald-300 ring-1 ring-emerald-500/30'
                : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-zinc-600'
            }`}
            title="Toggle Better Call Saul soundtrack"
            aria-label="Toggle Better Call Saul soundtrack"
          >
            <div className="flex items-center gap-[2px] h-2.5">
              <span className="w-[1.5px] h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-[1.5px] h-3 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-[1.5px] h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.45s]" />
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold">BCS OST</span>
          </button>

          <Link
            to="/contact"
            className="rounded-full border border-zinc-800 bg-zinc-950/80 hover:bg-white hover:text-black hover:border-white px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-all duration-200 active:scale-95"
          >
            <span>Dispatch</span>
          </Link>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white md:hidden transition-colors"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
