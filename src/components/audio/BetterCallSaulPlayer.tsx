import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const BetterCallSaulPlayer: React.FC = () => {
  const { isPlayerOpen, setIsPlayerOpen } = useAudio();
  const [isCompact, setIsCompact] = useState(true);

  const playlistUrl = 'https://open.spotify.com/playlist/3A4l0emm89zzee5bzE7E0L';
  const embedUrl = 'https://open.spotify.com/embed/playlist/3A4l0emm89zzee5bzE7E0L?utm_source=generator&theme=0';

  return (
    <>
      {/* Expanded Spotify Player Drawer / Modal - Controlled via Navbar BCS OST Toggle */}
      <AnimatePresence>
        {isPlayerOpen && (
          <aside aria-label="Expanded Better Call Saul Soundtrack Player" className="fixed bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/95 p-4 text-white shadow-[0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                    Albuquerque Airwaves
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500">· Better Call Saul</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Toggle compact / full playlist height */}
                  <button
                    onClick={() => setIsCompact(!isCompact)}
                    className="p-1 text-zinc-400 hover:text-white transition-colors"
                    title={isCompact ? 'Expand playlist' : 'Compact view'}
                    aria-label={isCompact ? 'Expand playlist' : 'Compact view'}
                  >
                    {isCompact ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {/* External link to Spotify */}
                  <a
                    href={playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-zinc-400 hover:text-[#1DB954] transition-colors"
                    title="Open on Spotify"
                    aria-label="Open on Spotify"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  {/* Close button */}
                  <button
                    onClick={() => setIsPlayerOpen(false)}
                    className="p-1 text-zinc-400 hover:text-white transition-colors"
                    title="Close player"
                    aria-label="Close player"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Official Spotify Embed Player */}
              <div className="overflow-hidden rounded-xl bg-black border border-zinc-900 shadow-inner">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={embedUrl}
                  width="100%"
                  height={isCompact ? '152' : '352'}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Better Call Saul Soundtrack Spotify Player"
                  className="transition-all duration-300"
                />
              </div>

              {/* Sub-footer Microcopy */}
              <div className="mt-2.5 flex items-center justify-between font-mono text-[9px] text-zinc-500 px-1">
                <span>Little Barrie · Junior Brown · BCS OST</span>
                <span className="text-emerald-500 font-bold">&#123; whsp audio &#125;</span>
              </div>
            </motion.div>
          </aside>
        )}
      </AnimatePresence>
    </>
  );
};
