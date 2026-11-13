import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Volume2, ChevronDown, ExternalLink } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const SaulAudioToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedTrack, setSelectedTrack] = useState('Little Barrie — Better Call Saul Theme');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isPlayerOpen, setIsPlayerOpen } = useAudio();

  const tracks = [
    { title: 'Better Call Saul Theme', artist: 'Little Barrie' },
    { title: 'Better Call Saul (Theme Song)', artist: 'Junior Brown' },
    { title: 'A Mi Manera (My Way)', artist: 'Gipsy Kings' },
    { title: 'Address Unknown', artist: 'The Ink Spots' },
    { title: 'Smoke on the Water', artist: 'Deep Purple / Jimmy McGill' },
  ];

  if (!isVisible) {
    return (
      <aside aria-label="Albuquerque Airwaves Soundtrack Pill" className="fixed bottom-24 left-4 sm:left-6 z-40">
        <button
          onClick={() => setIsVisible(true)}
          className="group flex items-center gap-2 rounded-full border border-court-gold/50 bg-black/90 px-3.5 py-1.5 font-mono text-[11px] text-court-gold shadow-2xl backdrop-blur-md transition-all hover:border-court-gold hover:scale-105 active:scale-95"
          title="Open Albuquerque Airwaves Music Selector"
        >
          <Volume2 className="h-3.5 w-3.5 text-court-gold animate-pulse" />
          <span>♫ SAUL'S TUNES</span>
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Albuquerque Airwaves Soundtrack Toast" className="fixed bottom-24 left-4 sm:left-6 z-40 max-w-sm sm:max-w-md">
      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.94 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -30, scale: 0.94 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col sm:flex-row items-center sm:items-end gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/95 p-4 text-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl"
      >
        {/* Saul Cutout Portrait */}
        <div className="relative shrink-0 w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border border-court-gold/40 bg-zinc-900 shadow-md">
          <img
            src="/assets/images/whsp-step2-saul.png"
            alt="Saul Goodman Pointing"
            className="w-full h-full object-cover object-top grayscale contrast-125"
          />
          <div className="absolute bottom-1 left-1 bg-black/85 px-1.5 py-0.5 rounded font-mono text-[8px] text-court-gold font-bold">
            BETTER CALL SAUL
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 w-full text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-court-gold animate-ping" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-court-gold font-semibold">
                Albuquerque Airwaves
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-zinc-500 hover:text-white transition-colors"
              title="Dismiss toast"
              aria-label="Dismiss toast"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <h4 className="font-docket text-base font-bold text-cream leading-snug">
            Need some courtroom tunes?
          </h4>
          <p className="font-sans text-[11px] text-zinc-400 font-light mt-0.5 leading-tight">
            For the true Albuquerque experience, select your soundtrack:
          </p>

          {/* Track Selection Dropdown */}
          <div className="relative mt-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex w-full items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/90 px-2.5 py-1.5 font-mono text-[10px] text-zinc-300 hover:border-court-gold/60 transition-colors"
            >
              <span className="truncate">{selectedTrack}</span>
              <ChevronDown className="h-3 w-3 shrink-0 text-zinc-500 ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-1 rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl p-1 z-50">
                {tracks.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedTrack(`${t.artist} — ${t.title}`);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left rounded-lg px-2 py-1.5 font-mono text-[10px] text-zinc-300 hover:bg-zinc-800 hover:text-court-gold transition-colors truncate"
                  >
                    <span className="font-bold text-white">{t.title}</span>
                    <span className="text-zinc-500 ml-1.5">({t.artist})</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action Button: Turn Music On */}
          <div className="mt-2.5 flex items-center gap-2">
            <button
              onClick={() => {
                setIsPlayerOpen(true);
              }}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-court-gold px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-black transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-95 shadow-md"
            >
              <Volume2 className="h-3 w-3" />
              <span>{isPlayerOpen ? 'PLAYER ACTIVE ♫' : 'TURN MUSIC ON ♫'}</span>
            </button>

            <a
              href="https://open.spotify.com/playlist/3A4l0emm89zzee5bzE7E0L"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-[#1DB954] hover:border-zinc-700 transition-colors"
              title="Open Spotify Playlist"
              aria-label="Open Spotify Playlist"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </aside>
  );
};
