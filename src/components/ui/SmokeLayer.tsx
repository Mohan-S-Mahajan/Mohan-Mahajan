import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const SmokeLayer: React.FC = () => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Smoke layer 1 */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[120%] h-[120%] bg-gradient-radial from-[rgba(255,255,255,0.04)] via-[rgba(255,176,0,0.02)] to-transparent blur-3xl animate-smoke"
        style={{ animationDuration: '45s' }}
      />
      {/* Smoke layer 2 (slower reverse drift) */}
      <div
        className="absolute top-[10%] right-[-15%] w-[100%] h-[100%] bg-gradient-radial from-[rgba(92,200,255,0.02)] via-transparent to-transparent blur-2xl animate-smoke"
        style={{ animationDuration: '60s', animationDirection: 'reverse' }}
      />
    </div>
  );
};
