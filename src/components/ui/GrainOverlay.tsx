import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const GrainOverlay: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ opacity: reducedMotion ? 0.04 : 0.07 }}
    >
      <svg className="h-full w-full opacity-100">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          >
            {!reducedMotion && (
              <animate
                attributeName="baseFrequency"
                values="0.8;0.85;0.78;0.82"
                dur="0.4s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
